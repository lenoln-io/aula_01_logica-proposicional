export function toggleTruthValue(element, isTrue) {
	const truthValue = element.querySelector(".truth-value");
	const isHidden = truthValue.style.display === "none";

	truthValue.style.display = isHidden ? "block" : "none";
	element.style.backgroundColor = isHidden
		? isTrue
			? "#f0fdf4"
			: "#fef2f2"
		: "#f0fdf4";
}
