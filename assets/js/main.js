// YK Asansör — sayfa etkileşimleri (derleme yok, saf JS modülü)
import { baslat as telefonBaslat } from './telefon.js';

/* Analiz kimlikleri: boşken GA ve Meta Pixel hiç yüklenmez (onay verilse bile) */
const GA_ID = ''; // TODO: GA4 ölçüm kimliği (ör. G-XXXXXXXXXX)
const META_PIXEL_ID = ''; // TODO: Meta Pixel kimliği

const d = document;
const h = d.documentElement;
const $ = (s, r = d) => r.querySelector(s);
const $$ = (s, r = d) => Array.from(r.querySelectorAll(s));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ssm = (x) => { const v = clamp(x, 0, 1); return v * v * (3 - 2 * v); };
const mqMasa = matchMedia('(min-width: 1024px)');
const mqGenis = matchMedia('(min-width: 760px)');
const mqKucuk = matchMedia('(max-width: 599.98px)');
const mqAz = matchMedia('(prefers-reduced-motion: reduce)');
const mqDokun = matchMedia('(pointer: coarse)');

/* ---------- Ekran ölçüsü: kat yüksekliği 100svh (adres çubuğu açılıp kapanınca değişmez) ---------- */
const ekran = { W: 0, H: 0, heroSon: 0 };
const vhOlc = $('#vhOlc');
function olc() {
  // arka planda açılan sekmede ölçü 0 gelebilir; o zaman makul bir değerle başlanır, ilk resize'da düzelir
  ekran.W = h.clientWidth || innerWidth || 390;
  ekran.H = Math.round(vhOlc ? vhOlc.getBoundingClientRect().height : innerHeight) || innerHeight || 800;
  // hero düzeni: geniş (asansör sağda) ya da dar (asansör üstte) — <head> içindeki kuralla aynı
  // dikey tablette (ör. 1024×1366) de asansör yazının üstünde: yan yana düzene yer yok
  h.classList.toggle('hw', innerWidth >= 1024 ? innerWidth > innerHeight : innerWidth >= 760 && innerWidth > innerHeight * 1.1);
  // hero'nun bittiği yer (telefonda 2 kat + büyük ekran yüksekliği; adres çubuğu gizlenince alttaki bölüm görünmesin).
  // İç sayfalarda koyu sayfa başlığının bittiği yer (teklif formu ve iletişimde giriş başlığının altı).
  const hx = d.getElementById('hx') || $('.kp, .lg-kp, .tf-intro, .il-side, .bl-hero, .by-hero');
  ekran.heroSon = hx ? hx.offsetTop + hx.offsetHeight : 3 * ekran.H;
}
olc();

/* ---------- Kalınan yer: sayfa yenilenince (F5) ya da geri tuşuyla dönülünce kaydırma konumu geri yüklenir ----------
   Tarayıcının kendi geri yüklemesi (özellikle Safari ve telefonda) sayfa düzeni oturmadan çalışıp konumu kaçırabiliyor;
   konum oturum depolamasında (yk-konum) sayfa sayfa tutulur, düzen oturdukça yeniden uygulanır. Kullanıcı kaydırmaya
   başlarsa bırakılır. Başka sayfadan bağlantıyla gelince sayfa her zamanki gibi baştan (ya da #bölümden) açılır. */
const Konum = (() => {
  const ANAHTAR = 'yk-konum';
  const yol = location.pathname;
  let kayit = {};
  try { kayit = JSON.parse(sessionStorage.getItem(ANAHTAR) || '{}') || {}; } catch (e) { /* depolama kapalı olabilir */ }
  const nav = performance.getEntriesByType ? performance.getEntriesByType('navigation')[0] : null;
  const durum = nav && (nav.type === 'reload' || nav.type === 'back_forward') ? kayit[yol] : null;
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  const yaz = () => { try { sessionStorage.setItem(ANAHTAR, JSON.stringify(kayit)); } catch (e) { /* yoksay */ } };
  const ekle = (veri) => { kayit[yol] = Object.assign({}, kayit[yol], veri); yaz(); };
  let kayT = 0;
  addEventListener('scroll', () => { clearTimeout(kayT); kayT = setTimeout(() => ekle({ y: Math.round(scrollY) }), 200); }, { passive: true });
  addEventListener('pagehide', () => ekle({ y: Math.round(scrollY) }));
  let elle = false;
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach((o) => addEventListener(o, () => { elle = true; }, { passive: true, once: true }));
  function geriYukle() {
    if (!durum || durum.y == null || elle) return;
    const y = Math.min(durum.y, h.scrollHeight - innerHeight);
    if (Math.abs(scrollY - y) > 1) scrollTo({ top: y, behavior: 'instant' });
  }
  return {
    geriYukle,
    // sayfaya özel ek durum (ör. blog listesinde açılan kart sayısı): yenilemede geri verilir
    ek: (ad) => (durum ? durum[ad] : undefined),
    ekKaydet: (ad, v) => ekle({ [ad]: v }),
    baslat() {
      geriYukle();
      addEventListener('load', geriYukle, { once: true });
      if (d.fonts) d.fonts.ready.then(geriYukle);
    }
  };
})();

/* ---------- Ölçüm olayları (yalnızca onay verildiyse ve kimlik tanımlıysa gider) ---------- */
let gaHazir = false;
let pxHazir = false;
function olay(ad, veri) {
  if (gaHazir) window.gtag('event', ad, veri || {});
}
function gaYukle() {
  if (!GA_ID || gaHazir) return;
  gaHazir = true;
  const s = d.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_ID);
  d.head.appendChild(s);
  window.gtag('js', new Date());
  window.gtag('config', GA_ID);
}
function pixelYukle() {
  if (!META_PIXEL_ID || pxHazir) return;
  pxHazir = true;
  /* Meta'nın standart yükleyicisi */
  const f = window;
  if (!f.fbq) {
    const n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
    const s = d.createElement('script');
    s.async = true;
    s.src = 'https://connect.facebook.net/en_US/fbevents.js';
    d.head.appendChild(s);
  }
  f.fbq('init', META_PIXEL_ID);
  f.fbq('track', 'PageView');
}
function onayUygula(a, m) {
  window.gtag('consent', 'update', {
    analytics_storage: a ? 'granted' : 'denied',
    ad_storage: m ? 'granted' : 'denied',
    ad_user_data: m ? 'granted' : 'denied',
    ad_personalization: m ? 'granted' : 'denied'
  });
  if (a) gaYukle();
  if (m) pixelYukle();
  else if (pxHazir && window.fbq) window.fbq('consent', 'revoke');
}
d.addEventListener('click', (e) => {
  const a = e.target.closest && e.target.closest('a[href^="tel:"], a[href*="wa.me/"]');
  if (!a) return;
  const tel = a.href.startsWith('tel:');
  olay(tel ? 'telefon_tiklama' : 'whatsapp_tiklama');
  if (pxHazir && window.fbq) window.fbq('track', 'Contact');
});

