// elementleri html sayfasından çekerek tanımlar.
const ballElement = document.getElementById('ball');
const answerElement = document.getElementById('answer');

// verilecek cevaplar için dizi oluşturma
const answers = [
    'Gökyüzü sana gülümsüyor.',
    'Karanlıkta bir yol bulacaksın.',
    'Gizemli güçler seninle.',
    'Gelecek senin lehine şekilleniyor.',
    'Zamanın gizemi senin yanında.',
    'Kaderin yıldızları sana güvenir.',
    'Efsanevi bir kader seni bekliyor.',
    'Ruhların fısıltısı sana doğru yolu gösterir.',
    'Büyük değişimler yaklaşıyor.',
    'Gizemli bir yolculuk seni bekliyor.',
    'Rüyalar gerçeğe dönüşüyor.',
    'Kozmik dalgalar seninle konuşuyor.',
    'Efsanevi bir macera seni bekliyor.',
    'Kaderin ipuçlarını takip et.',
    'Güçlü bir kader seni çağırıyor.',
    'Gizemli semboller senin için konuşuyor.',
    'Efsanevi bir yolculuk seni bekliyor.',
    'Kaderin sırrı zamanla açığa çıkacak.',
    'Gelecek senin ellerinde.',
    'Gizemli güçler senin yardımcın olacak.'
];

const generateAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length); //rastgele cevaplardan almak için 
    return answers[randomIndex];
};

// başlangıç açısını vermek 
let rotation = Math.floor(Math.random() * 180) + 90;

// Topun dönüşünü oluşturmak için
const rotateBall = () => {
    //dönüş için zamanlayıcı 
    const rotateInterval = setInterval(() => {
        // Rastgele bir değer ekleyerek topun rotasyonunu günceller
        rotation += Math.floor(Math.random() * 10) + 30;
        // transform özelliği kullanılarak ratasyon yenilemek
        ballElement.style.transform = `rotate(${rotation}deg)`;
        
        // 360 döndü mü
        if (rotation >= 360) {
            clearInterval(rotateInterval);
            // Bir saniye sonra göstermek için
            setTimeout(() => {
                showAnswer();
                // süreyi sıfırlamak için
                ballElement.style.transform = 'rotate(0deg)';
            }, 1000);
        }
    }, 10); // Her 10ms'de bir dönüşü güncelle
};


const showAnswer = () => {
    const answer = generateAnswer();
    answerElement.textContent = answer;
};

ballElement.addEventListener('click', () => {
    answerElement.textContent = ""; // Önceki cevabı temizle
    rotateBall(); //cevabı göster
});
