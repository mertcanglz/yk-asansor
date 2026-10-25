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

/* ---------- Ekran ölçüsü: kat yüksekliği 100svh (adres çubuğu açılıp kapanınca değişmez) ---------- */
const ekran = { W: 0, H: 0 };
const vhOlc = $('#vhOlc');
function olc() {
  // arka planda açılan sekmede ölçü 0 gelebilir; o zaman makul bir değerle başlanır, ilk resize'da düzelir
  ekran.W = h.clientWidth || innerWidth || 390;
  ekran.H = Math.round(vhOlc ? vhOlc.getBoundingClientRect().height : innerHeight) || innerHeight || 800;
  // hero düzeni: geniş (asansör sağda) ya da dar (asansör üstte) — <head> içindeki kuralla aynı
  h.classList.toggle('hw', innerWidth >= 1024 || (innerWidth >= 760 && innerWidth > innerHeight * 1.1));
}
olc();

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

  /* Telefonda asansör ölçeği: 1. kattaki başlığın üstünde kalan alanı doldurur, 3. katın yazısına binmez.
     Çerez/kampanya kutusu kapanıp yazı aşağı inince yeniden hesaplanır ve asansör yumuşakça büyür. */
  let su = 0, suHedef = 0, yaziSag = 0;
  function hedefSu() {
    const ust1 = $('.hx-h', secs[0]).offsetTop;
    const ust3 = $('.hx-in', secs[2]).firstElementChild.offsetTop;
    // 1. kat: kabinin altı başlığın 18 px üstünde; 3. kat (kuyu dibi): kuyunun dibi yazı kutusunun geçişine yumuşakça girer
    return clamp(Math.min((ust1 - 18 - 30) / 887.6, (ust3 - 10 - 52) / 944), 0.2, ekran.W >= 600 ? 0.5 : 0.36);
  }
  function geometri() {
    genis = h.classList.contains('hw');
    if (genis) {
      su = suHedef = (ekran.H / 900) * 0.86;
      yaziSag = $('.hx-in', secs[0]).getBoundingClientRect().right;
    } else {
      su = suHedef = hedefSu();
    }
    yerlestir();
    // düzen değişince satır içi stilleri sıfırla
    col.style.transform = '';
    secs.forEach((el) => { el.style.transform = ''; el.style.opacity = ''; el.style.visibility = ''; });
    box.style.opacity = '';
    aktifKat = -1;
  }
  function yerlestir() {
    const W = ekran.W;
    const H = ekran.H;
    const s = su;
    const boxH = genis ? H : Math.round((s * 900) / 0.7);
    if (!genis) h.style.setProperty('--lbh', boxH + 'px');
    let cx = W * (genis ? (W >= 1024 ? 0.73 : 0.72) : 0.5);
    // dar masaüstünde kabin yazının üstüne binmesin: yazının sağından en az 40 px uzakta, ekranın içinde kalır
    if (genis) cx = Math.min(Math.max(cx, yaziSag + 40 + 249.3 * s), W - 252.4 * s - 16);
    const X = (u) => cx + (u - 768) * s;
    const U = (px) => 518.7 + px * K;
    const cabW = 692 * K * s;
    const cabH = 885 * K * s;
    g = { W, H, boxH, s, cabW, cabH, worldH: 2700 * s, taban: genis ? 0 : boxH, per: 514.67 * s };
    world.style.height = g.worldH + 'px';
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
    if (!genis) {
      ext.style.left = X(380) + 'px';
      ext.style.width = 776 * s + 'px';
      ext.style.backgroundSize = `${776 * s}px ${g.per}px`;
    }
  }
  // çerez bildirimi ya da kampanya kartı açılıp kapanınca: yazının kayma geçişi (~0,45 sn) bitince yeni ölçek
  let yerT = 0;
  d.addEventListener('yk:yerlesim', () => {
    clearTimeout(yerT);
    yerT = setTimeout(() => { if (!genis) { suHedef = hedefSu(); uyan(); } }, 480);
  });

  function ciz() {
    const st = faz(p);
    const door = p < 0.2 ? st.door * intro : st.door;
    const pos = st.pos;
    const akt = Math.round(pos);
    const kat = KAT[akt];
    const { s, boxH, H } = g;

    // kat rengi kapıdan dolar, zemine çok hafif yansır
    const bg = [14, 16, 18].map((v, i) => Math.round(v + (kat.amb[i] - v) * 0.025 * door)).join(', ');
    if (bg !== sonBg) { h.style.setProperty('--bgc', bg); sonBg = bg; }

    // kamera: telefonda kabin header'ın altında, katlara göre biraz kayar
    let merkez = 450;
    if (!genis) {
      const c1 = 64 + 246 * s - 34 + g.cabH / 2;
      const c23 = 78 + g.cabH / 2;
      const c3 = 52 + g.cabH / 2;
      const cabC = cam >= 1 ? c23 + (c1 - c23) * Math.min(1, cam - 1) : c3 + (c23 - c3) * ssm(cam);
      merkez = ((cabC + 40 * s) * 900) / boxH;
    }
    const at = (q) => { const k0 = Math.floor(q); const k1 = Math.min(2, k0 + 1); return DURAK[k0] + (DURAK[k1] - DURAK[k0]) * (q - k0); };
    const hitch = at(clamp(pos, 0, 2));
    const camHitch = at(clamp(cam, 0, 2));
    const hedef = (boxH / 900) * merkez;
    const cabTopU = hitch - 88.6;
    const top = clamp(hedef - (camHitch - 88.6 + (885 * K) / 2 + 40) * s, boxH - g.worldH - g.taban, 0);
    world.style.transform = `translate3d(0,${top}px,0)`;
    const ropeH = Math.max(0, (cabTopU + 20 - 497) * s + jolt);
    const ropeT = `scaleY(${ropeH / 100})`;
    for (let i = 0; i < ropes.length; i++) ropes[i].style.transform = ropeT;
    cab.style.transform = `translate3d(0,${cabTopU * s + jolt}px,0)`;
    const light = clamp((door - 0.15) / 0.75, 0, 1);
    if (kat.ton !== sonGlowTon) {
      const a = kat.amb.join(', ');
      glow.style.background = `radial-gradient(ellipse at center, rgba(${a}, 1) 0%, rgba(${a}, .375) 45%, rgba(${a}, 0) 70%)`;
      sonGlowTon = kat.ton;
    }
    glow.style.transform = `translate3d(0,${cabTopU * s - g.cabH * 0.1}px,0)`;
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
      const kc = clamp(cam, 0, 1);
      fade.style.opacity = kc.toFixed(3);
      const extTop = boxH - 60;
      const extY = (((top + 1380 * s - extTop) % g.per) + g.per) % g.per;
      ext.style.backgroundPosition = `0 ${extY}px`;
      ext.style.opacity = (0.22 * kc * elOp).toFixed(3);
      // her kat kısa mesafe kayarak solar, sıradaki aşağıdan gelir
      for (let i = 0; i < 3; i++) {
        const dd = p - i;
        const o = dd >= 0 ? 1 - ssm((dd - 0.08) / 0.37) : ssm((dd + 0.55) / 0.35);
        const el = secs[i];
        el.style.transform = `translate3d(0,${-i * H - dd * H * 0.3}px,0)`;
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
    const oncekiPos = faz(p).pos;
    p += (pt - p) * f(masa ? 0.07 : 0.08);
    const st = faz(p);
    cam += (st.pos - cam) * f(genis ? (masa ? 0.05 : 0.06) : 0.1);
    if (su !== suHedef) {
      su = Math.abs(suHedef - su) < 0.0004 ? suHedef : su + (suHedef - su) * f(0.12);
      yerlestir();
    }
    if (introT0 != null && intro < 1) {
      const t = az ? 1 : Math.min(1, (now - introT0) / 2600);
      intro = t * t * (3 - 2 * t);
    }
    // duruş ve kalkış: halat esnemesiyle çok hafif salınım
    const yolda = st.door === 0 && Math.abs(st.pos - Math.round(st.pos)) > 0.002;
    if (yolda) yon = st.pos < oncekiPos ? 1 : -1;
    if (gecis != null && yolda !== gecis && now - jT0 > 450) {
      jT0 = now;
      jAmp = yon * (yolda ? -1.4 : 3.2);
    }
    gecis = yolda;
    const jt = now - jT0;
    jolt = !az && jt < 1400 ? jAmp * Math.exp(-jt / 260) * Math.sin((2 * Math.PI * jt) / 240) : 0;
    const bitti = Math.abs(pt - p) < 0.0015 && Math.abs(st.pos - cam) < 0.002 && (az || jt >= 1400) && (introT0 == null || intro >= 1) && su === suHedef;
    if (bitti) { p = pt; cam = faz(p).pos; jolt = 0; }
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
     Telefonda bunu tarayıcının kendi kat durakları yapar (CSS scroll-snap, .hx-durak): her kaydırma bir kat ilerler,
     hızlı kaydırmada bile katlar atlanmaz. */
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
    if (oturuyor || !genis || mqAz.matches || h.classList.contains('nav-acik')) return;
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
    const gizle = y > 3 * H + 10;
    if (gizle !== kapali) {
      kapali = gizle;
      lift.classList.toggle('is-kapali', gizle);
    }
    uyan();
    if (genis && !oturuyor) {
      clearTimeout(oturT);
      oturT = setTimeout(otur, 380);
    }
  }

  function yenidenOlc() {
    geometri();
    pt = clamp(scrollY / ekran.H, 0, 2);
    p = pt;
    cam = faz(p).pos;
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

/* ---------- Header: açılır menüler (masaüstü) ---------- */
const hdr = $('#hdr');
const Menu = (() => {
  if (!hdr) return { kapat() {} };
  let acik = null;
  const kapat = () => {
    if (!acik) return;
    $('.pill', acik).setAttribute('aria-expanded', 'false');
    $('.mega', acik).hidden = true;
    acik = null;
  };
  const ac = (it) => {
    if (acik === it || !mqMasa.matches) return;
    kapat();
    acik = it;
    $('.pill', it).setAttribute('aria-expanded', 'true');
    $('.mega', it).hidden = false;
  };
  $$('.hdr__item', hdr).forEach((it) => {
    const a = $('.pill', it);
    a.addEventListener('mouseenter', () => ac(it));
    a.addEventListener('focus', () => ac(it));
  });
  $$('.hdr__nav > .pill', hdr).forEach((a) => {
    a.addEventListener('mouseenter', kapat);
    a.addEventListener('focus', kapat);
  });
  hdr.addEventListener('mouseleave', kapat);
  hdr.addEventListener('focusout', (e) => { if (!hdr.contains(e.relatedTarget)) kapat(); });
  d.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !acik) return;
    const a = $('.pill', acik);
    kapat();
    a.focus();
  });
  return { kapat, acikMi: () => !!acik };
})();

