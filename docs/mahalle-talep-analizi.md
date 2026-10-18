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
fatura değiştirilmedi. Not: Planlayıcı, hacim sorgusunda hesapta otomatik olarak bir taslak anahtar kelime
planı oluşturur ("Eki 19, 2026, 12 ÖÖ tarihli plan"); maliyeti yok, kampanya değil, istenirse
Planlayıcı → Kaydedilen planlar'dan silinebilir.

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

## Kaynaklar

- Sancaktepe mahalleleri (19): https://tr.wikipedia.org/wiki/Sancaktepe
- Mahalle nüfusları ADNKS 2025: https://www.nufusune.com/sancaktepe-ilce-nufusu-istanbul
- Karşılaştırma (farklı yıllar): https://www.i24haber.com/2081-sancaktepe-mahalle-nufusu ·
  https://atlasbig.com.tr/istanbul-sancaktepenin-mahalleleri
