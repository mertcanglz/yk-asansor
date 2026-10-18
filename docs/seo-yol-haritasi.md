# YK Asansör: SEO ve yerel görünürlük yol haritası

Hazırlanma: 18 Ekim 2026. Durum: **taslak, kullanıcı onayı bekliyor.**

Bu belge, sitenin yerel aramalarda ("Sancaktepe asansör bakım" gibi), Google Haritalar'da ve
yapay zekâ asistanlarında üst sıralara çıkması için yapılacak işleri üç döneme ayırır:
**kodlamadan önce**, **kodlama sırasında** ve **yayından sonra**. Kodlama bu belgeye göre yapılır.

> **Yöntem notu:** Bu araştırma bulut oturumundan, web araması ile yapıldı. Oturumun ağ
> kısıtı yüzünden rakip sitelere doğrudan girilemedi; bilgiler arama sonuçlarındaki sayfa
> özetlerinden derlendi. Google Haritalar'daki 3'lü yerel paket (harita sıralaması) da
> buradan görülemedi. Bölüm 2.5'teki 5 dakikalık telefon kontrolü bu boşluğu kapatır.

---

## 0. Kısa özet

1. **Yerel aramada asıl yarış Google Haritalar'da.** Haritadaki sıralamayı en çok Google
   İşletme Profili (birincil kategori, eksiksiz bilgi, açık/kapalı saatleri) ve **yorumlar**
   belirliyor. Web sitesi bunu destekler ama tek başına yetmez. Profil ve yorum işi siteyi
   beklemeden **bugün** başlayabilir.
2. **Organik sonuçlarda Sancaktepe ve çevresini dizin siteleri tutuyor** (Armut, firmasec,
   asansor-firmalari.com, asansorcu.kim). Firma siteleri azınlıkta ve çoğu zayıf: şablon ilçe
   sayfaları, eski içerik, gerçek fotoğraf yok. Hızlı, mobil uyumlu, gerçek iş fotoğraflı ve
   2026'ya güncel bir site bu bölgede kolayca öne geçebilir.
3. **Bilgi aramalarında** (etiket renkleri, bakım ücretleri, kırmızı etiket, sonradan asansör)
   rehber siteleri ve firma blogları var ama derinlik ve güncellik eksik. Doğru, kaynaklı ve
   yönetmeliğe dayalı yazılar hem trafik hem güven getirir.
4. **Marka adı ve alan adı kesinleşmeden** dizin kayıtları açılmamalı. Ad, adres ve telefon
   (NAP) her yerde birebir aynı olmalı; sonradan değiştirmek emek ister ve sıralamayı bozar.
5. Teknik SEO (hız, yapılandırılmış veri, site haritası, temiz başlıklar) kodlama sırasında
   baştan doğru kurulursa sonradan düzeltme gerekmez. Bunun için Bölüm 5'teki kontrol
   listesi her sayfada uygulanır.

---

## 1. Senden gerekenler (kodlamadan önce)

Öncelik sırasıyla. İlk üçü yayını doğrudan etkiler.

| # | Gereken | Neden |
|---|---------|-------|
| 1 | **Kesin marka adı ve alan adı** (ör. `markaadi.com.tr`, ek olarak `.com` yönlendirme) | Başlıklar, yapılandırılmış veri, Google profili ve tüm dizin kayıtları buna bağlı. Alan adı anahtar kelime içermek zorunda değil; marka adı daha iyi. `.com.tr` 2022'den beri belgesiz alınabiliyor. |
| 2 | **Google İşletme Profili'ne yönetici erişimi** ve profilin mevcut durumu: adı, kategorisi, yorum sayısı, adres gösteriliyor mu | Haritadaki sıralamanın ana kaynağı. Ben düzenleyemem ama adım adım tarif ederim. |
| 3 | **Belgeler:** TSE Hizmet Yeterlilik Belgesi (TS 12255), varsa ISO 9001 ve CE belgeleri, ticaret unvanı, kuruluş yılı | Yönetmelik bakım firmasında TS 12255 kapsamında TSE HYB arıyor. Sitede belge numarasıyla göstermek en güçlü güven sinyali (E-E-A-T). Yasal metinlerde de unvan gerekli. |
| 4 | **Gerçek fotoğraflar:** bitmiş montajlar, öncesi/sonrası modernizasyonlar, ekip, servis aracı, ofis | Hizmet, sistem ve yerel blog sayfalarının "özgün" sayılması bunlara dayanıyor. Telefonla çekilmiş net fotoğraflar yeter. Mümkünse hangi semtte çekildiğini not et. |
| 5 | **Referans işler:** 5–10 proje (semt, bina tipi, yapılan iş, yıl). Müşteri izin verirse kısa yorum | Yerel blog yazıları ve olası bir "Projeler" sayfası için. |
| 6 | **Çalışma saatleri:** ofis saatleri ve 7/24 arıza hattı | Google profilinde ve yapılandırılmış veride aynı olmalı. |
| 7 | **Kurumsal e-posta** ve sosyal medya hesap adresleri | Zaten TODO; NAP tutarlılığı için gerekli. |
| 8 | **"30 dk ortalama arıza müdahalesi"** iddiasının dayanağı (kayıt, servis föyü) | Reklamda kullanılan rakamların ispatlanabilir olması gerekir. Hizmet "Türkiye geneli" olduğundan bu sürenin hangi alanda geçerli olduğunu da netleştirelim. |

