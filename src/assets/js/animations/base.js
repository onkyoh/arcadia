import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const mm = gsap.matchMedia();

export function reveal(targets, options = {}) {
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
			start: "top 75%",
			once: true,
		},
	});
}

// CTA — shared across all pages
mm.add("(max-width: 767px)", () => {
	const Y = { el: 25, item: 20 };
	reveal("#cta-2353 .cs-title",        { y: Y.el });
	reveal("#cta-2353 .cs-button-solid", { y: Y.item });
	reveal("#cta-2353 .cs-picture",      { y: Y.el });
});

mm.add("(min-width: 768px)", () => {
	const Y = { el: 40, item: 35 };
	reveal("#cta-2353 .cs-title",        { y: Y.el });
	reveal("#cta-2353 .cs-button-solid", { y: Y.item });
	reveal("#cta-2353 .cs-picture",      { y: Y.el });
});
