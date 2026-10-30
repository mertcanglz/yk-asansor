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
  Sunucu tarafı doğrulama (ör. telefon `^05\d{9}$`) bu betikte yapılır. Betik adı `form-gonder.php`
  (henüz yazılmadı); formlar `fetch` ile gönderir, başarıda JSON `{"ok": true}`, hatada HTTP 422 + `{"hata": "…"}` bekler. Derleme yok kuralı geçerli;
  PHP yalnızca form gönderimi için. Kurumsal e-posta adresi: TODO (marka adı kesinleşince).
- Yerel önizleme: `python3 -m http.server 8080` → http://localhost:8080

## Dosya yapısı

```
index.html            Ana sayfa (hero asansörü, bölümler, footer + hızlı teklif formu)
hizmetler.html        Hizmetler: tüm hizmetler tek sayfada (gruplar + SSS)
asansor-montaji.html  Hizmet şablonu (Yeni asansör montajı). Aynı yapıda: asansor-bakimi.html (paketler ve kampanyalar),
                      asansor-modernizasyonu.html, asansor-ariza-servisi.html (ana buton arama; mahsur kalma adımları),
                      asansor-temizlik-muayene.html
asansor-sistemleri.html  Asansör sistemleri: gruplu katalog (yolcu, yük ve araç, özel çözümler) + seçim ölçütleri + SSS
dislili-asansor.html  Sistem şablonu (Dişlili asansör). Aynı yapıda: dislisiz-asansor.html, hidrolik-asansor.html,
                      makine-dairesiz-asansor.html, yuk-asansoru.html (kapakta şimdilik dikey yük-araç kabini fotoğrafı),
                      arac-asansoru.html, villa-engelli-asansoru.html, yuruyen-merdiven.html. Teknik değerler "tipik" notuyla
yesil-etiket.html     Yeşil etiket bilgi sayfası: etiket renkleri, süreler (telefonda kart), yeşil etikete geçiş, yönetmelik, SSS
iletisim.html         İletişim: kartlar, sosyal medya, mesaj formu (adsoyad, telefon, eposta, konu, mesaj → form-gonder.php);
                      harita masaüstünde "Haritayı göster"e basınca gömülür (KVKK), telefonda yalnızca Google Haritalar bağlantısı
teklif-formu.html     Reklam açılış sayfası (noindex): detaylı teklif formu; WhatsApp butonu ve footer'daki hızlı form yok.
                      Alanlar: hizmet, adsoyad, telefon, donus (Telefonla/E-postayla), eposta (e-postayla dönüşte zorunlu),
                      referans, not, kaynak, website (bal tuzağı, doluysa gönderme) → form-gonder.php
blog.html             Blog listesi: kartlar HTML'de yazılı (SEO); JS ile kategori süzgeci, arama, "daha fazla" (telefonda 8, geniş
                      ekranda 16) ve sıra sıra dizilen Pinterest ızgarası. Yeni yazı yayınlanınca kartı buraya da eklenir
kvkk-aydinlatma.html, cerez-politikasi.html, gizlilik-politikasi.html, kullanim-sartlari.html
                      Yasal sayfalar: ortalı koyu başlık + sade metin; [KÖŞELİ PARANTEZ] yer tutucular avukat kontrolünde dolar.
                      Çerez tablosu sitenin gerçekte kullandığı kayıtlarla aynı tutulur (yeni çerez/depolama eklenirse buraya da yaz)
assets/css/style.css  Tüm stiller; renkler/fontlar en üstteki :root değişkenlerinde
assets/js/main.js     Etkileşimler (modül): hero asansörü, menüler, çerez onayı + GA/Meta yükleme
                      (kimlikler dosyanın başında GA_ID / META_PIXEL_ID: TODO), kampanya, form, animasyonlar
assets/js/telefon.js  Telefon alanı maskesi (docs/telefon-alani.md ile birebir)
assets/fonts/         Manrope + Newsreader italik 500 (woff2, latin + latin-ext)
assets/img/           Görseller (logo, fotoğraflar) — web için sıkıştırılmış .jpg/.webp, < 300 KB
assets/img/asansor/   Hero asansörü: kuyu + kapı kareleri (kare-692 geniş ekran, kare-400 telefon; 3 kat × 41 kare)
assets/img/kabin/, hizmetler/, sistemler/  Fotoğraflar; medya/ klasöründeki asıllarından üretilir
                      (WebP, ad-<genişlik>.webp, srcset ile; medya/ repoya girmez)
blog/                 Blog yazıları (ör. blog/asansor-etiket-renkleri.html); şablon örneği blog/sancaktepe-asansor.html.
                      Yazı, taslağın yalnızca "## Metin" bölümünden üretilir (editör notları ve doğrulama yayınlanmaz;
                      doldurulmamış [[İSTEĞE BAĞLI]] satırları çıkarılır). Yeni yazı yayınlanınca aynı işte
                      ana sayfadaki blog şeridi (en yeni 12 yazı) ve blog.html listesi de güncellenir;
                      kartlar HTML'de yazılı durur (SEO), JS ile sonradan çekilmez. `<title>` en çok 60, meta açıklama
                      en çok 160 karakter olmalı (taslaktaki sayılar elle yazıldığı için yayından önce sayılarak denetlenir)
docs/                 Proje belgeleri (yayınlanmaz): SEO yol haritası, blog taslakları, kurallar
```

