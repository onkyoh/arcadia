import gsap from "gsap";
import { mm, reveal } from "./base";

mm.add("(max-width: 767px)", () => {
	const Y = { el: 25, item: 20 };

	// Mission — page-load timeline (first section, in view on load)
	gsap.timeline({ delay: 0.15 })
		.from("#mission .cs-picture1", { opacity: 0, y: Y.el, duration: 0.8,  ease: "power2.out" })
		.from("#mission .cs-title",    { opacity: 0, y: Y.el, duration: 0.8,  ease: "power2.out" }, "-=0.55")
		.from("#mission .cs-h3",       { opacity: 0, y: Y.el, duration: 0.8,  ease: "power2.out" }, "-=0.55");
	reveal("#mission .cs-picture2", { y: Y.el });

	// Why — picture has order:-1 on mobile so it's visually first; each element gets its own trigger
	reveal("#why .cs-picture1",    { y: Y.el });
	reveal("#why .cs-title",       { y: Y.el });
	gsap.utils.toArray("#why .cs-li").forEach(el => reveal(el, { y: Y.item, duration: 0.75 }));
	reveal("#why .cs-button-solid", { y: Y.item });
});

mm.add("(min-width: 768px)", () => {
	const Y = { el: 40, item: 35 };

	// Mission — page-load timeline
	gsap.timeline({ delay: 0.25 })
		.from("#mission .cs-picture1", { opacity: 0, y: Y.el, duration: 0.8,  ease: "power2.out" })
		.from("#mission .cs-title",    { opacity: 0, y: Y.el, duration: 0.8,  ease: "power2.out" }, "-=0.55")
		.from("#mission .cs-h3",       { opacity: 0, y: Y.el, duration: 0.8,  ease: "power2.out" }, "-=0.55");
	reveal("#mission .cs-picture2", { y: Y.el });

	// Why
	reveal("#why .cs-picture1",    { y: Y.el });
	reveal("#why .cs-title",       { y: Y.el });
	reveal("#why .cs-li",          { y: Y.item, stagger: 0.1, duration: 0.75 });
	reveal("#why .cs-button-solid", { y: Y.item });
});
