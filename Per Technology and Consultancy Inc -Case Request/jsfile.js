// Arama kutusundaki her tuşa basıldığında veya silindiğinde arama işlemini gerçekleştir
document.getElementById('aramaKutusu').addEventListener('input', function () {
    searchProducts();
});

function searchProducts() {
    var arananKelime = document.getElementById('aramaKutusu').value.toLowerCase().trim();
    var urunKartlari = document.querySelectorAll('.card');
    var urunBulundu = false; // Aranan kelimeye göre ürün bulunduğunu kontrol etmek için bir bayrak

    urunKartlari.forEach(function (urunKarti) {
        var urunBaslik = urunKarti.querySelector('.card-title').textContent.toLowerCase();
        var urunAciklama = urunKarti.querySelector('.card-text').textContent.toLowerCase();

        if (arananKelime === '' || urunBaslik.includes(arananKelime) || urunAciklama.includes(arananKelime)) {
            // Eğer arama kutusu boşsa veya aranan kelime ürün başlığında veya açıklamasında bulunuyorsa kartı göster
            urunKarti.style.display = 'block';
            urunKarti.classList.add('d-md-block'); // Bootstrap kart sınıfını güncelle
            urunBulundu = true; // Aranan kelimeye uygun bir ürün bulundu
        } else {
            // Eğer arama kutusu doluysa ve aranan kelime ürün başlığında veya açıklamasında bulunmuyorsa kartı gizle
            urunKarti.style.display = 'none';
            urunKarti.classList.remove('d-md-block'); // Bootstrap kart sınıfını güncelle
        }
    });

    // Eğer aranan kelimeye uygun bir ürün bulunmadıysa, uyarı mesajını göster
    if (arananKelime !== '' && !urunBulundu) {
        document.getElementById('urunBulunamadiUyari').style.display = 'block';
    } else {
        document.getElementById('urunBulunamadiUyari').style.display = 'none';
    }
}
