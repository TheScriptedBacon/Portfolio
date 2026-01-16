const data = {
    roblox_py: `
> [info] Initializing Python-Roblox Bridge...
> [info] Loading external vision/memory modules...
--------------------------------------------------
PROJECT: EXTERNAL GAME BOT
LANGUAGE: Python
STATUS: Operational / Undetectable

DETAILS:
- Developed an external automation suite for Roblox.
- Bypasses standard in-game detection by running 
  logic outside the game's environment.
- Automates repetitive tasks via screen-scraping 
  and memory-reading logic.
--------------------------------------------------
[SYSTEM]: Efficiency increased by 100%.
    `,
    ai_agent: `
> [info] Connecting to AI Neural Link...
> [info] Workflow: Self-Taught + AI Augmented.
--------------------------------------------------
METHODOLOGY: AI-DRIVEN DEVELOPMENT
"I don't memorize syntax; I master logic."

DETAILS:
- Heavy reliance on LLMs to translate vision into 
  functional Python code.
- Focuses on high-level architecture while AI 
  handles the manual code generation.
- Result: 10x faster deployment of automation scripts.
--------------------------------------------------
[SYSTEM]: Status: Human-AI hybrid workflow active.
    `
};

function runCommand(commandKey) {
    const outputLog = document.getElementById('output-log');
    outputLog.innerHTML = ""; 
    const text = data[commandKey];
    let i = 0;
    
    // Auto-scroll the terminal as it types
    function typeWriter() {
        if (i < text.length) {
            outputLog.innerHTML += text.charAt(i);
            i++;
            // Terminal sound would go here
            setTimeout(typeWriter, 5); 
            outputLog.scrollTop = outputLog.scrollHeight;
        }
    }
    typeWriter();
}
