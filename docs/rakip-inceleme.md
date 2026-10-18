# YK Asansör: Rakip ve arama sonucu incelemesi

İnceleme: 18 Ekim 2026 (Pazar akşamı). Yöntem: Claude in Chrome ile kullanıcının kendi Chrome'unda,
oturum açmadan hiçbir işlem yapılmadan (form, mesaj, giriş yok).

> **Okurken bilinmesi gerekenler**
>
> - **Harita sonuçları konuma göre değişir.** Tarayıcının konumu Sancaktepe batısı / Ümraniye sınırı
>   civarındaydı (harita merkezi ≈ 41,00 K, 29,20–29,22 D). Başka bir semtten bakan biri farklı sıralama görür.
> - Tarayıcıda bir Google hesabı açıktı; sonuçlar kişiselleştirilmiş olabilir. YK Asansör kartında
>   "Ziyaret edilmiş bağlantı" etiketi vardı (profil daha önce bu tarayıcıdan açılmış).
> - **Hız** tek ölçümdür, masaüstünden ve kullanıcının internetiyle: sayfanın `load` süresi ve aktarılan
>   veri. Başka alan adlarından gelen dosyalar bazen 0 KB sayıldığı için KB değerleri alt sınırdır.
> - **Mobil**: Chrome penceresi 500 px genişliğe daraltılarak bakıldı (daha dar olmuyor). Yatay taşma,
>   `tel:` bağlantısı ve WhatsApp butonu kontrol edildi.
> - "Sponsorlu" (reklam) kayıtlar haritada listenin başında, organik sıralamadan ayrı tutuldu.

---

## 1. Özet: en önemli 8 bulgu

1. **YK Asansör haritada sanıldığından iyi durumda.** Sancaktepe ve Samandıra aramalarında 10 sorgunun
   7'sinde ilk 5'te (en iyi: "asansör bakım Samandıra" 2.). Normal Google'da "sancaktepe asansör bakım" ve
   "sancaktepe asansör firması" aramalarında **yerel 3'lü pakette 3. sırada**.
2. **Ama üç yerde hiç yokuz:** montaj aramaları (Sancaktepe, Samandıra, ilçesiz), Sultanbeyli aramalarının
   tamamı ve ilçe adı olmayan genel aramalar (yalnızca "asansör bakım"da 10.).
3. **Profilde web sitesi yok, saatler her gün 09:00–17:00.** Instagram'da "7/24 hizmet" yazıyor; profil
   akşam "Kapalı" görünüyor. Rakiplerden ERT, Aksoy ve Ayta "24 saat açık" görünüyor.
4. **Yorum sayısı rakiplerin gerisinde:** YK 15 yorum (5,0). Harita liderleri ERT 65, Skyline 70,
   Teknotek 73 yorum. İki YK yorumunun metni **kelimesi kelimesine aynı**; Google bu tür yorumları
   filtreleyebilir.
5. **Haritada 1. sıra her zaman en çok yorumlu firma değil.** Ayta Asansör 2 yorumla 10 aramada ilk 5'te,
   çoğunda 1. Sitesi açılmıyor. Yakınlık ve kategori çok ağır basıyor; demek ki profili düzgün ve yakın
   olan küçük firma da öne çıkabiliyor.
6. **Organik ilk 10'u ilçe dışı firmaların şablon sayfaları tutuyor.** "sancaktepe asansör bakım"
   ilk 10'da gerçekten Sancaktepe adresli tek firma Leon Asansör, onun da sitesi açılmıyor (sertifika hatası).
   1. sıradaki `sancaktepeasansor.com.tr` Bahçelievler'deki bir firmanın (0212) ilçe adlı alan adı;
   aynı numara `sultanbeyliasansor.com.tr`'de de 1. sırada.
7. **Rakip sitelerin hiçbirinde belge numarası, gerçek proje hikâyesi ve doğrulanabilir yorum yok.**
   Fotoğraflar çoğunlukla stok, yapay zekâ üretimi ya da hiç yok. Schema (JSON-LD) yalnızca birkaç sitede düzgün.
8. **Bilgi aramalarında yapay zekâ özeti (AI Bakışı) çıkıyor:** "asansör bakım ücretleri 2026"da
   TASİAD 2026 tavsiye tarifesini, "asansör etiket renkleri"nde küçük firma bloglarını alıntılıyor.
   Doğru, kaynaklı ve iyi yapılandırılmış bir yazı bu özete girebilir.

---

## 2. Google Haritalar

### 2.1 Harita liderleri (20 aramanın ilk 5'ine kaç kez girdi)