/* ---------- Asansör (hero): kaydırdıkça kabin kat kat iner, kapı açılır, kat rengi kuyuya yayılır ---------- */
const Asansor = (() => {
  const lift = $('#lift');
  const hx = $('#hx');
  if (!lift || !hx) return null;
  const box = $('.lift__box', lift);
  const world = $('.lift__world', lift);
  const shaft = $('.lift__shaft', lift);
  const dip = $('.lift__dip', lift);
  const ropes = $$('.lift__ropes i', lift);
  const glow = $('.lift__glow', lift);
  const cab = $('.lift__cab', lift);
  const fade = $('.lift__fade', lift);
  const ext = $('.lift__ext', lift);
  const col = $('.hx__col', hx);
  const secs = $$('.hx-sec', hx); // sırayla: giriş (2. kat), hizmetler (1), periyodik kontrol (0)

  const KAT = [
    { ton: 'yesil', amb: [70, 205, 125] },   // periyodik kontrol: etiket yeşili
    { ton: 'mavi', amb: [110, 160, 255] },   // hizmetler: mavi
    { ton: 'turuncu', amb: [255, 178, 120] } // giriş: sıcak turuncu
  ];
  const KARE = 41;
  const DURAK = [1845, 1167.5, 600]; // kabin halat bağlantısı (kuyu görseli birimi)
  const K = 0.725;
  const HALAT = [5, 21, 290, 326, 356, 390, 660, 676];
  const klasor = mqGenis.matches ? 'kare-692' : 'kare-400';

  let g = null; // ölçüler
  let genis = false;
  let p = 0, pt = 0, cam = 2, jolt = 0;
  let jT0 = -1e9, jAmp = 0, gecis = null, yon = 1;
  let intro = 0, introT0 = null;
  let raf = 0, sonT = 0, kapali = false;
  let aktifKat = -1, sonBg = '', sonGlowTon = '';

  /* Kare setleri: turuncu-00 sayfada hazır; diğerleri sayfa yüklendikten sonra gelir */
  const setler = {};
  const ilkSet = $('.lift__set', cab);
  const ilkKare = $('.lift__f', ilkSet);
  let gorunenSet = ilkSet, gorunenKare = ilkKare;
  function setAl(ton) {
    if (setler[ton]) return setler[ton];
    let el = ton === 'turuncu' ? ilkSet : null;
    if (!el) {
      el = d.createElement('div');
      el.className = 'lift__set';
      el.dataset.tone = ton;
      cab.appendChild(el);
    }
    const o = { el, kare: new Array(KARE).fill(null), hazir: new Array(KARE).fill(false) };
    if (ton === 'turuncu') {
      o.kare[0] = ilkKare;
      const im = $('img', ilkKare);
      if (im.complete && im.naturalWidth) o.hazir[0] = true;
      else im.addEventListener('load', () => { o.hazir[0] = true; }, { once: true });
    }
    setler[ton] = o;
    return o;
  }
  KAT.forEach((k) => setAl(k.ton));
  function setYukle(ton, oncelik) {
    const o = setAl(ton);
    const isler = [];
    for (let i = 0; i < KARE; i++) {
      if (o.kare[i]) continue;
      const img = new Image();
      img.alt = '';
      img.className = 'lift__f';
      if (oncelik) img.fetchPriority = oncelik;
      const no = i;
      isler.push(new Promise((bitti) => {
        img.onload = () => {
          o.hazir[no] = true;
          (img.decode ? img.decode() : Promise.resolve()).catch(() => {}).then(bitti);
        };
        img.onerror = bitti;
      }));
      img.src = `assets/img/asansor/${klasor}/${ton}-${String(i).padStart(2, '0')}.webp`;
      o.kare[i] = img;
      o.el.appendChild(img);
    }
    return Promise.all(isler);
  }
  function kareGoster(ton, idx) {
    let o = setler[ton];
    let i = idx;
    while (i > 0 && !o.hazir[i]) i--;
    if (!o.hazir[i]) { o = setler.turuncu; i = 0; } // set gelmediyse kapalı kapı (üç sette aynı)
    if (o.el !== gorunenSet) {
      gorunenSet.classList.remove('is-on');
      o.el.classList.add('is-on');
      gorunenSet = o.el;
    }
    const el = o.kare[i];
    if (el !== gorunenKare) {
      gorunenKare.classList.remove('is-on');
      el.classList.add('is-on');
      gorunenKare = el;
    }
  }

  /* Kat evresi: kapı kapanır, kabin iner, kapı yavaşça açılır (telefonda daha hızlı) */
  function faz(q) {
    if (q >= 2) return { pos: 0, door: 1 };
    const k = Math.floor(q);
    const t = q - k;
    const a = genis ? 0.22 : 0.1;
    const b = genis ? 0.66 : 0.5;
    const c = genis ? 1 : 0.72;
    if (t < a) return { pos: 2 - k, door: ssm(1 - t / a) };
    if (t < b) return { pos: 2 - k - ssm((t - a) / (b - a)), door: 0 };
    return { pos: 1 - k, door: ssm(Math.min(1, (t - b) / (c - b))) };
  }

  /* Telefonda asansör ölçeği kat kat hesaplanır: 1–2. katta kabinin altı başlığın 18 px üstünde,
     3. katta (kuyu dibi) kuyunun dibi yazının hemen üstünde. Ölçek yalnızca kat değişirken (kabinle aynı anda)
     ve çerez/kampanya kutusu kapanıp yazı inince yumuşakça değişir; katta dururken kendiliğinden değişmez. */
  let su = 0, yaziSag = 0;
  const olc1 = { s: 0, h: 0 }; // 1. kat (kampanya kartı açıkken kart kadar küçük)
  const olc2 = { s: 0, h: 0 }; // 2. kat: kart yokmuş gibi (kart 1. kattan inerken etikete döner)
  const olc3 = { s: 0, h: 0 };
  const yer3 = { s: 0, h: 0 }; // 3. katta yazının üstü (kuyu dibi bunun 10 px üstünde)
  const kay3 = { s: 0, h: 0 }; // 3. kat yazısının yukarı kayması (px)
  let ustPay = 0; // header telefondakinden (64 px) yüksekse (dikey büyük tablette 92 px) asansör o kadar aşağıda
  const stick = $('.hx__stick', hx);
  function hedefleriOlc(zorla) {
    // Adres çubuğu açılıp kapanınca katlar (100dvh) uzayıp kısalır, yazı kayar. Ölçek buna göre değişmesin diye yazının
    // yeri sabit ekran boyuna göre okunur: 1. kat açılıştaki gibi çubuk açıkken (100svh), 3. kata aşağı kaydırarak
    // gelindiği için çubuk gizliyken (100lvh; hero 200svh + 100lvh uzunluğunda).
    const dvh = stick.offsetHeight;
    const lvh = hx.offsetHeight - 2 * ekran.H;
    // en büyük ölçek: telefon / büyük telefon / dikey tablet (tablette asansör boşluğu doldurur)
    const enCok12 = ekran.W >= 760 ? 0.85 : ekran.W >= 600 ? 0.5 : 0.36;
    const enCok3 = ekran.W >= 760 ? 0.9 : ekran.W >= 600 ? 0.55 : 0.42;
    const kmp = h.dataset.kampanya;
    const ust1 = $('.hx-h', secs[0]).offsetTop - (dvh - ekran.H);
    const sigar = (u) => clamp((u - 18 - 30 - ustPay) / 887.6, 0.2, enCok12);
    // Kampanya kartı yalnızca 1. katta yer kaplar (yazıyı kart kadar yukarı iter). 2. ve 3. kat kart yokmuş gibi
    // ölçeklenir: kart açıksa 1. kat yazısının kartsız yeri, 2. katın alt boşluğu + 16 px (1. katın normal boşluğu).
    const pad = (i) => parseFloat(getComputedStyle($('.hx-in', secs[i])).paddingBottom) || 0;
    olc2.h = sigar(ust1 + (kmp === 'acik' ? Math.max(0, pad(0) - pad(1) - 16) : 0));
    // kart kaydırınca etikete döner, 1. kata dönülünce yine açılır: etiket hâlindeyken 1. katın (kartlı) ölçüsü alınmaz
    if (kmp !== 'etiket') olc1.h = sigar(ust1);
    else if (zorla || !olc1.h) olc1.h = olc2.h;
    yer3.h = $('.hx-in', secs[2]).firstElementChild.offsetTop + (lvh - dvh);
    // 3. katta asansör boşluğa göre büyür ya da küçülür (kuyu dibi yazının 10 px üstünde), ama 1–2. kattakinden en çok
    // %15 farklı (2. kata göre): fazlası kat geçişinde göze batar. Yer darsa kuyunun koyu dibi yazının arkasında kalır; kabinin altı
    // yine yazının 12 px üstündedir.
    const kabinSigar = (yer3.h - 12 - 52 - ustPay) / 641.6;
    const enAz = Math.max(0.2, Math.min(olc2.h / 1.15, kabinSigar));
    olc3.h = clamp((yer3.h - 10 - 52 - ustPay) / 944, enAz, Math.max(enAz, Math.min(enCok3, olc2.h * 1.15)));
    // Ölçek sınırda kalıp kabinin üstünde boşluk kalırsa yazı kabinle birlikte yukarı kayar: kabinin üstü 2. kattaki
    // gibi 78 px'te durur, artan yer yazının altında (koyu zeminde) kalır
    kay3.h = Math.max(0, Math.round(yer3.h - 10 - 944 * olc3.h - 78 - ustPay));
    yer3.h -= kay3.h;
  }
  const katSu = () => (cam >= 1 ? olc2.s + (olc1.s - olc2.s) * ssm(clamp(cam - 1, 0, 1)) : olc3.s + (olc2.s - olc3.s) * ssm(clamp(cam, 0, 1)));

  /* Çizilen kabin konumu (kat) ve kapı. Telefonda kuyu dibine iniş ve çıkışta kabin kamerayla birlikte süzülür:
     önce düşüp sonra geri çıkmaz, boyu ile yeri aynı anda değişir; kapı kabin durunca açılır.
     1. ve 2. kat arasında kabin kameranın önünden gider. */
  let kab = 2, kapi = 1;
  function kabinDurumu(st) {
    kab = st.pos;
    kapi = st.door;
    if (!genis) {
      kab = st.pos + (cam - st.pos) * (1 - ssm((cam - 1) / 0.12));
      if (kab < 1) kapi *= 1 - ssm(Math.abs(st.pos - kab) / 0.2);
    }
  }
  function geometri() {
    genis = h.classList.contains('hw');
    if (genis) {
      yaziSag = Math.max(...secs.map((el) => $('.hx-in', el).getBoundingClientRect().right));
      // asansör (kuyunun rayları dahil) yazının sağı ile ekranın sağ kenarı arasına sığacak kadar küçülür:
      // tablette yazıya binmez, kabin kırpılmaz (kuyu solda kabinden 388 − 249 birim geniş)
      su = Math.max(0.3, Math.min((ekran.H / 900) * 0.86, (ekran.W - yaziSag - 40) / 640.4));
      box.style.height = '';
      ext.style.top = '';
    } else {
      ustPay = ($('#hdr') ? $('#hdr').offsetHeight : 64) - 64;
      hedefleriOlc(true);
      olc1.s = olc1.h;
      olc2.s = olc2.h;
      olc3.s = olc3.h;
      yer3.s = yer3.h;
      kay3.s = kay3.h;
      su = katSu();
    }
    yerlestir();
    // düzen değişince satır içi stilleri sıfırla
    col.style.transform = '';
    secs.forEach((el) => { el.style.transform = ''; el.style.opacity = ''; el.style.visibility = ''; });
    box.style.opacity = '';
    aktifKat = -1;
  }
  /* Yerleşim bu ölçekte (s0) kurulur. Ölçek değişirken her karede yeniden yerleşim yapılmaz;
     kuyu ve kabin katmanına yalnızca transform: scale() uygulanır (ekran kartıyla, takılmadan).
     Ölçek oturunca yerleşim bir kez yeni ölçekte yenilenir ki görüntü keskin kalsın. */
  let sonKutu = -1, sonExtS = -1;
  function yerlestir() {
    const W = ekran.W;
    const H = ekran.H;
    const s = su;
    let cx = W * (genis ? (W >= 1024 ? 0.73 : 0.72) : 0.5);
    // dar masaüstünde ve tablette asansör yazının üstüne binmesin: kuyunun sol kenarı yazının 24 px sağında, kabin ekranın içinde
    if (genis) cx = Math.min(Math.max(cx, yaziSag + 24 + 388 * s), W - 252.4 * s - 16);
    const X = (u) => cx + (u - 768) * s;
    const U = (px) => 518.7 + px * K;
    const cabW = 692 * K * s;
    const cabH = 885 * K * s;
    g = { W, H, s0: s, cx, cabH0: cabH };
    world.style.height = 2700 * s + 'px';
    world.style.transformOrigin = `${cx}px 0px`;
    shaft.style.cssText = `left:${X(380)}px;top:${60 * s}px;width:${776 * s}px;height:${2640 * s}px`;
    // kuyu dibindeki yumuşak geçiş: görselin en alt ~330 biriminde, biraz da altına taşar
    dip.style.cssText = `left:${X(370)}px;top:${(2700 - 330) * s}px;width:${796 * s}px;height:${346 * s}px`;
    ropes.forEach((r, i) => {
      r.style.left = X(U(HALAT[i])) + 'px';
      r.style.top = 497 * s + 'px';
      r.style.width = Math.max(1.5, 7 * K * s) + 'px';
      r.style.height = '100px';
    });
    glow.style.left = X(768) - cabW + 'px';
    glow.style.width = cabW * 2 + 'px';
    glow.style.height = cabH * 1.2 + 'px';
    cab.style.left = X(518.7) + 'px';
    cab.style.width = cabW + 'px';
    cab.style.height = cabH + 'px';
    cab.style.setProperty('--mk', (cabH * 14) / 885 + 'px');
    sonKutu = -1;
    sonExtS = -1;
  }
  // çerez bildirimi ya da kampanya kartı açılıp kapanınca: yazının kayma geçişi (~0,45 sn) bitince yeni ölçek
  let yerT = 0;
  d.addEventListener('yk:yerlesim', () => {
    clearTimeout(yerT);
    yerT = setTimeout(() => { if (!genis) { hedefleriOlc(); uyan(); } }, 480);
  });

  function ciz() {
    const door = p < 0.2 ? kapi * intro : kapi;
    const pos = kab;
    const akt = Math.round(pos);
    const kat = KAT[akt];
    const { H } = g;
    const s = su;
    const k = s / g.s0;
    const cabH = 885 * K * s;
    const kc = clamp(cam, 0, 1);
    let boxH = genis ? H : (s * 900) / 0.7;
    // 3. katta kuyu dibi yazının 10 px üstüne inebilsin diye kutu gerekirse uzar (orada alttaki ray ve geçiş görünmez)
    if (!genis) boxH = Math.round(boxH + Math.max(0, yer3.s - 2 - boxH) * (1 - ssm(kc)));
    if (!genis && boxH !== sonKutu) {
      box.style.height = boxH + 'px';
      ext.style.top = boxH - 60 + 'px';
      sonKutu = boxH;
    }

    // kat rengi kapıdan dolar, zemine çok hafif yansır
    const bg = [14, 16, 18].map((v, i) => Math.round(v + (kat.amb[i] - v) * 0.025 * door)).join(', ');
    if (bg !== sonBg) { h.style.setProperty('--bgc', bg); sonBg = bg; }

    // kamera: telefonda kabin header'ın altında, katlara göre biraz kayar
    let merkez = 450;
    if (!genis) {
      const c1 = 64 + ustPay + 246 * s - 34 + cabH / 2;
      const c23 = 78 + ustPay + cabH / 2;
      // 3. kat: kuyunun dibi yazının 10 px üstünde (kabin header'ın altına çıkmaz, kutudan taşmaz)
      // (kabinin üstü 3. kat ölçeğine göre hesaplanır: geçiş sırasında kabin büyürken üstü yerinde kalır)
      const c3 = clamp(yer3.s - 10 - 944 * olc3.s, 52 + ustPay, boxH - 8 - 944 * s) + cabH / 2;
      const cabC = cam >= 1 ? c23 + (c1 - c23) * Math.min(1, cam - 1) : c3 + (c23 - c3) * ssm(cam);
      merkez = ((cabC + 40 * s) * 900) / boxH;
    }
    const at = (q) => { const k0 = Math.floor(q); const k1 = Math.min(2, k0 + 1); return DURAK[k0] + (DURAK[k1] - DURAK[k0]) * (q - k0); };
    const hitch = at(clamp(pos, 0, 2));
    const camHitch = at(clamp(cam, 0, 2));
    const hedef = (boxH / 900) * merkez;
    const cabTopU = hitch - 88.6;
    const top = clamp(hedef - (camHitch - 88.6 + (885 * K) / 2 + 40) * s, boxH - 2700 * s - (genis ? 0 : boxH), 0);
    world.style.transform = k === 1 ? `translate3d(0,${top}px,0)` : `translate3d(0,${top}px,0) scale(${k})`;
    // dünyanın içindeki konumlar yerleşim ölçeğinde (s0); sarsıntı ölçek oranına bölünür
    const s0 = g.s0;
    const ropeH = Math.max(0, (cabTopU + 20 - 497) * s0 + jolt / k);
    const ropeT = `scaleY(${ropeH / 100})`;
    for (let i = 0; i < ropes.length; i++) ropes[i].style.transform = ropeT;
    cab.style.transform = `translate3d(0,${cabTopU * s0 + jolt / k}px,0)`;
    const light = clamp((door - 0.15) / 0.75, 0, 1);
    if (kat.ton !== sonGlowTon) {
      const a = kat.amb.join(', ');
      glow.style.background = `radial-gradient(ellipse at center, rgba(${a}, 1) 0%, rgba(${a}, .375) 45%, rgba(${a}, 0) 70%)`;
      sonGlowTon = kat.ton;
    }
    glow.style.transform = `translate3d(0,${cabTopU * s0 - g.cabH0 * 0.1}px,0)`;
    glow.style.opacity = (0.04 + 0.16 * light).toFixed(3);
    kareGoster(kat.ton, Math.round(door * (KARE - 1)));

    if (genis) {
      col.style.transform = `translate3d(0,${-p * H}px,0)`;
      if (akt !== aktifKat) {
        secs.forEach((el, i) => el.classList.toggle('is-on', i === 2 - akt));
        aktifKat = akt;
      }
    } else {
      // telefonda 2. katta kabin yazının arkasında: asansör yumuşakça yarı saydam olur
      const elOp = 1 - 0.5 * ssm(1 - Math.abs(pos - 1) / 0.6);
      box.style.opacity = elOp.toFixed(3);
      fade.style.opacity = kc.toFixed(3);
      const per = 514.67 * s;
      if (s !== sonExtS) {
        ext.style.left = g.cx + (380 - 768) * s + 'px';
        ext.style.width = 776 * s + 'px';
        ext.style.backgroundSize = `${776 * s}px ${per}px`;
        sonExtS = s;
      }
      const extTop = boxH - 60;
      const extY = (((top + 1380 * s - extTop) % per) + per) % per;
      ext.style.backgroundPosition = `0 ${extY}px`;
      ext.style.opacity = (0.22 * kc * elOp).toFixed(3);
      // her kat kısa mesafe kayarak solar, sıradaki aşağıdan gelir
      for (let i = 0; i < 3; i++) {
        const dd = p - i;
        const o = dd >= 0 ? 1 - ssm((dd - 0.08) / 0.37) : ssm((dd + 0.55) / 0.35);
        const el = secs[i];
        el.style.transform = `translate3d(0,${-dd * H * 0.3 - (i === 2 ? kay3.s : 0)}px,0)`; // katlar üst üste durur (CSS), yalnızca kısa kayma
        el.style.opacity = o.toFixed(3);
        el.style.visibility = o > 0.01 ? 'visible' : 'hidden';
      }
    }
  }

  function tik(now) {
    const dt = Math.min(64, sonT ? now - sonT : 16.7);
    sonT = now;
    const az = mqAz.matches;
    const f = (k) => (az ? 1 : 1 - Math.pow(1 - k, dt / 16.667));
    const masa = mqMasa.matches;
    const oncekiKab = kab;
    p += (pt - p) * f(masa ? 0.07 : 0.08);
    const st = faz(p);
    cam += (st.pos - cam) * f(genis ? (masa ? 0.05 : 0.06) : 0.1);
    kabinDurumu(st);
    if (!genis) {
      const yaklas = (o, e) => { if (o.s !== o.h) o.s = Math.abs(o.h - o.s) < e ? o.h : o.s + (o.h - o.s) * f(0.08); };
      yaklas(olc1, 0.0004);
      yaklas(olc2, 0.0004);
      yaklas(olc3, 0.0004);
      yaklas(yer3, 0.3);
      yaklas(kay3, 0.3);
      su = katSu();
    }
    if (introT0 != null && intro < 1) {
      const t = az ? 1 : Math.min(1, (now - introT0) / 2600);
      intro = t * t * (3 - 2 * t);
    }
    // duruş ve kalkış: halat esnemesiyle çok hafif salınım
    const yolda = kapi === 0 && Math.abs(kab - Math.round(kab)) > (genis ? 0.002 : 0.02);
    if (yolda) yon = kab < oncekiKab ? 1 : -1;
    if (gecis != null && yolda !== gecis && now - jT0 > 450) {
      jT0 = now;
      jAmp = yon * (yolda ? -1.4 : 3.2);
    }
    gecis = yolda;
    const jt = now - jT0;
    jolt = !az && jt < 1400 ? jAmp * Math.exp(-jt / 260) * Math.sin((2 * Math.PI * jt) / 240) : 0;
    const bitti = Math.abs(pt - p) < 0.0015 && Math.abs(st.pos - cam) < 0.002 && (az || jt >= 1400) && (introT0 == null || intro >= 1) && olc1.s === olc1.h && olc2.s === olc2.h && olc3.s === olc3.h && yer3.s === yer3.h && kay3.s === kay3.h;
    if (bitti) {
      p = pt; cam = faz(p).pos; jolt = 0;
      kabinDurumu(faz(p));
      if (!genis) su = katSu();
      if (Math.abs(su - g.s0) > 0.0001) yerlestir(); // ölçek oturdu: keskin görüntü için bir kez yeniden yerleşim
    }
    ciz();
    raf = bitti ? 0 : requestAnimationFrame(tik);
  }
  function uyan() {
    if (raf || kapali) return;
    sonT = 0;
    raf = requestAnimationFrame(tik);
  }
  // sitenin başında yukarı kaydırılmaya çalışılırsa kabin üst durakta hafifçe sarsılır
  function sars(amp) {
    const now = performance.now();
    if (mqAz.matches || now - jT0 < 700) return;
    jT0 = now;
    jAmp = amp;
    uyan();
  }

  /* Kat oturtma. Geniş ekran: durunca ~0,4 sn sonra yakın kata oturur (müdahaleyle iptal olmaz; iki kat arası dar bant serbest).
     Dokunmatik ekranda bunu tarayıcının kendi kat durakları yapar (CSS scroll-snap, .hx-durak): her kaydırma bir kat ilerler,
     hızlı kaydırmada bile katlar atlanmaz. Fare/trackpad ile dar pencerede de JS oturtur (CSS durakları orada yok). */
  const jsOtur = () => genis || !mqDokun.matches;
  let oturT = 0, oturuyor = false;
  const engelle = (e) => e.preventDefault();
  const TUSLAR = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'Home', 'End'];
  const tusEngelle = (e) => { if (TUSLAR.includes(e.key)) e.preventDefault(); };
  function kilit(ac) {
    const fn = ac ? addEventListener : removeEventListener;
    fn('wheel', engelle, { passive: false });
    fn('touchmove', engelle, { passive: false });
    fn('keydown', tusEngelle);
  }
  function otur() {
    if (oturuyor || !jsOtur() || mqAz.matches || h.classList.contains('nav-acik')) return;
    const H = ekran.H;
    const y0 = scrollY;
    if (y0 >= 2 * H - 2) return;
    const y1 = Math.round(y0 / H) * H;
    const fark = y1 - y0;
    if (Math.abs(fark) < 2 || Math.abs(fark) > H * 0.4667) return;
    const sure = 800 + (Math.abs(fark) / H) * 900 * 1.4;
    const t0 = performance.now();
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    oturuyor = true;
    kilit(true);
    h.style.scrollBehavior = 'auto'; // CSS'teki yumuşak kaydırma kare kare oturtmayı bozmasın
    const adim = (now) => {
      const k = Math.min(1, (now - t0) / sure);
      scrollTo(0, y0 + fark * ease(k));
      if (k < 1) requestAnimationFrame(adim);
      else { oturuyor = false; kilit(false); h.style.scrollBehavior = ''; }
    };
    requestAnimationFrame(adim);
  }
  addEventListener('wheel', (e) => { if (scrollY <= 0 && e.deltaY < 0) sars(-3.2); }, { passive: true });
  let ty = null;
  addEventListener('touchstart', (e) => { ty = e.touches[0] ? e.touches[0].clientY : null; }, { passive: true });
  addEventListener('touchmove', (e) => { if (ty != null && e.touches[0] && scrollY <= 0 && e.touches[0].clientY - ty > 14) sars(-3.2); }, { passive: true });

  function kaydir(y) {
    const H = ekran.H;
    pt = clamp(y / H, 0, 2);
    const gizle = y > ekran.heroSon + 10;
    if (gizle !== kapali) {
      kapali = gizle;
      lift.classList.toggle('is-kapali', gizle);
    }
    uyan();
    if (jsOtur() && !oturuyor) {
      clearTimeout(oturT);
      oturT = setTimeout(otur, 380);
    }
  }

  function yenidenOlc() {
    geometri();
    pt = clamp(scrollY / ekran.H, 0, 2);
    p = pt;
    cam = faz(p).pos;
    kabinDurumu(faz(p));
    if (!genis) { su = katSu(); yerlestir(); }
    ciz();
  }

  // ilk konum, sonra görünür yap (konumlanmadan önce gizli; kısa bir açılış geçişiyle belirir)
  yenidenOlc();
  // yazı tipi geç gelirse başlık yüksekliği değişir: telefonda asansör boyu yeniden hesaplanır
  if (d.fonts) d.fonts.ready.then(() => { if (!genis) yenidenOlc(); });
  requestAnimationFrame(() => lift.classList.add('is-hazir'));

  // kareler sayfa yüklendikten sonra: önce giriş katı (açılışta kapı bir kez açılır), sonra diğer katlar
  function kareleriYukle() {
    setYukle('turuncu', 'low').then(() => {
      introT0 = performance.now();
      uyan();
      let basladi = false;
      const digerleri = () => {
        if (basladi) return;
        basladi = true;
        removeEventListener('scroll', digerleri);
        setYukle('mavi', 'low').then(() => setYukle('yesil', 'low'));
      };
      addEventListener('scroll', digerleri, { passive: true, once: true });
      setTimeout(digerleri, 2500);
    });
  }
  if (d.readyState === 'complete') kareleriYukle();
  else addEventListener('load', kareleriYukle, { once: true });

  return { kaydir, yenidenOlc };
})();

