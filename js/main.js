const themeToggleButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "pink") {
    document.body.classList.add("pink-theme");
}

if (themeToggleButton) {
    themeToggleButton.addEventListener("click", function () {
        document.body.classList.toggle("pink-theme");


        if (document.body.classList.contains("pink-theme")) {
            localStorage.setItem("theme", "pink");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
}