const secoes = document.querySelectorAll(".reveal");
const botao = document.getElementById("voltarTopo");

function animar() {
  const alturaTela = window.innerHeight;

  secoes.forEach((secao) => {
    const topo = secao.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      secao.classList.add("ativo");
    }
  });
}

function botaoTopo() {
  if (window.scrollY > 300) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
}

botao.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.addEventListener("scroll", () => {
  animar();
  botaoTopo();
});

window.addEventListener("load", () => {
  animar();
});