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



const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach((btn) => btn.classList.remove("active"));
            button.classList.add("active");

            projectCards.forEach((card) => {
                const categories = card.dataset.category;

                if (selectedFilter === "all" || categories.includes(selectedFilter)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
}