/* ---------- Açılır paneller (header menüleri, telefon menüsü): açılırken süzülür, kapanırken de hafifçe silinerek
   gizlenir (CSS: .is-kapan). Hareket azaltma tercihinde hemen kapanır. ---------- */
const solma = new WeakMap();
function panelAc(el) {
  clearTimeout(solma.get(el));
  el.classList.remove('is-kapan');
  el.hidden = false;
}
function panelKapat(el, hemen = false) {
  clearTimeout(solma.get(el));
  if (el.hidden) return;
  if (hemen || mqAz.matches) { el.classList.remove('is-kapan'); el.hidden = true; return; }
  el.classList.add('is-kapan');
  solma.set(el, setTimeout(() => { el.classList.remove('is-kapan'); el.hidden = true; }, 260));
}

/* ---------- Header: açılır menüler (masaüstü) ---------- */
const hdr = $('#hdr');
const Menu = (() => {
  if (!hdr) return { kapat() {} };
  let acik = null;
  const kapat = (hemen = false) => {
    if (!acik) return;
    $('.pill', acik).setAttribute('aria-expanded', 'false');
    panelKapat($('.mega', acik), hemen);
    acik = null;
  };
  const ac = (it) => {
    if (acik === it || !mqMasa.matches) return;
    // başka menüye geçerken eskisi beklemeden kapanır
    kapat(true);
    $$('.mega.is-kapan', hdr).forEach((m) => panelKapat(m, true));
    acik = it;
    $('.pill', it).setAttribute('aria-expanded', 'true');
    panelAc($('.mega', it));
  };
  $$('.hdr__item', hdr).forEach((it) => {
    const a = $('.pill', it);
    a.addEventListener('mouseenter', () => ac(it));
    a.addEventListener('focus', () => ac(it));
  });
  $$('.hdr__nav > .pill', hdr).forEach((a) => {
    a.addEventListener('mouseenter', () => kapat());
    a.addEventListener('focus', () => kapat());
  });
  hdr.addEventListener('mouseleave', () => kapat());
  hdr.addEventListener('focusout', (e) => { if (!hdr.contains(e.relatedTarget)) kapat(); });
  d.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !acik) return;
    const a = $('.pill', acik);
    kapat();
    a.focus();
  });
  return { kapat: () => kapat(), acikMi: () => !!acik };
})();

