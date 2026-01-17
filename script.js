const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Matrix Text Effect
document.querySelectorAll('.section-title').forEach(header => {
    header.onmouseover = event => {
        let iterations = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return event.target.dataset.value[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
            }
            iterations += 1 / 3;
        }, 30);
    }
});

// === MODAL POPUP LOGIC ===
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const closeBtn = document.getElementsByClassName("close")[0];

// Handle Source Links
document.querySelectorAll('.source-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); 
        
        // Setup Modal
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.justifyContent = "center";
        
        // Set Image
        modalImg.src = this.getAttribute('data-src');
    });
});

// Close functionality
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}