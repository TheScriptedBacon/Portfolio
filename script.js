// Challenge 1: Slider
const techSlider = document.getElementById('tech-slider');
techSlider.addEventListener('input', (e) => {
    if (e.target.value == 100) {
        document.getElementById('tech-challenge').classList.add('hidden');
        document.getElementById('tech-content').classList.remove('hidden');
    }
});

// Challenge 2: Hold
const holdBtn = document.getElementById('hold-btn');
let holdTimer;
let holdProgress = 0;

function startHold() {
    holdTimer = setInterval(() => {
        holdProgress += 2;
        holdBtn.innerText = `AUTHORIZING... ${holdProgress}%`;
        if (holdProgress >= 100) {
            clearInterval(holdTimer);
            document.getElementById('work-challenge').classList.add('hidden');
            document.getElementById('work-content').classList.remove('hidden');
        }
    }, 30);
}

function stopHold() {
    clearInterval(holdTimer);
    if (holdProgress < 100) {
        holdProgress = 0;
        holdBtn.innerText = "HOLD (0%)";
    }
}

holdBtn.addEventListener('mousedown', startHold);
holdBtn.addEventListener('touchstart', startHold);
holdBtn.addEventListener('mouseup', stopHold);
holdBtn.addEventListener('touchend', stopHold);
holdBtn.addEventListener('mouseleave', stopHold);
