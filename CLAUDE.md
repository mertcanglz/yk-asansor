# YK Asansör — Web Sitesi

Bu repo, **YK Asansör** işletmesinin tanıtım web sitesidir. Site sahibi projeyi çoğunlukla
**telefondan, Claude Code bulut oturumu (claude.ai/code)** üzerinden yönetir. Bu yüzden:

- Kullanıcıyla **Türkçe** konuş. Site içeriği de Türkçe.
- Değişiklikleri küçük ve anlaşılır tut; her işten sonra kısa bir Türkçe özet ver.
- İş bitince değişiklikleri commit'le ve push'la (bulut oturumu kendi dalında çalışır;
  kullanıcı isterse PR açıp `main`'e birleştir). `main`'e gelen her push siteyi otomatik yayınlar.

## Teknoloji

- **Derleme yok**: saf HTML + CSS + JavaScript. npm, framework veya build adımı ekleme
  (kullanıcı açıkça istemedikçe). Böylece bulut oturumunda kurulum gerekmez.
- Yayın: GitHub Pages, "Deploy from a branch" (main, / kök) ile otomatik. Workflow dosyası ekleme.
- Yerel önizleme: `python3 -m http.server 8080` → http://localhost:8080

## Dosya yapısı

```
index.html            Ana sayfa (tek sayfa: hero, hizmetler, hakkımızda, iletişim)
assets/css/style.css  Tüm stiller; renkler/fontlar en üstteki :root değişkenlerinde
assets/js/main.js     Mobil menü ve küçük etkileşimler
assets/img/           Görseller (logo, fotoğraflar) — web için sıkıştırılmış .jpg/.webp, < 300 KB
```

Yeni sayfa gerekirse kök dizine `hizmetler.html` gibi ekle, aynı header/footer'ı kopyala
ve tüm sayfalardaki menüyü güncelle.

## Tasarım kuralları

- **Önce mobil**: site önce telefonda iyi görünmeli (360px genişlikte test et), sonra masaüstü.
- Renk ve font değişiklikleri yalnızca `style.css` içindeki `:root` değişkenlerinden yapılır.
- Telefon numarası tıklanınca arama yapmalı (`tel:`), WhatsApp butonu `https://wa.me/90XXXXXXXXXX`.
- Görsellere anlamlı `alt` metni yaz; başlık hiyerarşisini (h1 → h2 → h3) koru.
- Her sayfada `<title>` ve `<meta name="description">` Türkçe ve işletmeye özgü olsun (SEO).

## İşletme bilgileri (doldurulacak)

Aşağıdaki `TODO` alanları sitede yer tutucu olarak duruyor. Kullanıcı bilgi verdikçe
hem buraya hem siteye işle:

- Firma adı: YK Asansör
- Hizmetler (kullanıcı onayladı; referans: gunesasansor.com.tr ile aynı kapsam):
  - Yeni asansör montajı (projelendirme dahil)
  - Periyodik bakım sözleşmesi (aylık bakım)
  - Modernizasyon ve revizyon
  - 7/24 acil arıza ve teknik destek
  - Genel temizlik ve muayene servisi
  - Yeşil etiket / A tipi muayene hazırlığı (sitede ayrı bilgilendirme bölümü olacak)
- Asansör sistemleri: dişli, dişlisiz, hidrolik, yük, lift (villa/engelli), araç,
  yürüyen merdiven, makine dairesiz (monospace)
- Kabin çözümleri: panoramik cam, rezidans ve yolcu, sedye/medikal, yük ve araç
- Hizmet bölgesi / şehir: TODO
- Telefon: TODO
- WhatsApp: TODO
- E-posta: TODO
- Adres: TODO
- Kuruluş yılı / deneyim: TODO
- Logo ve marka renkleri: TODO (şu an geçici lacivert + turuncu)
