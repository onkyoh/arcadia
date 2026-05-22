import gsap from "gsap";
import { mm, reveal } from "./base";

mm.add("(max-width: 767px)", () => {
	reveal("#gallery .cs-gallery-item", { y: 25, stagger: 0.05 });
});

mm.add("(min-width: 768px)", () => {
	reveal("#gallery .cs-gallery-item", { y: 40, stagger: 0.05 });
});
