function searchProducts() {
    var arananKelime = document.getElementById('aramaKutusu').value.toLowerCase().trim();
    var urunKartlari = document.querySelectorAll('.card');
    var urunBulundu = false; // Aranan kelimeye göre ürün bulunduğunu kontrol etmek için bir bayrak

    urunKartlari.forEach(function(urunKarti) {
        var urunBaslik = urunKarti.querySelector('.card-title').textContent.toLowerCase();

        if (arananKelime === '') {
            // Eğer arama kutusu boşsa, tüm ürün kartlarını göster
            urunKarti.style.display = 'block';
        } else {
            // Eğer arama kutusu doluysa, aranan kelimeye göre filtrele
            if (urunBaslik.includes(arananKelime)) {
                urunKarti.style.display = 'block';
                urunBulundu = true; // Aranan kelimeye uygun bir ürün bulundu
            } else {
                urunKarti.style.display = 'none';
            }
        }
    });

    // Eğer aranan kelimeye uygun bir ürün bulunmadıysa, uyarı mesajını göster
    if (arananKelime !== '' && !urunBulundu) {
        document.getElementById('urunBulunamadiUyari').style.display = 'block';
    } else {
        document.getElementById('urunBulunamadiUyari').style.display = 'none';
    }
}

// Arama kutusundaki her tuşa basıldığında veya silindiğinde arama işlemini gerçekleştir
document.getElementById('aramaKutusu').addEventListener('input', function() {
    searchProducts();
});