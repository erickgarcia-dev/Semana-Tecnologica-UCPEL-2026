/* ==========================================
   MENU HAMBÚRGUER (ABRIR / FECHAR)
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-hamburguer');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (menuBtn && navMenu) {
    // 1. Abre ou fecha o menu ao clicar no botão hambúrguer
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      navMenu.classList.toggle('active');

      // Atualiza acessibilidade (leitores de ecrã)
      const isExpanded = menuBtn.classList.contains('active');
      menuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // 2. Fecha o menu automaticamente quando clicas num dos links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
});

// ----------------------------------------
// ROLAGEM SUAVE (SMOOTH SCROLL)
// ----------------------------------------
const linksInternos = document.querySelectorAll('a[href^="#"]');

linksInternos.forEach(link => {
  link.addEventListener('click', function (evento) {
    const idAlvo = this.getAttribute('href');

    // Se for apenas "#", ignora
    if (idAlvo === '#') return;

    const elementoAlvo = document.querySelector(idAlvo);

    if (elementoAlvo) {
      evento.preventDefault(); // Impede o salto brusco padrão do navegador

      // Altura do header fixo para descontar e não cobrir o título
      const alturaHeader = 80;
      const posicaoElemento = elementoAlvo.getBoundingClientRect().top;
      const posicaoComDesconto = posicaoElemento + window.pageYOffset - alturaHeader;

      // Executa a rolagem suave
      window.scrollTo({
        top: posicaoComDesconto,
        behavior: 'smooth'
      });
    }
  });
});

// ----------------------------------------
// ANIMAÇÃO AO ROLAR (SCROLL REVEAL)
// ----------------------------------------

// 1. Seleciona os elementos que queremos animar
const elementosParaAnimar = document.querySelectorAll('#sobre, #programacao li, #participantes .card, #inscricao, #contato');

// Adiciona a classe inicial (.revelar) a todos eles
elementosParaAnimar.forEach(el => el.classList.add('revelar'));

// 2. Cria o observador que deteta quando o elemento entra na tela
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add('ativo'); // Ativa a animação
      observador.unobserve(entrada.target); // Para de observar após animar uma vez
    }
  });
}, {
  threshold: 0.15 // Dispara quando 15% do elemento estiver visível
});

// 3. Aplica o observador a cada elemento
elementosParaAnimar.forEach(el => observador.observe(el));

// ----------------------------------------
// VALIDAÇÃO E SUBMISSÃO DO FORMULÁRIO (GOOGLE FORMS)
// ----------------------------------------
const formInscricao = document.getElementById('formInscricao');
const formFeedback = document.getElementById('formFeedback');

// Função para validar o formato basico de CPF (11 dígitos numéricos)
function validarCPF(cpf) {
  const cpfLimpo = cpf.replace(/\D/g, ''); // Remove caracteres não numéricos
  return cpfLimpo.length === 11;
}

if (formInscricao) {
  formInscricao.addEventListener('submit', function (e) {
    e.preventDefault(); // Impede o envio imediato/padrão do formulário

    const cpfInput = document.getElementById('cpf').value;
    const opcaoConfirmacao = document.querySelector('input[name="entry.2033723233"]:checked');

    // 1. Validação do CPF
    if (!validarCPF(cpfInput)) {
      alert('Por favor, insira um CPF válido com 11 dígitos.');
      document.getElementById('cpf').focus();
      return; // Interrompe o envio
    }

    // 2. Validação da opção de Confirmação de Participação
    if (opcaoConfirmacao && opcaoConfirmacao.value === 'Não') {
      alert('A inscrição não foi enviada pois selecionou que NÃO confirma a sua participação.');
      if (formFeedback) {
        formFeedback.textContent = 'Inscrição cancelada (participação não confirmada).';
        formFeedback.style.color = '#FF9800';
      }
      return; // Interrompe o envio
    }

    // 3. Se passou nas validações, envia os dados para o Google Forms via Fetch
    if (formFeedback) {
      formFeedback.textContent = 'Enviando inscrição...';
      formFeedback.style.color = '#00BCD4';
    }

    const formData = new FormData(formInscricao);

    fetch(formInscricao.action, {
      method: 'POST',
      body: formData,
      mode: 'no-cors' // Necessário para enviar ao Google Forms sem erro de CORS
    })
    .then(() => {
      alert('Inscrição realizada com sucesso! Obrigado por participar.');
      if (formFeedback) {
        formFeedback.textContent = 'Inscrição enviada com sucesso!';
        formFeedback.style.color = '#4CAF50';
      }
      formInscricao.reset();
    })
    .catch((error) => {
      console.error('Erro ao enviar:', error);
      alert('Houve um erro ao enviar a sua inscrição. Tente novamente.');
      if (formFeedback) {
        formFeedback.textContent = 'Erro no envio da inscrição.';
        formFeedback.style.color = '#F44336';
      }
    });
  });
}