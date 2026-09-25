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
  // VALIDAÇÃO DO FORMULÁRIO DE INSCRIÇÃO
  // ----------------------------------------
  const formInscricao = document.querySelector('#formInscricao') || document.querySelector('form');

  if (formInscricao) {
    formInscricao.addEventListener('submit', (evento) => {
      // Impede o recarregamento padrao da pagina
      evento.preventDefault();

      const campoNome = formInscricao.querySelector('input[type="text"]');
      const campoEmail = formInscricao.querySelector('input[type="email"]');

      // 1. Validação do Nome
      if (campoNome && campoNome.value.trim() === '') {
        alert('Por favor, preencha o seu nome completo.');
        campoNome.focus();
        return;
      }

      // 2. Validação do E-mail
      if (campoEmail && (campoEmail.value.trim() === '' || !campoEmail.value.includes('@'))) {
        alert('Por favor, insira um endereço de e-mail válido.');
        campoEmail.focus();
        return;
      }

      // 3. Feedback de Sucesso
      alert('Inscrição realizada com sucesso! Enviamos os detalhes para o seu e-mail.');
      formInscricao.reset(); // Limpa o formulário
    });
  }

  // ----------------------------------------
  // ANIMAÇÃO AO ROLAR (SCROLL REVEAL)
  // ----------------------------------------
  
  // 1. Seleciona os elementos que queremos animar (cartões, formulário, etc.)
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