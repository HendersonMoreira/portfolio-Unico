document.addEventListener('DOMContentLoaded', function () {
    const cards = Array.from(document.querySelectorAll('.portfolio-grid .project-card'));
    const previousButton = document.getElementById('portfolioPrev');
    const nextButton = document.getElementById('portfolioNext');

    if (!cards.length || !previousButton || !nextButton) return;

    let currentIndex = 0;

    function showProject(index) {
        currentIndex = (index + cards.length) % cards.length;
        cards.forEach((card, cardIndex) => {
            card.classList.toggle('slider-active', cardIndex === currentIndex);
        });
    }

    previousButton.addEventListener('click', function () {
        showProject(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
        showProject(currentIndex + 1);
    });

    showProject(0);
});