/* ---------- Header kutularında ışık (masaüstü, Liquid Glass) ----------
   Tek bir ışık kaynağı header'ın üstünde: her kutunun parlaması ışığa göre kendi yerinde ve gücünde (--isik-x, --isik-dx,
   --isik-g; CSS'te). Fare header'da gezerken ışık imleci yumuşakça izler; imlecin altındaki kutuda parıltı imleçle kayar. */
(() => {
  const kutular = hdr ? $$('.hdr__nav .pill', hdr) : [];
  if (!kutular.length) return;
  let yer = [], hedef = 0, simdi = 0, raf = 0, sonT = 0;
  const dinlenme = () => hdr.clientWidth * 0.44; // fare yokken ışık ortanın biraz solunda
  function boya() {
    kutular.forEach((k, i) => {
      const fark = simdi - yer[i];
      const dx = clamp(fark / 260, -1, 1);
      k.style.setProperty('--isik-x', `${(50 + dx * 36).toFixed(1)}%`);
      k.style.setProperty('--isik-dx', dx.toFixed(3));
      k.style.setProperty('--isik-g', (0.55 + 0.45 / (1 + (fark / 420) ** 2)).toFixed(3));
    });
  }
  function adim(now) {
    const dt = Math.min(64, sonT ? now - sonT : 16.7);
    sonT = now;
    simdi += (hedef - simdi) * (1 - Math.pow(0.86, dt / 16.667));
    if (Math.abs(hedef - simdi) < 0.5) simdi = hedef;
    boya();
    raf = simdi === hedef ? 0 : requestAnimationFrame(adim);
  }
  function git(x) {
    hedef = x;
    if (mqAz.matches) { simdi = x; boya(); return; }
    if (!raf) { sonT = 0; raf = requestAnimationFrame(adim); }
  }
  function kur() {
    if (!mqMasa.matches) return;
    cancelAnimationFrame(raf);
    raf = 0;
    yer = kutular.map((k) => { const r = k.getBoundingClientRect(); return r.left + r.width / 2; });
    simdi = hedef = dinlenme();
    boya();
  }
  kur();
  if (d.fonts) d.fonts.ready.then(kur);
  addEventListener('resize', kur);
  if (mqDokun.matches || !matchMedia('(hover: hover)').matches) return;
  hdr.addEventListener('pointermove', (e) => {
    if (!mqMasa.matches || e.pointerType !== 'mouse') return;
    git(e.clientX);
    const k = e.target.closest('.pill');
    if (k && kutular.includes(k)) {
      const r = k.getBoundingClientRect();
      k.style.setProperty('--mx', `${e.clientX - r.left}px`);
      k.style.setProperty('--my', `${e.clientY - r.top}px`);
    }
  });
  hdr.addEventListener('pointerleave', () => { if (mqMasa.matches) git(dinlenme()); });
})();

