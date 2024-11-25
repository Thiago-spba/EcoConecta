// Aguarda o carregamento completo da página para iniciar o conteúdo
window.addEventListener('load', () => {
  // Seleciona o elemento de preloader
  const preloader = document.getElementById('preloader');
  
  // Esconde o preloader após o carregamento completo
  preloader.style.display = 'none';

  // Remove a classe 'preload' do body para tornar o conteúdo visível
  document.body.classList.remove('preload');
});

// Conteúdo de mensagens explicativas para cada sistema
const mensagens = {
  energiaSolar: "A sustentabilidade deixou de ser uma tendência para se tornar uma necessidade. Condomínios que investem em práticas ESG (Ambiental, Social e Governança) valorizam o patrimônio, reduzem custos e atraem moradores conscientes. E a energia solar fotovoltaica é o primeiro passo para essa transformação.",
  aguaChuva: "Em um cenário de crescente preocupação com a escassez de recursos hídricos, a implementação de sistemas de captação e aproveitamento de água pluvial em condomínios residenciais consolida-se como uma estratégia fundamental para a otimização da gestão hídrica e a promoção da sustentabilidade.",
  iluminacao: "Em um contexto de crescente demanda por soluções sustentáveis e economicamente viáveis, a modernização dos sistemas de iluminação em condomínios residenciais apresenta-se como uma estratégia crucial para a otimização do consumo energético e a redução dos custos operacionais. A adoção de tecnologias de iluminação inteligente, aliada à utilização de luminárias de alta eficiência, proporciona benefícios significativos para a gestão condominial e o meio ambiente.",
  gestao: "A gestão condominial eficiente exige ferramentas modernas e eficazes que atendam às necessidades de um mundo cada vez mais conectado e consciente. Uma plataforma digital sustentável e integrada oferece recursos para simplificar as tarefas administrativas, otimizar a comunicação entre moradores e administração, reduzir custos e promover práticas ESG - Ambiental, Social e Governança."
};

function mostrarMensagem(tipo) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  
  if (popup && popupMessage && mensagens[tipo]) {
    popupMessage.textContent = mensagens[tipo];
    popup.style.display = 'flex';
  }
}

function fecharPopup() {
  const popup = document.getElementById('popup');
  if (popup) {
    popup.style.display = 'none';
  }
}

// Funções do EcoDesign
function abrirEcoDesign() {
  const popup = document.getElementById('ecoDesignPopup');
  popup.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function fecharEcoDesign() {
  const popup = document.getElementById('ecoDesignPopup');
  popup.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Event listener para fechar os popups ao clicar fora
window.addEventListener('click', function(event) {
  const popupMensagem = document.getElementById('popup');
  const popupEcoDesign = document.getElementById('ecoDesignPopup');
  
  // Para o popup de mensagens
  if (event.target === popupMensagem) {
    fecharPopup();
  }
  
  // Para o popup do EcoDesign
  if (event.target === popupEcoDesign) {
    fecharEcoDesign();
  }
});
// Inicializa os contadores
let contadoresCliques = JSON.parse(localStorage.getItem('contadoresCliques')) || {
  energiaSolar: 0,
  aguaChuva: 0,
  iluminacao: 0,
  gestao: 0
};

// Função para atualizar os contadores na tela
function atualizarContadores() {
  for (let tipo in contadoresCliques) {
      const elemento = document.getElementById(`contador-${tipo}`);
      if (elemento) {
          elemento.textContent = `${contadoresCliques[tipo]} visualizações`;
      }
  }
}

// Modifica a função mostrarMensagem existente
function mostrarMensagem(tipo) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popup-message');
  
  // Incrementa o contador
  contadoresCliques[tipo]++;
  
  // Salva no localStorage
  localStorage.setItem('contadoresCliques', JSON.stringify(contadoresCliques));
  
  // Atualiza o display
  atualizarContadores();
  
  if (popup && popupMessage && mensagens[tipo]) {
      popupMessage.textContent = mensagens[tipo];
      popup.style.display = 'flex';
  }
}

// Carrega os contadores quando a página carrega
window.addEventListener('load', () => {
  atualizarContadores();
  // ... resto do seu código de load existente ...
});
function mostrarEstatisticas() {
  const popup = document.getElementById('estatisticas-popup');
  popup.style.display = 'flex';
  atualizarContadores();
}

function fecharEstatisticas() {
  const popup = document.getElementById('estatisticas-popup');
  popup.style.display = 'none';
}

// Adicionar ao event listener existente de clique fora
window.addEventListener('click', function(event) {
  const popup = document.getElementById('estatisticas-popup');
  if (event.target === popup) {
      fecharEstatisticas();
  }
  // ... seus outros event listeners ...
});