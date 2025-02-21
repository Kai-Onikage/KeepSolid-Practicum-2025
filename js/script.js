document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Button hover effect
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#ffcc00";
            this.style.color = "#000";
        });
        button.addEventListener("mouseout", function() {
            this.style.backgroundColor = "#fff";
            this.style.color = "#d00027";
        });
    });

    // Alert message when visiting homepage
    if (document.title.includes("Home")) {
        setTimeout(() => {
            alert("Welcome to the Liverpool FC Fan Page! You'll Never Walk Alone!");
        }, 1000);
    }

    // Image hover effect
    document.querySelectorAll(".team img, .history img, .contact img").forEach(img => {
        img.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.05)";
            this.style.transition = "transform 0.3s ease";
        });
        img.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
        });
    });
});
