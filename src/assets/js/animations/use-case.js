import gsap from "gsap";
import { mm, reveal } from "./base";

mm.add("(max-width: 767px)", () => {
	const Y = { el: 25, item: 20 };

	// Intro — page-load timeline (first section, in view on load)
	gsap.timeline({ delay: 0.15 })
		.from("#intro .cs-picture", { opacity: 0, y: Y.el, duration: 0.8, ease: "power2.out" })
		.from("#intro .cs-title",   { opacity: 0, y: Y.el, duration: 0.8, ease: "power2.out" }, "-=0.55")
		.from("#intro .cs-text",    { opacity: 0, y: Y.el, duration: 0.8, ease: "power2.out" }, "-=0.55");
	reveal("#intro .cs-button-solid", { y: Y.item });

	// Gallery — staggered image reveal
	reveal("#gallery .cs-gallery-item", { y: Y.el, stagger: 0.08 });

	// Closing
	reveal("#closing .cs-picture", { y: Y.el });
	reveal("#closing .cs-title",   { y: Y.el });
	reveal("#closing .cs-text",    { y: Y.item });
});

mm.add("(min-width: 768px)", () => {
	const Y = { el: 40, item: 35 };

	// Intro — page-load timeline
	gsap.timeline({ delay: 0.25 })
		.from("#intro .cs-picture", { opacity: 0, y: Y.el, duration: 0.8, ease: "power2.out" })
		.from("#intro .cs-title",   { opacity: 0, y: Y.el, duration: 0.8, ease: "power2.out" }, "-=0.55")
		.from("#intro .cs-text",    { opacity: 0, y: Y.el, duration: 0.8, ease: "power2.out" }, "-=0.55");
	reveal("#intro .cs-button-solid", { y: Y.item });

	// Gallery — staggered image reveal
	reveal("#gallery .cs-gallery-item", { y: Y.el, stagger: 0.1 });

	// Closing
	reveal("#closing .cs-picture", { y: Y.el });
	reveal("#closing .cs-title",   { y: Y.el });
	reveal("#closing .cs-text",    { y: Y.item, stagger: 0.1 });
});
