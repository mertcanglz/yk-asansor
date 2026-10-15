# YK Asansör — Web Sitesi

Bu repo, **YK Asansör** işletmesinin tanıtım web sitesidir. Site sahibi projeyi çoğunlukla
**telefondan, Claude Code bulut oturumu (claude.ai/code)** üzerinden yönetir. Bu yüzden:

- Kullanıcıyla **Türkçe** konuş. Site içeriği de Türkçe.
- Değişiklikleri küçük ve anlaşılır tut; her işten sonra kısa bir Türkçe özet ver.
- İş bitince değişiklikleri commit'le ve push'la (bulut oturumu kendi dalında çalışır;
  kullanıcı isterse PR açıp `main`'e birleştir). Site şu an hiçbir yere otomatik yayınlanmıyor (bkz. Yayın).

## Teknoloji

- **Derleme yok**: saf HTML + CSS + JavaScript. npm, framework veya build adımı ekleme
  (kullanıcı açıkça istemedikçe). Böylece bulut oturumunda kurulum gerekmez.
- Yayın: GitHub Pages kullanılmaz. Site bitince deneme için Claude geçici bir adreste yayınlar;
  onaylanırsa işletmenin kendi hosting'i (Alastyr) ve alan adıyla yayınlanır.
- Formlar: Alastyr hosting'de çalışan küçük bir PHP betiğiyle kurumsal e-postaya gönderilir (SMTP).
  Sunucu tarafı doğrulama (ör. telefon `^05\d{9}$`) bu betikte yapılır. Derleme yok kuralı geçerli;
  PHP yalnızca form gönderimi için. Kurumsal e-posta adresi: TODO (marka adı kesinleşince).
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
- Telefon numarası tıklanınca arama yapmalı (`tel:`), WhatsApp butonu `https://wa.me/905435428675` (iletişim numarasıyla aynı).
- Sağ alttaki turuncu WhatsApp butonu **tüm sayfalarda** aynı görünümde ve sabit (`position: fixed`);
  tek istisna teklif formu sayfası (`teklif-formu.html`), orada WhatsApp butonu yok.
  Kampanya kutusu yalnızca ana sayfada.
- **Mobil hero, koda çevirirken** (onaylı tasarım: tuvalde "Onaylanan sayfalar" → "Ana sayfa — mobil"):
  hero metni ekranın altına yaslı; butonların altında şimdilik sabit bir boşluk var (tuvalde 120 px).
  Sitede bu boşluk sabit px olmasın, telefona göre hesaplansın: WhatsApp butonu alanı
  (alt 16 px + 56 px) + `env(safe-area-inset-bottom)` + küçük pay. Çerez bildirimi açıkken
  bildirimin gerçek yüksekliği kadar artar. Hero yüksekliği `100vh` değil `100svh`/`100dvh`
  olsun (adres çubuğu butonları örtmesin); 360 px genişlik ve kısa ekranlarda (≤ 720 px) test et.
- **Başlıklarda anlamsız satır kırılması olmaz:** iki parçalı başlıklarda (ör. blog: "X: Y?") ":" sonrası
  alt satıra geçer, her parça `text-wrap: balance` ile dengeli kırılır; tek kelime alt satırda kalmaz.
  Ekrana sığan başlık zorla iki satıra bölünmez: iki parçalı başlıkta (düz + italik) parçalar
  `inline-block` + `nowrap`; sığarsa tek satır, sığmazsa yalnızca iki parçanın arasından kırılır.
  Blog yazı başlığının genişliği yazı sütununu (848 px) geçmez; yazı kapağı görselsiz ve ortalıdır.
- **Genel bağlantı hover rengi kartları ezmez:** `a:hover` yerine `a:where(:hover)` kullan; açık zemindeki
  kart/bağlantılar (kabin kartları, blog kartları, koyu metin bağlantıları) hover ve dokunmada beyaza dönmesin.
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
- **Telefon alanları**: tüm formlarda 11 haneli TR cep maskesi ve doğrulaması — kurallar, kod ve
  kabul testleri `docs/telefon-alani.md` dosyasında; birebir uygula.
- **Form**: gönder butonunun yanında aydınlatma metni bağlantısı. Pazarlama iletişimi (SMS/e-posta
  kampanya duyurusu) yapılmayacak; bu yüzden formlarda pazarlama izni / açık rıza kutusu yok
  (kullanıcı kararı). İleride ticari ileti gönderilirse ayrı, işaretsiz bir onay kutusu eklenmeli.
- **Çerez onay kutusu** (tasarımı tuvalde, "Ana sayfa — masaüstü" ve "Ana sayfa — mobil"): "Reddet" ve "Kabul et" eşit
  görünürlükte; "Tercihler" ile zorunlu (kapatılamaz) / analiz / pazarlama ayrı ayrı seçilir,
  analiz ve pazarlama varsayılan kapalı. Seçim tarayıcıda saklanır (180 gün, her girişte
  sorulmaz), footer'daki "Çerez tercihleri" bağlantısı ve sol alttaki küçük çerez butonu ile
  tekrar açılır (telefonda seçim yapılınca küçük çerez butonu gösterilmez, yalnızca footer bağlantısı). KVKK Çerez Rehberi gereği: "Kabul et" öne çıkarılmaz (butonlar aynı renk,
  boyut, punto); "siteyi kullanarak kabul etmiş sayılırsınız" gibi örtülü rıza ifadesi kullanılmaz.
- **Onaydan önce GA ve Meta Pixel yüklenmez**: Google Consent Mode v2 varsayılanı "denied";
  analiz onayıyla GA, pazarlama onayıyla Meta Pixel yüklenir/etkinleşir.
- **Yazı tipleri sitenin kendisinden sunulur** (Google Fonts bağlantısı yok; IP yurt dışına gitmesin):
  Manrope (değişken, 300–600) + Newsreader italik 500, `woff2`, Türkçe karakterler için latin + latin-ext
  alt kümesi, `font-display: swap`, ana yazı tipi `<link rel="preload">`. Toplam ~100 KB hedef.

## İşletme bilgileri (doldurulacak)

Aşağıdaki `TODO` alanları sitede yer tutucu olarak duruyor. Kullanıcı bilgi verdikçe
hem buraya hem siteye işle:

- Firma adı: YK Asansör (çalışma adı; marka adı henüz kesinleşmedi — kesinleşince sitedeki
  tüm geçişleri, `<title>`/meta açıklamaları ve yasal metinleri güncelle)
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
- Hizmet bölgesi: Türkiye geneli. Sayfa metinlerinde (giriş metinleri, SSS, meta açıklamaları)
  ilçe/mahalle adı ve "X merkezli ekibimiz" kalıbı kullanılmaz; hedef kitleyi daraltıyor (kullanıcı kararı).
  Yerel SEO ("Sancaktepe asansör bakım" gibi aramalar) yalnızca bu bölgeler için ayrı, özgün blog
  yazılarıyla yapılır (Sancaktepe, Samandıra, Yenidoğan, Sarıgazi, Sultanbeyli). Adres yalnızca footer,
  iletişim ve yasal metinlerde.
- Rakamlar şeridi (kullanıcı verdi): 10+ yıl ekip tecrübesi, 30 dk ortalama arıza müdahalesi,
  500+ asansör montajı.
- SSS: yanıtlar düz metin olarak sayfada (mobilde tüm sayfalarda açılışta hepsi kapalı akordeon, aynı anda tek soru açık — biri açılınca önceki kapanır, `<details name="sss">`; kapalıyken de
  HTML'de dursun, `<details>`/`<summary>` ile — JS ile sonradan eklenmesin), marka adı doğal geçer (bölge adı yok); `FAQPage`
  yapılandırılmış verisi (JSON-LD) eklenir ki arama motorları ve yapay zekâ asistanları alıntılasın.
- Ana sayfa sırası: hero (3 kat) → asansör sistemleri → neden YK Asansör → etiket bölümü →
  rakamlar → kabin çözümleri → bakım paketleri → blog → SSS → footer (hızlı teklif formu:
  ad soyad, telefon, hizmet zorunlu). "Teklif alın" butonları detaylı form açar.
  Header'daki "Yeşil etiket" → `yesil-etiket.html`; "Etiketler ne anlama gelir?" → ana sayfadaki `#etiket`.
- Kampanyalar: (1) bakım sözleşmelerinde ilk keşif ve 3 lt ray yağı değişimi ücretsiz;
  (2) referans kampanyası: yeni bir apartman yönlendiren mevcut müşteriye bir sonraki bakım
  faturasında indirim (sitede oran yazılmaz). Ana sayfada bakım paketlerinin altında yalnızca
  bilgilendirme bandı (3 adım, buton yok).
  Teklif formunda isteğe bağlı, göze batmayan "Sizi yönlendiren müşterimiz" alanı var;
- Telefon: 0543 542 86 75 (sitede "0 (543) 542 86 75", bağlantı `tel:+905435428675`)
- WhatsApp: iletişim numarasıyla aynı, 0543 542 86 75 (`https://wa.me/905435428675`)
- E-posta: TODO — marka adı kesinleşince belirlenecek kurumsal adres; hem sitedeki iletişim
  e-postası hem form gönderimlerinin gideceği adres bu olacak (şimdilik `[E-POSTA ADRESİ]` yer tutucusu).
- Adres: Abdurrahman Gazi Mah. Altınordu Cad. No: 38-40/A, Sancaktepe / İstanbul
  (Google İşletme Profili ve Instagram'daki adresle aynı). Google İşletme Profili bağlantısı:
  https://share.google/k3h68ZxTo8hSalAoL (tek doğru konum bağlantısı) — footer'daki adres ve
  iletişim sayfasındaki bağlantılar buna gider (yeni sekmede). İletişim sayfasında ekran genişliğinde
  gömülü Google Haritalar olacak; KVKK gereği harita ziyaretçi "Haritayı göster"e basınca yüklenir.
- Kuruluş yılı / deneyim: TODO
- Logo ve marka renkleri: TODO (şu an geçici lacivert + turuncu)