Yeni sayfa gerekirse kök dizine `hizmetler.html` gibi ekle, aynı header/footer'ı kopyala
ve tüm sayfalardaki menüyü güncelle. **İstisna: blog yazıları `blog/` klasörüne** konur
(kalıcı adres yapısı, yayından sonra değiştirilmez); bu sayfalarda yollar `../assets/...` olur.
Kodlamadan önce blog taslakları `docs/blog-taslaklari/` altında Markdown olarak yazılır, onaylanınca
`blog/` içinde HTML sayfasına çevrilir. SEO kuralları ve sayfa/URL planı: `docs/seo-yol-haritasi.md`.

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
  (alt 16 px + 56 px) + `env(safe-area-inset-bottom)` + küçük pay (16 px). Üç katın yazısı da alta yaslı.
  Çerez bildirimi ya da kampanya kartı açıkken boşluk onların gerçek yüksekliği kadar artar; kapatılınca kalkar.
  Telefonda asansörün boyu kat kat JS ile hesaplanır: 1–2. katta kabinin altı başlığın 18 px üstünde, 3. katta kuyu dibi
  yazının 10 px üstünde (alttan yumuşak koyu geçişle biter); katlar arasında ve kutular kapanınca ölçek yumuşakça değişir.
  Kampanya kartı yalnızca 1. katta yer kaplar: 2. ve 3. kat kart yokmuş gibi ölçeklenir, kart açıkken 1.→2. kata inerken
  kart etikete dönerken kabin açılan yere doğru büyür (yoksa 3. katta etiketli hâlde altta büyük boşluk kalıyordu).
  3. kattaki boy 2. kattakinden en çok %15 farklı (fazlası geçişte göze batar; yer darsa kuyu dibi yazının arkasında kalır).
  Sınır yüzünden kabinin üstünde boşluk kalırsa 3. katın yazısı kabinle birlikte yukarı kayar: kabinin üstü 2. kattaki
  gibi 78 px'te durur, artan yer yazının altında koyu zeminde kalır (kullanıcı kararı).
  2.↔3. kat geçişinde kabin kamerayla birlikte süzülür (önce düşüp geri çıkmaz), boyu ile yeri aynı anda değişir.
  Ölçek katta dururken kendiliğinden değişmez: adres çubuğu açılıp kapanınca ya da kampanya kartı kaydırınca etikete dönünce
  yeniden ölçülmez (yazı yeri 1. katta 100svh'ye, 3. katta 100lvh'ye göre okunur).
  Telefonda hero 2 kat + 100lvh uzunluğunda, katlar 100dvh: adres çubuğu gizlenince 3. katta alttaki açık bölüm görünmez.
  2. ve 3. katta bağlantı WhatsApp'ın solunda kaldığı için alt boşluk 28 px (kampanya etiketi görünürken 72 px).
  Telefonda her kaydırma bir kat ilerler (CSS scroll-snap, `scroll-snap-stop: always`; yalnızca dokunmatik ekranda —
  fare/trackpad ile dar pencerede sayfa sonundaki esnemeyle çakışıp titretiyordu, orada katlara JS oturtur); hero bitince
  sayfa serbest kayar ve ilk bölüm header'ın (64 px) altına oturur. Hero yüksekliği `100vh` değil `100svh`/`100dvh`
  olsun (adres çubuğu butonları örtmesin); 360 px genişlik ve kısa ekranlarda (≤ 720 px) test et.
