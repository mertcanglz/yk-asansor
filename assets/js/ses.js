/* ---------- Hero sesi (deneme): yalnızca ana sayfa ----------
   Asansör bölümünde arka planda yumuşak, sözsüz lounge müziği ve kata varış zili.
   - Tarayıcılar sesi ziyaretçi bir şeye basmadan başlatmaz; bu yüzden sağ üstte "Ses" düğmesi var, varsayılan kapalı.
     Hiçbir şey saklanmaz (çerez ya da tarayıcı depolaması yok): her ziyarette ses kapalı başlar.
   - Müzik sürekli döner (sonu başına 3 sn çapraz geçişle bağlanır). Kapı kapalıyken kısık ve boğuktur (kapının
     arkasından gelir gibi), kapı açıldıkça yükselir ve netleşir. Hero ekrandan çıktıkça kısılır.
   - Kata varışta kapı açılmaya başlarken zil çalar: aşağı inerken iki ton (ding-dong), yukarı çıkarken tek ton
     (gerçek asansörlerdeki yön işareti gibi). Aynı katta kapı kapanıp yeniden açılırsa çalmaz.
   - Kapının durumu main.js'ten gelir: Asansor.ciz() 'yka:kapi' olayını gönderir, son durum #lift.kapiDurumu'nda.
   - Müzik dosyası (~1,7 MB) yalnızca ses açılınca indirilir; sayfanın açılışını etkilemez.
   Kaldırmak için: bu dosya, index.html'deki ses.js satırı, style.css'teki "Hero sesi" bölümü, assets/ses/ klasörü
   ve main.js'teki 'yka:kapi' satırları.
   Sesler Pixabay'den (Pixabay İçerik Lisansı: ticari kullanım serbest, atıf gerekmez):
   - asansor-zil.mp3: "Elevator chime and notification ding" (BlueGrayA10, pixabay #287560); baştaki sessizlik kırpıldı
   - asansor-muzik.mp3: "Bossa Nova Lounge Music" (pixabay #599225); sondaki sönümlenme kırpıldı, ses düzeyi eşitlendi */

const d = document;
const lift = d.getElementById('lift');
const hx = d.getElementById('hx');
const AC = window.AudioContext || window.webkitAudioContext;
if (lift && hx && AC) kur();

