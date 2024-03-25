// elementleri html sayfasından çekerek tanımlar.
const ballElement = document.getElementById('ball');
const answerElement = document.getElementById('answer');
const backgroundSound = document.getElementById('backgroundSound');


// müzik başlatmak için fonksiyon
function playBackgroundSound() {
    backgroundSound.play();
}

// müziğin durması için fonksiyon
function stopBackgroundSound() {
    backgroundSound.pause();
}

// verilecek cevaplar için dizi oluşturma
const answers = [
    { text: 'Gökyüzü sana gülümsüyor.', taken: false },
    { text: 'Karanlıkta bir yol bulacaksın.', taken: false},
    { text: 'Gizemli güçler seninle.', taken: false},
    { text: 'Gelecek senin lehine şekilleniyor.', taken: false},
    { text: 'Zamanın gizemi senin yanında.', taken: false},
    { text: 'Kaderin yıldızları sana güvenir.', taken: false},
    { text: 'Efsanevi bir kader seni bekliyor.', taken: false},
    { text: 'Ruhların fısıltısı sana doğru yolu gösterir.', taken: false},
    { text:'Büyük değişimler yaklaşıyor.', taken: false},
    { text:'Gizemli bir yolculuk seni bekliyor.', taken: false},
    { text:'Rüyalar gerçeğe dönüşüyor.', taken: false},
    { text:'Kozmik dalgalar seninle konuşuyor.', taken: false},
    { text:'Efsanevi bir macera seni bekliyor.', taken: false},
    { text:'Kaderin ipuçlarını takip et.', taken: false},
    { text:'Güçlü bir kader seni çağırıyor.', taken: false},
    { text: 'Gizemli semboller senin için konuşuyor.', taken: false},
    { text: 'Efsanevi bir yolculuk seni bekliyor.', taken: false},
    { text:'Kaderin sırrı zamanla açığa çıkacak.', taken: false},
    { text: 'Gelecek senin ellerinde.', taken: false},
    { text:'Gizemli güçler senin yardımcın olacak.}', taken: false}
];

const generateAnswer = () => {
    let availableAnswers = answers.filter(answer => !answer.taken);
    if (availableAnswers.length === 0) {
        availableAnswers = answers.slice();
        availableAnswers.forEach(answer => answer.taken = false); // Tüm cevaplar false
    }
    const randomIndex = Math.floor(Math.random() * availableAnswers.length);
    const selectedAnswer = availableAnswers[randomIndex];
    selectedAnswer.taken = true; // Seçilen cevabı true yap
    return selectedAnswer.text;
};

// başlangıç açısını vermek 
let rotation = Math.floor(Math.random() * 180) + 90;

// Topun dönüşünü oluşturmak için
const rotateBall = () => {
    playBackgroundSound(); // Arka plan sesini başlat
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
              //  backgroundSound.pause();müzik dursun
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
