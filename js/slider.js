export let currentSlide = 0;
const totalSlides = 9;

export function showSlide(n) {
	currentSlide = (n + totalSlides) % totalSlides;

	updateSlideDisplay();
	updateProgressBar();
	updateSlideCounter();
	updateNavButtons();
}

export function nextSlide() {
	if (currentSlide < totalSlides - 1) showSlide(currentSlide + 1);
}

export function previousSlide() {
	if (currentSlide > 0) showSlide(currentSlide - 1);
}

function updateSlideDisplay() {
	const slides = document.querySelectorAll(".slide");
	const dots = document.querySelectorAll(".slide-dot");

	slides.forEach((s) => s.classList.remove("active"));
	dots.forEach((d) => d.classList.remove("bg-green-500", "active"));

	slides[currentSlide].classList.add("active");
	dots[currentSlide].classList.add("bg-green-500", "active");
}

function updateProgressBar() {
	const progress = ((currentSlide + 1) / totalSlides) * 100;
	document.getElementById("progressBar").style.width = `${progress}%`;
}

function updateSlideCounter() {
	document.getElementById("slideCounter").textContent =
		`${currentSlide + 1} / ${totalSlides}`;
}

function updateNavButtons() {
	document.getElementById("prevBtn").style.opacity =
		currentSlide === 0 ? "0.5" : "1";
	document.getElementById("nextBtn").style.opacity =
		currentSlide === totalSlides - 1 ? "0.5" : "1";
}
