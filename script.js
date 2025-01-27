const video = document.getElementById('mainVideo');
const texts = document.querySelectorAll('.block__video .text');
const videoParts = [
    { start: 0, end: 5 }, // Время в секундах для первой части
    { start: 5, end: 10 }, // Время для второй части
    { start: 10, end: 15 }, // Время для третьей части
    { start: 15, end: 20 }  // Время для четвертой части
];

let currentPart = 0;

video.addEventListener('timeupdate', () => {
    if (video.currentTime >= videoParts[currentPart].end) {
        currentPart++;
        if (currentPart < videoParts.length) {
            video.currentTime = videoParts[currentPart].start;
        } else {
            video.currentTime = 0; // Сбросить на начало
            currentPart = 0; // Вернуться к первой части
        }
    }
});

// Начать воспроизведение
video.currentTime = videoParts[currentPart].start;
video.play();