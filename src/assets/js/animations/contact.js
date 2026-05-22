import gsap from "gsap";
import { mm } from "./base";

mm.add("(max-width: 767px)", () => {
  const Y = { el: 25, item: 20 };

  gsap.timeline({
    scrollTrigger: { trigger: "#contact-717", start: "top 75%", once: true },
  })
    .from("#contact-717 .cs-picture",      { opacity: 0, y: Y.el,   duration: 0.8,  ease: "power2.out" })
    .from("#contact-717 .cs-title",        { opacity: 0, y: Y.el,   duration: 0.8,  ease: "power2.out" }, "-=0.55")
    .from("#contact-717 .cs-text",         { opacity: 0, y: Y.el,   duration: 0.8,  ease: "power2.out" }, "-=0.55")
    .from("#contact-717 .cs-label",        { opacity: 0, y: Y.item, duration: 0.75, ease: "power2.out", stagger: 0.08 }, "-=0.55")
    .from("#contact-717 .cs-fieldset",     { opacity: 0, y: Y.item, duration: 0.75, ease: "power2.out" }, "-=0.3")
    .from("#contact-717 .cs-button-solid", { opacity: 0, y: Y.item, duration: 0.75, ease: "power2.out" }, "-=0.4");
});

mm.add("(min-width: 768px)", () => {
  const Y = { el: 40, item: 35 };

  gsap.timeline({
    scrollTrigger: { trigger: "#contact-717", start: "top 75%", once: true },
  })
    .from("#contact-717 .cs-picture",      { opacity: 0, y: Y.el,   duration: 0.8,  ease: "power2.out" })
    .from("#contact-717 .cs-title",        { opacity: 0, y: Y.el,   duration: 0.8,  ease: "power2.out" }, "-=0.55")
    .from("#contact-717 .cs-text",         { opacity: 0, y: Y.el,   duration: 0.8,  ease: "power2.out" }, "-=0.55")
    .from("#contact-717 .cs-label",        { opacity: 0, y: Y.item, duration: 0.75, ease: "power2.out", stagger: 0.08 }, "-=0.55")
    .from("#contact-717 .cs-fieldset",     { opacity: 0, y: Y.item, duration: 0.75, ease: "power2.out" }, "-=0.3")
    .from("#contact-717 .cs-button-solid", { opacity: 0, y: Y.item, duration: 0.75, ease: "power2.out" }, "-=0.4");
});
