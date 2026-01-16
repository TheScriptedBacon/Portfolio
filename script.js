// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// A "Hacker" text effect for headings
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelectorAll('h1, h2').forEach(header => {
    header.onmouseover = event => {
        let iterations = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iterations) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if(iterations >= event.target.dataset.value.length) { 
                clearInterval(interval);
            }
            iterations += 1 / 3;
        }, 30);
    }
    // Store original text
    header.dataset.value = header.innerText;
});

console.log("System Status: Operational. Welcome, Carbon.");
