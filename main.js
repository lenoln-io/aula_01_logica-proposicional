import { nextSlide, previousSlide, showSlide } from "./js/slider.js";
import { setupNavigation } from "./js/events.js";

document.addEventListener("DOMContentLoaded", () => {
	setupNavigation();
	showSlide(0);
	document.getElementById("nextBtn").addEventListener("click", nextSlide);
	document.getElementById("prevBtn").addEventListener("click", previousSlide);
});
