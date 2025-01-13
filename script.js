
// Switch between pages
function nextPage(choice) {
    document.getElementById('page-1').classList.add('hidden');
    const page2 = document.getElementById('page-2');
    page2.classList.remove('hidden');
    page2.classList.add('active');
    const message = document.getElementById('message-2');
    message.innerText = choice === 'yes' ? 
        'Shukriya, mere saath bane rehne ke liye, meri baatein jhelne ke liye aur humesha mera saath dene ke liye.' :
        'Ab mehnat ki hai to dekhle na baba, aaja chal.';
}

// Lights animation
function toggleLights() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawBalloon(x, y, color) {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }

    for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        drawBalloon(x, y, color);
    }
}

// Music playback
function playMusic() {
    const music = document.getElementById('music');
    music.src = 'path/to/your/song.mp3'; // Add your song file path here
    music.play();
    nextPageMusic();
}

// Switch to Page 4
function nextPageMusic() {
    document.querySelector('.active').classList.add('hidden');
    const page4 = document.getElementById('page-4');
    page4.classList.remove('hidden');
    page4.classList.add('active');
}

// Cake cutting animation
function cutCake() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let radius = 50;
    const interval = setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ff6666';
        ctx.fill();
        radius += 10;
        if (radius > 200) clearInterval(interval);
    }, 100);
}