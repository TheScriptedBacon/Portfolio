:root {
    --bg: #000000;
    --fg: #ffffff;
    --dim: #333333;
    --accent: #ffffff;
    --font: 'JetBrains Mono', monospace;
}

* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    background: var(--bg);
    color: var(--fg);
    font-family: var(--font);
    overflow-x: hidden;
    cursor: crosshair;
}

/* HUD Navigation */
.hud {
    position: fixed;
    top: 0; width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 30px;
    background: rgba(0,0,0,0.9);
    border-bottom: 1px solid var(--dim);
    z-index: 1000;
    font-size: 0.75rem;
    letter-spacing: 1px;
}

.dot { height: 8px; width: 8px; border-radius: 50%; display: inline-block; margin-right: 5px; }
.green { background: #00ff41; box-shadow: 0 0 5px #00ff41; }
.red { background: #ff5f56; }
.yellow { background: #ffbd2e; }

/* ESP Toggle */
.switch { position: relative; display: inline-block; width: 34px; height: 18px; margin-left: 10px; vertical-align: middle; }
.switch input { opacity: 0; width: 0; height: 0; }
.slider { position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: var(--dim); transition: .4s; }
.slider:before { position: absolute; content: ""; height: 12px; width: 12px; left: 3px; bottom: 3px; background-color: white; transition: .4s; }
input:checked + .slider { background-color: var(--fg); }
input:checked + .slider:before { transform: translateX(16px); background-color: black; }

/* Hero Section */
.hero { height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }
.profile-wrapper { position: relative; width: 160px; height: 160px; margin-bottom: 20px; }
.avatar { width: 100%; height: 100%; border-radius: 50%; border: 2px solid white; filter: grayscale(1); }
.scan-line { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: 50%; background: linear-gradient(to bottom, transparent 50%, rgba(255,255,255,0.2) 51%, transparent 52%); background-size: 100% 200%; animation: scan 3s linear infinite; pointer-events: none; }

@keyframes scan { from { background-position: 0% -100%; } to { background-position: 0% 100%; } }

h1.glitch { font-size: 4rem; letter-spacing: -2px; }

/* Sections */
.content-section { padding: 80px 20px; max-width: 900px; margin: 0 auto; }
.redacted-content { background: #0a0a0a; padding: 40px; border: 1px solid var(--dim); transition: 0.5s; }
.blurred { filter: blur(15px); pointer-events: none; opacity: 0.3; }
.instruction { color: #666; font-size: 0.7rem; margin-bottom: 10px; }

/* Knowledge Cards */
.knowledge-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-top: 30px; perspective: 1000px; }
.k-card { height: 120px; cursor: pointer; }
.k-inner { position: relative; width: 100%; height: 100%; transition: transform 0.6s; transform-style: preserve-3d; border: 1px solid #444; }
.k-card.flipped .k-inner { transform: rotateY(180deg); }
.k-front, .k-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; display: flex; align-items: center; justify-content: center; padding: 15px; font-size: 0.8rem; text-align: center; }
.k-back { background: white; color: black; transform: rotateY(180deg); }

/* Terminal */
.terminal-window { background: #050505; border: 1px solid var(--dim); border-radius: 4px; overflow: hidden; }
.terminal-header { background: #111; padding: 10px; display: flex; align-items: center; border-bottom: 1px solid var(--dim); }
.terminal-body { padding: 20px; min-height: 400px; position: relative; }
.category-label { color: #555; font-size: 0.7rem; margin: 15px 0 5px; }
.cmd-btn { display: block; width: 100%; text-align: left; background: transparent; border: 1px solid #222; color: #fff; padding: 10px; font-family: inherit; cursor: pointer; margin-bottom: 5px; transition: 0.2s; }
.cmd-btn:hover { background: #fff; color: #000; padding-left: 20px; }
#output-log { margin-top: 20px; color: #00ff41; font-size: 0.85rem; white-space: pre-wrap; border-top: 1px solid #222; padding-top: 15px; }

footer { text-align: center; padding: 40px; font-size: 0.7rem; color: #444; border-top: 1px solid #111; }
