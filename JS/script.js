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