

   
  //animação portifolio-box
        document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.portifolio-box');

    function revealCards() {
        const windowHeight = window.innerHeight;

        cards.forEach(portifoliobox => {
            const cardTop = portifoliobox.getBoundingClientRect().top;

            if (cardTop < windowHeight - 100) { // Se o card estiver dentro da visão
                portifoliobox.classList.add('visible');
            }
        });
    }

    // Chama a função ao rolar a página
    window.addEventListener('scroll', revealCards);

    // Chama a função uma vez ao carregar
    revealCards();
});

//animação contato
        document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.contato-conte');

    function revealCards() {
        const windowHeight = window.innerHeight;

        cards.forEach(contatoconte => {
            const cardTop = contatoconte.getBoundingClientRect().top;

            if (cardTop < windowHeight - 100) { // Se o card estiver dentro da visão
                contatoconte.classList.add('visible');
            }
        });
    }

    // Chama a função ao rolar a página
    window.addEventListener('scroll', revealCards);

    // Chama a função uma vez ao carregar
    revealCards();
});
