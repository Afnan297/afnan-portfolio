// Scroll animation

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .info-card"
);

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});


cards.forEach(function(card) {

    card.classList.add("hidden");

    observer.observe(card);

});


// Mouse movement effect

document.addEventListener("mousemove", function(event) {

    const x = event.clientX / window.innerWidth;
    const y = event.clientY / window.innerHeight;

    const glow1 = document.querySelector(".glow-1");
    const glow2 = document.querySelector(".glow-2");

    if (glow1) {
        glow1.style.transform =
            "translate(" + (x * 30) + "px, " + (y * 30) + "px)";
    }

    if (glow2) {
        glow2.style.transform =
            "translate(" + (-x * 30) + "px, " + (-y * 30) + "px)";
    }

});