**Ayrıca kontrol et:** README'de "`main` dalına her push GitHub Pages'e yayınlanır"
yazıyor, `CLAUDE.md` ise GitHub Pages kullanılmaz diyor. Repo ayarlarında (Settings → Pages)
yayın açıksa kapat. Yoksa eski yer tutucu site `mertcanglz.github.io/yk-asansor` adresinde
dizine eklenebilir. README'yi de güncelleyelim.

---

## 2. Rakip analizi

### 2.1 Arama sonuçlarını kim tutuyor?

"Sancaktepe asansör bakım", "Sancaktepe asansör montaj", "Sultanbeyli asansör bakım" gibi
sorgularda ilk sıralar büyük ölçüde **dizin ve teklif platformlarında**:

- **Armut**: Her ilçe ve hizmet için ayrı sayfası var (ör. Sancaktepe asansör bakım: 177 firma;
  asansör montaj: 266 firma; ayrıca revizyon, halat değişimi, yük asansörü, pano sayfaları).
  Sayfalarda firma yorumları ve fiyat aralıkları görünüyor.
- **firmasec.com, asansorcu.kim, sancaktepe.asansor-firmalari.com, ara.com.tr, aratsana.com,
  sahibinden.com (hizmetler)**: Firma kartları, adres, telefon ve bazen yorum.

**Çıkarım:** Bu platformlarda **yorumlu, eksiksiz bir profil**, aynı aramada birkaç kez
görünmek demektir. Siteyle birlikte en hızlı kazanç budur (Bölüm 7.3).

### 2.2 Bölgedeki ve yakındaki firmalar

| Firma | Konum / kapsam | Dijital durum (arama sonuçlarından) |
|-------|----------------|-------------------------------------|
| Sancaktepe Asansör (`sancaktepeasansor.com.tr`) | "Sancaktepe" adlı alan adı | Genel tanıtım metni; numarası 0212 (Avrupa Yakası). Muhtemelen yönlendirme amaçlı site. Adres ve fiyat yok. |
| Kalitas Mühendislik (`kalitas.dev`) | Her ilçe için ayrı sayfa (Sancaktepe, Sultanbeyli…) | Şablon ilçe sayfaları: aynı metin, yalnızca ilçe adı değişiyor. Google bunu "doorway" sayabilir. |
| Bilim-San Asansör (`bilimsanasansor.com`, `anadoluyakasiasansorbakimi.com`) | 1989, Kadıköy kökenli, Anadolu Yakası | İlçe sayfaları var (Kartal, Çekmeköy, Ümraniye, Samandıra…). Bazı sayfalar ~10 yıllık. Etiket konuları başlık düzeyinde, içerik sığ. |
| Fia Lift | `…/sancaktepe-asansor-bakim.html` | Sancaktepe'ye özel bakım sayfası, 7/24 hat vurgusu. |
| EMAS Asansör (`emasasansor.com/sancaktepe/`) | Adresi Yayalar | Sancaktepe sayfası: bakım, montaj, 7/24. |
| Leon Asansör (`asansorservis.biz.tr`) | Adresi Sancaktepe | Etiketlerde Yenidoğan vb. semt adları; müşteri yorumu var. |
| Trio Lift | Sancaktepe hizmet alanı | Bakım, arıza, modernizasyon, 7/24. |
| Detay Lift | Sancaktepe, Atatürk Mah. | Dizinlerde; CE ve TS 12255 belgelerini öne çıkarıyor. |
| Isas Asansör | Samandıra, 1988'den beri | Dizinlerde; TSE HYB bilgilendirmesi yapıyor. |
| Saysa Asansör | Sarıgazi | Dizinlerde; TSE HYB ve TS 12255 vurgusu. |
| Axel Asansör, Teknotek Asansör | Sultanbeyli | Dizinlerde yorumlu kart (Teknotek: 71 yorum, 5,0). |
| Özhisar (Kartal), Lina (Kağıthane), Meridyen | Anadolu Yakası geneli | Lina'nın blogu var (kısa yeşil etiket yazısı). Meridyen'in SSS bölümü var. |

### 2.3 Bilgi içeriği rakipleri (blog konularında karşımıza çıkacaklar)

- **asansorex.com/rehber**: Teknik rehberler (arıza kodları, fren testi, TSE HYB), "Asansör bakım
  ücretleri 2026", etiket renkleri. Çok yazı var ama büyük kısmı teknisyene yönelik.
- **elevatora.com**: "Asansör bakım fiyatları 2026: teklif nasıl okunur?", kırmızı etiket yazısı.
- **asansorr.com, zorasansor.com.tr, mersinteknikasansor.com**: 2026 fiyat yazıları, firma seçimi.
- **tkelevator.com/tr-tr/blog**: İşletme, bakım ve periyodik kontrol yazısı (büyük marka otoritesi).
- **Hukuk büroları ve Hürriyet köşe yazıları**: "Apartmana sonradan asansör", "bakım ücretini
  kim öder" gibi hukuki sorular.

### 2.4 Rakiplerin zayıf yanları = bizim fırsatlarımız

1. **Şablon ilçe sayfaları.** Aynı metinde yalnızca ilçe adı değişiyor. Google'ın 2024–2026
   spam güncellemeleri bu kalıbı hedefliyor. Bizim yerel yazılarımız gerçek iş, gerçek
   fotoğraf ve bölgeye özgü bilgiyle yazılacak (Bölüm 4.1).
2. **Eski ve tarihsiz içerik.** 2019'da yürürlükten kalkan 2015 yönetmeliğine atıf yapan
   sayfalar hâlâ yayında. Bizim yazılarımız 2019 İşletme ve Bakım Yönetmeliği ile 2025
   değişikliğine göre, tarihli ve kaynaklı olacak.
