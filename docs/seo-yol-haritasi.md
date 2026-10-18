# YK Asansör: SEO ve yerel görünürlük yol haritası

Hazırlanma: 18 Ekim 2026. Güncelleme: 18 Ekim 2026 (Chrome ile rakip incelemesi).
Durum: **taslak, kullanıcı onayı bekliyor.**

Bu belge, sitenin yerel aramalarda ("Sancaktepe asansör bakım" gibi), Google Haritalar'da ve
yapay zekâ asistanlarında üst sıralara çıkması için yapılacak işleri üç döneme ayırır:
**kodlamadan önce**, **kodlama sırasında** ve **yayından sonra**. Kodlama bu belgeye göre yapılır.

> **Yöntem notu:** İlk taslak bulut oturumundan, yalnızca web aramasıyla hazırlandı. 18 Ekim 2026'da
> masaüstü oturumundan Chrome ile Google Haritalar (20 arama), Google arama sonuçları, 17 rakip site
> ve YK Asansör'ün Google profili doğrudan incelendi. Ayrıntılar ve tablolar:
> [`docs/rakip-inceleme.md`](rakip-inceleme.md). Bu belgedeki rakip ve harita bilgileri ona göre güncellendi.

---

## 0. Kısa özet

1. **Yerel aramada asıl yarış Google Haritalar'da.** Haritadaki sıralamayı en çok Google
   İşletme Profili (birincil kategori, eksiksiz bilgi, açık/kapalı saatleri) ve **yorumlar**
   belirliyor. Web sitesi bunu destekler ama tek başına yetmez. Profil ve yorum işi siteyi
   beklemeden **bugün** başlayabilir.
   **Mevcut durum (18 Ekim 2026):** YK Asansör Sancaktepe ve Samandıra harita aramalarının 10'unun
   7'sinde ilk 5'te; Google'da "sancaktepe asansör bakım/firması" yerel 3'lü paketinde 3. sırada.
   Montaj aramalarında, Sultanbeyli'de ve ilçesiz genel aramalarda görünmüyor. Profilde web sitesi
   yok, saatler her gün 09:00–17:00, 15 yorum (rakip liderlerde 65–73).
2. **Organik sonuçlarda Sancaktepe ve çevresini ilçe dışı firmaların şablon ilçe sayfaları, ilçe adlı
   alan adı ağları ve Armut tutuyor.** İlk 10'da Sancaktepe'de oturan ve sitesi çalışan firma yok.
   Rakip sitelerin çoğu zayıf: şablon ilçe sayfaları, eski içerik, gerçek fotoğraf ve belge numarası
   yok. Hızlı, mobil uyumlu, gerçek iş fotoğraflı ve 2026'ya güncel bir site bu bölgede kolayca öne geçebilir.
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
| 2 | **Google İşletme Profili'ne yönetici erişimi.** Kararlar verildi (18 Ekim 2026): hizmet 7/24, profil "24 saat açık" yapılacak; resmî Instagram `@ykasansorr` (marka adı kesinleşince değişebilir). | Profilin durumu görüldü (rakip-inceleme.md, Bölüm 5): kategori doğru, adres ve telefon doğru; web sitesi yok, saatler 09–17 ve Instagram'daki "7/24" ile çelişiyor. Ben düzenleyemem ama adım adım tarif ederim. |
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

18 Ekim 2026'daki doğrudan kontrolde (rakip-inceleme.md, Bölüm 3) "sancaktepe asansör bakım",
"sancaktepe asansör firması" ve "sultanbeyli asansör bakım" ilk 10'u şöyle dağıldı:

- **İlçe dışı firmaların ilçe sayfaları** (çoğunluk): Trio Lift, Eren Lift (Pendik), Bilim-San,
  Arken (Avrupa Yakası), Kaon, Meridyen.
- **İlçe adlı alan adı ağları:** `sancaktepeasansor.com.tr` ve `sultanbeyliasansor.com.tr` aynı
  0212 numarasıyla ikisi de 1. sırada; `sancaktepe.asansorr.com` alt alan adı.
- **Platformlar ve dizinler:** Armut (her sorguda 1–2 sonuç), sahibinden hizmetler, asansorfirmalari.com,
  kirlisepeti.com ve **Yandex Haritalar kartları**.