| Firma | Puan (yorum) | Kategori | Web sitesi | Adres (kartta) | İlk 5'te (20 arama) |
|---|---|---|---|---|---|
| ERT Asansör Bakım Onarım Revizyon | 4,9 (65) | Asansör Servisi | Yok | Melek Sk. 1/B · 24 saat açık | 15 |
| Ayta Asansör Lift Systems | 5,0 (2) | Asansör Servisi | Var, **açılmıyor** | Günaltan Sk. 17/B · 24 saat açık | 10 |
| Lineer Asansör | 5,0 (10) | Asansör Servisi | lineerasansor.com | Sümer Cd. 66 | 9 |
| Vega Asansör | 4,4 (14) | Asansör Servisi | Yok | Baykuş Sk. 18/1 | 8 |
| **YK Asansör** | **5,0 (15)** | **Asansör Servisi** | **Yok** | **Altınordu Cd. 38-40A** | **7** |
| Güneş Asansör | 5,0 (5) | Asansör Servisi | gunesasansor.com.tr | İbrahim Ethem Cd. 20/A | 5 |
| "Asansör bakım ve arıza servisi" | 5,0 (31) | (kartta yok) | Yok | Sultanbeyli · 24 saat açık | 5 (hepsi Sultanbeyli) |
| Özkoçsan Asansör | 5,0 (35) | Asansör Servisi | Yok | Petrol Yolu Cd., Sultanbeyli | 5 |
| FA Asansör Sürücü ve Güç Sistemleri | 5,0 (22) | Asansör Servisi | faasansor.com.tr | Masal Sk. | 4 |
| Teknotek Asansör (Sultanbeyli) | 5,0 (73) | Asansör Servisi | teknotekasansor.com.tr | Abdurrahman Gazi Mah., Sultanbeyli | 3 |
| Aslan Asansör (2 ayrı kayıt) | 5,0 (1) / 5,0 (1) | Asansör Servisi | Yok | Selçukhan Cd. / İlham Sk. | 3 + 3 |
| Sancaktepe Asansör Kiralama | 5,0 (17) | Asansör Servisi | sancaktepeasansorkiralama.com.tr | Saray Sk. 9 | 3 |
| Skyline Asansör | 4,9 (70) | Asansör Servisi | skylineasansor.com | Eflatun Sk. 28 | 2 |
| Toker · Sar Grup · Eron · OGM Tepeyurt | 4,9 (10) · 5,0 (4) · 4,5 (17) · 5,0 (15) | Asansör Servisi | Toker, Sar, Eron var | | 2'şer |
| Aura · Mess · Leon · Rekor · Rüzgar · 2d · Sonak · Uksan | | Asansör Servisi | Çoğunda var | | 1'er |

**Reklam (Sponsorlu):** Enes Asansör Mühendislik 20 aramanın **20'sinde** reklam veriyor (4,3, 24 yorum).
İkinci reklam yeri değişiyor: Aksanlift, Aksoy, Sanel / Sneider, MSA Asansör.

**Kategori:** Neredeyse herkes "Asansör Servisi" kullanıyor; yalnızca Sanel ve Sneider "Asansör Üreticisi".

### 2.2 Arama arama sonuçlar (organik ilk 5 ve YK'nın sırası)

İsimler kısaltıldı. Tam kart bilgileri 2.1'de.

| Arama | 1 | 2 | 3 | 4 | 5 | YK |
|---|---|---|---|---|---|---|
| asansör bakım | Ayta | ERT | Lineer | Vega | Toker | 10. |
| asansör firması | ERT | Vega | Skyline | Mess | Enes | yok (ilk 12) |
| asansör servisi | Ayta | ERT | Vega | Lineer | 2d | yok |
| asansör montaj | Ayta | Vega | Aura | Toker | Skyline | yok |
| asansör tamiri | ERT | Aksoy | Leon | Rekor | Rüzgar | yok |
| asansör bakım Sancaktepe | Ayta | ERT | Lineer | **YK** | Sar Grup | **4.** |
| asansör firması Sancaktepe | Ayta | Lineer | ERT | Vega | **YK** | **5.** |
| asansör servisi Sancaktepe | Ayta | ERT | Lineer | Vega | Sar Grup | 6. |
| asansör montaj Sancaktepe | Ayta | ERT | Güneş | Vega | Snc. Asn. Kiralama | yok |
| asansör tamiri Sancaktepe | Ayta | ERT | Lineer | **YK** | Vega | **4.** |
| asansör bakım Sultanbeyli | "Asansör bakım ve arıza servisi" | Özkoçsan | Aslan | Aslan | Teknotek | yok |
| asansör firması Sultanbeyli | "Asansör bakım…" | Özkoçsan | Aslan | Aslan | OGM Tepeyurt | yok |
| asansör servisi Sultanbeyli | "Asansör bakım…" | Aslan | Özkoçsan | Aslan | OGM Tepeyurt | yok |
| asansör montaj Sultanbeyli | Özkoçsan | "Asansör bakım…" | Teknotek | Sonak | Uksan | yok |
| asansör tamiri Sultanbeyli | "Asansör bakım…" | Özkoçsan | Teknotek | ERT | Lineer | yok |
| asansör bakım Samandıra | ERT | **YK** | FA | Eron | Snc. Asn. Kiralama | **2.** |
| asansör firması Samandıra | Lineer | Güneş | ERT | **YK** | FA | **4.** |
| asansör servisi Samandıra | ERT | Güneş | **YK** | FA | Snc. Asn. Kiralama | **3.** |
| asansör montaj Samandıra | Güneş | ERT | Ayta | FA | Eron | yok |
| asansör tamiri Samandıra | Lineer | ERT | Güneş | **YK** | Ayta | **4.** |