function kur() {
  const MUZIK = 'assets/ses/asansor-muzik.mp3';
  const ZIL = 'assets/ses/asansor-zil.mp3';
  const XF = 3;               // döngüde sonu başına bağlayan çapraz geçiş (sn)
  const MUZIK_SEVIYE = 0.5;   // kapı tam açıkken müzik
  const KAPALI_ORAN = 0.3;    // kapı kapalıyken müzik, açığa göre
  const ZIL_SEVIYE = 0.55;
  const TEK_TON = 0.95;       // zil dosyasında ilk ton bu saniyede biter (ikinci ton 1,0 sn'de başlar)

  const btn = d.createElement('button');
  btn.type = 'button';
  btn.className = 'ses-btn';
  btn.setAttribute('aria-pressed', 'false');
  btn.title = 'Arka plan müziği ve asansör sesi';
  btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'
    + '<path d="M11 5 6 9H3v6h3l5 4z"/>'
    + '<path class="ses-off" d="m16 9.5 5 5m0-5-5 5"/>'
    + '<path class="ses-on" d="M15.5 8.5a5 5 0 0 1 0 7M18.6 5.4a9.4 9.4 0 0 1 0 13.2"/>'
    + '</svg><span class="ses-btn__t">Ses</span>';
  d.body.appendChild(btn);

  let ctx = null, ana = null, muzikG = null, filtre = null, zilG = null;
  let muzik = null, zil = null, yukleniyor = false;
  let acik = false, uyutT = 0, planT = 0, sonraki = 0, ilkParca = 0;
  let kapi = 0, kat = 2, sonAcikKat = null, sonZil = 0;
  let gorunur = 1;

  function grafik() {
    ctx = new AC();
    ana = ctx.createGain();
    ana.gain.value = 0;
    ana.connect(ctx.destination);
    filtre = ctx.createBiquadFilter();
    filtre.type = 'lowpass';
    filtre.Q.value = 0.4;
    muzikG = ctx.createGain();
    muzikG.gain.value = 0;
    muzikG.connect(filtre);
    filtre.connect(ana);
    zilG = ctx.createGain();
    zilG.gain.value = ZIL_SEVIYE;
    zilG.connect(ana);
  }
  // iOS Safari ses motorunu ancak dokunuşun içinde çalınan bir sesle açar: 1 örneklik sessiz ses
  function kilidiAc() {
    const b = ctx.createBuffer(1, 1, 22050);
    const s = ctx.createBufferSource();
    s.buffer = b;
    s.connect(ctx.destination);
    s.start(0);
  }
  async function yukle(url) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(url);
    const veri = await r.arrayBuffer();
    return new Promise((ok, hata) => ctx.decodeAudioData(veri, ok, hata)); // eski Safari geri çağırmalı biçimi ister
  }

  /* Müzik döngüsü: her parça bir öncekinin bitmesine XF sn kala başlar, ikisi çapraz geçişle örtüşür */
  function parca(t) {
    const L = muzik.duration;
    const src = ctx.createBufferSource();
    src.buffer = muzik;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(1, t + (t === ilkParca ? 1.5 : XF));
    g.gain.setValueAtTime(1, t + L - XF);
    g.gain.linearRampToValueAtTime(0, t + L);
    src.connect(g);
    g.connect(muzikG);
    src.start(t);
    src.stop(t + L);
  }
  function planla() {
    clearTimeout(planT);
    if (!acik || !muzik) return;
    while (sonraki < ctx.currentTime + 2) {
      parca(sonraki);
      sonraki += muzik.duration - XF;
    }
    planT = setTimeout(planla, 1000);
  }

  /* Ses düzeyleri: kapı açıklığı (0–1) ve hero'nun ekranda kalan kısmı */
  let sonSeviye = -1, sonFc = -1, sonZilS = -1;
  function guncelle() {
    if (!ctx || !muzik) return;
    const t = ctx.currentTime;
    const seviye = MUZIK_SEVIYE * (KAPALI_ORAN + (1 - KAPALI_ORAN) * kapi) * gorunur;
    const fc = 650 * Math.pow(18000 / 650, kapi); // kapalıyken boğuk (650 Hz), açıldıkça net
    if (Math.abs(seviye - sonSeviye) > 0.003) { muzikG.gain.setTargetAtTime(seviye, t, 0.12); sonSeviye = seviye; }
    if (Math.abs(fc - sonFc) > 10) { filtre.frequency.setTargetAtTime(fc, t, 0.12); sonFc = fc; }
    const zs = ZIL_SEVIYE * Math.max(0.25, gorunur);
    if (Math.abs(zs - sonZilS) > 0.01) { zilG.gain.setTargetAtTime(zs, t, 0.1); sonZilS = zs; }
  }

  // ton: 2 = aşağı (ding-dong), 1 = yukarı (yalnızca ilk ton)
  function zilCal(ton) {
    if (!acik || !zil || ctx.state !== 'running') return;
    const t = ctx.currentTime;
    if (t - sonZil < 0.8) return; // kaydırma titremesinde üst üste çalmasın
    sonZil = t;
    const src = ctx.createBufferSource();
    src.buffer = zil;
    const g = ctx.createGain();
    src.connect(g);
    g.connect(zilG);
    if (ton === 1) {
      g.gain.setValueAtTime(1, t + TEK_TON - 0.12);
      g.gain.linearRampToValueAtTime(0, t + TEK_TON);
      src.start(t, 0, TEK_TON);
    } else {
      src.start(t);
    }
  }

  d.addEventListener('yka:kapi', (e) => {
    const once = kapi;
    kapi = e.detail.kapi;
    kat = e.detail.kat;
    if (once <= 0.001 && kapi > 0.001) { // kapı açılmaya başladı: kata varış
      if (sonAcikKat !== null && kat !== sonAcikKat) zilCal(kat < sonAcikKat ? 2 : 1);
      sonAcikKat = kat;
    }
    guncelle();
  });

  function olcGorunur() {
    const alt = hx.getBoundingClientRect().bottom;
    gorunur = Math.max(0, Math.min(1, alt / innerHeight));
    btn.classList.toggle('is-gizli', gorunur < 0.15);
  }
  addEventListener('scroll', () => { olcGorunur(); guncelle(); }, { passive: true });
  addEventListener('resize', olcGorunur);
  olcGorunur();

  function durumYaz() {
    btn.setAttribute('aria-pressed', String(acik));
  }
  function ac() {
    if (!ctx) grafik();
    clearTimeout(uyutT);
    kilidiAc();
    if (ctx.state !== 'running') ctx.resume();
    acik = true;
    durumYaz();
    // kapının şu anki hâli (asansör dururken olay gelmez)
    const s = lift.kapiDurumu;
    if (s) { kapi = s.kapi; kat = s.kat; if (kapi > 0.001) sonAcikKat = kat; }
    ana.gain.cancelScheduledValues(ctx.currentTime);
    ana.gain.setTargetAtTime(1, ctx.currentTime, 0.2);
    if (muzik) { planla(); guncelle(); return; }
    if (yukleniyor) return;
    yukleniyor = true;
    btn.classList.add('is-yukleniyor');
    Promise.all([yukle(MUZIK), yukle(ZIL)]).then(([m, z]) => {
      muzik = m;
      zil = z;
      ilkParca = sonraki = ctx.currentTime + 0.05;
      sonSeviye = sonFc = sonZilS = -1;
      guncelle();
      planla();
    }).catch(() => {
      // dosyalar gelmediyse düğme sessizce kalkar
      acik = false;
      btn.remove();
    }).finally(() => {
      yukleniyor = false;
      btn.classList.remove('is-yukleniyor');
    });
  }
  function kapat() {
    acik = false;
    durumYaz();
    clearTimeout(planT);
    if (!ctx) return;
    ana.gain.cancelScheduledValues(ctx.currentTime);
    ana.gain.setTargetAtTime(0, ctx.currentTime, 0.15);
    clearTimeout(uyutT);
    uyutT = setTimeout(() => { if (!acik) ctx.suspend(); }, 900); // sessizken ses motoru dursun (pil)
  }
  btn.addEventListener('click', () => (acik ? kapat() : ac()));

  // sekme arka plana geçince müzik çalmaya devam etmesin; dönünce kaldığı yerden sürer
  d.addEventListener('visibilitychange', () => {
    if (!ctx || !acik) return;
    if (d.hidden) { ctx.suspend(); return; }
    ctx.resume().then(() => {
      if (ctx.state === 'running') planla();
      else kapat(); // tarayıcı izin vermediyse düğme kapalı görünsün, ziyaretçi yeniden açabilsin
    }, kapat);
  });
}
