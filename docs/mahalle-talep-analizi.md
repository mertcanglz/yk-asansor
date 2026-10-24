# Sancaktepe mahalleleri: arama talebi analizi

İnceleme: 18–19 Ekim 2026. Amaç: Sancaktepe'nin her mahallesi için ayrı blog yazısı açmaya değer mi, yoksa
yalnızca en çok aranan semt ve mahalleler için mi yazalım?

## 1. Arama hacmini nasıl görebiliriz?

| Yöntem | Ne verir? | Mahalle düzeyinde işe yarar mı? | Durum |
|---|---|---|---|
| **Google Ads Anahtar Kelime Planlayıcı** | Aylık arama hacmi (reklam harcaması yoksa "10–100" gibi aralıklar) | Kısmen. Çok düşük hacimli aramalarda "0" veya "veri yok" gösterir. | Google Ads hesabı gerekir. Hesap varsa ve Chrome'da açıksa ben bakabilirim (hiçbir ayara dokunmadan); yoksa hesap açmayı senin yapman gerekir. |
| **Google otomatik tamamlama** (arama kutusunun önerileri) | Hacim vermez; ama Google bir aramayı öneriyorsa o arama yeterince sık yapılıyor demektir. | Evet, iyi bir eleme yöntemi. | **Yapıldı** (Bölüm 3). |
| **Google Trends** | Göreli ilgi | Hayır. İlçe-mahalle düzeyinde "yeterli veri yok" verir. | – |
| **Ücretli araçlar** (Ahrefs, Semrush) | Tahmini hacim | Zayıf. Türkçe yerel aramalarda mahalle düzeyinde çoğunlukla 0–10 gösterir. | Önerilmez. |
| **Google Search Console** (site yayınlandıktan sonra) | Sitemizin gerçekten hangi aramalarda göründüğü ve kaç kez | **En güvenilir kaynak.** Gerçek veri. | Yayından 2–3 ay sonra karar vermek için kullanılacak. |

## 2. Mahalleler ve nüfusları

Resmî mahalle sayısı **19** (Vikipedi, Sancaktepe maddesi). **Samandıra mahalle değil, semttir** (eski belde
adı). Nüfuslar ADNKS 2025 (nufusune.com; mahalle toplamı ilçe toplamı 507.500 ile tutuyor, TÜİK'ten ayrıca
teyit edilmedi).

| # | Mahalle | Nüfus (2025) | Not |
|---|---|---|---|
| 1 | Osmangazi | 54.014 | Ad, Bursa'daki Osmangazi ilçesiyle çakışıyor |
| 2 | Abdurrahmangazi | 49.460 | **Ofisimizin bulunduğu mahalle** |
| 3 | Fatih | 38.699 | Ad, İstanbul'un Fatih ilçesiyle çakışıyor |
| 4 | Atatürk | 31.919 | Ad çok yaygın |
| 5 | Yunus Emre | 29.360 | Ad yaygın |
| 6 | Meclis | 27.568 | |
| 7 | Emek | 27.320 | "Emek Asansör" adlı firmalarla çakışıyor |
| 8 | Veysel Karani | 26.847 | |
| 9 | Akpınar | 25.286 | |
| 10 | Yenidoğan | 25.082 | Eski belde adı |
| 11 | Safa | 25.062 | |
| 12 | İnönü | 24.157 | |
| 13 | Eyüp Sultan | 24.066 | Ad, Eyüpsultan ilçesiyle çakışıyor |
| 14 | Sarıgazi | 23.865 | Eski belde adı |
| 15 | Mevlana | 22.651 | |
| 16 | Kemal Türkler | 22.647 | |
| 17 | Merve | 21.451 | |
| 18 | Hilal | 6.277 | |
| 19 | Paşaköy | 1.769 | |

## 3. Otomatik tamamlama sonuçları