3. **Gerçek kanıt yok.** Fotoğraflar stok, belge numarası yok, proje yok.
4. **Mobil deneyim ve hız.** Çoğu eski WordPress veya `.asp` sitesi. Bizim derlemesiz HTML
   sitemiz doğal olarak hızlı olacak (Core Web Vitals avantajı).
5. **Fiyat şeffaflığı yok.** "Teklif nasıl okunur?" ve "fiyatı ne belirler?" yazıları güven kazandırır.

### 2.5 Senin yapacağın 5 dakikalık kontrol (harita sıralaması)

Ofisteyken telefonda Google Haritalar'ı aç ve şu aramaları yap. Her birinde ilk 5 sonucun
ekran görüntüsünü al: firma adı, puan, yorum sayısı ve kategori görünsün.

1. `asansör bakım` 2. `asansör firması` 3. `asansör servisi` 4. `asansör montaj`
5. `asansör tamiri`

Aynı aramaları normal Google'da da yap ve ilk sayfanın görüntüsünü al. Bunlar başlangıç
noktamız olur ve 3 ay sonra karşılaştırırız. (Bilgisayarında Claude masaüstü uygulamasıyla
veya `claude remote-control` ile bir oturum açarsan bu kontrolü ben de Chrome'dan yapabilirim.)

---

## 3. Anahtar kelime haritası (sayfa → hedef aramalar)

Kural: **her sayfanın bir ana sorgusu** olur. Aynı sorgu için iki sayfa yarışmaz.
Sayfa metinlerinde ilçe ve mahalle adı geçmez (kullanıcı kararı); yerel sorgular yalnızca
yerel blog yazılarında ve Google profilinde hedeflenir. Aranma hacmi verisine bu oturumdan
erişilemedi. Öncelikler arama niyetine göre verildi; yayından sonra Search Console verisiyle
düzeltilecek.

| Sayfa (öneri URL) | Ana sorgu | Yan sorgular | Öneri `<title>` (≤ 60 karakter) |
|---|---|---|---|
| Ana sayfa `/` | asansör firması | asansör bakım ve montaj, asansör servisi | `YK Asansör: Asansör Montaj, Bakım ve Modernizasyon` |
| Hizmetler `hizmetler.html` | asansör hizmetleri | asansör bakım onarım montaj | `Asansör Hizmetleri: Montaj, Bakım, Arıza \| YK Asansör` |
| Yeni montaj `asansor-montaji.html` | asansör montajı | asansör yaptırmak, yeni asansör fiyatları, asansör projelendirme | `Asansör Montajı ve Projelendirme \| YK Asansör` |
| Periyodik bakım `asansor-bakimi.html` | asansör bakımı | asansör bakım sözleşmesi, aylık asansör bakımı, asansör bakım firması | `Asansör Bakımı ve Aylık Bakım Sözleşmesi \| YK Asansör` |
| Modernizasyon `asansor-modernizasyonu.html` | asansör modernizasyonu | asansör revizyonu, eski asansör yenileme | `Asansör Modernizasyonu ve Revizyon \| YK Asansör` |
| 7/24 arıza `asansor-ariza-servisi.html` | asansör arıza servisi | asansör tamiri, acil asansör servisi, 7/24 asansör | `7/24 Asansör Arıza Servisi ve Tamir \| YK Asansör` |
| Temizlik ve muayene `asansor-temizlik-muayene.html` | asansör kuyu temizliği | asansör muayene hazırlığı | `Asansör Temizlik ve Muayene Servisi \| YK Asansör` |
| Yeşil etiket `yesil-etiket.html` | yeşil etiket asansör | asansör etiket renkleri, kırmızı/mavi/sarı etiket, A tipi muayene | `Asansör Yeşil Etiket: Muayene Hazırlığı \| YK Asansör` |
| Sistemler `asansor-sistemleri.html` | asansör çeşitleri | asansör sistemleri | `Asansör Sistemleri ve Çeşitleri \| YK Asansör` |
| Dişli `disli-asansor.html` | dişli asansör | redüktörlü asansör | |
| Dişlisiz `dislisiz-asansor.html` | dişlisiz asansör | gearless asansör | |
| Hidrolik `hidrolik-asansor.html` | hidrolik asansör | hidrolik asansör fiyatları | |
| Yük `yuk-asansoru.html` | yük asansörü | yük asansörü fiyatları | |
| Lift `villa-engelli-asansoru.html` | villa asansörü | engelli asansörü, ev asansörü | |
| Araç `arac-asansoru.html` | araç asansörü | otopark asansörü | |
| Yürüyen merdiven `yuruyen-merdiven.html` | yürüyen merdiven bakımı | yürüyen merdiven servisi | |
| Makine dairesiz `makine-dairesiz-asansor.html` | makine dairesiz asansör | MRL asansör | |
| Teklif formu `teklif-formu.html` | (reklam açılış sayfası, `noindex` önerilir) | | |
| İletişim `iletisim.html` | YK Asansör iletişim | (marka araması) | |

**URL kuralları:** Türkçe karakter yok (`ş→s`, `ı→i`…), küçük harf, tire ile ayrılmış, kısa.
URL'ler yayından sonra **değiştirilmez**; değişirse 301 yönlendirme gerekir.

**Karar (18 Ekim 2026):** Blog yazıları `blog/` klasöründe (`/blog/asansor-etiket-renkleri.html`).
Kodlamadan önce taslaklar `docs/blog-taslaklari/` altında Markdown olarak yazılır. `CLAUDE.md`'ye işlendi.

---

## 4. Blog planı

### 4.1 Yerel yazılar (5 bölge)

`CLAUDE.md` kararına göre yerel SEO yalnızca şu bölgeler için ayrı ve özgün blog yazılarıyla
yapılır: **Sancaktepe, Samandıra, Yenidoğan, Sarıgazi, Sultanbeyli.**

**Doorway riskinden kaçınmak için her yerel yazıda en az şunlar olmalı** (yalnızca semt adı
değişen şablon metin yasak):

- O bölgede yaptığımız **gerçek bir iş**: fotoğraf, bina tipi, sorun, çözüm, süre.
- Bölgenin **bina dokusu** ve ondan doğan ihtiyaç. Örnek: yeni siteler ve kentsel dönüşüm →
  montaj ve makine dairesiz sistemler; eski 4–5 katlı apartmanlar → sonradan asansör ve
  modernizasyon; sanayi ve ticari alanlar → yük asansörü.
- **Periyodik kontrol pratik bilgisi:** ilgili belediyenin protokol yaptığı A tipi muayene
  kuruluşu ve başvuru yolu. Yazmadan önce belediyeden veya kuruluşun sitesinden doğrulanacak.
  Bu aramada Sancaktepe'nin protokolü olduğu görüldü ama kuruluş adı bulunamadı.
- Ofisten **gerçek varış süresi**. Ölçülmüş bir değer olmalı; "30 dk" iddiasıyla tutarlı olmalı.
- Bölgeye özgü 3–4 soruluk **SSS** (akordeon, `FAQPage`).
- İç bağlantılar: ilgili hizmet sayfası, yeşil etiket sayfası, teklif formu.

| Yazı (çalışma başlığı) | Odak açısı |
|---|---|
| Sancaktepe'de asansör bakımı: yönetici rehberi | Tuvalde şablonu var. Aylık bakım, sözleşme, etiket takvimi. |
| Samandıra'da asansör: yeni binalar ve bakım | Yeni yapılaşma, montaj ve bakım geçişi. |
| Sultanbeyli'de eski apartmana asansör ve modernizasyon | Sonradan asansör, revizyon. |
| Sarıgazi'de asansör arıza ve bakım hizmeti | Arıza belirtileri, hızlı müdahale. |
| Yenidoğan'da asansör periyodik kontrol hazırlığı | Etiket alma süreci, eksik giderme. |

Açılar örnektir. Gerçek işlere göre değiştirilir; her yazı **farklı** bir ana konuya odaklanır.

### 4.2 Bilgi yazıları (öncelik sırası)

**Yayında hazır olsun (P1):**

1. **Asansör etiket renkleri: yeşil, mavi, sarı ve kırmızı ne anlama gelir?**
   Hedef: "asansör etiket renkleri", "mavi etiket asansör". Bağlantı: yeşil etiket sayfası.
2. **Asansör bakım ücretleri 2026: fiyatı neler belirler, teklif nasıl okunur?**
   Durak sayısı, kapasite, marka, sözleşme kapsamı, KDV. Ankara Ticaret Odası 2026 azami
   tarifesi gibi resmî örnekler. Kesin İstanbul fiyatı yazılmaz; teklif çağrısı yapılır.
3. **Asansör bakım sözleşmesi: imzalamadan önce kontrol edilecek 10 madde.**
   TSE HYB ve TS 12255, kapsam, parça ve işçilik, acil müdahale süresi, kurtarma eğitimi, kayıtlar.
4. **Kırmızı etiket alan asansör: süre, mühür riski ve yapılması gerekenler.**
   Süreler yönetmelik metninden doğrulanmadan yazılmayacak (Bölüm 8).
5. **Apartman yöneticisinin asansör sorumlulukları: yıllık takvim.**
   Hedef kitle: kararı veren yöneticiler.
6. **Sancaktepe yerel yazısı** (4.1).

**İlk 2 ay (P2):**

7. Apartmana sonradan asansör yaptırmak: kat malikleri kararı, proje, izin, maliyet kalemleri.
   Hukuki kısım genel bilgi olarak yazılır, "avukata danışın" notuyla.
8. Aylık asansör bakımında neler yapılır? Kontrol listesi.
9. Asansör modernizasyonu ne zaman gerekir? 8 işaret. Kaynak verisi: Türkiye'deki
   1 milyon asansörün 300 binden fazlası 15 yaşın üzerinde.
10. Asansörde mahsur kalınca ne yapmalı? Kapı zorlanmaz, alarm kullanılır, 112 aranır;
    bina sorumlusunun kurtarma eğitimi.
11. Samandıra ve Sultanbeyli yerel yazıları.

**Sonra (P3):**

12. Asansör periyodik kontrolü nasıl yapılır, ücreti kim öder? (2026 ücretleri belediyeye göre değişir)
13. Hidrolik mi, halatlı mı? Dişli mi, dişlisiz mi? Karşılaştırma.
14. Makine dairesiz asansör: avantajları ve sınırları.
15. Villa ve engelli asansörü rehberi.
16. Asansör bakım ve tamir giderini kim öder? Kiracı mı, ev sahibi mi?
17. Kentsel dönüşümde yeni binaya asansör seçimi.
18. Sarıgazi ve Yenidoğan yerel yazıları.

**Takvim önerisi:** Yayında 6 yazı (P1), sonra ayda 2–4 yazı. Her yazı yılda bir gözden
geçirilir (fiyat ve yönetmelik değişiklikleri). Başlıktaki yıl güncellenir ve `dateModified` değişir.

### 4.3 Her blog yazısının kalite kuralları

- **İlk paragraf soruyu doğrudan yanıtlar** (2–3 cümle). Yapay zekâ özetleri ve Google bu kısmı alıntılar.
- **Yazar kutusu:** "YK Asansör teknik ekibi". Teknik yazılarda kontrol eden teknisyen veya
  mühendisin adı ve unvanı (izin verilirse).
- **Yayın ve güncelleme tarihi** görünür. `BlogPosting` verisinde `datePublished` ve `dateModified`.
- **Kaynak:** Yönetmelik ve belediye duyurularına bağlantı (mevzuat.gov.tr, Resmî Gazete).
- **Gerçek görsel:** En az bir kendi fotoğrafımız. Stok görsel tek başına kullanılmaz.
- **Uzunluk:** Konuya göre. Tipik olarak 900–1.800 kelime; doldurma metin yok.
- **İç bağlantı:** 1 hizmet sayfası, 1–2 ilgili yazı ve teklif çağrısı.
- **Başlık biçimi:** `CLAUDE.md`'deki iki parçalı başlık kuralı ("X: Y?").
- **Yapay zekâ ile yazılan taslak** mutlaka teknik ekipçe okunur ve onaylanır; gerçek
  deneyim eklenir. Kontrolsüz seri üretim Google'ın "ölçekli içerik" politikasına girer.

---

## 5. Kodlama sırasında teknik SEO (her sayfa için kontrol listesi)

### 5.1 `<head>` şablonu

- `lang="tr"`, `charset`, `viewport`.
- Benzersiz `<title>` (≤ 60 karakter) ve `<meta name="description">` (≤ 155 karakter,
  sayfaya özgü, bir eylem çağrısıyla).
- `<link rel="canonical">`: kesin alan adıyla, mutlak URL.
- Open Graph: `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:locale=tr_TR`,
  `og:type`. WhatsApp ile paylaşılan bağlantıların önizlemesi bu etiketlerden gelir.
- Favicon seti: `favicon.ico`, 180 px `apple-touch-icon`, `site.webmanifest`, `theme-color`.
- Ana yazı tipi `preload`. Google Fonts yok (zaten karar).
- Teklif formu ve teşekkür sayfası: `<meta name="robots" content="noindex">` önerilir.

### 5.2 Yapılandırılmış veri (JSON-LD, `@graph` ile tek kimlik)

| Sayfa | Şema |
|---|---|
| Tüm sayfalar | `Organization` ve `LocalBusiness` (`@id: https://alanadi/#isletme`): ad, URL, logo, görsel, telefon, adres (`PostalAddress`), `geo`, `openingHoursSpecification` (ofis ve 7/24), `areaServed` (Türkiye), `sameAs` (Google profili, Instagram, Facebook, LinkedIn). `WebSite` |
| Hizmet ve sistem sayfaları | `Service` (`provider` → `#isletme`, `serviceType`, `areaServed`), `BreadcrumbList` |
| Blog yazıları | `BlogPosting` (başlık, görsel, yazar, tarihler, `publisher` → `#isletme`), `BreadcrumbList` |
| SSS bulunan sayfalar | `FAQPage` |

- **Not:** Google 7 Mayıs 2026'dan beri SSS zengin sonucunu (aramada açılan sorular)
  göstermiyor. `FAQPage` işaretlemesi yine geçerli ve Google sayfayı anlamak için onu
  okumaya devam ediyor; yapay zekâ asistanları da kullanıyor. `CLAUDE.md`'deki karar aynen
  uygulanır, ama aramada ayrıca görünmesi beklenmez.
- Yapılandırılmış verideki bilgiler sayfada görünen bilgilerle **birebir aynı** olmalı.
  Sahte yıldız veya yorum işaretlemesi (`AggregateRating`) eklenmez.

### 5.3 Site geneli dosyalar

- `robots.txt`: Her şeye izin ver. Site haritası satırı eklenir. Yapay zekâ arama botları
  (`OAI-SearchBot`, `PerplexityBot`, `Bingbot`, `Googlebot`) engellenmez. ChatGPT
  aramasında görünmek için `OAI-SearchBot`'a izin şart.
- `sitemap.xml`: Tüm indekslenecek sayfalar ve `lastmod`. Teklif formu ve teşekkür sayfası hariç.
- `404.html`: Menü, arama önerileri ve telefon.
- `.htaccess` (Alastyr / Apache):
  - HTTP → HTTPS ve `www`/`www`'suz tek adrese 301.
  - gzip veya brotli sıkıştırma.
  - Önbellek: CSS, JS, yazı tipi ve görsellere uzun süre; HTML'e kısa süre.
  - `ErrorDocument 404`.
  - Geçici test adresinde `X-Robots-Tag: noindex`. **Yayın günü kaldırılacak.**
- İsteğe bağlı: `llms.txt` (yapay zekâ için site özeti). Etkisi kanıtlanmadı, düşük öncelik.

### 5.4 Hız (Core Web Vitals) hedefleri: mobil, 4G

- LCP < 2,5 sn, INP < 200 ms, CLS < 0,1.
- Hero görseli veya asansör çizimi: `fetchpriority="high"`; `width` ve `height` yazılı;
  WebP veya AVIF; < 300 KB (zaten kural).
- Ekranın altındaki görseller `loading="lazy"`.
- Görsel dosya adları anlamlı olmalı: `hidrolik-asansor-montaji.webp`, `IMG_2034.jpg` değil.
- JS minimum. GA ve Meta Pixel yalnızca onaydan sonra yüklenir (karar zaten var).
- Test: Bulut oturumundaki Chromium ile Lighthouse; hedef mobilde 90+.

### 5.5 İçerik ve iç bağlantı

- Her sayfada tek `<h1>`, mantıklı `h2`/`h3` sırası.
- Ana sayfa → hizmetler → hizmet detay → ilgili blog yazıları → teklif, birbirine bağlı.
- Breadcrumb (görünür ve şemalı).
- Footer'da NAP her sayfada **aynı biçimde**:
  `Abdurrahman Gazi Mah. Altınordu Cad. No: 38-40/A, Sancaktepe / İstanbul` ·
  `0 (543) 542 86 75`.
- **Güven sinyalleri:** belge adları ve numaraları, rakamlar şeridi, gerçek proje fotoğrafları.
  Mümkünse "Hakkımızda" bölümünde ekip ve kuruluş hikâyesi.

### 5.6 Dönüşüm ölçümü (onay varsa GA4)

- Olaylar: `tel:` tıklaması, WhatsApp tıklaması, teklif formu gönderimi (teşekkür sayfası
  veya başarı olayı), hızlı teklif formu gönderimi.
- Google profilindeki web sitesi bağlantısına UTM ekle
  (`?utm_source=google&utm_medium=organic&utm_campaign=gbp`). Böylece haritadan gelen
  ziyaretler ayrı görünür.

---

## 6. Yayın günü kontrol listesi

1. Test adresindeki `noindex`'i kaldır; canlı alan adında `robots.txt` ve `sitemap.xml` doğru mu bak.
2. **Google Search Console:** alan adı mülkü (DNS TXT doğrulama), site haritası gönderimi,
   ana sayfalar için "URL denetimi → dizine eklenmesini iste".
3. **Bing Webmaster Tools:** Search Console'dan içe aktar. Bing, ChatGPT ve Copilot
   aramalarını da besler. IndexNow anahtarı dosyası eklenir.
4. **Yandex Webmaster:** Türkiye'de Yandex'in payı StatCounter'a göre %9–17. Kayıt ücretsiz ve 10 dakika sürer.
5. **Google İşletme Profili:** web sitesi bağlantısı (UTM'li), hizmet listesi (sitedeki
   hizmet adlarıyla aynı), çalışma saatleri, fotoğraflar.
6. GA4 ve çerez onayının çalıştığını test et: reddedince hiçbir istek gitmemeli.
7. Tüm formları gerçek gönderimle test et (PHP ve SMTP).
8. Mobil ve masaüstünde Lighthouse; hedef 90+.

---

## 7. Yayından sonra

### 7.1 Google İşletme Profili (haritada 1. sıra için en önemli iş)

Uzman anketlerinde (Whitespark 2026) harita sıralamasında en etkili sinyaller sırasıyla:
**birincil kategori**, aramayı yapanın uzaklığı, **işletme adı**, … ve **çalışma saatleri**
(ilk 5'e yeni girdi). Profil sinyallerinin payı ~%32, yorumların ~%20.

- **Birincil kategori:** Asansör servisi (İngilizce panelde "Elevator service"). Paneldeki
  Türkçe adı kontrol et. Ek kategoriler yalnızca gerçekten yapılan işler için seçilir.
- **İşletme adı:** Gerçek marka adı. Anahtar kelime eklemek ("YK Asansör Sancaktepe Bakım")
  Google kurallarına aykırı ve profil askıya alınabilir.
- **Adres:** Müşteri ofise gelebiliyorsa adres görünür kalsın. Ayrıca **hizmet bölgeleri**
  eklensin (en fazla 20): Sancaktepe, Sultanbeyli, Çekmeköy, Ümraniye, Ataşehir, Kartal,
  Pendik, Maltepe… Bu yalnızca profil ayarı; site metnindeki kararı etkilemez.
- **Saatler:** Ofis saatleri ve 7/24 arıza. "Kapalı" görünen işletmelerin sıralaması düşüyor.
- **Hizmetler listesi:** Sitedeki 6 hizmet, açıklamalarıyla.
- **Fotoğraflar:** Ayda en az 4–8 yeni gerçek iş fotoğrafı; logo ve kapak.
- **Gönderiler:** Haftada 1 (tamamlanan iş, kampanya, etiket dönemi hatırlatması).

### 7.2 Yorumlar

- **Hedef:** Her ay düzenli yorum (ör. ayda 4–8). Tek seferde çok yorum gelip sonra kesilmesi
  yerine sürekli akış önemli.
- **Nasıl:** Profilin "yorum iste" kısa bağlantısı. İş bitince WhatsApp'tan gönderilir,
  teknisyen kartında ve bakım föyünde QR kod olarak yer alır.
- Müşteriden **ne iş yapıldığını** yazmasını rica et ("aylık bakım", "kapı arızası"…).
  Bu, yorumu hem okuyan için hem Google için daha anlamlı yapar.
- **Her yoruma yanıt** ver (olumsuzlara sakin ve çözüm odaklı).
- **Yapılmayacaklar:** Yorum satın almak, indirim karşılığı yorum istemek, çalışanlara yorum
  yazdırmak. Google kurallarına ve ticari reklam mevzuatına aykırı.
- **Kabin içi bakım etiketi:** Bakım firmasının bilgisi zaten kabinde yer alır. Buna marka adı,
  web adresi ve 7/24 hat ile QR eklemek her gün yüzlerce kişiye görünen bir yerel tanıtımdır.

### 7.3 Dizin kayıtları (marka adı kesinleşince, NAP birebir aynı)

**Önce:**

1. Yandex Business (Yandex Haritalar)
2. Apple Business Connect (iPhone'daki Apple Haritalar)
3. Bing Places
4. Armut (profil ve yorumlar; ücretli teklif sistemi isteğe bağlı)
5. Facebook, Instagram ve LinkedIn işletme sayfaları

**Sonra:** firmasec.com, asansorcu.kim, asansor-firmalari.com, sahibinden hizmetler,
Foursquare. Ayrıca sektör dernekleri (TASİAD, AYSAD vb. üyelik sayfaları) ve İTO üye rehberi.

**Kural:** Spam dizinlere toplu kayıt yapılmaz. 10–15 kaliteli kayıt yeter.

### 7.4 Bağlantı ve bilinirlik

- **Site yönetim firmaları ve müteahhitlerle** iş birliği: referans sayfalarında bağlantı.
  Kentsel dönüşüm yoğun bir bölgedeyiz.
- **Tedarikçi ve marka** "yetkili servis" listeleri (varsa).
- **Yerel haber siteleri:** gerçek bir haber değeri olan iş, ör. bir okul veya cami asansörü.
  Ücretli haber yazılarında bağlantı `sponsored` olmalı.
- Referans kampanyası (zaten planlı) ağızdan ağıza yayılmayı ve marka aramalarını artırır.

### 7.5 Yapay zekâ asistanlarında görünürlük

ChatGPT, Gemini ve Perplexity yerel öneri yaparken Google profilini, yorumları, dizinleri,
firmanın sitesini ve bunların **tutarlılığını** birlikte değerlendiriyor. Bağımsız sitelerde
anılmak, firmanın kendi sayfasından daha ağır basıyor.

- NAP tutarlılığı, eksiksiz profil ve düzenli yorumlar (yukarıdaki işler).
- Sitede net, alıntılanabilir bilgiler: kuruluş, belgeler, hizmet bölgesi, SSS.
- `OAI-SearchBot` ve diğer arama botlarına izin.
- **Aylık test:** ChatGPT, Gemini ve Perplexity'ye "Sancaktepe'de asansör bakım firması
  önerir misin?" gibi sorular sor, sonucu not et.

### 7.6 Ölçüm (aylık)

| Gösterge | Kaynak |
|---|---|
| Harita sıralaması: 5 sorgu × 5 bölge | Elle kontrol (Bölüm 2.5'teki gibi) veya ücretli ızgara takip aracı |
| Profil: arama, yol tarifi, web tıklaması | Google İşletme Profili performans ekranı |
| Gösterim ve tıklama, sorgular | Search Console |
| Telefon, WhatsApp ve form dönüşümleri | GA4 (onaylı ziyaretçiler) ve gelen e-postalar |
| Yorum sayısı ve puan | Google profili |

Search Console'da gösterimi olup tıklaması düşük sayfaların başlık ve açıklamaları 3 ayda bir yenilenir.

---

## 8. Mevzuat notları (blog doğruluğu için)

| Konu | Bulunan bilgi | Durum |
|---|---|---|
| İşletme ve bakım | **Asansör İşletme ve Bakım Yönetmeliği**, Resmî Gazete 6 Nisan 2019, sayı 30737. 2015 tarihli "İşletme, Bakım ve Periyodik Kontrol Yönetmeliği"ni yürürlükten kaldırdı. | Doğrulandı (birden çok kaynak) |
| Periyodik kontrol | **Asansör Periyodik Kontrol Yönetmeliği**. Son değişiklik: Resmî Gazete 5 Ağustos 2025, sayı 32977 ("muayene kuruluşu" → "uygunluk değerlendirme kuruluşu", 14. maddeye fıkra, 37. madde). | Doğrulandı. Ayrıntılar resmî metinden okunacak. |
| Kontrol sıklığı | Yılda en az 1 kez, belediyenin protokol yaptığı akredite A tipi muayene kuruluşu yapar. | Doğrulandı (TSE) |
| Etiket renkleri | Yeşil: kusursuz · Mavi: hafif kusurlu · Sarı: kusurlu · Kırmızı: güvensiz | Doğrulandı (TSE) |
| Etiket süreleri | Kaynaklar çelişiyor (kırmızı için 30 mi 60 gün mü; sarı 120 gün; mavi bir sonraki kontrole kadar mı, 1 yıl mı). | **Yazmadan önce yönetmelik metninden doğrulanacak** |
| Bakım firması belgesi | Yönetmeliğe göre bakım servisi TS 12255 kapsamında **TSE Hizmet Yeterlilik Belgesi** sahibi olmalı. | Doğrulandı (Resmî Gazete metni) |
| Aylık bakım | Bina sorumlusu ayda en az bir bakım yaptırmakla yükümlü. Bakım firması, bina sorumlusunun belirlediği kişilere kurtarma eğitimi verir. | Kaynaklar uyumlu; madde numarası metinden doğrulanacak |
| Periyodik kontrol ücreti 2026 | Belediyeye göre değişiyor. Bakanlık taban ve tavan ücreti belirliyor; ör. Bayraklı 2026, 0–5 durak: 4.049,76 TL (KDV dahil). Tescil öncesi ilk kontrol 3 katı. | İstanbul'daki belediyeler için ayrıca bakılacak |
| Bakım ücreti 2026 | Tek ulusal fiyat yok. Ankara Ticaret Odası 2026 azami tarifesi: 1600 kg ve altı, 2–10 durak, aylık 1.775,31 TL + KDV (yalnız Ankara merkez). İTO tarifesi bulunamadı. | Yazıda "örnek" olarak, kaynakla |
| Sonradan asansör | Genelde "faydalı yenilik" sayılıp sayı ve arsa payı çoğunluğu yeterli görülüyor; projede asansör yoksa farklı görüşler var (4/5, oybirliği). | Hukuki: "avukata danışın" notuyla genel bilgi |
| Asansör yaşı | Türkiye'deki 1 milyon asansörün 300 binden fazlası 15 yaşın üzerinde (KONE verisi, Posta). | Modernizasyon yazısında kullanılabilir |

---

## 9. Önerilen çalışma sırası

**Şimdi (koddan bağımsız, sen):**

- Bölüm 1'deki bilgiler ve kararlar: önce marka adı ve alan adı.
- Google profili: kategori, saatler, hizmetler ve fotoğraflar. Yorum toplamaya başla.
  Ben adım adım yönlendiririm.
- Bölüm 2.5'teki harita ekran görüntüleri.

**Şimdi (ben, koddan bağımsız):**

- P1 blog yazılarının taslakları (`docs/blog-taslaklari/` altında, Markdown). Sen ve teknik
  ekip okuyup onaylarsınız; yerel yazılara gerçek iş bilgileri eklenir.

**Kodlama (sırayla, her adım ayrı commit):**

1. **Ortak altyapı:** `<head>` şablonu, header/footer, yazı tipleri, `:root` renkleri, JSON-LD
   kimliği, `robots.txt`, `sitemap.xml`, `404.html`, `.htaccess`, favicon seti.
2. **Ana sayfa:** önce mobil, sonra masaüstü (tuvaldeki onaylı tasarım).
3. **Hizmetler** ve 6 hizmet sayfası.
4. **Asansör sistemleri** ve 8 sistem sayfası.
5. **Yeşil etiket** sayfası.
6. **Teklif formu, iletişim,** PHP form betiği ve teşekkür sayfası.
7. **Yasal sayfalar,** çerez onayı, GA ve Meta Pixel (onaylı yükleme).
8. **Blog altyapısı** ve onaylı P1 yazıları.
9. **Hız ve erişilebilirlik testi** (Lighthouse), geçici adreste deneme (`noindex`).
10. **Yayın:** Bölüm 6 kontrol listesi.
11. **İlk 90 gün:** Bölüm 7. Ayda 2–4 yazı, haftalık profil gönderisi, aylık ölçüm.

---

## Kaynaklar

- TSE, Asansör kontrol hizmetleri: https://www.tse.org.tr/asansor-kontrol-hizmetleri/
- Resmî Gazete, Asansör İşletme ve Bakım Yönetmeliği (6.4.2019): https://resmigazete.gov.tr/eskiler/2019/04/20190406-1.htm
- Mevzuat, Asansör İşletme ve Bakım Yönetmeliği: https://www.mevzuat.gov.tr/MevzuatMetin/yonetmelik/7.5.31394.pdf
- Resmî Gazete, 5.8.2025 değişikliği: https://www.resmigazete.gov.tr/eskiler/2025/08/20250805-1.htm
- Mevzuat, Asansör Periyodik Kontrol Yönetmeliği: https://mevzuat.gov.tr/MevzuatMetin/yonetmelik/7.5.24558.pdf
- Asansör Vizyon, 2025 değişiklikleri: https://asansorvizyon.com/s-guncel-asansor-periyodik-kontrol-yonetmeligi-yeniden-duzenlendi-2025-degisiklikleri-ve-gecmis-duzenlemeler-1011-detay.html
- Bayraklı Belediyesi, 2026 periyodik kontrol ücretleri: https://www.bayrakli.bel.tr/duyuru-detay/asansorleri-periyodik-kontrollerine-iliskin-duyuru
- Ankara Ticaret Odası, 2026 azami bakım tarifesi: https://www.atonet.org.tr/Uploads/Birimler/Internet/Hizmetlerimiz/Azami%20Fiyat%20Tarifleri/2026_azami_fiyat_tarifesi/2026_asansor_yuruyen_merdiven_bakim_hizmetleri_azami_fiyat_tarifesi_2026_01_05.pdf
- Posta, 15 yaş üstü asansörler: https://www.posta.com.tr/ekonomi/300-bini-15-yasin-ustunde-asansor-yenileme-ile-yukseliyor-2955186
- Armut, Sancaktepe asansör bakım: https://armut.com/sancaktepe-asansor-bakim
- Armut, Sancaktepe asansör montaj: https://armut.com/sancaktepe-asansor-montaj
- Bilim-San ilçe sayfaları: https://www.bilimsanasansor.com/cekmekoy-asansor-bakimi/index.html
- Kalitas, Sancaktepe sayfası: https://kalitas.dev/sancaktepe-asansor
- Sancaktepe Asansör: https://sancaktepeasansor.com.tr/
- asansorex, Bakım ücretleri 2026: https://asansorex.com/rehber/asansor-bakim-ucretleri-2026
- elevatora, Bakım fiyatları 2026: https://elevatora.com/asansor-bakim-fiyatlari-2026
- Whitespark 2026 özeti: https://seomadman.com/reports/whitespark-local-ranking-factors-2026
- SSS zengin sonucunun kaldırılması: https://www.thehoth.com/blog/google-faq-rich-results-deprecated/
- Yapay zekâ görünürlüğü: https://www.searchenginejournal.com/ai-overview-recommendation-plan-reviewly-spa/587030/
- StatCounter, Türkiye arama motoru payı: https://gs.statcounter.com/search-engine-market-share/all/turkey
- Sonradan asansör (hukuk): https://www.2mhukuk.com/apartmana-asansor-yaptirmak-icin-kac-kat-maliki/
