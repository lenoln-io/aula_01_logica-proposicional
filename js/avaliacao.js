export function avaliarAcesso() {
	const estudante = document.getElementById("estudante").value === "true";
	const cadastro = document.getElementById("cadastro").value === "true";
	const taxa = document.getElementById("taxa").value === "true";
	const resultado = document.getElementById("resultado");

	const temAcesso = (estudante && cadastro) || (!estudante && cadastro && taxa);

	resultado.style.display = "block";
	resultado.className = temAcesso
		? "p-4 rounded-lg text-center font-medium bg-green-100 text-green-800"
		: "p-4 rounded-lg text-center font-medium bg-red-100 text-red-800";
	resultado.textContent = temAcesso
		? "✅ ACESSO LIBERADO!"
		: "❌ ACESSO NEGADO!";
}

export function verificarEx1() {
	const respostas = { ex1a: true, ex1b: false, ex1c: true, ex1d: false };
	let corretas = 0;

	for (const id in respostas) {
		const checkbox = document.getElementById(id);
		if (checkbox.checked === respostas[id]) corretas++;
	}

	const resultado = document.getElementById("resultadoEx1");
	resultado.style.display = "block";
	resultado.className =
		corretas === 4
			? "mt-3 text-sm text-green-700 bg-green-100 p-2 rounded"
			: "mt-3 text-sm text-orange-700 bg-orange-100 p-2 rounded";
	resultado.textContent =
		corretas === 4
			? `🎉 Perfeito! ${corretas}/4 corretas!`
			: `📚 ${corretas}/4 corretas. Revise: proposições são sentenças que podem ser V ou F.`;
}

export function verificarEx2() {
	const respostasCorretas = ["V", "F", "V", "V"];
	let corretas = 0;

	for (let i = 1; i <= 4; i++) {
		const select = document.getElementById(`r${i}`);
		if (select.value === respostasCorretas[i - 1]) {
			corretas++;
			select.style.backgroundColor = "#f0fdf4";
		} else {
			select.style.backgroundColor = "#fef2f2";
		}
	}

	const resultado = document.getElementById("resultadoEx2");
	resultado.style.display = "block";
	resultado.className =
		corretas === 4
			? "mt-3 text-sm text-green-700 bg-green-100 p-2 rounded"
			: "mt-3 text-sm text-orange-700 bg-orange-100 p-2 rounded";
	resultado.textContent =
		corretas === 4
			? "🎉 Excelente! Tabela verdade completa!"
			: `📊 ${corretas}/4 corretas. Lembre-se: (p ∧ q) ∨ (¬p) - primeiro calcule cada parte!`;
}
