import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ── Hero: entrance timeline ──────────────────────────────────
const heroTl = gsap.timeline({ paused: true });

heroTl
    .from('[data-hero="badge"]',  { opacity: 0, y: 16, duration: 0.5,  ease: "power2.out" })
    .from('[data-hero="title"]',  { opacity: 0, y: 28, duration: 0.65, ease: "power2.out" }, "-=0.25")
    .from('[data-hero="text"]',   { opacity: 0, y: 16, duration: 0.5,  ease: "power2.out" }, "-=0.3")
    .from('[data-hero="cta"]',    { opacity: 0, y: 16, duration: 0.5,  ease: "power2.out" }, "-=0.25")
    .from('[data-hero="mosaic"]', { opacity: 0,         duration: 0.7,  ease: "power2.out" }, "-=0.4");

// Attend que toutes les images de la hero soient chargées (max 3s)
function waitForHeroImages(): Promise<void> {
    const images = Array.from(
        document.querySelectorAll<HTMLImageElement>("#hero-section img")
    );
    const pending = images.filter(img => !img.complete);
    if (!pending.length) return Promise.resolve();

    return new Promise(resolve => {
        const timeout = setTimeout(resolve, 3000);
        let remaining = pending.length;
        pending.forEach(img => {
            const onDone = () => {
                if (--remaining === 0) {
                    clearTimeout(timeout);
                    resolve();
                }
            };
            img.addEventListener("load",  onDone, { once: true });
            img.addEventListener("error", onDone, { once: true });
        });
    });
}

waitForHeroImages().then(() => {
    document.getElementById("hero-section")?.classList.remove("hero-loading");
    heroTl.play();
});


// ── Scroll animations ────────────────────────────────────────
const scrollAnims: Array<{ selector: string; trigger: string; vars: gsap.TweenVars; stagger?: number }> = [
    { selector: '[data-about="images"]',   trigger: "#a-propos",    vars: { opacity: 0, x: -36, duration: 0.7 } },
    { selector: '[data-about="text"]',     trigger: "#a-propos",    vars: { opacity: 0, x: 36,  duration: 0.7, delay: 0.1 } },
    { selector: "#socialproof .stat-item", trigger: "#socialproof", vars: { opacity: 0, y: 20,  duration: 0.5 }, stagger: 0.1 },
    { selector: "#steps-grid > div",       trigger: "#steps-grid",  vars: { opacity: 0, y: 32,  duration: 0.55 }, stagger: 0.15 },
    { selector: "#pricing-grid > div",     trigger: "#pricing-grid",vars: { opacity: 0, y: 32,  duration: 0.55 }, stagger: 0.12 },
];

scrollAnims.forEach(({ selector, trigger, vars, stagger }) => {
    const els = document.querySelectorAll(selector);
    if (!els.length) return;
    gsap.from(selector, {
        ...vars,
        ease: "power2.out",
        stagger: stagger ?? 0,
        scrollTrigger: { trigger, start: "top 90%" },
    });
});

// ── Logo color on dark sections ─────────────────────────────
const logo = document.getElementById("header-logo");
const headerBg = document.getElementById("header-bg");

["#temoignages"].forEach((id) => {
    const section = document.querySelector<HTMLElement>(id);
    if (!section) return;
    ScrollTrigger.create({
        trigger: section,
        start: "top 10%",
        end: "bottom 10%",
        onEnter:     () => { if (logo) gsap.to(logo, { color: "#ffffff", duration: 0.4 }); },
        onLeave:     () => { if (logo) gsap.to(logo, { color: "#080808", duration: 0.4 }); },
        onEnterBack: () => { if (logo) gsap.to(logo, { color: "#ffffff", duration: 0.4 }); },
        onLeaveBack: () => { if (logo) gsap.to(logo, { color: "#080808", duration: 0.4 }); },
    });
});
