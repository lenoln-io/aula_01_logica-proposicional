import { nextSlide, previousSlide, showSlide } from "./js/slider.js";
import { setupNavigation } from "./js/events.js";
import { avaliarAcesso, verificarEx1, verificarEx2 } from "./js/avaliacao.js";

document.addEventListener("DOMContentLoaded", () => {
	setupNavigation();
	showSlide(0);
	document.getElementById("nextBtn").addEventListener("click", nextSlide);
	document.getElementById("prevBtn").addEventListener("click", previousSlide);
	document
		.getElementById("verificarEx1Btn")
		.addEventListener("click", verificarEx1);
	document
		.getElementById("verificarEx2Btn")
		.addEventListener("click", verificarEx2);
	document
		.getElementById("estudante")
		.addEventListener("change", avaliarAcesso);
	document.getElementById("cadastro").addEventListener("change", avaliarAcesso);
	document.getElementById("taxa").addEventListener("change", avaliarAcesso);
});
