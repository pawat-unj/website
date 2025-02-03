document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme preference, default to dark mode
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === "dark-mode") {
            themeToggle.checked = true;
        }
    } else {
        body.classList.add("dark-mode"); // Default to dark mode
        themeToggle.checked = true;
        localStorage.setItem("theme", "dark-mode");
    }

    themeToggle.addEventListener("change", () => {
        if (themeToggle.checked) {
            body.classList.replace("light-mode", "dark-mode");
            localStorage.setItem("theme", "dark-mode");
        } else {
            body.classList.replace("dark-mode", "light-mode");
            localStorage.setItem("theme", "light-mode");
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute("href"));
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");

    document.addEventListener("mousemove", (event) => {
        const x = event.clientX / window.innerWidth;
        const y = event.clientY / window.innerHeight;

        // Ensure greater contrast between corners while staying in the blue/cyan spectrum
        const r1 = Math.round(10 + 50 * x);  // Slight red tint in top-left
        const g1 = Math.round(80 + 100 * y); // Cyan tones shifting
        const b1 = Math.round(180 + 70 * (1 - x)); // Stronger blue in top-left

        const r2 = Math.round(5 + 40 * (1 - x));
        const g2 = Math.round(130 + 50 * y);
        const b2 = Math.round(230 + 40 * x); // More vibrant cyan in top-right

        const r3 = Math.round(15 + 30 * y);
        const g3 = Math.round(90 + 120 * x); // More greenish-blue in bottom-left
        const b3 = Math.round(200 + 50 * (1 - y)); // Deep blue in bottom-right

        aboutSection.style.background = `linear-gradient(135deg, 
            rgba(${r1}, ${g1}, ${b1}, 0.8), 
            rgba(${r2}, ${g2}, ${b2}, 0.7), 
            rgba(${r3}, ${g3}, ${b3}, 0.6))`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const workTitle = document.getElementById("work-title");
    const text = "About My Work"; // Your headline text
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            workTitle.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust speed here
        }
    }

    // Trigger effect when the section becomes visible
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeEffect();
                // observer.disconnect(); // Ensures it only runs once
            }
        });
    });

    observer.observe(workTitle);
});

document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.querySelector(".gallery-container");

    let isDown = false;
    let startX;
    let scrollLeft;

    gallery.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener("mouseleave", () => {
        isDown = false;
    });

    gallery.addEventListener("mouseup", () => {
        isDown = false;
    });

    gallery.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed
        gallery.scrollLeft = scrollLeft - walk;
    });
});

