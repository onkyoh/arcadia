import gsap from "gsap";
import { mm, reveal } from "./base";

mm.add("(max-width: 767px)", () => {
	const Y = { el: 25, item: 20 };

	// Intro — page-load timeline (first section, in view on load)
	gsap.timeline({ delay: 0.15 })
		.fromTo("#intro .cs-picture",      { opacity: 0, y: Y.el   }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
		.fromTo("#intro .cs-title",        { opacity: 0, y: Y.el   }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.55")
		.fromTo("#intro .cs-text",         { opacity: 0, y: Y.el   }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.55")
		.fromTo("#intro .cs-button-solid", { opacity: 0, y: Y.item }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.55");

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
		.fromTo("#intro .cs-picture",      { opacity: 0, y: Y.el   }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
		.fromTo("#intro .cs-title",        { opacity: 0, y: Y.el   }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.55")
		.fromTo("#intro .cs-text",         { opacity: 0, y: Y.el   }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.55")
		.fromTo("#intro .cs-button-solid", { opacity: 0, y: Y.item }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.55");

	// Gallery — staggered image reveal
	reveal("#gallery .cs-gallery-item", { y: Y.el, stagger: 0.1 });

	// Closing
	reveal("#closing .cs-picture", { y: Y.el });
	reveal("#closing .cs-title",   { y: Y.el });
	reveal("#closing .cs-text",    { y: Y.item, stagger: 0.1 });
});