- **Başlıklarda anlamsız satır kırılması olmaz:** iki parçalı başlıklarda (ör. blog: "X: Y?") ":" sonrası
  alt satıra geçer, her parça `text-wrap: balance` ile dengeli kırılır; tek kelime alt satırda kalmaz.
  Ekrana sığan başlık zorla iki satıra bölünmez: iki parçalı başlıkta (düz + italik) parçalar
  `inline-block` + `nowrap`; sığarsa tek satır, sığmazsa yalnızca iki parçanın arasından kırılır.
  Blog yazı başlığının genişliği yazı sütununu (848 px) geçmez; yazı kapağı görselsiz ve ortalıdır.
  Blog yazısında kaynaklar kapalı başlar: sade "Kaynaklar" düğmesi (ince alt çizgi), basınca liste küçük puntoyla
  yumuşakça açılır (kullanıcı kararı; HTML'de yazılı durur).
- **Açılır grup başlıkları** (footer bağlantı grupları, hamburger menü): başlık metni kendi genel sayfasına gider
  (Hizmetler → `hizmetler.html`, Asansör sistemleri → `asansor-sistemleri.html`); sağdaki boşluk ve ok alt başlıkları
  açar/kapatır (kullanıcı kararı). Footer grupları masaüstünde hep açık.
- **Tablet ve çok geniş ekran:** hero yan yana düzeni (asansör sağda) ≥1024 px'te yatay ekranda, 760–1023 px'te
  genişlik > yükseklik × 1,1 olunca; dikey tabletlerde (1024×1366 dahil) asansör yazının üstünde (alt alta düzen,
  kabin boşluğu doldurur). Yan yana düzende asansör, kuyunun rayları dahil yazının sağı ile ekran kenarı arasına sığacak
  kadar küçülür (kuyunun sol kenarı yazı sütununun 24 px sağında; yazıya binmez, kabin kırpılmaz). İç sayfa kapak görselleri 1920 px'ten geniş ekranda sağa uzamaz, ortada kalır ve sağ
  kenarı soldaki gibi koyuya geçer; her kapakta ana konunun yeri odak noktası olarak verilir (`--op-d`).
- **Kapsayıcı genişliği:** masaüstünde bölüm içerikleri header'ın iki kenarı arasında (1280 px kapsayıcı) kalır; zemin
  ekran boyunca uzayabilir ama kartlar taşmaz (ör. ana sayfa blog şeridi: ≥1280 px'te 3, 1024–1279 px'te 2 kart).
- **Yenilemede kalınan yer:** sayfa yenilenince (F5) ya da geri tuşuyla dönülünce kaydırma konumu geri gelir (main.js
  `Konum`, oturum depolaması `yk-konum`; blog listesinde açılan kart sayısı ve kategori de). Bağlantıyla gelince sayfa
  baştan açılır. Kullanıcı kaydırmaya başlarsa geri yükleme bırakılır.
- **Yumuşak kaydırma:** fare tekerleği/trackpad ile sayfa yumuşakça süzülerek kayar (main.js, kütüphanesiz). Dokunmatik
  ekranda tarayıcının kendi momentumlu kaydırması kalır (parmağın gerisinden gelmesin, adres çubuğu ve hero durakları
  bozulmasın); ana sayfanın hero katlarında da kat oturtma çalıştığı için tarayıcının kendi kaydırması.
- **"Bu sayfada" bağlantı şeridi yalnızca masaüstünde:** mobilde hiçbir sayfada gösterilmez (kullanıcı kararı).
- **Blog tabloları telefonda kart:** telefona sığmayan geniş tablolar (`by-tablo--kart`, şimdilik etiket renkleri ve sistemler
  karşılaştırması yazıları) 760 px altında kart olur: satır = kart, sütun başlığı satır içi etiket (`data-l`), "–" olan hücre
  gizlenir. Masaüstü ve tablette tablo kalır (kullanıcı kararı: yalnızca mobilde). 3 sütunlu tablolar sığdığı için tablo kalır.
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
  - Mobil: yalnızca KVKK için örnek tasarım var (tuvalde "1 — KVKK Aydınlatma Metni (mobil örnek)");
    diğer üç yasal sayfa koda çevrilirken aynı yapıyla (ortalı koyu başlık + sade metin) mobile uyarlanır.
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
- Asansör sistemleri: dişlili, dişlisiz, hidrolik, yük, lift (villa/engelli), araç,
  yürüyen merdiven, makine dairesiz (monospace)
- Kabin çözümleri: panoramik cam, rezidans ve yolcu, sedye/medikal, yük ve araç
- Hizmet bölgesi: Türkiye geneli. Hizmet ve sistem sayfalarının metinlerinde (giriş metinleri, SSS, meta
  açıklamaları) ilçe/mahalle adı ve "X merkezli ekibimiz" kalıbı kullanılmaz; hedef kitleyi daraltıyor
  (kullanıcı kararı). İstisna: yerel blog yazıları (aşağıda).
  Yerel SEO ("Sancaktepe asansör bakım" gibi aramalar) yalnızca ayrı, özgün blog yazılarıyla yapılır.
  Sıra (kullanıcı kararı, her aşama onaydan sonra): (1) Sancaktepe ana yazısı → (2) yakın ilçeler ve bilindik büyük
  semtler: Ümraniye, Çekmeköy, Sultanbeyli, Maltepe ve Dudullu, Samandıra, Sarıgazi, Taşdelen, Maltepe semtleri gibi (liste ve sıra
  `docs/mahalle-talep-analizi.md` Bölüm 5.2). **Mahalle yazıları iptal** (kullanıcı kararı) — bkz. `docs/mahalle-talep-analizi.md`
  → (3) diğer çevre ilçeler yakından uzağa: Kartal (+ Yakacık, Soğanlık, Dragos), Pendik, Ataşehir taslak hazır (Bölüm 5.3);
  sonra Tuzla, Kadıköy, Üsküdar, Beykoz. **En uzak sınır İstanbul Anadolu Yakası**; dışına taşılmaz.
  **Tüm ilçe ve semt yazıları aynı 12 başlığı taşır** (kullanıcı kararı, 24 Ekim 2026): neler yapıyoruz, binalar ve
  asansörler, aylık bakım ve sözleşme, arıza ve mahsur kalma, periyodik kontrol ve etiketler, modernizasyon, yeni montaj
  ve sonradan asansör, hangi sistem hangi binaya, bakım ücreti, firma seçerken, ilgili yazılar, SSS. Semtlere ayrı bir
  "ana konu" ya da "öne çıkan bölüm" verilmez; semtin özel durumu ilgili başlığın içinde anlatılır.
  Bloglarda iş fotoğrafı ve gerçek iş örneği kullanılmaz (kullanıcı kararı); özgünlük doğrulanmış yerel
  bilgiyle (ör. belediyenin protokollü muayene kuruluşu, semtin bağlı olduğu ilçe, bina dokusu; kuruluş
  yılı ve tarihçe yalnızca Sancaktepe ana yazısında, diğer yazılarda yazılmaz — kullanıcı kararı), özgün yazımla
  ve kaynaklı, derin uzman içerikle sağlanır. Yalnızca yer adı değişen şablon yazı
  yazılmaz (doorway riski). Yerel blog yazılarında "Sancaktepe merkezli ekibimiz" gibi ifadeler
  kullanılabilir (kullanıcı onayı); hizmet/sistem sayfalarında ve meta açıklamalarda kullanılmaz.
  Blog yazılarını kontrol eden: Ömürcan Altundaş (yazar kutusunda "Kontrol eden").
  İstanbul geneli görünürlük ilçe yazılarıyla değil, yer adı içermeyen bilgi yazılarıyla hedeflenir.
  Adres yalnızca footer, iletişim ve yasal metinlerde.
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
- Çalışma saatleri: **7/24 hizmet** (kullanıcı teyit etti). Sitede, yapılandırılmış veride
  (`openingHoursSpecification` 00:00–23:59, her gün) ve Google İşletme Profili'nde "24 saat açık" olarak aynı.
- E-posta: TODO — marka adı kesinleşince belirlenecek kurumsal adres; hem sitedeki iletişim
  e-postası hem form gönderimlerinin gideceği adres bu olacak (şimdilik `[E-POSTA ADRESİ]` yer tutucusu).
- Adres: Abdurrahman Gazi Mah. Altınordu Cad. No: 38-40/A, Sancaktepe / İstanbul
  (Google İşletme Profili ve Instagram'daki adresle aynı). Google İşletme Profili bağlantısı:
  https://share.google/k3h68ZxTo8hSalAoL (tek doğru konum bağlantısı) — footer'daki adres ve
  iletişim sayfasındaki bağlantılar buna gider (yeni sekmede). İletişim sayfasında ekran genişliğinde
  gömülü Google Haritalar olacak; KVKK gereği harita ziyaretçi "Haritayı göster"e basınca yüklenir.
  Mobilde gömülü harita yok: harita görseli üstünde küçük kutu (ad, kısa adres) ve yalnızca
  "Google Haritalar'da açın" bağlantısı.
- Sosyal medya: Instagram, Facebook, LinkedIn — hesap adresleri TODO (sitede `[INSTAGRAM]`, `[FACEBOOK]`,
  `[LINKEDIN]` yer tutucusu). Instagram şimdilik `@ykasansorr` (resmî hesap bu; `yk.asansorr` değil), ama
  marka adı değişirse kullanıcı adı da değişebilir, bu yüzden kesinleşene kadar sitede yer tutucu kalır. İkonlar tüm footer'ların alt şeridinde (masaüstünde telif yazısının sağında,
  mobilde üstünde) ve iletişim sayfasında "Bizi takip edin" olarak başlığın karşısında; yeni sekmede açılır.
- Kuruluş yılı / deneyim: TODO
- Logo ve marka renkleri: TODO (şu an geçici lacivert + turuncu)
