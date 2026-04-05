const corInicialInput = document.getElementById("corInicial");
const corFinalInput = document.getElementById("corFinal");
const quantidadeInput = document.getElementById("quantidade");
const container = document.getElementById("container");

corInicialInput.value = "#ff0000"; // vermelho
corFinalInput.value = "#ffff00";   // amarelo

function hexParaRgb(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function gerarCores() {
  container.innerHTML = "";

  let corInicial = hexParaRgb(corInicialInput.value);
  let corFinal = hexParaRgb(corFinalInput.value);
  let n = parseInt(quantidadeInput.value);

  for (let i = 0; i < n; i++) {
    let t = i / (n - 1);

    let r = Math.round(lerp(corInicial.r, corFinal.r, t));
    let g = Math.round(lerp(corInicial.g, corFinal.g, t));
    let b = Math.round(lerp(corInicial.b, corFinal.b, t));

    let div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    container.appendChild(div);
  }
}

// ENTER no input
quantidadeInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") gerarCores();
});

corInicialInput.addEventListener("change", gerarCores);
corFinalInput.addEventListener("change", gerarCores);

// inicializa
gerarCores();
