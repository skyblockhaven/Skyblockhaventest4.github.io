const serverIP = "PLAY.SKYBLOCKHAVEN.COM";

function copyIP(){
    navigator.clipboard.writeText(serverIP);
    alert("Server IP copied: " + serverIP);
}

// ===== Animated Browser Title =====
const titles = [
    "⛏️ SkyBlockHaven",
    "🌐 Join SkyBlockHaven",
    "🎮 Minecraft Server",
    "✨ Play Today!"
];

let titleIndex = 0;

setInterval(() => {
    document.title = titles[titleIndex];
    titleIndex = (titleIndex + 1) % titles.length;
}, 1500);

// ===== Typing Animation =====
const typing = document.getElementById("typing");

const text = [
    "Welcome to SkyBlockHaven",
    "The Ultimate Minecraft Network",
    "SkyBlock • Survival • Events"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const current = text[textIndex];

    if (!deleting) {
        typing.textContent = current.substring(0, charIndex++);
    } else {
        typing.textContent = current.substring(0, charIndex--);
    }

    let speed = deleting ? 40 : 80;

    if (!deleting && charIndex > current.length) {
        deleting = true;
        speed = 1500;
    }

    if (deleting && charIndex < 0) {
        deleting = false;
        textIndex = (textIndex + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

if (typing) {
    typeEffect();
}

// ===== Scroll Reveal =====
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section, .card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
});

// ===== Floating Particles =====
const canvas = document.createElement("canvas");
canvas.id = "particles";
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();

window.addEventListener("resize", resize);

const particles = [];

for (let i = 0; i < 80; i++) {

    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5
    });

}

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#4cc9ff";

    particles.forEach(p => {

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    });

    requestAnimationFrame(animate);

}

animate();

// ===== Smooth Navigation Highlight =====
document.querySelectorAll("nav a").forEach(link => {

    // Highlight the link matching the current page on load
    const page = window.location.pathname.split("/").pop() || "index.html";
    if (link.getAttribute("href") === page) {
        link.classList.add("active");
    }

    link.addEventListener("click", () => {

        document.querySelectorAll("nav a").forEach(a => {
            a.classList.remove("active");
        });

        link.classList.add("active");

        // Close the mobile menu after picking a link
        const nav = document.querySelector("nav");
        if (nav) nav.classList.remove("open");

    });

});

// ===== Hamburger Menu Toggle =====
const hamburgerBtn = document.getElementById("hamburgerBtn");
const navEl = document.querySelector("nav");

if (hamburgerBtn && navEl) {

    hamburgerBtn.addEventListener("click", () => {
        navEl.classList.toggle("open");
    });

}