### 2.3 Haritadan çıkan dersler

- **Sultanbeyli'de 1. sıradaki işletmenin adı "Asansör bakım ve arıza servisi".** Gerçek marka adı yerine
  anahtar kelime kullanmak Google kurallarına aykırı; yine de 5 aramada 1. sırada. Bizim adımıza anahtar
  kelime **eklemiyoruz** (profil askıya alınabilir). İstenirse Haritalar'daki "Düzenleme önerin" ile
  bildirilebilir.
- **Aynı firmanın iki kaydı** var: Aslan Asansör (iki adres, 1'er yorum), Aksoy Asansör (reklam + organik).
- **Montajda YK hiç yok.** Profilde montaj hizmeti, montaj fotoğrafı ya da montaj geçen yorum yok gibi.
  Güneş Asansör montaj aramalarında öne çıkıyor.

---

## 3. Google arama sonuçları

### 3.1 Yerel aramalar

**sancaktepe asansör bakım** · Yerel paket: ERT, Lineer, **YK Asansör** · Reklam: butechelevator.com ·
AI Bakışı: yok

| # | Sonuç | Kim? |
|---|---|---|
| 1 | sancaktepeasansor.com.tr | Bahçelievler adresli firma (0212), ilçe adlı alan adı |
| 2 | armut.com/sancaktepe-asansor-bakim | Teklif platformu |
| 3 | asansorservis.biz.tr (Leon) | Sancaktepe adresli; site açılmıyor |
| 4 | ruzgarasansor.com/asansor-bakim-onarim | Firma (haritada da var) |
| 5 | sancaktepe.asansorr.com | Alt alan adı ağı (0216 391 92 93) |
| 6 | triolift.com/sancaktepe-asansor-servisi | Firma ilçe sayfası (0850) |
| 7 | erenlift.com.tr/sancaktepe-asansor-servisi | Pendik (Soğanlık) firması |
| 8 | bilimsanasansor.com/category/sancaktepe-asansor-bakimi | Kadıköy kökenli firma, ilçe kategorisi |
| 9 | arkenasansor.com/tr/yazi/sancaktepe-asansor-bakim-onarim-ve-montaj | Avrupa Yakası firması (0212) |
| 10 | armut.com/sancaktepe-asansor-servisi | Teklif platformu |

**sancaktepe asansör firması** · Yerel paket: Lineer, ERT, **YK Asansör** · AI Bakışı: yok

| # | Sonuç |
|---|---|
| 1 | sancaktepeasansor.com.tr |
| 2 | asansorservis.biz.tr (Leon) |
| 3 | armut.com/sancaktepe-asansor |
| 4 | yandex.com.tr/maps/org/saysa_asansor (Yandex Haritalar kartı) |
| 5 | sancaktepe.asansorr.com |
| 6 | triolift.com/sancaktepe-asansor-servisi |
| 7 | arkenasansor.com (Sancaktepe yazısı) |
| 8 | erenlift.com.tr/sancaktepe-asansor-servisi |
| 9 | ruzgarasansor.com |

**sultanbeyli asansör bakım** · Yerel paket: "Asansör bakım ve arıza servisi", Özkoçsan, Aslan · AI Bakışı: yok

| # | Sonuç |
|---|---|
| 1 | sultanbeyliasansor.com.tr (aynı 0212 641 01 01 numarası: ilçe adlı alan adı ağı) |
| 2 | sahibinden.com/asansor-bakimi-hizmetleri/sultanbeyli |
| 3 | asansorfirmalari.com |
| 4 | erenlift.com.tr/sultanbeyli-asansor-servisi |
| 5 | armut.com/sultanbeyli-asansor-bakim |
| 6 | ozgrupasansor.com |
| 7 | yandex.com.tr/maps/org/asansor_bakim_ve_ariza_servisi |
| 8 | kaonasansor.com/sultanbeyli-asansor-servisi-asansor-bakimi |
| 9 | kirlisepeti.com (dizin) |
| 10 | meridyenasansor.com/sultanbeyli-asansor-firmasi |

**Çıkarım:** Armut hâlâ var ama yol haritasında sanıldığı kadar baskın değil. Asıl kalabalık, ilçe dışı
firmaların şablon ilçe sayfaları ve ilçe adlı alan adı ağları. **Yandex Haritalar kartları organik
sonuçlarda çıkıyor**; Yandex Business kaydı bu yüzden daha değerli.

### 3.2 Bilgi aramaları

**asansör etiket renkleri** · En üstte **görsel paketi** (infografikler) · "Diğer sorular": Asansör etiketi
hangi renk olmalı? · Mavi etiket kaç yıl geçerli? · Mavi etiketli asansör ne demek? · Sarı etiketli
asansöre binilir mi?

- **AI Bakışı** (ikinci bakışta çıktı, ilkinde yoktu; değişken): yeşil / mavi / sarı / kırmızı anlamlarını
  sayıyor; mavi için "12 ay içinde giderilmeli", sarı için "60 gün içinde giderilmeli" diyor. Alıntılanan
  kaynaklar: Akel Bina Yönetimi, Alfasan Asansör, Aras Kalıp. (Süreler yönetmelikten doğrulanmadı;
  yol haritası Bölüm 8.)
- Sonuçlar: alfasan.com.tr/blog · araskalip.com.tr/blog · marselevator.com · sbemuhendislik.com ·
  opwire.app/blog · unalbinayonetimi.com.tr · hukukcularevi.com. Hepsi firma veya yönetim şirketi blogu.

**asansör bakım ücretleri 2026** · "Diğer sorular": Yıllık asansör bakım ücreti ne kadar? · 2026'da
belediye asansör denetimi ücreti ne kadar? · Apartman asansör yıllık bakım ücretini kim öder? ·
Asansör yenileme fiyatları ne kadar?

- **AI Bakışı:** TASİAD'ın 2026 tavsiye tarifesini alıntılıyor (aylık, KDV hariç, 7 durağa kadar):
  Sınıf I insan 3.000 TL · Sınıf II insan-yük 3.500 TL · Sınıf III hastane 5.750 TL · Sınıf IV yük
  6.500 TL · Sınıf V servis (monşarj) 2.500 TL · Sınıf VI yüksek hız 15.000 TL. Yedek parça dahil değil.
  Yanında Ankara Ticaret Odası 2026 azami tarifesi kartı.
- Sonuçlar: 1. tasiad.org.tr (2026 tavsiye fiyatları) · 2. armut.com İstanbul bakım fiyatları 2026 ·
  3. EBSO (İzmir) 2026 azami tarife PDF'i · 4. celik-halat.com · 5. marselevator.com · 6. ankara.bel.tr
  (periyodik kontrol ücretleri) · 7. pamukkale.bel.tr · 8. Facebook grubu · 9. asansorr.com/blog

---

## 4. Rakip siteler

### 4.1 Karşılaştırma tablosu

Kısaltmalar: **LB** LocalBusiness, **Org** Organization, **FAQ** FAQPage. "Belge": sayfada TSE / CE /
ISO geçiyor mu; **hiçbirinde belge numarası yok**.

| Site | `<title>` | Meta açıklama | H1 | JSON-LD | Fotoğraf | Belge | SSS / yorum | İlçe sayfası | Hız (yük · veri) | Mobil |
|---|---|---|---|---|---|---|---|---|---|---|
| sancaktepeasansor.com.tr | Sancaktepe Asansör – 0212 641 01 01 | Yok | Yok | Yok | Stok (lobi) | Yok | Yok / yok | Ağ: ayrı alan adları | 2,9 sn · ≥621 KB | Uyumlu, `tel:` var |
| kalitas.dev/sancaktepe-asansor | Sancaktepe Asansör \| Kalitas Mühendislik | Yok | 3 adet ("01.", "02." dahil) | Org | Stok | Yok | Menüde SSS / yok | ~40 şablon (site haritasında 46 URL) | 1,4 sn · ≥344 KB | Uyumlu, `tel:` **yok** |
| bilimsanasansor.com | BİLİM-SAN ASANSÖR | Yok | Çoklu / boş | Yok | Slider, kısmen gerçek | "Belgeler" sayfası | Yok / referanslar | 14 ilçe kategorisi | 0,6 sn · ≥1,5 MB | Uyumlu, `tel:` **yok** |
| fialift.com.tr (Sancaktepe bakım) | Sancaktepe Asansör Bakım – Fia Lift… (çok uzun) | Yok | Sancaktepe Asansör Bakım | Yok | Tek stok görsel | Yok | Yok / yok | **1.002 programatik yazı**, Türkiye geneli; tarih 16 Mart 2020 | 1,6 sn · ≥581 KB | Uyumlu, `tel:` var |
| emasasansor.com/sancaktepe/ | Sancaktepe Asansör Bakım, Montaj ve 7/24 Servis \| EMAS Asansör | Var, iyi | Sancaktepe Asansör Hizmetleri | LB | **Hiç yok** (yalnız logo) | TSE geçiyor | Yok / yok | 13 ilçe (site haritası 18 URL) | 1,4 sn · ~33 KB | Uyumlu, `tel:` + WhatsApp |
| asansorservis.biz.tr (Leon) | – | – | – | – | – | – | – | – | **Açılmıyor:** HTTPS'te "Gizlilik hatası", HTTP'de hata sayfası | – |
| linaasansor.com | Lina Asansör, Asansor Servisi, Asansör Bakımı, Asansör Firmaları - 7/24 Hizmet | Anahtar kelime listesi | "Asansör" + boşlar | Yok | Ürün / komponent katalog görselleri | TSE, "Belgelerimiz" | Yok / referans | Yok | 2,4 sn · **≥5,2 MB** | Uyumlu, `tel:` + WhatsApp |
| ozhisarasansor.com | Özhisar Asansör \| Asansör Bakım, Revizyon ve Montaj — Anadolu Yakası | Var, iyi | Asansörünüz Bozulduğunda Arayacağınız Tek Numara | Org + WebSite + LB + FAQ | **Hiç yok** | "CE & TS" rozeti | SSS var / baş harfli yorumlar | 9 ilçe sayfası | 0,9 sn · ~96 KB | Uyumlu, `tel:` + WhatsApp |
| meridyenasansor.com | Meridyen Asansör \| Kurumsal ve Profesyonel Asansör Servisi | Var, iyi | İstanbul Asansör Servisi | LB + Org + Service ×5 + FAQ | Yapay zekâ üretimi görünümlü (çağrı merkezi, markalı araç) | TSE geçiyor | FAQ şeması / referanslar | Var (Sultanbeyli sayfası 10. sırada) | 1,4 sn · ≥2,3 MB | Uyumlu, `tel:` + WhatsApp |
| lineerasansor.com | Ana Sayfa - Lineer Asansör | Var | Aynı H1 iki kez | Org + Article (Yoast) | Tasarım / render görselleri | Yok | SSS var / yok | Yok | 1,8 sn · ≥2,4 MB | Uyumlu, `tel:` + WhatsApp |
| aytaasansor.com | – | – | – | – | – | – | – | – | **Açılmıyor** ("Bu siteye ulaşılamıyor") | – |
| gunesasansor.com.tr | Güneş Asansör \| 7/24 Asansör Bakımı, Montaj ve Revizyon - İstanbul | Var: "Sancaktepe'de… 45 dakikada acil müdahale garantisi" | Dikey Ulaşımda Güneş Gibi Parlayan Mühendislik | Yok | Proje fotoğrafları (proje-1…6) | TSE, CE geçiyor | Yok / yorum var | Yok | 0,3 sn · ≥16 KB | Hafif yatay taşma (7 px), `tel:` + WhatsApp |
| teknotekasansor.com.tr | Teknotek Asansör Hizmetleri | Var (ilgisiz cümle) | Hakkımızda | Org + Breadcrumb (Yoast) | Galeri, kısmen gerçek | Yok | Yok / referans görüntüleri | Yok | 2,7 sn · ≥2,0 MB | Uyumlu |
| triolift.com/sancaktepe-asansor-servisi | Sancaktepe Asansör Servisi \| 7/24 Bakım Onarım \| Trio Lift Asansör | Var, iyi | Sancaktepe Asansör Servisi | Org + Breadcrumb | Yok | TSE geçiyor | SSS var / yok | Var | 1,6 sn · ≥363 KB | Uyumlu, `tel:` + WhatsApp |
| erenlift.com.tr (Sancaktepe) | Sancaktepe Asansör Servisi - Eren Lift Mühendislik | Yok | Sancaktepe Asansör Servisi | Article | Tek blog görseli | Yok | Yok | Blog yazısı biçiminde | 2,9 sn · ≥591 KB | – |
| sancaktepe.asansorr.com | Sancaktepe Asansör Servisi - 0216 391 92 93 | Var | Sancaktepe Asansör Servisi | Yok | 2 görsel | Yok | Yok | Alt alan adı ağı | 1,5 sn · ≥542 KB | – |
| arkenasansor.com (Sancaktepe yazısı) | Sancaktepe Asansör Bakım, Onarım ve Montaj \| Arken Asansör | Var, genel | Aynı H1 iki kez | Yok | Şablon ilçe görselleri | Yok | Yok / yorum geçiyor | Şablon yazılar (Zeytinburnu, Ümraniye…) | 1,6 sn · ≥809 KB | – |

### 4.2 Site site notlar

- **sancaktepeasansor.com.tr:** WordPress. Menü: Anasayfa, Kurumsal, Hizmetlerimiz, Foto Galeri, Blog,
  İletişim. Blogda 6 yazı, hepsi anahtar kelime sayfası ("Sancaktepe Asansör Bakım Fiyatları",
  "…Firmaları", "…Tamir Fiyatları", "Sancaktepe Asansörcü"). Site haritası Nisan–Mayıs 2023 tarihli,
  sonra güncellenmemiş. Ana sayfada 217 kelime. H2'ler tekrarlı ve içinde "..." var.
- **kalitas.dev:** Menü: Anasayfa, Hakkımızda, Hizmetlerimiz, Teklif Al, Galeri, İletişim, SSS. İlçe
  sayfaları aynı şablon, ilçe adı değişiyor. Meta açıklama yok, cep numarası tıklanabilir değil.
- **bilimsanasansor.com:** WordPress 5.3 (eski sürüm). Menüde 10 asansör tipi, Belgeler, Referanslar ve
  "Asansör Muayene Eksikleri" sayfası (etiket konusuna girişi var). 14 ilçe kategorisi.
- **fialift.com.tr:** Ankara firması (0312). Türkiye'nin her ilçesi için "X asansör bakım" ve
  "X asansör firması" yazısı (toplam 1.002). Sancaktepe sayfası 2020 tarihli, firma tanıtımı ve
  "Asansör Bakım Ücreti" başlığı. Tipik ölçekli içerik.
- **emasasansor.com:** Yeni, çok hafif, tek sayfa şablon. 13 ilçe sayfası, LocalBusiness şeması var.
  Hiç fotoğraf yok.
- **Leon Asansör:** Sancaktepe'de (Atatürk Mah., Eylül Sk. 5/B). Site açılmıyor ama Google'da 2.–3. sırada;
  sıralama eski içerikten geliyor olabilir. Haritada 4,2 (10).
- **linaasansor.com:** Kağıthane. Çok geniş menü (asansör tipleri, komponentler, kabinler, kapılar…).
  Blog: asansör tipleri, Asansör Terimleri, Tarihçesi, Sınıf ve Standartları, Yönetmeliği, Etiketleri.
  Meta açıklaması virgüllü kelime listesi. Sayfa 5 MB'tan ağır.
- **ozhisarasansor.com:** Kartal. Modern, statik, hızlı. Rakamlar şeridi (7/24, 500+ bina, 15+ yıl,
  "CE & TS"), süreç, yorumlar, hizmet bölgeleri, SSS ve form. Şeması bizim planladığımıza en yakın.
  Ama hiç fotoğraf yok ve yorumlar baş harf avatarlı (doğrulanamaz).
- **meridyenasansor.com:** WordPress. Menü: Referanslarımız, Hizmet Bölgelerimiz, 5 hizmet sayfası,
  Hakkımızda. Şema çok zengin. Ana sayfada "Asansör firması seçerken nelere dikkat edilmeli?" bölümü.
  Görseller yapay zekâ üretimi izlenimi veriyor.
- **Lineer Asansör:** Haritada güçlü (9/20). Site düzgün ama title "Ana Sayfa - Lineer Asansör";
  menü: Hakkımızda, Hizmetlerimiz (Montaj, Revizyon & Modernizasyon, Bakım & Arıza), Blog, İletişim.
- **Güneş Asansör:** `CLAUDE.md`'de hizmet kapsamı referansı olarak geçen firma; **Sancaktepe'de doğrudan
  rakip** (montaj ve Samandıra aramalarında öne çıkıyor). Açılışta asansör kapısı animasyonu, kabin
  çözümleri, projeler galerisi. Meta açıklamada "Sancaktepe" ve "45 dakikada acil müdahale garantisi".
  Şema ve site haritası yok.
- **Trio Lift:** Organikte en iyi kurgulanmış ilçe sayfası: bakım, arıza, "Sancaktepe'deki binalara özel
  bakım yaklaşımı", sözleşme, neden biz, "Sancaktepe mahallelerinde asansör servisi", SSS. Ama adres yok,
  fotoğraf yok, 0850 numara.

---

## 5. YK Asansör Google İşletme Profili

| Alan | Durum (18 Ekim 2026) | Not |
|---|---|---|
| Ad | YK ASANSÖR | Büyük harf. Marka adı kesinleşince güncellenecek. |
| Kategori | Asansör Servisi | Doğru birincil kategori (rakiplerin hepsi aynı). |
| Puan / yorum | 5,0 · 15 yorum | Son yorumlar: 1 hafta, 3 hafta, 2 ay önce. Konu: aylık bakım. **Kaan Kaya (2 ay önce) ve Mahir Mamay (1 hafta önce) yorumlarının metni birebir aynı.** |
| Adres | Abdurrahmangazi, Altınordu Cd. 38-40A, 34000 Sancaktepe/İstanbul | Site NAP'ıyla uyumlu. Posta kodu 34000 görünüyor (Sancaktepe için doğrusu muhtemelen 3488x); kontrol et. |
| Telefon | 0543 542 86 75 | Doğru. |
| Saatler | Her gün 09:00–17:00 | Akşam "Kapalı" görünüyor. Instagram "7/24 hizmet" diyor; çelişki. |
| Web sitesi | **Yok** ("Web sitesi ekle" çıkıyor) | Site yayınlanınca UTM'li bağlantı eklenecek. |
| Fotoğraf | ~6 (Tümü / Sahibinin seçtikleri / Street View) | Çoğu tasarım afiş ("Asansörünüz güvende mi?" vb.). Gerçek iş fotoğrafı yok gibi. |
| Açıklama | Var: "İstanbul genelinde asansör bakım, arıza, revizyon, modernizasyon ve montaj…" | |
| Hizmet / özellikler | "Hakkında"da: Online tahmini ücret, Gerçek mekanda hizmet, tekerlekli sandalye girişi/park/tuvalet, ücretsiz otopark | Ayrı "Hizmetler" listesi görünmedi. |
| Sahiplik | Kartta "Bu işletmenin sahibi misiniz?" bağlantısı görünüyor | Açıklama ve "Sahibinin seçtikleri" olduğu için sahiplenilmiş olabilir. Yönetici hesabından kontrol edilmeli. |

**Web'de bulunan diğer YK izleri (NAP tutarlılığı):**

- **asansorfirmalari.com** YK'yı "Altınordu Cd. **43/2**" adresiyle listeliyor. Yanlış kapı numarası;
  düzeltme istenmeli.
- **Instagram'da iki hesap** görünüyor: `@ykasansorr` ve `yk.asansorr` (gönderi). Bir gönderide ikinci bir
  numara (0535 721 …) geçiyor. Ayrıca `turkelliftasansor` hesabında YK'nın adres ve telefonunu içeren bir
  gönderi var. Tek resmi hesap seçilmeli, diğerleri kapatılmalı ya da yönlendirilmeli.
- **LinkedIn:** Ömürcan Altundaş, "Yk Asansör şirketinde Şirket Sahibi" (kişisel profil; şirket sayfası görünmedi).
- **Facebook:** "Yks Asansör" (0212 550 15 20) adında başka bir işletme var; isim benzerliği karışıklık
  yaratabilir. Marka adı seçiminde dikkate alınmalı.

---

## 6. Bizim için fırsatlar

Önem sırasıyla. "Hemen" olanlar siteyi beklemez.

### Hemen (Google profili, siteden bağımsız)

1. **Saatleri gerçeğe göre düzelt.** 7/24 arıza hattı gerçekten açıksa profil "24 saat açık" olsun
   (ERT, Aksoy, Ayta böyle). Değilse Instagram ve diğer yerlerdeki "7/24" ifadesi gerçek kapsamla
   uyumlu hâle getirilsin. Saatler 2026'da harita sıralamasında ilk 5 sinyal arasında.
2. **Montaj görünürlüğü:** Profile "Hizmetler" listesi eklenip montaj, modernizasyon, bakım, arıza
   ayrı ayrı yazılsın; montaj fotoğrafları ve montaj gönderileri paylaşılsın. Montaj müşterilerinden
   yorum istenirken "montaj" kelimesini kendi cümleleriyle geçirmeleri rica edilsin.
3. **Gerçek fotoğraflar:** Afişler yerine iş fotoğrafları (makine dairesi, kabin, kapı, ekip, servis aracı).
   Ayda 4–8 yeni fotoğraf.
4. **Yorum akışı:** Hedef ilk 3 ayda 15 → 40+ (ERT 65, Teknotek 73). **Müşteriye hazır metin
   verilmesin**; aynı metinli iki yorum zaten var ve Google bu tür yorumları silebilir.
5. **NAP temizliği:** asansorfirmalari.com'daki yanlış adres, iki Instagram hesabı, gönderilerdeki
   ikinci numara. Profildeki posta kodunu da kontrol et.
6. **Sultanbeyli:** 20 aramanın Sultanbeyli kısmında hiç yokuz. Profilde hizmet bölgelerine Sultanbeyli
   eklensin; Sultanbeyli'deki işlerden fotoğraf ve yorum gelsin. (Harita sıralamasında uzaklık belirleyici
   olduğu için burada sınırlı kazanç beklenmeli.)

