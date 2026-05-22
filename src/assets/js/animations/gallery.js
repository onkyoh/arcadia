import gsap from "gsap";
import { mm, reveal } from "./base";

mm.add("(max-width: 767px)", () => {
	gsap.utils.toArray("#gallery .cs-gallery-item").forEach((el) => reveal(el, { y: 25 }));
});

mm.add("(min-width: 768px)", () => {
	gsap.utils.toArray("#gallery .cs-gallery-item").forEach((el) => reveal(el, { y: 40 }));
});
