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
- Sağ alttaki turuncu WhatsApp butonu **tüm sayfalarda** aynı görünümde ve sabit (`position: fixed`).
  Kampanya kutusu yalnızca ana sayfada.
- Görsellere anlamlı `alt` metni yaz; başlık hiyerarşisini (h1 → h2 → h3) koru.
- Her sayfada `<title>` ve `<meta name="description">` Türkçe ve işletmeye özgü olsun (SEO).

## Yasal sayfalar, form ve çerezler (KVKK)

Sitede **iletişim/teklif formu** (ad soyad, e-posta, telefon), **Google Analytics** ve
**Meta Pixel** kullanılacak. Bu yüzden aşağıdakilerin hepsi zorunlu, siteye eklenecek:

- **Sayfalar** (footer'dan bağlanır; metinlerin son hâlini bir avukata kontrol ettir):
  - `kvkk-aydinlatma.html`: KVKK Aydınlatma Metni (veri sorumlusu, işlenen veriler, amaç,
    hukuki sebep, aktarım — GA ve Meta yurt dışına aktarım dahil —, saklama süresi, haklar, başvuru yolu)
  - `cerez-politikasi.html`: Çerez Politikası (zorunlu / analiz / pazarlama çerezleri tablosu,
    süreleri, sağlayıcıları, tercih nasıl değiştirilir)
  - `gizlilik-politikasi.html`: Gizlilik Politikası
  - `kullanim-sartlari.html`: Kullanım Şartları
- **Form**: gönder butonunun yanında aydınlatma metni bağlantısı; pazarlama iletişimi
  (SMS/e-posta) için ayrı, işaretsiz gelen bir açık rıza kutusu. Ön-işaretli kutu yok.
- **Çerez onay kutusu** (tasarımı tuvalde, B5-Hero-YeniKabin): "Reddet" ve "Kabul et" eşit
  görünürlükte; "Tercihler" ile zorunlu (kapatılamaz) / analiz / pazarlama ayrı ayrı seçilir,
  analiz ve pazarlama varsayılan kapalı. Seçim tarayıcıda saklanır (180 gün, her girişte
  sorulmaz), footer'daki "Çerez tercihleri" bağlantısı ve sol alttaki küçük çerez butonu ile
  tekrar açılır. KVKK Çerez Rehberi gereği: "Kabul et" öne çıkarılmaz (butonlar aynı renk,
  boyut, punto); "siteyi kullanarak kabul etmiş sayılırsınız" gibi örtülü rıza ifadesi kullanılmaz.
- **Onaydan önce GA ve Meta Pixel yüklenmez**: Google Consent Mode v2 varsayılanı "denied";
  analiz onayıyla GA, pazarlama onayıyla Meta Pixel yüklenir/etkinleşir.
- **Yazı tipleri sitenin kendisinden sunulur** (Google Fonts bağlantısı yok; IP yurt dışına gitmesin).

## İşletme bilgileri (doldurulacak)

Aşağıdaki `TODO` alanları sitede yer tutucu olarak duruyor. Kullanıcı bilgi verdikçe
hem buraya hem siteye işle:

- Firma adı: YK Asansör (marka adı kesin değil, marka tescili yok)
- Resmi bilgiler henüz yok (vergi levhası, ticari unvan, MERSİS, vergi no, KEP). Yasal sayfalarda
  sarı vurgulu `<span class="ph">[...]</span>` yer tutucu olarak duruyor; bilgi gelince hepsini
  doldur (`grep -n 'class="ph"' *.html`). Yasal metinlerde marka yerine “İşletme” tanımı kullanılır.
- Tasarım: Claude Design'daki "YK Asansör Hero" projesinin **A grubu** kullanılacak; fotoğrafları
  kullanıcı sonra üretip iletecek.
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
- Hizmet bölgesi: Türkiye geneli; SEO için yakın bölgeler öne çıkar (Sancaktepe, Samandıra,
  Yenidoğan, Sarıgazi, Sultanbeyli). Bölge adları özellikle SSS yanıtlarında ve blog yazılarında
  geçer ("Sancaktepe asansör bakım" gibi aramalar); "Türkiye geneli" bunların gölgesinde kalmasın.
- Rakamlar şeridi (kullanıcı verdi): 10+ yıl ekip tecrübesi, 30 dk ortalama arıza müdahalesi,
  500+ asansör montajı.
- SSS: yanıtlar düz metin olarak sayfada, marka adı ve bölgeler doğal geçer; `FAQPage`
  yapılandırılmış verisi (JSON-LD) eklenir ki arama motorları ve yapay zekâ asistanları alıntılasın.
- Ana sayfa sırası: hero (3 kat) → asansör sistemleri → neden YK Asansör → etiket bölümü →
  rakamlar → kabin çözümleri → bakım paketleri → blog → SSS → footer (hızlı teklif formu:
  ad soyad, telefon, hizmet zorunlu). "Teklif alın" butonları detaylı form açar.
  Header'daki "Yeşil etiket" → `yesil-etiket.html`; "Etiketler ne anlama gelir?" → ana sayfadaki `#etiket`.
- Telefon: 0543 542 86 75 (sitede "0 (543) 542 86 75", bağlantı `tel:+905435428675`)
- WhatsApp: TODO
- E-posta: TODO
- Adres: TODO (açık adres metni bekleniyor). Google İşletme Profili bağlantısı:
  https://share.google/9scsSjWYzQAXmW9uN — footer'daki adres buna bağlanır (yeni sekmede).
- Kuruluş yılı / deneyim: TODO
- Logo ve marka renkleri: TODO (şu an geçici lacivert + turuncu)
