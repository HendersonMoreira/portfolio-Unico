document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide) => {
        let currentIndex = 0;
        const images = slide.querySelectorAll('img');
        const nextButton = slide.querySelector('.next');
        const prevButton = slide.querySelector('.prev');
        const intervalTime = 3000;

        // Função para mostrar a imagem atual
        function showSlide(index) {
            images.forEach((img, i) => {
                img.style.opacity = (i === index) ? '1' : '0';
            });
        }

        // Navegação para o próximo slide
        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        });

        // Navegação para o slide anterior
        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showSlide(currentIndex);
        });

        // Slideshow automático
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showSlide(currentIndex);
        }, intervalTime);

        // Exibe o slide inicial
        showSlide(currentIndex);
    });
});


// Scroll suave para a seção de contato a partir do botão 'fale-comigo'
const faleBtn = document.getElementById('fale-comigo');
if (faleBtn) {
    faleBtn.addEventListener('click', function() {
        // Suporta tanto id 'contact' quanto 'contato'
        const target = document.getElementById('contact') || document.getElementById('contato');
        if (target && typeof target.scrollIntoView === 'function') {
            target.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.warn('Elemento de contato não encontrado para scroll.');
        }
    });
} else {
    console.warn("Botão 'fale-comigo' não encontrado no DOM.");
}