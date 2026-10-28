// Telefon alanı: 11 haneli Türk cep numarası maskesi ve doğrulaması.
// Kurallar ve kabul testleri: docs/telefon-alani.md
const ONEK = '05';
const TAM = 11;
const OBEK = [1, 3, 3, 2, 2];

function rakamlar(ham) {
  let d = ham.replace(/\D+/g, '');
  if (d.startsWith('0090')) d = d.slice(4);
  else if (d.startsWith('90') && d.length > 10) d = d.slice(2);
  if (d.startsWith('0')) d = d.slice(1);
  if (d.startsWith('5')) d = d.slice(1);
  return (ONEK + d).slice(0, TAM);
}

function bicimle(d) {
  const parca = [];
  let i = 0;
  for (const n of OBEK) {
    if (i >= d.length) break;
    parca.push(d.slice(i, i + n));
    i += n;
  }
  return parca.join(' ');
}

function imlecKonumu(metin, n) {
  if (n <= ONEK.length) return bicimle(ONEK).length;
  let say = 0;
  for (let i = 0; i < metin.length; i += 1) {
    if (metin[i] >= '0' && metin[i] <= '9') {
      say += 1;
      if (say === n) return i + 1;
    }
  }
  return metin.length;
}

export const tamMi = (ham) => rakamlar(ham).length === TAM;

export function baslat() {
  document.querySelectorAll('[data-dogrula="telefon"]').forEach((alan) => {
    const uyari = document.getElementById(alan.getAttribute('aria-describedby'));
    const uyariGoster = (goster) => {
      if (uyari) uyari.hidden = !goster;
      if (goster) alan.setAttribute('aria-invalid', 'true');
      else alan.removeAttribute('aria-invalid');
    };
    const denetle = () => {
      if (!alan.value.trim() || tamMi(alan.value)) { alan.setCustomValidity(''); return; }
      const yalnizOnek = rakamlar(alan.value).length <= ONEK.length;
      alan.setCustomValidity(yalnizOnek ? 'Telefon numaranızı girin.' : 'Telefon numarasını eksiksiz girin.');
    };
    const yaz = (sonrakiRakam) => {
      const d = rakamlar(alan.value);
      alan.value = bicimle(d);
      if (sonrakiRakam != null) {
        const k = imlecKonumu(alan.value, d.length - sonrakiRakam);
        alan.setSelectionRange(k, k);
      }
      denetle();
    };
    const onekiKur = () => { if (!alan.value.trim()) yaz(0); };
    alan.addEventListener('focus', onekiKur);
    alan.addEventListener('pointerdown', onekiKur);
    alan.addEventListener('input', () => {
      const sonrasi = alan.value.slice(alan.selectionStart || 0).replace(/\D+/g, '').length;
      yaz(sonrasi);
      if (uyari && !uyari.hidden && tamMi(alan.value)) uyariGoster(false);
    });
    /* İmleç ve seçim önekin içine giremez. */
    const onekUz = bicimle(ONEK).length;
    const imleciDuzelt = () => {
      if (!alan.value) return;
      const a = alan.selectionStart || 0, b = alan.selectionEnd || 0;
      if (a < onekUz || b < onekUz) alan.setSelectionRange(Math.max(a, onekUz), Math.max(b, onekUz));
    };
    alan.addEventListener('select', imleciDuzelt);
    alan.addEventListener('click', imleciDuzelt);
    alan.addEventListener('keyup', imleciDuzelt);
    /* Önek silinemez; önekin içine yazılamaz. */
    alan.addEventListener('keydown', (o) => {
      const k = alan.selectionStart || 0;
      if (o.key && o.key.length === 1 && !o.ctrlKey && !o.metaKey && !o.altKey) { imleciDuzelt(); return; }
      if (o.key !== 'Backspace' && o.key !== 'Delete') return;
      if (k <= onekUz && alan.selectionEnd === k) { o.preventDefault(); return; }
      if (k < onekUz) alan.setSelectionRange(onekUz, Math.max(alan.selectionEnd || 0, onekUz));
    });
    /* Yapıştırma: tam numara alanın yerine geçer, kısa parça imlece eklenir. */
    alan.addEventListener('paste', (o) => {
      const t = (o.clipboardData && o.clipboardData.getData('text')) || '';
      const pd = t.replace(/\D+/g, '');
      o.preventDefault();
      if (!pd) return;
      if (pd.length >= 10) {
        alan.value = bicimle(rakamlar(t));
        alan.setSelectionRange(alan.value.length, alan.value.length);
        denetle();
      } else {
        if (!alan.value.trim()) alan.value = bicimle(ONEK);
        imleciDuzelt();
        const a = alan.selectionStart || 0, b = alan.selectionEnd || a;
        alan.value = alan.value.slice(0, a) + pd + alan.value.slice(b);
        yaz(alan.value.slice(a + pd.length).replace(/\D+/g, '').length);
      }
      if (uyari && !uyari.hidden && tamMi(alan.value)) uyariGoster(false);
    });
    alan.addEventListener('blur', () => {
      if (rakamlar(alan.value).length <= ONEK.length) { alan.value = ''; uyariGoster(false); }
      else uyariGoster(!tamMi(alan.value));
      denetle();
    });
    alan.addEventListener('invalid', () => { if (alan.value.trim()) uyariGoster(true); });
    denetle();
  });
}