### Site ile

7. **Profil + site birlikte:** Haritada ilk 5'teki firmaların çoğunun sitesi var, bizim yok. Site
   yayınlanınca profildeki "Web sitesi" bağlantısı hem kullanıcıya hem Google'a güven sinyali.
8. **Organik yerel aramada gerçek yerel firma boşluğu:** İlk 10'da Sancaktepe'de oturan ve sitesi çalışan
   firma yok. Gerçek adresli, gerçek iş fotoğraflı, tarihli bir Sancaktepe yazısı bu kalabalıktan
   kolayca ayrışır. Trio Lift'in başlık yapısı (bina tipine göre yaklaşım, mahalleler, SSS) iyi bir
   örnek; biz buna gerçek iş, fotoğraf ve ölçülmüş varış süresi ekleriz.
9. **Belge numarası:** Rakiplerin hiçbiri TSE HYB veya CE belge numarası göstermiyor. Biz gösterirsek tek
   oluruz.
10. **Şema:** LocalBusiness + Service + FAQPage'i doğru kuran yalnızca Özhisar ve Meridyen. Bizim planımız
    (yol haritası 5.2) bunları zaten kapsıyor; Sancaktepe ölçeğinde fark yaratır.
11. **Hız:** Rakiplerin çoğu 0,5–5 MB WordPress. Derlemesiz sitemiz < 300 KB ana sayfa hedefiyle
    rahatça en hızlısı olur.
