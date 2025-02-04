document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector(".theme-toggle-container");
    const themeIcon = document.getElementById("theme-icon");
    const themePath = document.getElementById("theme-path");

    // Load theme preference from localStorage
    let savedTheme = localStorage.getItem("theme");

    if (!savedTheme) {
        // Default to dark mode if no preference is set
        savedTheme = "dark-mode";
        localStorage.setItem("theme", savedTheme);
    }

    document.body.classList.add(savedTheme);
    updateIcon(savedTheme === "dark-mode");

    // Handle theme toggle click
    themeToggle.addEventListener("click", function () {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            document.body.classList.add("light-mode");
            localStorage.setItem("theme", "light-mode");
            updateIcon(false);
        } else {
            document.body.classList.remove("light-mode");
            document.body.classList.add("dark-mode");
            localStorage.setItem("theme", "dark-mode");
            updateIcon(true);
        }
    });

    // Function to update the theme icon
    function updateIcon(isDark) {
        if (isDark) {
            // Circle icon for Dark Mode (default)
            themePath.setAttribute("d", "M12 3C8.134 3 5 6.134 5 10s3.134 7 7 7c3.866 0 7-3.134 7-7S15.866 3 12 3z");
            themeIcon.style.transform = "rotate(180deg)";
        } else {
            // Sun icon for Light Mode
            themePath.setAttribute("d", "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z");
            themeIcon.style.transform = "rotate(0deg)";
        }
    }
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

