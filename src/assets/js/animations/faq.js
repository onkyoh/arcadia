import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(max-width: 767px)", () => {
	const Y = { el: 25, item: 20 };

	// FAQ title & picture — page-load timeline
	gsap.timeline({ delay: 0.15 })
		.fromTo("#faq-2294 .cs-title",       { opacity: 0, y: Y.el }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
		.fromTo("#faq-2294 .cs-faq-picture", { opacity: 0, y: Y.el }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.55");

	// FAQ items — staggered scroll reveal (fromTo so CSS opacity:0 → 1)
	gsap.fromTo("#faq-2294 .cs-faq-item",
		{ opacity: 0, y: Y.item },
		{
			opacity: 1,
			y: 0,
			duration: 0.75,
			ease: "power2.out",
			stagger: 0.08,
			scrollTrigger: {
				trigger: "#faq-2294 .cs-faq",
				start: "top 75%",
				once: true,
			},
		}
	);

	// Sidebar picture — scroll reveal
	gsap.fromTo("#faq-2294 .cs-picture",
		{ opacity: 0, y: Y.el },
		{
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#faq-2294 .cs-picture-group",
				start: "top 75%",
				once: true,
			},
		}
	);
});

mm.add("(min-width: 768px)", () => {
	const Y = { el: 40, item: 35 };

	// FAQ title & picture — page-load timeline
	gsap.timeline({ delay: 0.25 })
		.fromTo("#faq-2294 .cs-title",       { opacity: 0, y: Y.el }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
		.fromTo("#faq-2294 .cs-faq-picture", { opacity: 0, y: Y.el }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.55");

	// FAQ items — staggered scroll reveal (fromTo so CSS opacity:0 → 1)
	gsap.fromTo("#faq-2294 .cs-faq-item",
		{ opacity: 0, y: Y.item },
		{
			opacity: 1,
			y: 0,
			duration: 0.75,
			ease: "power2.out",
			stagger: 0.1,
			scrollTrigger: {
				trigger: "#faq-2294 .cs-faq",
				start: "top 75%",
				once: true,
			},
		}
	);

	// Sidebar picture — scroll reveal
	gsap.fromTo("#faq-2294 .cs-picture",
		{ opacity: 0, y: Y.el },
		{
			opacity: 1,
			y: 0,
			duration: 0.8,
			ease: "power2.out",
			scrollTrigger: {
				trigger: "#faq-2294 .cs-picture-group",
				start: "top 75%",
				once: true,
			},
		}
	);
});