12. **"Asansör etiket renkleri" yazısı:** En üstte görsel paketi var, AI Bakışı küçük firma bloglarını
    alıntılıyor. Yazıya **kendi tasarımımız bir etiket renkleri infografiği** (anlamlı dosya adı ve `alt`
    metniyle) ve net bir tablo koyarsak hem görsel aramada hem AI Bakışı'nda şansımız olur. "Diğer
    sorular"daki 4 soru yazının SSS'si olsun (mavi etiket süresi, sarı etikette binilir mi…).
13. **"Asansör bakım ücretleri 2026" yazısı:** AI Bakışı TASİAD tarifesini kullanıyor. Yazı TASİAD 2026
    tavsiye tarifesi, ATO ve EBSO azami tarifelerini **yan yana, kaynaklı** versin; "teklif nasıl
    okunur" ve "yedek parça dahil mi" kısmıyla bunlardan daha kullanışlı olsun. "Diğer sorular"daki
    "Bakım ücretini kim öder?" ve "Periyodik kontrol ücreti ne kadar?" alt başlık olsun.
14. **Yandex:** Yandex Haritalar kartları Google organik sonuçlarında çıkıyor (Saysa Asansör, "Asansör
    bakım ve arıza servisi"). Yandex Business kaydı yol haritasında zaten ilk sırada; önemi doğrulandı.
15. **Reklam (ileride, isteğe bağlı):** Haritada reklam veren neredeyse tek firma Enes Asansör. Yerel
    arama reklamı rekabeti düşük görünüyor; site ve yorumlar oturduktan sonra küçük bir bütçeyle
    denenebilir.

### Yapılmayacaklar (rakiplerde görülen ama bize zarar verecek şeyler)

- İşletme adına anahtar kelime eklemek ("YK Asansör Bakım Sancaktepe").
- İlçe adı değişen şablon sayfalar veya yüzlerce programatik sayfa (Kalitas, Fia Lift, Arken).
- İlçe adlı ek alan adları ağı (sancaktepeasansor / sultanbeyliasansor).
- Baş harfli, doğrulanamayan "müşteri yorumu" kutuları ve sahte yıldız şeması.
- Belgesi olmayan "CE & TS" rozetleri.
