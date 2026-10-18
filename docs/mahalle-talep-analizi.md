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
| **Google Ads Anahtar Kelime Planlayıcı** | Bakılmadı. Chrome'daki hesapta iki Ads hesabı var: biri kapalı, diğeri "Alfa Spor Kulübü". Başka işletmenin hesabına izinsiz girilmedi. | Toplu kontrol için en iyisi (60+ kelime tek seferde), ama hesap izni gerekiyor. |

**Okuma:** İlçe düzeyindeki en güçlü arama bile ayda ~30–90. Mahalle + asansör aramalarının bunun çok
altında (çoğu 0–10) olması beklenir; otomatik tamamlama sonucu da bunu destekliyor. Kesin mahalle sayıları
için Anahtar Kelime Planlayıcı veya kayıtlı Ubersuggest/Semrush gerekir.

## 4. Sonuç ve öneri

1. **19 mahallenin her birine ayrı yazı açmak mantıklı değil.** 17 mahallede Google'ın fark edeceği kadar
   arama yok. Yer adı değişen ama içeriği benzeyen 19 yazı blog alanını doldurur ve Google'ın "doorway"
   (kapı sayfası) kalıbına benzeyip sitenin geneline zarar verebilir.
2. **Şimdi yazılacak:** **Samandıra** ve **Sarıgazi** semt yazıları (talep görünen iki ad).
3. **Bekletilecek:** **Yenidoğan** (eski belde adı, 25 bin nüfus, ama öneri çıkmadı). Search Console'da
   gösterim gelirse yazılır.
4. **Büyük mahalleler** (Osmangazi, Abdurrahmangazi, Fatih) ayrı yazı yerine Sancaktepe ana yazısında ve
   semt yazılarında doğal biçimde anılabilir. Osmangazi ve Fatih adları başka ilçelerle çakıştığı için ayrı
   yazı yanlış kitleyi (Bursa, Fatih ilçesi) çekebilir.
5. **Karar kuralı (yayından sonra):** Search Console'da bir mahalle adı + asansör araması 3 ayda düzenli
   gösterim alıyorsa (ör. ayda 20+ gösterim) o mahalle için özgün bir yazı açılır.
6. **İsteğe bağlı:** Google Ads hesabın varsa Anahtar Kelime Planlayıcı'dan Samandıra, Sarıgazi, Yenidoğan
   ve en büyük 3 mahallenin hacmine bakıp bu sırayı teyit edebiliriz.

## Kaynaklar

- Sancaktepe mahalleleri (19): https://tr.wikipedia.org/wiki/Sancaktepe
- Mahalle nüfusları ADNKS 2025: https://www.nufusune.com/sancaktepe-ilce-nufusu-istanbul
- Karşılaştırma (farklı yıllar): https://www.i24haber.com/2081-sancaktepe-mahalle-nufusu ·
  https://atlasbig.com.tr/istanbul-sancaktepenin-mahalleleri
