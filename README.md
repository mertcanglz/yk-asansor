# YKA Asansör Web Sitesi

Saf HTML/CSS/JS tanıtım sitesi. Derleme gerekmez; `main` dalına her push GitHub Pages'teki test adresine otomatik yayınlanır
(test süresince tüm sayfalar `noindex`, arama motorlarına girmez).

## Telefondan yönetim (Claude Code bulut oturumu)

1. Telefonda **claude.ai/code** adresini (veya Claude uygulamasındaki Code sekmesini) aç.
2. Bu repoyu (`yka-asansor`) seç ve yeni oturum başlat.
3. Ne istediğini Türkçe yaz, örneğin:
   - "Telefon numarasını 0532 123 45 67 yap"
   - "Hizmetler bölümüne 'Yük asansörü' kartı ekle"
   - "Ana renkleri koyu yeşil ve sarı yap"
4. Claude değişikliği yapar ve kendi dalına push'lar. Uygulamadaki **PR oluştur** ile `main`'e birleştir.
5. 1–2 dakika içinde canlı site güncellenir: `https://mertcanglz.github.io/yka-asansor/`

## Bilgisayarda önizleme

```bash
python3 -m http.server 8080
```

Ardından http://localhost:8080 adresini aç.
