// Click animation for interactive effect
document.querySelectorAll("section").forEach((section) => {
    section.addEventListener("click", () => {
        section.style.transition = "transform 0.4s ease";
        section.style.transform = "scale(1.03)";
        setTimeout(() => {
            section.style.transform = "scale(1)";
        }, 400);
    });
});