Her ad için 4 arama denendi: "X asansör", "X asansör bakım", "X mahallesi asansör", "sancaktepe X asansör".
Yalnızca adı ve "asansör"ü birlikte içeren öneriler sayıldı (Chrome, 19 Ekim 2026).

| Ad | Sancaktepe ile ilgili öneri | Değerlendirme |
|---|---|---|
| **Samandıra** (semt) | "samandıra asansör", "samandıra kiralık asansör" | **Talep var.** |
| **Sarıgazi** | "sarıgazi asansör firmaları" | **Talep var.** |
| Yenidoğan | Yok | Talep görünmüyor. |
| Osmangazi | Yok (öneriler Bursa Osmangazi'ye ait) | Ad çakışması. |
| Abdurrahmangazi | Yok | Talep görünmüyor. |
| Fatih, Emek, Safa, Akpınar, Hilal | Yok (öneriler aynı adlı firmalara veya başka şehirlere ait) | Ad çakışması. |
| Atatürk, Yunus Emre, Meclis, Veysel Karani, İnönü, Eyüp Sultan, Mevlana, Kemal Türkler, Merve, Paşaköy | Yok | Talep görünmüyor. |

Karşılaştırma için "sancaktepe asansör" araması 8 öneri veriyor: firmaları, bakım, kiralama, **belediyesi
asansör muayene** gibi. Yani ilçe düzeyinde talep açık; mahalle düzeyinde neredeyse yok.

## 3b. Arama hacmi araçları (19 Ekim 2026)

| Araç | Sonuç | Sınır |
|---|---|---|
| **Ubersuggest** (Türkiye, Türkçe; Google verisi) | "sancaktepe asansör" **30/ay** (SEO zorluğu 22, düşük; tıklama başı reklam maliyeti ₺51,49) · "sancaktepe asansör firmaları" **90/ay** · "sancaktepe asansörlü nakliyat" 10 · "kahvecioğlu asansör sancaktepe" 10 · "sancaktepe asansör kiralama yorumları" 0 | Kayıtsız kullanımda tek arama hakkı; kayıtla günde 3 arama. Hesap açmayı ben yapamam. |
| **Ahrefs ücretsiz anahtar kelime aracı** (Türkiye) | "sancaktepe asansör firmaları", "sancaktepe asansör tamiri": **<100/ay** | Yalnızca kaba aralık gösteriyor. |
| **Google Ads Anahtar Kelime Planlayıcı** | Aşağıda (Bölüm 3c). | – |

**Okuma:** Ubersuggest ve Ahrefs, Planlayıcı ile aynı sonucu veriyor.

## 3c. Google Ads Anahtar Kelime Planlayıcı (19 Ekim 2026)

Kullanıcının yönettiği "Alfa Spor Kulübü" Ads hesabıyla, kullanıcı izniyle bakıldı. Konum **Türkiye**, tüm
diller, Google araması, **son 12 ay (Ekim 2025 – Eylül 2026)** ortalaması. Hiçbir ayar, kampanya veya
fatura değiştirilmedi. Not: Planlayıcı her hacim sorgusunda hesapta otomatik bir taslak plan oluşturur; bu incelemede oluşan iki
taslak plan kullanıcının isteğiyle 19 Ekim 2026'da kaldırıldı.

**Sorgulanan:** 165 kelime: 19 mahalle + Samandıra + Sancaktepe; her biri için "X asansör", "X asansör bakım",
"X asansör firması", "X asansör servisi", "X asansör tamiri", "X asansör montaj"; ayrıca "X mahallesi
asansör" ve "sancaktepe X asansör"; karşılaştırma için birkaç genel kelime.

**Hacmi olan kelimeler** (geri kalan 157 kelime "—" = ölçülemeyecek kadar düşük, pratikte ayda 0–10):

| Kelime | Ort. aylık arama | Not |
|---|---|---|
| sancaktepe asansör firmaları | **90** | Sancaktepe'deki en güçlü sorgu |
| sancaktepe asansör | **30** | |
| fatih asansör | 110 | Firma adı ve Fatih ilçesi aramaları; Sancaktepe'nin Fatih Mahallesi'yle ilgisi yok |
| emek asansör | 90 | "Emek Asansör" adlı firmalar (Samsun, Kayseri, Diyarbakır…) |
| hilal asansör | 70 | "Hilal Asansör" adlı firmalar |
| akpınar asansör | 20 | "Akpınar Asansör" (Aksaray) firması |
| çekmeköy asansör | 90 | Karşılaştırma için (komşu ilçe) |
| asansör bakım | 135.000 | Karşılaştırma için; Planlayıcı %149.900 artış gösteriyor, veri tutarsız görünüyor, dikkate alınmadı |

**Samandıra, Sarıgazi, Yenidoğan ve 19 mahallenin tüm varyantları: "—".** "sancaktepe asansör bakım",
"sancaktepe asansör tamiri", "sancaktepe asansör montaj" da "—".

**Anahtar kelime fikirleri** ("sancaktepe asansör", "samandıra asansör", "sarıgazi asansör" tohumlarıyla):
Google yalnızca 7 sorgu önerdi: sancaktepe asansör firmaları 90, sancaktepe asansör 30, bsb asansör
sancaktepe 10, gts asansör sancaktepe 10, kahvecioğlu asansör sancaktepe 10 (son üçü firma adı), samandıra
asansör "—", sarıgazi asansör "—".

**Okuma:** Sancaktepe'de "asansör + yer adı" ile yapılan aramaların toplamı ayda yaklaşık **120–150**.
Neredeyse tamamı ilçe adıyla yapılıyor; semt ve mahalle adıyla yapılan aramalar ölçülemeyecek kadar az.
Bölgedeki asıl talep yer adı yazılmadan yapılan "asansör bakım", "asansör servisi" gibi aramalarda; Google bu
aramalarda kullanıcının konumuna göre **Haritalar** sonucunu gösteriyor. Yani bölgedeki müşteriye en çok
**Google İşletme Profili** ve sitenin kendisi ulaştırır, mahalle yazıları değil.

## 4. Sonuç ve öneri

1. **19 mahallenin her birine ayrı yazı açmak mantıklı değil.** Planlayıcı 19 mahallenin hiçbirinde ölçülebilir
   arama göstermiyor. Yer adı değişen 19 yazı blog alanını doldurur, trafik getirmez ve Google'ın "doorway"
   (kapı sayfası) kalıbına benzeyip sitenin geneline zarar verebilir.
2. **Sancaktepe ana yazısı yeterli ve doğru hedef:** Ölçülen talebin neredeyse tamamı "sancaktepe asansör
   (firmaları)" aramasında. Ana yazının title'ı ve H1'i bunu zaten hedefliyor.
3. **Samandıra ve Sarıgazi semt yazıları ertelensin:** Otomatik tamamlamada görünüyorlar ama Planlayıcı'da
   hacim yok. Site yayına girip Search Console'da bu adlarla gösterim görülürse yazılır.
4. **Yenidoğan ve diğer mahalleler:** Yalnızca Search Console'da düzenli gösterim görülürse.
5. **Büyük mahalleler** (Osmangazi, Abdurrahmangazi, Fatih) Sancaktepe ana yazısında doğal biçimde anılabilir.
   Osmangazi, Fatih, Emek, Hilal, Akpınar gibi adlarla yapılan aramalar başka ilçelere veya firma adlarına ait;
   bu adlarla ayrı yazı yanlış kitleyi çeker.
6. **Karar kuralı (yayından sonra):** Search Console'da bir semt veya mahalle adı + asansör araması 3 ay boyunca
   ayda 20+ gösterim alıyorsa o yer için özgün bir yazı açılır.
7. **Öncelik:** Bölgedeki asıl talep Haritalar'da. Sıradaki en etkili işler: siteyi yayına almak ve Google
   İşletme Profili'ne bağlamak, profilde "24 saat açık" ve hizmet listesi, yorum akışı (yol haritası 7.1–7.2).

## 5. Karar: mahalleler iptal, yakın ilçeler ve bilindik semtler (19 Ekim 2026)

Kullanıcı kararı: **mahalle yazıları iptal.** Ana bölgemiz Sancaktepe ve çok yakın ilçeler (Çekmeköy, Sultanbeyli,
Ümraniye) ile bu ilçelerin **bilindik büyük semtleri** için birer yazı açılacak.

### 5.1 Yakın ilçeler ve semtler: Planlayıcı hacimleri

Google Ads Anahtar Kelime Planlayıcı, Türkiye, son 12 ay. "—" = ölçülemeyecek kadar düşük.

| Yer | Hacmi olan aramalar | Toplam (≈ aylık) |
|---|---|---|
| **Ümraniye** (ilçe) | ümraniye asansör firmaları 110 · ümraniye asansör 40 · ümraniye asansör servisi 10 | **~160** |
| **Çekmeköy** (ilçe) | çekmeköy asansör 90 · çekmeköy asansör firmaları 50 | **~140** |
| **Sancaktepe** (ilçe) | sancaktepe asansör firmaları 90 · sancaktepe asansör 30 | **~120** |
| **Sultanbeyli** (ilçe) | sultanbeyli asansör firmaları 70 | **~70** |
| Dudullu (Ümraniye, semt) | dudullu asansör firmaları 20 | ~20 |
| Taşdelen (Çekmeköy) | taşdelen asansör 10 | ~10 |
| Çakmak (Ümraniye) | çakmak asansör 50 | Büyük olasılıkla "Çakmak Asansör" firma adı aramaları; semt talebi belirsiz |
| Samandıra, Sarıgazi, Yenidoğan (Sancaktepe) | — (otomatik tamamlamada Samandıra ve Sarıgazi görünüyor) | <10 |
| Alemdağ, Ömerli (Çekmeköy) | — | <10 |
| Tepeüstü, Şerifali, Atakent, Ihlamurkuyu, Esenşehir, Altınşehir, Madenler, Yamanevler (Ümraniye) | — | <10 |

İlçe adlarının resmî dayanakları: Çekmeköy 5747 sayılı Kanun'la (RG 22.3.2008) kuruldu; Alemdağ, Taşdelen ve
Ömerli dahil edildi, 21 mahalle. Ümraniye 35 mahalle; Dudullu bir semt (Yukarıdudullu ve Aşağıdudullu
mahalleleri). Sultanbeyli 1992'de (3806 sayılı Kanun) ilçe oldu, 15 mahalle; mahalle dışında bilinen bir semt
adı yok (Vikipedi). Periyodik kontrol: Royalcert protokol listesinde Sancaktepe (2024–2028) ve Ümraniye
(2024–2030) var; Çekmeköy ve Sultanbeyli yazı sırası gelince bakılacak.

### 5.2 Yazı listesi: ilçeler ve altındaki semtler (kullanıcı onayladı, 19 Ekim 2026)

Sayılar: Google Ads Planlayıcı, Türkiye, son 12 ay, ilçe + "asansör" aramalarının toplamı (≈ aylık). Semtlerin
çoğunda ölçülebilir hacim yok; kullanıcı bilindik semtler için yine de yazı istedi. Taslak dosyaları
`docs/blog-taslaklari/` altında.

Tüm ilçe ve semt yazıları aynı 12 başlığı taşır (kullanıcı kararı, 24 Ekim 2026); semtlere ayrı ana konu verilmez.
Aşağıdaki "yerel not", o yerin "binalar" bölümünde ve ilgili başlıkta öne çıkan doğrulanmış ya da sahaya dayalı bilgidir.

**1. Sancaktepe** (~120) · `sancaktepe-asansor.md` · yerel not: ilçenin kuruluşu ve tarihçesi (yalnızca bu yazıda)
- Samandıra · `samandira-asansor.md` · yerel not: eski apartman ve yeni site; kontrol öncesi hazırlık
- Sarıgazi · `sarigazi-asansor.md` · yerel not: eski asansörlerde mekanik, yenilerde elektronik arızalar
- Yenidoğan · `yenidogan-asansor.md` · yerel not: apartman yöneticilerinin sözleşme ve firma değiştirme soruları

**2. Ümraniye** (~160) · `umraniye-asansor.md` · yerel not: iş merkezleri, hastaneler, AVM'ler, yoğun binalar
- Dudullu (~20) · `dudullu-asansor.md` · yerel not: Dudullu OSB ve sanayi binalarında yük asansörleri
- Çakmak · `cakmak-asansor.md` · yerel not: apartman ağırlıklı; kapı şikâyetleri
- Şerifali · `serifali-asansor.md` · yerel not: yeni binalarda makine dairesiz, dişlisiz sistemler
- Tepeüstü · `tepeustu-asansor.md` · yerel not: eski binalarda erişim engelleri, uzun süren arızalar

**3. Çekmeköy** (~140) · `cekmekoy-asansor.md` · yerel not: çok bloklu siteler, villa ve müstakil evler
- Taşdelen (~10) · `tasdelen-asansor.md` · yerel not: yeni konut projeleri; teslim alma ve garanti
- Alemdağ · `alemdag-asansor.md` · yerel not: az katlı binalarda ve villalarda hidrolik asansörler
- Ömerli · `omerli-asansor.md` · yerel not: seyrek yapılaşma, villalar; elektrik kesintisi

**4. Sultanbeyli** (~70) · `sultanbeyli-asansor.md` · yerel not: eski apartmanlar; onarım mı yenileme mi
- Mahalle dışında bilinen semt yok

**5. Maltepe** (~90: maltepe asansör firmaları 50, maltepe asansör 30, servisi 10) · `maltepe-asansor.md` · yerel not:
asansörsüz 4–5 katlı apartmanlar; sonradan asansör
- Küçükyalı · `kucukyali-asansor.md` · yerel not: eksikleri biriken eski asansörler; kırmızı etiket süreci
- İdealtepe · `idealtepe-asansor.md` · yerel not: firma değiştirme ve teklif karşılaştırma
- Cevizli · `cevizli-asansor.md` · yerel not: eskimiş kabinler; Kartal'daki Cevizli ile karışmaması için not
- Başıbüyük · `basibuyuk-asansor.md` · yerel not: yeniden yapılan binalarda asansör kararları
- Seçilmeyenler: Bağlarbaşı, Altayçeşme, Zümrütevler ve diğer mahalleler (hacim yok; "çınar asansör" 170 ve
  "yalı asansör" 20 aynı adlı firmalara ait)

**Periyodik kontrol kuruluşları (doğrulandı):** Sancaktepe Royalcert (2024–2028), Ümraniye Royalcert (2024–2030),
Çekmeköy Akreditest (20.05.2025–20.05.2029; kuruluşun protokol listesi), Sultanbeyli IQNORM (kuruluşun başvuru formunda
Sultanbeyli Belediyesi var; tarih birincil kaynakta görülmedi), Maltepe TMMOB Makina Mühendisleri Odası İstanbul Şubesi
(protokol 6 Şubat 2026; MMO haberi).

**Durum (24 Ekim 2026):** 19 yer taslağı ortak 12 başlığa getirildi (eski "öne çıkan bölüm"ler ilgili başlıkların içine
alındı). Konu yazılarındaki semt göndermeleri kaldırıldı. Kullanıcı onayı bekleniyor (işletme sahibi toplu okuyacak).

Aynı metin yer adı değiştirilerek kullanılmaz: her yazı ilgili ilçenin doğrulanmış yerel bilgisini (muayene kuruluşu,
bina dokusu) taşır ve ayrı yazılır. Semt yazıları bağlı oldukları ilçe yazısına bağlanır.

### 5.3 Kartal ve yakın ilçeler (kullanıcı onayladı, 24 Ekim 2026)

Planlayıcı (Türkiye, son 12 ay, ≈ aylık; "—" = 10'un altında; 21 Ekim 2026'da ölçüldü, taslak plan kaldırıldı):

| Yer | Hacmi olan aramalar | Toplam |
|---|---|---|
| **Kartal** | kartal asansör firmaları 110 · kartal asansör 70 | **~180** |
| **Ataşehir** | ataşehir asansör firmaları 110 · ataşehir asansör 50 | **~160** |
| **Pendik** | pendik asansör firmaları 90 · pendik asansör 50 | **~140** |
| Yakacık (Kartal) | yakacık asansör 20 | ~20 |
| Dragos (Kartal) | dragos asansör 10 | ~10 |
| Soğanlık, Orhantepe, Atalar, Topselvi, Uğur Mumcu, Esentepe (Kartal) | — | <10 |
| Kurtköy (Pendik) 10 · Kaynarca, Güzelyalı, Çamçeşme, Esenyalı, Velibaba, Yenişehir | — | ≤10 |
| Barbaros 10, Örnek 10 (genel kelimeler, semt talebi belirsiz) · Kayışdağı, İçerenköy, Küçükbakkalköy, Yenisahra, Ferhatpaşa, Kozyatağı (Ataşehir) | — | ≤10 |
| Diğer ilçeler (sonraki aşama) | tuzla asansör 30 · kadıköy asansör 20 · üsküdar asansör 20 · beykoz — | |

Kartal'ın komşuları Maltepe, Sancaktepe, Sultanbeyli (yazıldı) ve Pendik. Ataşehir Sancaktepe'ye komşu.
Kartal 20 mahalle; bilinen semtler Kartal Merkez, Soğanlık, Yakacık, Dragos (Vikipedi).

**6. Kartal** (~180) · `kartal-asansor.md` · yerel not: MMO ve belediyenin 2026 kontrol ücret tablosu; Marmaray, M4,
Anadolu Adliyesi, yeni rezidanslar; Kartal Cevizli notu
- Yakacık (~20) · `yakacik-asansor.md` · yerel not: tepelik semt, ara kattan girişli binalar, durak sayısı
- Soğanlık · `soganlik-asansor.md` · yerel not: E-5'in kuzeyi, Gümüşpınar/Soğanlık Yeni/Orta mahalleleri
- Dragos (~10) · `dragos-asansor.md` · yerel not: Orhantepe'de eski sayfiye semti; villa asansörü, deniz havası

**7. Pendik** (~140) · `pendik-asansor.md` · yerel not: SDS Muayene ve 2026 ücret tablosu; tersane sonrası
apartmanlaşma, Kurtköy ve Kaynarca siteleri, Sabiha Gökçen

**8. Ataşehir** (~160) · `atasehir-asansor.md` · yerel not: AND Denetim; yüksek binalar ve yangın yönetmeliğindeki acil
durum asansörü (m. 63); mühür açma için belediyenin istediği belgeler

Pendik ve Ataşehir semtlerinde ölçülebilir hacim yok; semt yazısı yok (istenirse Kurtköy eklenebilir).

**Periyodik kontrol kuruluşları (doğrulandı, 21–24 Ekim 2026):**
- Kartal: TMMOB Makina Mühendisleri Odası (belediyenin asansör tescil sayfası; protokol 2014'te imzalandı, MMO haberi).
  Belediye sayfasında 1.1.2026–1.1.2027 ücretleri (KDV dahil): 0–5 durak 4.049 TL, 6–10 durak 4.755 TL, 11–15 durak
  5.707 TL, 16–20 durak 6.660 TL, 21–25 durak 7.613 TL, 26–30 durak 8.564 TL, 31 ve üstü 11.907 TL.
- Pendik: SDS Muayene, 01.03.2025–01.03.2030 (kuruluşun anlaşmalı belediyeler sayfası; Pendik Belediyesi tescil
  sayfası da sdsmuayene.com'u gösteriyor). Eski kayıtlar (IQNORM 2017, TSE) güncel değil. 2026 ücretleri (KDV dahil,
  yıllık / tescil öncesi): 0–5 durak 3.578,52 / 10.735,56 TL; 6–10: 4.049,76 / 12.149,28; 11–15: 4.755,96 / 14.267,88;
  16–20: 5.707,68 / 17.123,04; 21–25: 6.660,72 / 19.982,16; 26–30: 7.613,76 / 22.841,28; 30'dan fazla: 8.564,16 / 25.692,48.
- Ataşehir: AND Uluslararası Denetim ve Gözetim Hizmetleri A.Ş. (belediyenin asansör denetim sayfası; tarih ve 2026
  ücret tablosu bulunamadı).

**Durum (24 Ekim 2026):** 6 taslak yazıldı; kullanıcı onayı bekleniyor.

## Kaynaklar

- Sancaktepe mahalleleri (19): https://tr.wikipedia.org/wiki/Sancaktepe
- Çekmeköy: https://tr.wikipedia.org/wiki/%C3%87ekmek%C3%B6y · Ümraniye: https://tr.wikipedia.org/wiki/%C3%9Cmraniye ·
  Sultanbeyli: https://tr.wikipedia.org/wiki/Sultanbeyli
- Maltepe: https://tr.wikipedia.org/wiki/Maltepe,_%C4%B0stanbul
- Akreditest protokol listesi (Çekmeköy 2025–2029): https://www.akreditest.com/tr/akreditest-kurumsal/protokol-imzalanan-belediyeler
- IQNORM başvuru formu (Sultanbeyli): https://www.iq-norm.com/index.php/asansor-periyodik-kontrol-basvurusu/
- MMO İstanbul, Maltepe protokolü (6.2.2026): https://gunes.mmo.org.tr/istanbul/haber/subemiz-ile-maltepe-belediyesi-arasinda-asansor-kontrolleri-icin-protokol-imzalandi
- Royalcert protokol listesi: https://tr.royalcert.com/protokoller/
- Kartal: https://tr.wikipedia.org/wiki/Kartal,_%C4%B0stanbul · Pendik: https://tr.wikipedia.org/wiki/Pendik ·
  Ataşehir: https://tr.wikipedia.org/wiki/Ata%C5%9Fehir
- Kartal Belediyesi asansör tescil hizmeti (MMO, 2026 ücretleri): https://www.kartal.bel.tr/Hizmetlerimiz/AsansorTescilHizmeti
- MMO İstanbul, Kartal protokolü (5.2.2014): https://mmo.org.tr/istanbul/haber/kartal-belediyesi-ile-asansorlerin-yillik-periyodik-kontrol-protokolu-imzalandi
- SDS Muayene anlaşmalı belediyeler (Pendik 2025–2030): https://www.sdsmuayene.com/anlasmali-belediyeler/
- SDS Muayene, 2026 Pendik ücret tablosu: https://www.sdsmuayene.com/wp-content/uploads/2026/01/2026-Ucret-Tablosu-Pendik-Belediyesi-YENI-1-1.docx
- Binaların Yangından Korunması Hakkında Yönetmelik (m. 62–63): https://www.mevzuat.gov.tr/anasayfa/MevzuatFihristDetayIframe?MevzuatTur=21&MevzuatNo=200712937&MevzuatTertip=5
- Ataşehir Belediyesi asansör denetim (AND): https://www.atasehir.bel.tr/icerik/hizmetler/asansor-denetim
- Mahalle nüfusları ADNKS 2025: https://www.nufusune.com/sancaktepe-ilce-nufusu-istanbul
- Karşılaştırma (farklı yıllar): https://www.i24haber.com/2081-sancaktepe-mahalle-nufusu ·
  https://atlasbig.com.tr/istanbul-sancaktepenin-mahalleleri
