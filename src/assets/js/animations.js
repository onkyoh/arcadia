import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

function reveal(targets, options = {}) {
  const els = gsap.utils.toArray(targets);
  if (!els.length) return;
  gsap.from(els, {
    opacity: 0,
    y: options.y,
    duration: options.duration ?? 0.8,
    ease: "power2.out",
    stagger: options.stagger ?? 0,
    scrollTrigger: {
      trigger: els[0],
      start: "top 65%",
      once: true,
    },
  });
}

mm.add("(max-width: 767px)", () => {
  const Y = { el: 25, item: 20 };

  // Hero — on-load timeline, no ScrollTrigger
  gsap.timeline({ delay: 0.15 })
    .from("#hero-2344 .cs-heading",    { opacity: 0, y: Y.el, duration: 0.8,  ease: "power2.out" })
    .from("#hero-2344 .cs-title",      { opacity: 0, y: Y.el, duration: 0.8,  ease: "power2.out" }, "-=0.55")
    .from("#hero-2344 .cs-button-group", { opacity: 0, y: Y.el, duration: 0.75, ease: "power2.out" }, "-=0.55");

  // Services
  reveal("#services-2355 .cs-title", { y: Y.el });
  reveal("#services-2355 .cs-item",  { y: Y.item, stagger: 0.1, duration: 0.75 });

  // Not Typical
  reveal("#typical .cs-title",       { y: Y.el });
  reveal("#typical .cs-text",        { y: Y.item, stagger: 0.08, duration: 0.75 });
  reveal("#typical .cs-button-solid", { y: Y.item });
  reveal("#typical .cs-picture",     { y: Y.el });

  // Models — stagger all content children in DOM order so h3/text/button cascade linearly
  reveal("#models .cs-title",         { y: Y.el });
  reveal("#models .cs-content > *",   { y: Y.item, stagger: 0.08, duration: 0.75 });
  reveal("#models .cs-picture",       { y: Y.el });

  // Carousel
  reveal("#carousel .cs-title",      { y: Y.el });
  reveal("#carousel .cs-item",       { y: Y.item, stagger: 0.1, duration: 0.75 });

  // Process
  reveal("#process .cs-title",       { y: Y.el });
  reveal("#process .cs-li",          { y: Y.item, stagger: 0.1, duration: 0.75 });
  reveal("#process .cs-picture",     { y: Y.el });

  // Hospitality SBS
  reveal("#sbs-2358 .cs-title",      { y: Y.el });
  reveal("#sbs-2358 .cs-picture1",   { y: Y.el });
  reveal("#sbs-2358 .cs-picture2",   { y: Y.el });
  reveal("#sbs-2358 .cs-h3",         { y: Y.item });

  // FAQ
  reveal("#faq-2294 .cs-title",      { y: Y.el });
  reveal("#faq-2294 .cs-faq-picture", { y: Y.el });
  reveal("#faq-2294 .cs-faq-item",   { y: Y.item, stagger: 0.08, duration: 0.75 });

  // CTA
  reveal("#cta-2353 .cs-title",      { y: Y.el });
  reveal("#cta-2353 .cs-button-solid", { y: Y.item });
  reveal("#cta-2353 .cs-picture",    { y: Y.el });
});

mm.add("(min-width: 768px)", () => {
  const Y = { el: 40, item: 35 };

  // Hero — on-load timeline, no ScrollTrigger
  gsap.timeline({ delay: 0.25 })
    .from("#hero-2344 .cs-heading",    { opacity: 0, y: Y.el, duration: 0.9,  ease: "power2.out" })
    .from("#hero-2344 .cs-title",      { opacity: 0, y: Y.el, duration: 0.9,  ease: "power2.out" }, "-=0.55")
    .from("#hero-2344 .cs-button-group", { opacity: 0, y: Y.el, duration: 0.85, ease: "power2.out" }, "-=0.55");

  // Services
  reveal("#services-2355 .cs-title", { y: Y.el });
  reveal("#services-2355 .cs-item",  { y: Y.item, stagger: 0.12, duration: 0.75 });

  // Not Typical
  reveal("#typical .cs-title",       { y: Y.el });
  reveal("#typical .cs-text",        { y: Y.item, stagger: 0.08, duration: 0.75 });
  reveal("#typical .cs-button-solid", { y: Y.item });
  reveal("#typical .cs-picture",     { y: Y.el });

  // Models — stagger all content children in DOM order so h3/text/button cascade linearly
  reveal("#models .cs-title",         { y: Y.el });
  reveal("#models .cs-content > *",   { y: Y.item, stagger: 0.08, duration: 0.75 });
  reveal("#models .cs-picture",       { y: Y.el });

  // Carousel
  reveal("#carousel .cs-title",      { y: Y.el });
  reveal("#carousel .cs-item",       { y: Y.item, stagger: 0.12, duration: 0.75 });

  // Process
  reveal("#process .cs-title",       { y: Y.el });
  reveal("#process .cs-li",          { y: Y.item, stagger: 0.12, duration: 0.75 });
  reveal("#process .cs-picture",     { y: Y.el });

  // Hospitality SBS
  reveal("#sbs-2358 .cs-title",      { y: Y.el });
  reveal("#sbs-2358 .cs-picture1",   { y: Y.el });
  reveal("#sbs-2358 .cs-picture2",   { y: Y.el });
  reveal("#sbs-2358 .cs-h3",         { y: Y.item });

  // FAQ
  reveal("#faq-2294 .cs-title",      { y: Y.el });
  reveal("#faq-2294 .cs-faq-picture", { y: Y.el });
  reveal("#faq-2294 .cs-faq-item",   { y: Y.item, stagger: 0.1, duration: 0.75 });

  // CTA
  reveal("#cta-2353 .cs-title",      { y: Y.el });
  reveal("#cta-2353 .cs-button-solid", { y: Y.item });
  reveal("#cta-2353 .cs-picture",    { y: Y.el });
});
