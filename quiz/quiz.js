// PARTE 1: Lista de perguntas e respostas
const perguntas = [
  {
    pergunta: "Em qual cidade se passa a maior parte da série 'Friends'?",
    respostas: [
      { opcao: "Los Angeles", correto: false },
      { opcao: "Nova York", correto: true },
      { opcao: "Boston", correto: false },
      { opcao: "Chicago", correto: false }
    ]
  },
  {
    pergunta: "Qual o vilão principal em 'Vingadores: Gerra Infinita'?",
    respostas: [
      { opcao: "Loki", correto: false },
      { opcao: "Ultron", correto: false },
      { opcao: "Venom", correto: false },
      { opcao: "Thanos", correto: true }
    ]
  },
  {
    pergunta: "Quem canta a música 'Shape of You'?",
    respostas: [
      { opcao: "Ed Sheeran", correto: true },
      { opcao: "Justin Bieber", correto: false },
      { opcao: "Harry Styles", correto: false },
      { opcao: "Shawn Mendes", correto: false }
    ]
  },
  {
    pergunta: "Qual dessas redes sociais pertence ao Facebook(Meta)?",
    respostas: [
      { opcao: "Twitter", correto: false },
      { opcao: "Tiktok", correto: false },
      { opcao: "Instagram", correto: true },
      { opcao: "Snapchat", correto: false }
    ]
  },
  {
    pergunta: "Qual é o único alimento que nunca estraga?",
    respostas: [
      { opcao: "Sal", correto: false },
      { opcao: "Arroz", correto: false },
      { opcao: "Pimenta", correto: false },
      { opcao: "Mel", correto: true }
    ]
  }
];

// PARTE 2: Lógica do jogo

const perguntaEl = document.querySelector(".pergunta");
const respostasEl = document.querySelector(".respostas");
const progressoEl = document.querySelector(".progresso");
const fimEl = document.querySelector(".fim");

let indiceAtual = 0;
let acertos = 0;

function mostrarPergunta() {
  const perguntaAtual = perguntas[indiceAtual];
  perguntaEl.textContent = perguntaAtual.pergunta;
  progressoEl.textContent = `Pergunta ${indiceAtual + 1} de ${perguntas.length}`;

  respostasEl.innerHTML = ""; //limpa as respostas anteriores

  perguntaAtual.respostas.forEach((resposta, index) => {
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.textContent = resposta.opcao;
    botao.addEventListener("click", () => verificarResposta(resposta.correto));
    respostasEl.appendChild(botao);
  });
}

function verificarResposta(correto) {
  if (correto) {
    acertos++;
  }
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    mostrarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.querySelector(".conteudo").style.display = "none";
  fimEl.style.display = "flex";
  fimEl.querySelector("span").textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas!`;
}
function reiniciarQuiz() {
  indiceAtual = 0;
  acertos = 0;
  fimEl.style.display = "none";
  document.querySelector(".conteudo").style.display = "flex";
  mostrarPergunta();
}

function gabarito() {
  fimEl.style.display = "none"; // Esconde o resultado final
  const conteudoEl = document.querySelector(".conteudo");
  conteudoEl.style.display = "block"; // Mostra a área das perguntas

  // Limpa conteúdo anterior
  conteudoEl.innerHTML = "<h3 style='color: white;'>Gabarito:</h3>";

  // Percorre todas as perguntas do array "perguntas"
  perguntas.forEach((item, i) => {
    // Cria um parágrafo com a pergunta
    const pergunta = document.createElement("p");
    pergunta.style.color = "white";
    pergunta.innerHTML = `<strong>${i + 1}. ${item.pergunta}</strong>`;
    conteudoEl.appendChild(pergunta); // Adiciona essa pergunta ao conteúdo

    // Para cada resposta da pergunta atual...
    item.respostas.forEach((resp) => {
      const resposta = document.createElement("p");
      resposta.style.marginLeft = "20px";
      resposta.style.color = resp.correto ? "#19caca" : "#bbb";
      resposta.innerHTML = `${resp.opcao} ${resp.correto ? "✅" : ""}`;
      conteudoEl.appendChild(resposta);
    });

    // Cria uma linha separadora entre as perguntas
    const separador = document.createElement("hr");
    separador.style.border = "1px dashed #555";
    conteudoEl.appendChild(separador);
  });
}

function voltarInicio() {
  location.reload();
}


//Iniciar quiz
mostrarPergunta();

