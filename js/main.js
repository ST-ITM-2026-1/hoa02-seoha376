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



const githubProfile = document.getElementById("github-profile");
const username = "seoha376";

async function fetchGitHubProfile() {
    if (!githubProfile) return;

    try {
        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error("Failed to fetch GitHub profile.");
        }

        const data = await response.json();

        githubProfile.innerHTML = `
            <img src="${data.avatar_url}" alt="${data.login}" class="profile-img">
            <h3>${data.name || data.login}</h3>
            <p>${data.bio || "No bio available."}</p>
            <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            <p><strong>Followers:</strong> ${data.followers}</p>
            <p><strong>Following:</strong> ${data.following}</p>
            <p><a href="${data.html_url}" target="_blank">View GitHub</a></p>
        `;
    } catch (error) {
        githubProfile.innerHTML = `<p>${error.message}</p>`;
    }
}

fetchGitHubProfile();