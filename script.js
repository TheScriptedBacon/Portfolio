// Toggle ESP Vision
const espToggle = document.getElementById('esp-toggle');
const hiddenData = document.getElementById('hidden-data');

espToggle.addEventListener('change', () => {
    hiddenData.classList.toggle('blurred', !espToggle.checked);
});

// Project Data - Strictly Python focused
const data = {
    roblox_py: `
> [INIT] Executing: python3 roblox_external_v2.py
> [CORE] Connecting to Game Client via Local Process...
> [INPUT] Local HID Driver initialized for Movement.
--------------------------------------------------
PROJECT: EXTERNAL MOVEMENT BOT
LANGUAGE: Python
TYPE: Local Execution (External)

DESCRIPTION:
- Operates locally on the host machine.
- Manages player inputs and movement logic.
- Utilizes computer vision and memory reading to 
  automate tasks without injecting code into 
  the game client.
--------------------------------------------------
> STATUS: RUNNING (100% Efficiency)`,

    ai_agent: `
> [INIT] Executing: python3 ai_thought_partner.py
> [INFO] Loading Neural Weights via API...
--------------------------------------------------
METHODOLOGY: AI-DRIVEN DEVELOPMENT
"The lazy engineer automates the repetitive."

DESCRIPTION:
- Relies heavily on LLMs to architect logic.
- Uses AI to generate Python boilerplates, 
  allowing focus on high-level automation strategy.
- Self-taught via AI-augmented research.
--------------------------------------------------
> STATUS: LINK STABLE`
};

function runCommand(key) {
    const log = document.getElementById('output-log');
    log.innerHTML = "> INITIATING SYSTEM CALL...";
    let i = 0;
    const text = data[key];

    setTimeout(() => {
        log.innerHTML = "";
        function typeWriter() {
            if (i < text.length) {
                log.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 5);
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            }
        }
        typeWriter();
    }, 600);
}

// Glitch Header Effect
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
document.querySelector(".glitch").onmouseover = event => {
    let iter = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("")
            .map((l, index) => index < iter ? event.target.dataset.text[index] : letters[Math.floor(Math.random() * 36)])
            .join("");
        if(iter >= event.target.dataset.text.length) clearInterval(interval);
        iter += 1 / 3;
    }, 30);
};
