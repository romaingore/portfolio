// ── Hero: typewriter ─────────────────────────────────────────
const words = ["d'être visible.", "d'être connu."];
const typewriterEl = document.getElementById("hero-typewriter");

if (typewriterEl) {
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function tick() {
        const current = words[wordIndex];
        typewriterEl!.textContent = current.slice(0, charIndex);

        if (!deleting && charIndex === current.length) {
            setTimeout(() => { deleting = true; tick(); }, 2200);
            return;
        }
        if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(tick, 300);
            return;
        }
        charIndex += deleting ? -1 : 1;
        setTimeout(tick, deleting ? 40 : 80);
    }

    setTimeout(tick, 800);
}

// ── Hero: entrance animations ────────────────────────────────
const heroItems = document.querySelectorAll<HTMLElement>(
    '[data-hero="badge"], [data-hero="title"], [data-hero="text"], [data-hero="cta"], [data-hero="mosaic"]'
);

heroItems.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
});

const heroDelays: Record<string, number> = {
    badge:  100,
    title:  250,
    text:   450,
    cta:    600,
    mosaic: 400,
};

requestAnimationFrame(() => {
    heroItems.forEach((el) => {
        const key = el.dataset.hero as string;
        const delay = heroDelays[key] ?? 0;
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, delay);
    });
});


// ── Scroll animations ────────────────────────────────────────
interface ScrollAnim {
    selector: string;
    from: Partial<CSSStyleDeclaration>;
    stagger?: number;
}

const scrollAnims: ScrollAnim[] = [
    { selector: '[data-about="images"]', from: { opacity: "0", transform: "translateX(-36px)" } },
    { selector: '[data-about="text"]',   from: { opacity: "0", transform: "translateX(36px)" } },
    { selector: "#socialproof .stat-item", from: { opacity: "0", transform: "translateY(20px)" }, stagger: 100 },
    { selector: "#pricing-grid > div",     from: { opacity: "0", transform: "translateY(32px)" }, stagger: 120 },
];

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const delay = parseInt(el.dataset.animDelay ?? "0", 10);
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "none";
            }, delay);
            observer.unobserve(el);
        });
    },
    { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
);

scrollAnims.forEach(({ selector, from, stagger = 0 }) => {
    const els = document.querySelectorAll<HTMLElement>(selector);
    els.forEach((el, i) => {
        Object.assign(el.style, from);
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        el.dataset.animDelay = String(i * stagger);
        observer.observe(el);
    });
});