- **Gerçekten Sancaktepe'de olan tek firma** Leon Asansör (2.–3. sırada); sitesi açılmıyor.

**Çıkarım:** Platformlarda **yorumlu, eksiksiz bir profil** aynı aramada birkaç kez görünmek demektir
(Bölüm 7.3). Ama asıl boşluk, gerçek adresli ve gerçek işli yerel bir firma sayfasının olmaması.

### 2.2 Bölgedeki ve yakındaki firmalar

Tam tablo (title, meta, H1, şema, fotoğraf, belge, hız, mobil): rakip-inceleme.md, Bölüm 4.

**Haritada öne çıkanlar** (20 aramanın ilk 5'ine giriş sayısı; tarayıcı konumu Sancaktepe/Ümraniye sınırı):

| Firma | Puan (yorum) | Web | İlk 5'te | Not |
|---|---|---|---|---|
| ERT Asansör | 4,9 (65) | Yok | 15 | 24 saat açık görünüyor. Haritanın lideri. |
| Ayta Asansör | 5,0 (2) | Açılmıyor | 10 | Az yorumla 1. sıralar: yakınlık etkisi. |
| Lineer Asansör | 5,0 (10) | Var | 9 | |
| Vega Asansör | 4,4 (14) | Yok | 8 | |
| **YK Asansör** | **5,0 (15)** | **Yok** | **7** | Sancaktepe ve Samandıra'da; montaj, Sultanbeyli ve ilçesiz aramalarda yok. |
| Güneş Asansör | 5,0 (5) | Var | 5 | Montaj ve Samandıra'da güçlü. Doğrudan rakip. |
| "Asansör bakım ve arıza servisi", Özkoçsan, Teknotek | 5,0 (31) · 5,0 (35) · 5,0 (73) | Yalnız Teknotek | Sultanbeyli'de | Sultanbeyli haritasını yerel firmalar tutuyor. |
| Enes Asansör Mühendislik | 4,3 (24) | Var | Reklam | 20 aramanın 20'sinde reklam. |

**Organikte ve listede adı geçen siteler:**

| Firma | Konum / kapsam | Doğrudan inceleme (18 Ekim 2026) |
|-------|----------------|-------------------------------------|
| Sancaktepe Asansör (`sancaktepeasansor.com.tr`) | Bahçelievler (0212) | İlçe adlı alan adı; aynı numara `sultanbeyliasansor.com.tr`'de. WordPress, H1 ve meta açıklama yok, stok fotoğraf, 2023'ten beri güncellenmemiş. Yine de organikte 1. |
| Kalitas Mühendislik (`kalitas.dev`) | ~40 şablon ilçe sayfası | Aynı metin, ilçe adı değişiyor. Meta açıklama yok, 3 H1, telefon tıklanamıyor. |
| Bilim-San Asansör (`bilimsanasansor.com`) | Kadıköy kökenli, Anadolu Yakası | 14 ilçe kategorisi, WordPress 5.3 (eski), "Belgeler" ve "Asansör Muayene Eksikleri" sayfaları. Meta açıklama yok. |
| Fia Lift (`fialift.com.tr`) | **Ankara** (0312) | Türkiye geneli 1.002 programatik "X asansör bakım/firması" yazısı; Sancaktepe sayfası 2020 tarihli. |
| EMAS Asansör (`emasasansor.com/sancaktepe/`) | 13 ilçe sayfası | Yeni, çok hafif, LocalBusiness şeması var; hiç fotoğraf yok. |
| Leon Asansör (`asansorservis.biz.tr`) | Sancaktepe | **Site açılmıyor** (sertifika hatası). Organikte 2.–3., haritada 4,2 (10). |
| Trio Lift (`triolift.com`) | İlçe sayfaları, 0850 | En iyi kurgulanmış ilçe sayfası (bina tipine göre yaklaşım, mahalleler, SSS); adres ve fotoğraf yok. |
| Özhisar (Kartal) | 9 ilçe sayfası | Modern statik site; Org + LocalBusiness + FAQPage şeması. Hiç fotoğraf yok, yorumlar baş harfli. |
| Lina (Kağıthane) | İstanbul geneli | Blog var (etiketler, yönetmelik, sınıflar). Meta açıklama kelime listesi, sayfa 5 MB. |
| Meridyen | İstanbul geneli, ilçe sayfaları | Çok zengin şema (LocalBusiness, Service, FAQPage); görseller yapay zekâ üretimi görünümlü. |
| Detay Lift, Isas, Saysa, Axel | Sancaktepe, Samandıra, Sarıgazi, Sultanbeyli | İlk taslakta dizinlerden derlendi; bu kontrolde haritanın ilk 5'inde görünmediler. |

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
3. **Gerçek kanıt yok.** İncelenen 17 sitenin hiçbirinde belge numarası yok. Fotoğraflar stok,
   yapay zekâ üretimi ya da hiç yok (EMAS, Özhisar, Trio Lift'te tek fotoğraf yok). Yorumlar
   doğrulanamaz (baş harfli avatarlar).
4. **Hız ve teknik bakım.** Çoğu 0,5–5 MB WordPress sitesi. İki rakibin sitesi hiç açılmıyor (Leon,
   Ayta), birçoğunda meta açıklama veya düzgün H1 yok, LocalBusiness şeması yalnızca 3 sitede.
   Bizim derlemesiz HTML sitemiz doğal olarak hızlı olacak (Core Web Vitals avantajı).
5. **Fiyat şeffaflığı yok.** "Teklif nasıl okunur?" ve "fiyatı ne belirler?" yazıları güven kazandırır.

Tam fırsat listesi: rakip-inceleme.md, Bölüm 6.

### 2.5 Harita sıralaması: başlangıç ölçümü

**Yapıldı (18 Ekim 2026).** 5 arama (`asansör bakım`, `asansör firması`, `asansör servisi`,
`asansör montaj`, `asansör tamiri`) hem tek başına hem "Sancaktepe", "Sultanbeyli", "Samandıra"
eklenerek Google Haritalar'da; 5 yerel ve bilgi araması normal Google'da kontrol edildi. Sonuçlar
rakip-inceleme.md, Bölüm 2 ve 3'te. Bu, başlangıç noktamız; **3 ayda bir aynı aramalarla tekrarlanır**
(masaüstü oturumundan Chrome ile ben yapabilirim). Not: harita sonuçları aramanın yapıldığı konuma göre
değişir; karşılaştırmalar aynı yerden yapılmalı.

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

`CLAUDE.md` kararına göre yerel SEO ayrı ve özgün blog yazılarıyla, aşama aşama ve her aşama onaydan
sonra yapılır: **(1) Sancaktepe** ana yazısı (taslak: `docs/blog-taslaklari/sancaktepe-asansor-bakimi.md`)
→ **(2) Samandıra, Sarıgazi, Yenidoğan** (Sancaktepe'nin semtleri) → **(3) çevre ilçeler**, yakından uzağa:
Sultanbeyli, Çekmeköy, Ümraniye, Ataşehir, Kartal, Maltepe, Pendik, sonra Üsküdar, Kadıköy, Tuzla, Beykoz.
Sınır İstanbul Anadolu Yakası.

**Beklenti:** İlçe yazıları organik aramada (ilk 10 sonuç) yardımcı olur; Haritalar sıralaması ise
uzaklığa bağlı olduğu için ofisten uzaklaştıkça yazıların harita etkisi azalır. İstanbul geneli
görünürlük, yer adı içermeyen bilgi yazılarıyla (etiket renkleri, bakım ücretleri, kırmızı etiket,
sonradan asansör…) hedeflenir; bu yazılar her ilçeden ve Türkiye genelinden gelen aramalarda çıkabilir.

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
| Sancaktepe'de asansör bakımı: bina yöneticisi neleri bilmeli? | **Taslak hazır** (18 Ekim 2026, gerçek iş bilgileri bekleniyor). Bina tipleri, yasal sorumluluk, periyodik kontrol, yıllık takvim, firma seçimi. |
| Samandıra'da asansör: yeni binalar ve bakım | Yeni yapılaşma, montaj ve bakım geçişi. |
| Sultanbeyli'de eski apartmana asansör ve modernizasyon | Sonradan asansör, revizyon. |
| Sarıgazi'de asansör arıza ve bakım hizmeti | Arıza belirtileri, hızlı müdahale. |
| Yenidoğan'da asansör periyodik kontrol hazırlığı | Etiket alma süreci, eksik giderme. |

Açılar örnektir. Gerçek işlere göre değiştirilir; her yazı **farklı** bir ana konuya odaklanır.

### 4.2 Bilgi yazıları (öncelik sırası)

**Yayında hazır olsun (P1):**

1. **Asansör etiket renkleri: yeşil, mavi, sarı ve kırmızı ne anlama gelir?**
   Hedef: "asansör etiket renkleri", "mavi etiket asansör". Bağlantı: yeşil etiket sayfası.
   Aramada en üstte görsel paketi ve AI Bakışı var (küçük firma bloglarını alıntılıyor). Yazıya
   kendi tasarımımız bir **etiket renkleri infografiği** (anlamlı dosya adı ve `alt` metni) ve net
   bir tablo konur. "Diğer sorular"daki sorular SSS olur: Etiket hangi renk olmalı? Mavi etiket kaç
   yıl geçerli? Mavi etiketli asansör ne demek? Sarı etiketli asansöre binilir mi?
2. **Asansör bakım ücretleri 2026: fiyatı neler belirler, teklif nasıl okunur?**
   Durak sayısı, kapasite, marka, sözleşme kapsamı, KDV. Aramada 1. sonuç ve AI Bakışı'nın kaynağı
   **TASİAD 2026 tavsiye tarifesi**; yanında ATO ve EBSO (İzmir) 2026 azami tarifeleri çıkıyor. Yazı
   üçünü yan yana, kaynaklı ve "yedek parça dahil mi?" notuyla verir (Bölüm 8). Kesin İstanbul fiyatı
   yazılmaz; teklif çağrısı yapılır. Alt başlıklar: "Bakım ücretini kim öder?", "Periyodik kontrol
   ücreti ne kadar?" (ikisi de aramada "Diğer sorular"da).
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
  Şu an profil her gün 09:00–17:00 ve akşam "Kapalı" görünüyor; harita liderlerinden ERT, Aksoy ve Ayta
  "24 saat açık". 7/24 hat gerçekten açıksa profil buna göre ayarlanır.
- **Web sitesi:** Şu an boş. Yayın günü UTM'li bağlantı eklenir (Bölüm 5.6).
- **Hizmetler listesi:** Sitedeki 6 hizmet, açıklamalarıyla. Özellikle **montaj**: YK montaj
  aramalarında hiç görünmüyor.
- **Fotoğraflar:** Ayda en az 4–8 yeni gerçek iş fotoğrafı; logo ve kapak. Şu an ~6 fotoğraf var, çoğu
  tasarım afiş; afiş yerine iş fotoğrafı (makine dairesi, kabin, montaj, ekip, araç).
- **Posta kodu:** Profilde 34000 görünüyor; doğru Sancaktepe posta koduyla düzeltilsin.
- **Gönderiler:** Haftada 1 (tamamlanan iş, kampanya, etiket dönemi hatırlatması).

### 7.2 Yorumlar

- **Hedef:** Her ay düzenli yorum (ör. ayda 4–8). Tek seferde çok yorum gelip sonra kesilmesi
  yerine sürekli akış önemli.
- **Nasıl:** Profilin "yorum iste" kısa bağlantısı. İş bitince WhatsApp'tan gönderilir,
  teknisyen kartında ve bakım föyünde QR kod olarak yer alır.
- Müşteriden **ne iş yapıldığını** kendi cümleleriyle yazmasını rica et ("aylık bakım", "kapı
  arızası", "montaj"…). Bu, yorumu hem okuyan için hem Google için daha anlamlı yapar.
- **Hazır metin verilmez.** Profilde iki yorumun metni birebir aynı (18 Ekim 2026). Google aynı metinli
  yorumları spam sayıp kaldırabilir; her müşteri kendi yorumunu yazmalı.
- **Kıyas:** YK 15 yorum (5,0). Harita liderleri ERT 65, Skyline 70, Teknotek 73. İlk 3 ay hedefi 40+.
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

**Mevcut kayıtlarda düzeltilecekler (18 Ekim 2026'da görülen):**

- `asansorfirmalari.com` YK'yı "Altınordu Cd. 43/2" adresiyle listeliyor; doğrusu 38-40/A.
- Instagram'da iki hesap (`@ykasansorr`, `yk.asansorr`) ve bir gönderide ikinci numara (0535 721 …)
  görünüyor. Tek resmî hesap ve tek numara kalmalı.
- Yandex Haritalar kartları Google organik sonuçlarında çıkıyor (Saysa, "Asansör bakım ve arıza
  servisi"); Yandex Business kaydının önceliği doğrulandı.

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
| Etiket süreleri | Kaynaklar çelişiyor (kırmızı için 30 mi 60 gün mü; sarı 60 mı 120 gün mü; mavi bir sonraki kontrole kadar mı, 1 yıl mı). Google AI Bakışı (18 Ekim 2026) mavi için 12 ay, sarı için 60 gün diyor; kaynağı firma blogları. | **Yazmadan önce yönetmelik metninden doğrulanacak** |
| Bakım firması belgesi | Yönetmeliğe göre bakım servisi TS 12255 kapsamında **TSE Hizmet Yeterlilik Belgesi** sahibi olmalı. | Doğrulandı (Resmî Gazete metni) |
| Aylık bakım | Bina sorumlusu ayda en az bir bakım yaptırmakla yükümlü. Bakım firması, bina sorumlusunun belirlediği kişilere kurtarma eğitimi verir. | Kaynaklar uyumlu; madde numarası metinden doğrulanacak |
| Periyodik kontrol ücreti 2026 | Belediyeye göre değişiyor. Bakanlık taban ve tavan ücreti belirliyor; ör. Bayraklı 2026, 0–5 durak: 4.049,76 TL (KDV dahil). Tescil öncesi ilk kontrol 3 katı. | İstanbul'daki belediyeler için ayrıca bakılacak |
| Bakım ücreti 2026 | Tek ulusal fiyat yok. **TASİAD 2026 tavsiye tarifesi** (aylık, KDV hariç, 7 durağa kadar; Google'da 1. sonuç ve AI Bakışı'nın kaynağı): Sınıf I insan 3.000 TL, Sınıf II insan-yük 3.500 TL, Sınıf III hastane 5.750 TL, Sınıf IV yük 6.500 TL, Sınıf V servis 2.500 TL, Sınıf VI yüksek hız 15.000 TL; yedek parça dahil değil. Ankara Ticaret Odası 2026 azami tarifesi: 1600 kg ve altı, 2–10 durak, aylık 1.775,31 TL + KDV (yalnız Ankara merkez). EBSO (İzmir) 2026 azami tarifesi de var. İTO tarifesi bulunamadı. | TASİAD rakamları AI Bakışı'ndan alındı; yazmadan önce tasiad.org.tr ve EBSO PDF'inden okunacak. Yazıda "örnek" olarak, kaynakla |
| Sonradan asansör | Genelde "faydalı yenilik" sayılıp sayı ve arsa payı çoğunluğu yeterli görülüyor; projede asansör yoksa farklı görüşler var (4/5, oybirliği). | Hukuki: "avukata danışın" notuyla genel bilgi |
| Asansör yaşı | Türkiye'deki 1 milyon asansörün 300 binden fazlası 15 yaşın üzerinde (KONE verisi, Posta). | Modernizasyon yazısında kullanılabilir |

---

## 9. Önerilen çalışma sırası

**Şimdi (koddan bağımsız, sen):**

- Bölüm 1'deki bilgiler ve kararlar: önce marka adı ve alan adı.
- Google profili: saatler (7/24 kararı), hizmetler listesi (montaj dahil), gerçek iş fotoğrafları,
  posta kodu. Yorum toplamaya başla (hazır metin vermeden). Ben adım adım yönlendiririm.
- NAP temizliği: asansorfirmalari.com adres düzeltmesi, tek Instagram hesabı (Bölüm 7.3).
- ~~Bölüm 2.5'teki harita ekran görüntüleri~~: 18 Ekim 2026'da Chrome ile yapıldı.

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
- Rakip ve arama sonucu incelemesi (18 Ekim 2026): [`docs/rakip-inceleme.md`](rakip-inceleme.md)
- TASİAD, 2026 tavsiye edilen bakım fiyatları: https://tasiad.org.tr/2026-yili-icin-onerilen-asansor-bakim-fiyatlari/
- EBSO, 2026 asansör bakım azami fiyat tarifesi: https://static.ebso.org.tr/contentfiles/asansor_fiyat_tarife_2026.pdf
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
