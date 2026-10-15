# Telefon alanı: 11 haneli Türk cep numarası maskesi ve doğrulaması

Sitedeki **tüm** telefon alanları (teklif formu ve her sayfanın footer'ındaki hızlı teklif formu)
bu davranışla çalışır. Kaynak: kullanıcının Akkent Teknik sitesinde canlıda çalışan sistem.
Tasarım tuvalinde (Onaylanan sayfalar) 12 çerçevede uygulandı: `telAlan()` yöntemi.

## Kurallar

1. **Biçim:** `0 5XX XXX XX XX`, toplam 11 rakam, öbekler 1-3-3-2-2. Boşlukları sistem koyar.
2. **Sabit önek "0 5":** Boş alana tıklanınca/odaklanınca `0 5` yazılır, imleç arkasına konur.
   Önek silinemez (imleç önekin içindeyken Backspace/Delete çalışmaz).
   **Önekin içine ya da başına yazılamaz (2026-10-15 düzeltmesi):** imleç/seçim hiçbir zaman
   `0 5`in içine giremez. Tıklama, dokunma ve ok tuşlarında (`select`/`click`/`keyup`) ve yazılabilir
   bir tuşa basıldığında (`keydown`) imleç önekin arkasına alınır. Seçim öneki de kapsıyorsa yalnızca
   önekten sonraki kısım değişir.
3. **Yalnızca rakam;** mobilde rakam klavyesi (`inputmode="numeric"`).
4. **Yapıştırma kalıba oturur** (`paste` olayında varsayılan engellenir, kendimiz yerleştiririz:
   10+ rakamlı tam numara alanın yerine geçer; kısa parça imlecin olduğu yere, önekin arkasına eklenir): `+90 538 985 27 56`, `0090 538…`, `90538…`, `0538…`, `538…`,
   `(0538) 985-27-56` → `0 538 985 27 56`. Fazla rakam 11'de kesilir.
5. **İmleç korunur** (sondan sayılarak); ortadan silip yazınca sona zıplamaz.
6. **Eksik numara gönderilemez:** boşsa `required` uyarısı; yalnızca `0 5` ise
   "Telefon numaranızı girin."; eksikse "Telefon numarasını eksiksiz girin."
   (`setCustomValidity` + gönderimde `form.reportValidity()`).
7. **Alan yanı uyarısı:** eksik numarayla alandan çıkılırsa ya da gönderilmeye çalışılırsa
   kırmızı "Numara eksik" yazısı + `aria-invalid="true"`; numara tamamlanınca kalkar.
8. **Hiç doldurulmadıysa temizle:** yalnızca `0 5` ile çıkılırsa alan boşaltılır, uyarı yok.
9. **Sunucu tarafı da doğrular:** rakam dışı her şey atılır, sonuç `^05\d{9}$` olmalı; değilse
   "Telefon numarası geçersiz." (JSON'da HTTP 422). E-postada numara `0 538 985 27 56` biçiminde.
   Not: formlar Alastyr hosting'deki PHP betiğiyle kurumsal e-postaya gider; bu kontrol o betikte yapılır.
10. **Erişilebilirlik:** etiket alana bağlı; uyarı `role="alert"`, alandan `aria-describedby` ile işaretli.
    Sayfada birden fazla form varsa her telefon alanının `id`'si ve uyarı öğesi kendine ait olmalı.

## HTML

```html
<label for="f-tel">Telefon</label>
<input id="f-tel" name="telefon" type="tel" autocomplete="tel" inputmode="numeric"
       placeholder="0 5__ ___ __ __" required maxlength="15"
       data-dogrula="telefon" aria-describedby="f-tel-uyari">
<span class="form__uyari" id="f-tel-uyari" role="alert" hidden>Numara eksik</span>
```

## JavaScript (`assets/js/telefon.js` olarak eklenecek; sayfa yüklenince `baslat()`)

```js
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
    /* Imlec ve secim onegin icine giremez. */
    const onekUz = bicimle(ONEK).length;
    const imleciDuzelt = () => {
      if (!alan.value) return;
      const a = alan.selectionStart || 0, b = alan.selectionEnd || 0;
      if (a < onekUz || b < onekUz) alan.setSelectionRange(Math.max(a, onekUz), Math.max(b, onekUz));
    };
    alan.addEventListener('select', imleciDuzelt);
    alan.addEventListener('click', imleciDuzelt);
    alan.addEventListener('keyup', imleciDuzelt);
    /* Onek silinemez; onegin icine yazilamaz. */
    alan.addEventListener('keydown', (o) => {
      const k = alan.selectionStart || 0;
      if (o.key && o.key.length === 1 && !o.ctrlKey && !o.metaKey && !o.altKey) { imleciDuzelt(); return; }
      if (o.key !== 'Backspace' && o.key !== 'Delete') return;
      if (k <= onekUz && alan.selectionEnd === k) { o.preventDefault(); return; }
      if (k < onekUz) alan.setSelectionRange(onekUz, Math.max(alan.selectionEnd || 0, onekUz));
    });
    /* Yapistirma: tam numara alanin yerine gecer, kisa parca imlece eklenir. */
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
```

## Kabul testleri (siteye uygulandıktan sonra tarayıcıda tek tek dene)

1. Boş alana tıkla → `0 5`, imleç sonda.
2. `38985275 6` yaz → `0 538 985 27 56`; 12. rakam yazılamaz.
3. `+90 538 985 27 56` ve `0538 985 2756` yapıştır → ikisi de `0 538 985 27 56`.
4. `0 538 985 2` iken gönder → gitmez, "Telefon numarasını eksiksiz girin." + "Numara eksik"; tamamlayınca kalkar.
5. Alana girip yazmadan çık → alan boşalır, uyarı yok.
6. Ortadan rakam sil/yaz → imleç yerinde kalır.
7. Önekin içindeyken Backspace → `0 5` silinmez.
8. Sunucuya `telefon=12345` gönder → reddedilir (422).
9. Telefonda alana dokun → rakam klavyesi açılır.
10. İmleci `0` ile `5` arasına ya da en başa koyup rakam yaz → rakam önekin arkasına girer, önek bozulmaz.
11. Tümünü seç (öneki de kapsayan) ve rakam yaz → `0 5` korunur, yalnızca sonrası değişir.
12. `0 5` varken `+90 538 985 27 56` yapıştır → `0 538 985 27 56` (önek iki kez eklenmez).
