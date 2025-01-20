document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const cabecalhoConteudo = document.querySelector('.cabecalho__conteudo');

    menuToggle.addEventListener('click', function() {
        cabecalhoConteudo.classList.toggle('show'); // Alterna a exibição do menu
    });
});