/* ---------- Telefon menüsü ---------- */
(() => {
  const nav = $('#mnav');
  const ac = $('#navAc');
  const kap = $('#navKapat');
  if (!nav || !ac) return;
  const goster = (v, odak = true) => {
    if (v) panelAc(nav);
    else panelKapat(nav);
    ac.setAttribute('aria-expanded', String(v));
    h.classList.toggle('nav-acik', v);
    if (v) kap.focus();
    else if (odak) ac.focus({ preventScroll: true });
  };
  ac.addEventListener('click', () => goster(true));
  kap.addEventListener('click', () => goster(false));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) goster(false, false); });
  nav.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { goster(false); return; }
    if (e.key !== 'Tab') return;
    const odaklar = $$('a[href], button, summary', nav).filter((el) => el.offsetParent !== null);
    const ilk = odaklar[0];
    const son = odaklar[odaklar.length - 1];
    if (e.shiftKey && d.activeElement === ilk) { e.preventDefault(); son.focus(); }
    else if (!e.shiftKey && d.activeElement === son) { e.preventDefault(); ilk.focus(); }
  });
  mqMasa.addEventListener('change', () => { if (mqMasa.matches && !nav.hidden) goster(false, false); });
})();

/* ---------- Çerez onayı: seçim tarayıcıda 180 gün saklanır ---------- */
const Cerez = (() => {
  const bar = $('#ck');
  const panel = $('#ckp');
  if (!bar || !panel) return { kaydirmada() {} };
  const swA = $('[data-cerez-tur="a"]', panel);
  const swM = $('[data-cerez-tur="m"]', panel);
  const wa = $('#wa');
  const SURE = 180 * 864e5;
  let secim = null;
  try {
    const c = JSON.parse(localStorage.getItem('yk-cerez') || 'null');
    if (c && Date.now() - c.t < SURE) secim = c;
  } catch (e) { /* depolama kapalı olabilir */ }
  let geri = null;
  const kapaliDurum = () => (secim ? (secim.a && secim.m ? 'tam' : 'secildi') : 'yok');
  function yerlestir() {
    // telefonda: bildirim açıkken hero yazısının altı bildirim kadar açılır; tercih paneli açıkken WhatsApp üstüne çıkar
    const ck = h.dataset.ck;
    if (ck === 'yok') h.style.setProperty('--ck-pad', bar.offsetHeight + parseFloat(getComputedStyle(bar).bottom) + 16 + 'px');
    if (wa) wa.style.bottom = ck === 'tercih' && mqKucuk.matches ? panel.offsetHeight + 24 + 'px' : '';
  }
  function durum(yeni) {
    h.dataset.ck = yeni;
    panel.hidden = yeni !== 'tercih';
    yerlestir();
    d.dispatchEvent(new CustomEvent('yk:cerez'));
    d.dispatchEvent(new CustomEvent('yk:yerlesim'));
  }
  function kaydet(a, m) {
    secim = { a, m, t: Date.now() };
    try { localStorage.setItem('yk-cerez', JSON.stringify(secim)); } catch (e) { /* yoksay */ }
    onayUygula(a, m);
    durum(kapaliDurum());
  }
  function anahtar(sw, v) { sw.setAttribute('aria-checked', String(!!v)); }
  d.addEventListener('click', (e) => {
    const b = e.target.closest('[data-cerez], [data-cerez-tur], [data-cerez-ac]');
    if (!b) return;
    if (b.hasAttribute('data-cerez-ac')) {
      bar.classList.remove('is-ilk');
      durum('yok');
      return;
    }
    if (b.dataset.cerezTur) { anahtar(b, b.getAttribute('aria-checked') !== 'true'); return; }
    const is = b.dataset.cerez;
    if (is === 'reddet') kaydet(false, false);
    else if (is === 'kabul') kaydet(true, true);
    else if (is === 'kaydet') kaydet(swA.getAttribute('aria-checked') === 'true', swM.getAttribute('aria-checked') === 'true');
    else if (is === 'tercih') {
      geri = h.dataset.ck;
      anahtar(swA, secim && secim.a);
      anahtar(swM, secim && secim.m);
      bar.classList.remove('is-ilk');
      durum('tercih');
    } else if (is === 'geri') durum(geri || kapaliDurum());
  });
  if (secim) onayUygula(secim.a, secim.m);
  yerlestir();
  addEventListener('resize', yerlestir);
  if (d.fonts) d.fonts.ready.then(yerlestir);
  return {
    // masaüstünde kaydırınca tercih paneli bir önceki küçük görünüme döner
    kaydirmada() { if (h.dataset.ck === 'tercih' && mqMasa.matches) durum(geri || kapaliDurum()); }
  };
})();

