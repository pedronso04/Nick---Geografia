document.addEventListener('DOMContentLoaded', () => {
    const readMoreLinks = document.querySelectorAll('.read-more');
    const newsDetails = document.querySelectorAll('.news-details');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            // Esconde todas as seções de detalhes
            newsDetails.forEach(section => {
                section.style.display = 'none';
            });

            // Mostra a seção de detalhes clicada
            targetSection.style.display = 'block';

            // Rolagem suave para a seção
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
