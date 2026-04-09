const secoes = document.querySelectorAll(".reveal");
const botao = document.getElementById("voltarTopo");
const form = document.getElementById("formContato");
const statusMensagem = document.getElementById("mensagemStatus");

function animarSecoes() {
  const alturaTela = window.innerHeight;

  secoes.forEach((secao) => {
    const topo = secao.getBoundingClientRect().top;

    if (topo < alturaTela - 100) {
      secao.classList.add("ativo");
    }
  });
}

function mostrarBotaoTopo() {
  if (window.scrollY > 300) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
}

if (botao) {
  botao.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
      statusMensagem.textContent = "Por favor, preencha todos os campos.";
      statusMensagem.style.color = "red";
      return;
    }

    statusMensagem.textContent = "Mensagem enviada com sucesso!";
    statusMensagem.style.color = "green";
    form.reset();
  });
}

window.addEventListener("scroll", () => {
  animarSecoes();
  mostrarBotaoTopo();
});

window.addEventListener("load", () => {
  animarSecoes();
  mostrarBotaoTopo();
});