/* ---------- Kampanya: girişte açık; kaydırınca küçük etikete döner, tıklayınca yeniden açılır ---------- */
const Kampanya = (() => {
  const kart = $('#promo');
  const etiket = $('#promoEtiket');
  const wa = $('#wa');
  if (!kart || !etiket) return { guncelle() {} };
  let kapandi = false;
  try { kapandi = sessionStorage.getItem('yk-kampanya') === 'kapali'; } catch (e) { /* yoksay */ }
  let sabit = false, sabitP = 0, sonP = 0, ilk = true, olculdu = false;
  function guncelle(q = sonP) {
    sonP = q;
    const ckAcik = h.dataset.ck === 'yok' || h.dataset.ck === 'tercih';
    const engel = ckAcik && !mqGenis.matches; // telefonda çerez bildirimi açıkken gösterilmez
    if (sabit && Math.abs(q - sabitP) >= 0.35) sabit = false;
    const acik = !kapandi && !engel && (q < 0.08 || sabit);
    if (acik && kart.hidden) {
      // masaüstünde ilk açılış sayfa yüklendikten biraz sonra
      kart.style.animationDelay = ilk && mqGenis.matches ? '1.6s' : '0s';
      ilk = false;
    }
    kart.hidden = !acik;
    etiket.hidden = kapandi || acik || engel;
    // telefonda kart açıkken hero yazısının altı kart kadar açılır; kapanınca boşluk kalkar.
    // 2. ve 3. katta kampanya etiketi görünürken bağlantılar onun üstünde durur.
    const durum = acik ? 'acik' : !etiket.hidden ? 'etiket' : 'kapali';
    const degisti = h.dataset.kampanya !== durum;
    // kart yüksekliği her açılışta ölçülür; sayfa kart açıkken yüklendiyse de ilk seferde (yer tahmini değil gerçek ölçü)
    if (acik && (degisti || !olculdu)) {
      h.style.setProperty('--promo-pad', kart.offsetHeight + parseFloat(getComputedStyle(kart).bottom) + 16 + 'px');
      olculdu = true;
    }
    if (degisti) {
      h.dataset.kampanya = durum;
      d.dispatchEvent(new CustomEvent('yk:yerlesim'));
    }
    if (wa) wa.classList.toggle('wa--etiket', !etiket.hidden);
  }
  $('#promoKapat').addEventListener('click', () => {
    kapandi = true;
    try { sessionStorage.setItem('yk-kampanya', 'kapali'); } catch (e) { /* yoksay */ }
    guncelle();
  });
  etiket.addEventListener('click', () => { sabit = true; sabitP = sonP; guncelle(); });
  d.addEventListener('yk:cerez', () => guncelle());
  return { guncelle };
})();

/* ---------- "Neden YK Asansör": görünür oldukça zemin hafifçe kurumsal turuncuya ısınır ---------- */
const Neden = (() => {
  const sec = $('#neden');
  if (!sec) return null;
  let ust = 0, boy = 0, gorunur = false, son = -1;
  const karis = (a, b, t) => a.map((v, i) => Math.round(v + (b[i] - v) * t)).join(', ');
  function olcNeden() { const r = sec.getBoundingClientRect(); ust = r.top + scrollY; boy = r.height; }
  function guncelle(y) {
    if (!gorunur) return;
    const k = mqMasa.matches ? [120, 420] : [80, 300];
    const t = Math.round(clamp((y + ekran.H - ust - k[0]) / (boy + k[1]), 0, 1) * 50) / 50;
    if (t === son) return;
    son = t;
    sec.style.setProperty('--nb', `rgb(${karis([243, 243, 241], [252, 232, 216], t)})`);
    sec.style.setProperty('--nl', `rgba(${karis([21, 24, 27], [226, 102, 28], t)}, .14)`);
    sec.style.setProperty('--na', `rgb(${karis([154, 160, 166], [226, 102, 28], t)})`);
    sec.style.setProperty('--ni', `rgb(${karis([21, 24, 27], [214, 92, 22], t)})`);
  }
  new IntersectionObserver((e) => { gorunur = e[0].isIntersecting; if (gorunur) { olcNeden(); guncelle(scrollY); } }, { rootMargin: '200px 0px' }).observe(sec);
  return { guncelle, olc: olcNeden };
})();

/* ---------- Kaydırma ---------- */
let kareIstegi = 0;
let zeminIstegi = 0;
/* Masaüstünde header'ın hemen altındaki zemin açık mı? (beyaz/gri bölüm, kart vb.) Header, sabit katmanlar
   (asansör, WhatsApp) atlanır; ilk dolu arka plan rengine bakılır. Arka planı görsel ya da degrade olanlar koyu sayılır. */
function zeminAcikMi() {
  for (const el of d.elementsFromPoint(innerWidth / 2, 46)) {
    if (el.closest('#hdr') || getComputedStyle(el).position === 'fixed') continue;
    for (let e = el; e && e !== h; e = e.parentElement) {
      const m = getComputedStyle(e).backgroundColor.match(/[\d.]+/g);
      if (m && (m.length < 4 || +m[3] > 0.5)) return 0.2126 * m[0] + 0.7152 * m[1] + 0.0722 * m[2] > 150;
    }
    return false;
  }
  return false;
}
function kaydirma() {
  const y = scrollY;
  if (Asansor) Asansor.kaydir(y);
  if (hdr) {
    const gecti = y >= ekran.heroSon - (mqMasa.matches ? 92 : 64);
    hdr.classList.toggle('is-gecti', gecti);
    if (!gecti || !mqMasa.matches) hdr.classList.remove('is-acik');
    else if (!zeminIstegi) zeminIstegi = requestAnimationFrame(() => { zeminIstegi = 0; hdr.classList.toggle('is-acik', zeminAcikMi()); });
  }
  if (Menu.acikMi && Menu.acikMi()) Menu.kapat();
  Cerez.kaydirmada();
  Kampanya.guncelle(clamp(y / ekran.H, 0, 2));
  if (Neden && !kareIstegi) kareIstegi = requestAnimationFrame(() => { kareIstegi = 0; Neden.guncelle(scrollY); });
}
addEventListener('scroll', kaydirma, { passive: true });
// açılış: çerez bildirimi ve kampanya kartının gerçek ölçüleri yerleşti; asansör buna göre ilk boyamadan önce ölçülür,
// hero yazısının kayma geçişi bundan sonra açılır
function acilisYerlesim() {
  if (Asansor) Asansor.yenidenOlc();
  requestAnimationFrame(() => h.classList.add('gecisli'));
}
let boyutT = 0;
addEventListener('resize', () => {
  clearTimeout(boyutT);
  boyutT = setTimeout(() => {
    const W0 = ekran.W, H0 = ekran.H, hw0 = h.classList.contains('hw');
    olc();
    if (W0 !== ekran.W || H0 !== ekran.H || hw0 !== h.classList.contains('hw')) {
      if (Asansor) Asansor.yenidenOlc();
      if (Neden) Neden.olc();
    } else {
      d.dispatchEvent(new CustomEvent('yk:yerlesim')); // ör. adres çubuğu açıldı/kapandı: yazı yeri değişti
    }
    kaydirma();
  }, 120);
});
// yenilemede kalınan yer: hero asansörü de ilk çizimde o kata yerleşsin diye açılış ölçüsünden önce
Konum.baslat();
kaydirma();
acilisYerlesim();

/* ---------- Yumuşak kaydırma (fare tekerleği): sayfa tekerle zıplamaz, yumuşakça süzülerek durur ----------
   Yalnızca fare/trackpad'de; dokunmatik ekranda tarayıcının kendi momentumlu kaydırması kalır.
   Ana sayfanın hero katlarında kat oturtma çalıştığı için orada da tarayıcının kendi kaydırması. */
(() => {
  if (mqDokun.matches || !matchMedia('(hover: hover)').matches) return;
  const anaHero = d.getElementById('hx');
  let hedef = scrollY, simdi = scrollY, raf = 0, sonT = 0, beklenen = -1;
  const enFazla = () => h.scrollHeight - innerHeight;
  function adim(now) {
    const dt = Math.min(64, sonT ? now - sonT : 16.7);
    sonT = now;
    simdi += (hedef - simdi) * (1 - Math.pow(0.9, dt / 16.667));
    if (Math.abs(hedef - simdi) < 0.5) simdi = hedef;
    beklenen = simdi;
    scrollTo({ top: simdi, behavior: 'instant' });
    raf = simdi === hedef ? 0 : requestAnimationFrame(adim);
  }
  function durdur() {
    cancelAnimationFrame(raf);
    raf = 0;
    hedef = simdi = scrollY;
  }
  // tekerin altındaki öğe kendisi o yönde kayabiliyorsa (açık menü, metin kutusu) kaydırma ona kalır
  const icKaydirma = (el, dy) => {
    for (; el && el !== d.body && el !== h; el = el.parentElement) {
      if (el.scrollHeight <= el.clientHeight + 1) continue;
      const oy = getComputedStyle(el).overflowY;
      if ((oy === 'auto' || oy === 'scroll') && (dy > 0 ? el.scrollTop + el.clientHeight < el.scrollHeight - 1 : el.scrollTop > 0)) return true;
    }
    return false;
  };
  addEventListener('wheel', (e) => {
    if (mqAz.matches || e.defaultPrevented || e.ctrlKey || h.classList.contains('nav-acik')) return;
    const dy = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? innerHeight : 1);
    if (!dy || Math.abs(e.deltaX) > Math.abs(dy) || icKaydirma(e.target, dy)) return;
    if (!raf) hedef = simdi = scrollY;
    // ana sayfa: hero içindeyken ya da hero sonundan yukarı dönerken kaydırma tarayıcının (kat oturtma çalışır)
    if (anaHero && (simdi < ekran.heroSon - 1 || (dy < 0 && simdi <= ekran.heroSon + 1))) {
      if (raf) durdur();
      return;
    }
    e.preventDefault();
    hedef = clamp(hedef + dy, anaHero ? ekran.heroSon : 0, enFazla());
    if (!raf) {
      sonT = 0;
      raf = requestAnimationFrame(adim);
    }
  }, { passive: false });
  // klavye, kaydırma çubuğu ya da bağlantıyla gelen kaydırmada yumuşak kaydırma kenara çekilir
  addEventListener('scroll', () => {
    if (!raf) hedef = simdi = scrollY;
    else if (Math.abs(scrollY - beklenen) > 2) durdur();
  }, { passive: true });
})();

