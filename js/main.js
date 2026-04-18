const themeToggleButton = document.getElementById("theme-toggle");

if (themeToggleButton) {
    themeToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("light-theme");
    });
}