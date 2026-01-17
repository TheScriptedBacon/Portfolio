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

// === POPUP LOGIC ===
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    const closeBtn = document.getElementsByClassName("close")[0];

    // Select all links with class 'source-link'
    document.querySelectorAll('.source-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // THIS STOPS THE REDIRECT
            e.preventDefault(); 
            
            // Show the modal
            modal.style.display = "flex";
            modal.style.flexDirection = "column";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            
            // Set the image src
            modalImg.src = this.getAttribute('data-src');
        });
    });

    // Close Button Action
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Close if clicking outside the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});