/* ---------- Bölüm giriş animasyonları: görünür alana girerken bir kez ---------- */
function sayac(liste) {
  if (mqAz.matches) return;
  $$('.stat__v', liste).forEach((el) => {
    const n = Number(el.dataset.n);
    el.style.minWidth = el.offsetWidth + 'px'; // sayı büyürken yanındaki birim kaymasın
    const t0 = performance.now();
    const adim = (now) => {
      const k = Math.min(1, (now - t0) / 1100);
      el.textContent = String(Math.round(n * (1 - Math.pow(1 - k, 3))));
      if (k < 1) requestAnimationFrame(adim);
    };
    el.textContent = '0';
    requestAnimationFrame(adim);
  });
}
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((girdiler) => {
    girdiler.forEach((g) => {
      if (!g.isIntersecting) return;
      g.target.classList.add('rv--in');
      io.unobserve(g.target);
      if (g.target.classList.contains('stats')) sayac(g.target);
    });
  }, { rootMargin: '0px 0px -12% 0px' });
  $$('.rv, .rv-st').forEach((el) => io.observe(el));
  // etiket adımlarındaki ve süreç hattındaki ışık yalnızca görünürken akar
  const akanlar = $$('#adimlar, [data-gorunur]');
  if (akanlar.length) {
    const gio = new IntersectionObserver((e) => e.forEach((g) => g.target.classList.toggle('is-gorunur', g.isIntersecting)));
    akanlar.forEach((el) => gio.observe(el));
  }
} else {
  $$('.rv, .rv-st').forEach((el) => el.classList.add('rv--in'));
}

/* ---------- Periyodik kontrol etiketi seçici ---------- */
(() => {
  const butonlar = $$('.lb[data-etiket]');
  const paneller = $$('.lp[data-etiket]');
  butonlar.forEach((b) => b.addEventListener('click', () => {
    butonlar.forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    paneller.forEach((pn) => { pn.hidden = pn.dataset.etiket !== b.dataset.etiket; });
  }));
})();

/* ---------- Blog şeridi: oklarla bir sayfa (görünen kart sayısı kadar) kayar ---------- */
(() => {
  const ray = $('#blogRay');
  if (!ray) return;
  $$('.blog__nav .rail-btn').forEach((b) => b.addEventListener('click', () => {
    const li = ray.firstElementChild;
    const kart = li ? li.offsetWidth + 16 : 408;
    const adim = Math.max(1, Math.round((ray.clientWidth + 16) / kart)) * kart;
    ray.scrollBy({ left: Number(b.dataset.yon) * adim, behavior: mqAz.matches ? 'auto' : 'smooth' });
  }));
})();

/* ---------- Bakım paketleri (telefon): açılışta Standart ortada; görünen kartın noktası yanar ---------- */
(() => {
  const ray = $('#planlar');
  const noktalar = $$('#planNokta i');
  if (!ray || !noktalar.length) return;
  const ortala = () => {
    if (mqMasa.matches) return;
    const r = ray.getBoundingClientRect();
    const m = ray.children[1].getBoundingClientRect();
    ray.scrollLeft += m.left + m.width / 2 - (r.left + ray.clientWidth / 2);
  };
  requestAnimationFrame(ortala);
  mqMasa.addEventListener('change', ortala);
  ray.addEventListener('scroll', () => {
    const ilk = ray.firstElementChild;
    const i = clamp(Math.round(ray.scrollLeft / (ilk.offsetWidth + 12)), 0, 2);
    noktalar.forEach((n, k) => n.classList.toggle('on', k === i));
  }, { passive: true });
})();

/* ---------- SSS: aynı anda tek soru açık; telefonda hepsi kapalı başlar ----------
   Masaüstünde: ana sayfa ve hizmet şablonunda ilk soru açık (data-sss="ilk"),
   hizmetler sayfasında iki sütunlu düz liste, yanıtlar açık (data-sss="hepsi").
   Blog yazısındaki kaynaklar da aynı açılır-kapanır yapıda, her ekranda kapalı başlar (data-sss="kapali"). */
(() => {
  const gruplar = $$('.faqs, [data-sss]');
  if (!gruplar.length) return;
  const SURE = 340;
  const egri = 'cubic-bezier(.2, .7, .2, 1)';
  // Yanıt yüksekliği yumuşakça açılıp kapanır. Tek açık soru kuralını burada uygularız
  // (tarayıcının name="sss" davranışı diğerlerini animasyonsuz anında kapatırdı).
  function cevir(s, ac) {
    const a = $('.faq__a, .soru__a, .by-kaynak__ic', s);
    s.classList.toggle('is-acik', ac);
    if (s._anim) s._anim.cancel();
    if (mqAz.matches || !a.animate) { s.open = ac; return; }
    const bas = s.open ? a.getBoundingClientRect().height : 0;
    s.open = true;
    const son = ac ? a.scrollHeight : 0;
    const anim = a.animate([{ height: bas + 'px', opacity: ac ? (bas ? 1 : 0) : 1 }, { height: son + 'px', opacity: ac ? 1 : 0 }], { duration: SURE, easing: egri });
    s._anim = anim;
    anim.onfinish = () => { s._anim = null; if (!ac) s.open = false; };
  }
  gruplar.forEach((g) => {
    const sorular = $$('details', g);
    if (!sorular.length) return;
    const mod = g.dataset.sss || 'ilk';
    const liste = () => mod === 'hepsi' && mqMasa.matches;
    sorular.forEach((s) => {
      s.removeAttribute('name');
      $('summary', s).addEventListener('click', (e) => {
        e.preventDefault();
        if (liste()) return;
        const ac = !s.classList.contains('is-acik');
        if (ac) sorular.forEach((o) => { if (o !== s && o.classList.contains('is-acik')) cevir(o, false); });
        cevir(s, ac);
      });
    });
    const uygula = () => {
      sorular.forEach((s, i) => {
        if (s._anim) { s._anim.cancel(); s._anim = null; }
        const ac = mod !== 'kapali' && mqMasa.matches && (mod === 'hepsi' || i === 0);
        s.open = ac;
        s.classList.toggle('is-acik', ac);
        // düz listede sorular tıklanmaz; klavyede de atlanır
        $('summary', s).tabIndex = liste() ? -1 : 0;
      });
    };
    uygula();
    if (mod === 'hepsi') mqMasa.addEventListener('change', uygula);
  });
})();

/* ---------- Açılır gruplar (footer bağlantı grupları, telefon menüsü) ----------
   Başlık kendi sayfasına giden bağlantıdır; sağdaki boşluk ve ok alt başlıkları açıp kapatır.
   Footer grupları masaüstünde hep açık, telefonda kapalı başlar. */
(() => {
  const dugmeler = $$('.fgrp__ac, .m-nav__ac');
  if (!dugmeler.length) return;
  const ac = (b, v) => {
    b.setAttribute('aria-expanded', String(v));
    d.getElementById(b.getAttribute('aria-controls')).hidden = !v;
  };
  const footer = dugmeler.filter((b) => b.classList.contains('fgrp__ac'));
  dugmeler.forEach((b) => b.addEventListener('click', () => {
    if (footer.includes(b) && mqMasa.matches) return;
    ac(b, b.getAttribute('aria-expanded') !== 'true');
  }));
  const uygula = () => footer.forEach((b) => {
    ac(b, mqMasa.matches);
    b.tabIndex = mqMasa.matches ? -1 : 0;
  });
  uygula();
  mqMasa.addEventListener('change', uygula);
})();