/* ---------- Telefon menüsü ---------- */
(() => {
  const nav = $('#mnav');
  const ac = $('#navAc');
  const kap = $('#navKapat');
  if (!nav || !ac) return;
  const goster = (v, odak = true) => {
    nav.hidden = !v;
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
  let sabit = false, sabitP = 0, sonP = 0, ilk = true;
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
    if (h.dataset.kampanya !== durum) {
      h.dataset.kampanya = durum;
      if (acik) h.style.setProperty('--promo-pad', kart.offsetHeight + parseFloat(getComputedStyle(kart).bottom) + 16 + 'px');
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
function kaydirma() {
  const y = scrollY;
  if (Asansor) Asansor.kaydir(y);
  if (hdr) hdr.classList.toggle('is-gecti', y >= 3 * ekran.H - (mqMasa.matches ? 92 : 64));
  if (Menu.acikMi && Menu.acikMi()) Menu.kapat();
  Cerez.kaydirmada();
  Kampanya.guncelle(clamp(y / ekran.H, 0, 2));
  if (Neden && !kareIstegi) kareIstegi = requestAnimationFrame(() => { kareIstegi = 0; Neden.guncelle(scrollY); });
}
addEventListener('scroll', kaydirma, { passive: true });
let boyutT = 0;
addEventListener('resize', () => {
  clearTimeout(boyutT);
  boyutT = setTimeout(() => {
    const W0 = ekran.W, H0 = ekran.H, hw0 = h.classList.contains('hw');
    olc();
    if (W0 !== ekran.W || H0 !== ekran.H || hw0 !== h.classList.contains('hw')) {
      if (Asansor) Asansor.yenidenOlc();
      if (Neden) Neden.olc();
    }
    kaydirma();
  }, 120);
});
kaydirma();

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
  // etiket adımlarındaki ışık yalnızca görünürken akar
  const adimlar = $('#adimlar');
  if (adimlar) new IntersectionObserver((e) => adimlar.classList.toggle('is-gorunur', e[0].isIntersecting)).observe(adimlar);
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

/* ---------- Blog şeridi: oklarla iki kart kayar ---------- */
(() => {
  const ray = $('#blogRay');
  if (!ray) return;
  $$('.blog__nav .rail-btn').forEach((b) => b.addEventListener('click', () => {
    const li = ray.firstElementChild;
    const adim = li ? (li.offsetWidth + 16) * 2 : 816;
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

/* ---------- SSS: aynı anda tek soru açık; masaüstünde ilk soru açık, telefonda hepsi kapalı ---------- */
(() => {
  const sorular = $$('details.faq');
  if (!sorular.length) return;
  // Yanıt yüksekliği yumuşakça açılıp kapanır. Tek açık soru kuralını burada uygularız
  // (tarayıcının name="sss" davranışı diğerlerini animasyonsuz anında kapatırdı).
  sorular.forEach((s) => s.removeAttribute('name'));
  const SURE = 340;
  const egri = 'cubic-bezier(.2, .7, .2, 1)';
  function cevir(s, ac) {
    const a = $('.faq__a', s);
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
  sorular.forEach((s) => {
    $('summary', s).addEventListener('click', (e) => {
      e.preventDefault();
      const ac = !s.classList.contains('is-acik');
      if (ac) sorular.forEach((o) => { if (o !== s && o.classList.contains('is-acik')) cevir(o, false); });
      cevir(s, ac);
    });
  });
  if (mqMasa.matches) {
    sorular[0].open = true;
    sorular[0].classList.add('is-acik');
  }
})();

/* ---------- Footer bağlantı grupları: masaüstünde hep açık ---------- */
(() => {
  const gruplar = $$('details.fgrp');
  const uygula = () => gruplar.forEach((g) => { g.open = mqMasa.matches; });
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

const yil = $('#yil');
if (yil) yil.textContent = String(new Date().getFullYear());
