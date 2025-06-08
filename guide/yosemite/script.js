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

function scrollToSection(target) {
    const section = document.querySelector(target);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 50, // Adjust offset for navbar
            behavior: "smooth"
        });
    }
}