/* ---------- Hızlı teklif formu: PHP betiğine (form-gonder.php) gönderilir ---------- */
telefonBaslat();
(() => {
  const form = $('#teklif');
  if (!form) return;
  const msg = $('#qf-durum', form);
  const btn = $('.qf__btn', form);
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    if (form.elements.website && form.elements.website.value) return; // otomatik gönderim
    btn.disabled = true;
    msg.hidden = true;
    msg.classList.remove('is-hata');
    try {
      const r = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || j.ok === false) throw new Error(r.status === 422 && j.hata ? j.hata : '');
      msg.textContent = 'Teşekkürler, en kısa sürede sizi arayacağız.';
      form.reset();
      olay('hizli_teklif_gonderildi');
      if (pxHazir && window.fbq) window.fbq('track', 'Lead');
    } catch (err) {
      msg.textContent = (err && err.message) || 'Şu anda gönderilemedi. Lütfen 0 (543) 542 86 75 numarasını arayın ya da WhatsApp’tan yazın.';
      msg.classList.add('is-hata');
    } finally {
      btn.disabled = false;
      msg.hidden = false;
    }
  });
})();

/* ---------- Teklif formu sayfası: hizmet seçimi, dönüş tercihi, referans alanı, gönderim ---------- */
(() => {
  const form = $('#tf');
  if (!form) return;
  // hizmet seçilmediyse kendi uyarımızı gösteririz; diğer alanlar tarayıcının uyarısıyla (JS yoksa yalnızca tarayıcı denetler)
  form.noValidate = true;
  const hata = $('#tf-hizmet-hata');
  const eposta = $('#tf-eposta');
  const msg = $('#tf-durum');
  const btn = $('.tf-submit', form);
  const refBtn = $('.tf-ref', form);
  const refAlan = $('#tf-ref-alan');
  const secili = (ad) => { const r = form.querySelector(`input[name="${ad}"]:checked`); return r ? r.value : ''; };
  form.addEventListener('change', (e) => {
    if (e.target.name === 'hizmet') hata.hidden = true;
    if (e.target.name === 'donus') {
      const mail = secili('donus') === 'E-postayla';
      eposta.required = mail;
      $('.tf-zor', form).hidden = !mail;
      $('.tf-istege', form).hidden = mail;
    }
  });
  // Alan açılır ama imleç içine konmaz: telefonda klavye kendiliğinden açılıp sayfayı kaydırmasın.
  // Klavyeyle gezenler için odak, yazı alanına değil alanın kendisine geçer (yer kaybolmaz). Alan isteğe bağlıdır.
  refBtn.addEventListener('click', () => {
    refAlan.hidden = false;
    refBtn.hidden = true;
    refBtn.setAttribute('aria-expanded', 'true');
    refAlan.tabIndex = -1;
    refAlan.focus({ preventScroll: true });
  });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!secili('hizmet')) {
      hata.hidden = false;
      form.querySelector('input[name="hizmet"]').focus();
      return;
    }
    if (!form.reportValidity()) return;
    if (form.elements.website && form.elements.website.value) return; // otomatik gönderim
    btn.disabled = true;
    msg.hidden = true;
    msg.classList.remove('is-hata');
    try {
      const r = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || j.ok === false) throw new Error(r.status === 422 && j.hata ? j.hata : '');
      $('#tf-ok-hizmet').textContent = secili('hizmet');
      $('#tf-ok-donus').textContent = secili('donus') === 'E-postayla' ? 'E-postayla dönüş' : 'Telefonla dönüş';
      const ok = $('#tf-ok');
      form.hidden = true;
      ok.hidden = false;
      ok.focus();
      olay('teklif_formu_gonderildi', { hizmet: secili('hizmet') });
      if (pxHazir && window.fbq) window.fbq('track', 'Lead');
    } catch (err) {
      msg.textContent = (err && err.message) || 'Şu anda gönderilemedi. Lütfen 0 (543) 542 86 75 numarasını arayın ya da WhatsApp’tan yazın.';
      msg.classList.add('is-hata');
      msg.hidden = false;
    } finally {
      btn.disabled = false;
    }
  });
})();

/* ---------- İletişim sayfası: mesaj formu; harita yalnızca "Haritayı göster"e basınca yüklenir (KVKK) ---------- */
(() => {
  const form = $('#il');
  if (form) {
    const msg = $('#il-durum');
    const btn = $('.il-send .btn-a', form);
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      if (form.elements.website && form.elements.website.value) return; // otomatik gönderim
      btn.disabled = true;
      msg.hidden = true;
      msg.classList.remove('is-hata');
      try {
        const r = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
        const j = await r.json().catch(() => ({}));
        if (!r.ok || j.ok === false) throw new Error(r.status === 422 && j.hata ? j.hata : '');
        const ok = $('#il-ok');
        form.hidden = true;
        ok.hidden = false;
        ok.focus();
        olay('iletisim_formu_gonderildi', { konu: form.elements.konu.value });
        if (pxHazir && window.fbq) window.fbq('track', 'Contact');
      } catch (err) {
        msg.textContent = (err && err.message) || 'Şu anda gönderilemedi. Lütfen 0 (543) 542 86 75 numarasını arayın ya da WhatsApp’tan yazın.';
        msg.classList.add('is-hata');
        msg.hidden = false;
      } finally {
        btn.disabled = false;
      }
    });
  }
  const goster = $('.il-harita__goster');
  if (goster) {
    goster.addEventListener('click', () => {
      const bant = goster.closest('.il-harita');
      const f = d.createElement('iframe');
      f.src = 'https://www.google.com/maps?q=' + encodeURIComponent(goster.dataset.harita) + '&output=embed';
      f.title = 'YK Asansör konumu (Google Haritalar)';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.allowFullscreen = true;
      bant.appendChild(f);
      bant.classList.add('is-acik');
    });
  }
})();

/* ---------- Blog sayfası: kategori süzgeci, arama, "daha fazla yazı" (kartlar HTML'de yazılı) ---------- */
(() => {
  const liste = $('#bl-liste');
  if (!liste) return;
  const kartlar = $$(':scope > li', liste);
  const ara = $('#bl-ara');
  const sayi = $('#bl-sayi');
  const bos = $('#bl-bos');
  const daha = $('#bl-daha');
  const cipler = $$('.bl-chip');
  const adet = () => (mqGenis.matches ? 16 : 8);
  const metin = new Map(kartlar.map((li) => [li, li.textContent.toLocaleLowerCase('tr-TR')]));
  // yenilemede: seçili kategori ve açılan kart sayısı geri gelir
  const onceki = Konum.ek('bl') || {};
  let kat = cipler.some((c) => c.dataset.kat === onceki.kat) ? onceki.kat : 'hepsi';
  let limit = Math.max(adet(), onceki.limit || 0);
  function uygula(animasyon) {
    const q = ara.value.trim().toLocaleLowerCase('tr-TR');
    const uyan = kartlar.filter((li) => (kat === 'hepsi' || li.dataset.kat === kat) && (!q || metin.get(li).includes(q)));
    const onceki = new Set(kartlar.filter((li) => !li.hidden));
    let k = 0;
    kartlar.forEach((li) => { li.hidden = true; li.classList.remove('bl-yeni'); });
    uyan.slice(0, limit).forEach((li) => {
      li.hidden = false;
      // yeni görünen kartlar sırayla, yumuşakça belirir
      if (animasyon && !onceki.has(li) && !mqAz.matches) {
        li.style.animationDelay = Math.min(k, 8) * 40 + 'ms';
        li.classList.add('bl-yeni');
        k += 1;
      }
    });
    sayi.textContent = uyan.length + ' yazı';
    bos.hidden = uyan.length > 0;
    daha.hidden = uyan.length <= limit;
    diz();
    Konum.ekKaydet('bl', { kat, limit });
  }
  // Pinterest ızgarası: görünen her kart, yüksekliği + ara boşluk kadar 1 px'lik satır kaplar
  function diz() {
    if (!liste.classList.contains('is-hazir')) return;
    const ara = parseFloat(getComputedStyle(liste).getPropertyValue('--bl-ara')) || 0;
    kartlar.forEach((li) => {
      if (!li.hidden) li.style.setProperty('--s', Math.ceil(li.firstElementChild.getBoundingClientRect().height + ara));
    });
  }
  cipler.forEach((c) => c.addEventListener('click', () => {
    kat = c.dataset.kat;
    limit = adet();
    cipler.forEach((x) => x.setAttribute('aria-pressed', String(x === c)));
    uygula(true);
  }));
  ara.addEventListener('input', () => { limit = adet(); uygula(false); });
  daha.addEventListener('click', () => { limit += adet(); uygula(true); });
  kartlar.forEach((li) => { li.hidden = true; });
  cipler.forEach((x) => x.setAttribute('aria-pressed', String(x.dataset.kat === kat)));
  liste.classList.add('is-hazir');
  uygula(true);
  Konum.geriYukle();
  // genişlik ya da yazı tipi değişince kart yükseklikleri yeniden ölçülür
  if ('ResizeObserver' in window) new ResizeObserver(() => diz()).observe(liste);
  if (d.fonts) d.fonts.ready.then(diz);
})();

const yil = $('#yil');
if (yil) yil.textContent = String(new Date().getFullYear());
