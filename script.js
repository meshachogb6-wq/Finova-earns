// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Finova Earns!");
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Animate statistics when page loads
const stats = document.querySelectorAll(".stat-card h2");

stats.forEach(stat => {
    stat.style.opacity = "0";
    stat.style.transform = "translateY(20px)";

    setTimeout(() => {
        stat.style.transition = "0.8s";
        stat.style.opacity = "1";
        stat.style.transform = "translateY(0)";
    }, 300);
});

// Scroll to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#FFD700";
topBtn.style.color = "#08111f";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
function logout() {

    if (confirm("Are you sure you want to logout?")) {

        // Remove saved login information
        localStorage.removeItem("loggedInUser");
        localStorage.removeItem("userToken");

        // Go back to login page
        window.location.href = "login.html";
    }

}

function logoutAllDevices() {

    alert("This feature will be available after the backend is connected.");

                    }
