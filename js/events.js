import { nextSlide, previousSlide, showSlide } from "./slider.js";

export function setupNavigation() {
	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowRight") nextSlide();
		if (e.key === "ArrowLeft") previousSlide();
	});

	document.querySelectorAll(".slide-dot").forEach((dot, index) => {
		dot.addEventListener("click", () => {
			showSlide(index);
		});
	});
}
