document.addEventListener('DOMContentLoaded', function () {
    // Elementos de controle do menu
    const menuToggle = document.getElementById('menuToggle');
    const menuAberto = document.querySelector('.menu-aberto');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const body = document.body;

    // Abre/fecha o menu ao mudar o estado do checkbox
    menuToggle.addEventListener('change', function () {
        if (menuToggle.checked) {
            menuAberto.classList.add('active');
            body.classList.add('no-scroll');
        } else {
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });

    // Fecha o menu ao clicar em um link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.checked = false;
            menuAberto.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    // Theme toggle (dark <-> light)
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');

    function applyTheme(isLight) {
        if (isLight) {
            document.body.classList.add('light-theme');
            if (themeIcon) themeIcon.className = 'bi bi-sun-fill';
        } else {
            document.body.classList.remove('light-theme');
            if (themeIcon) themeIcon.className = 'bi bi-moon-fill';
        }
    }

    // Load saved preference
    const saved = localStorage.getItem('site-theme');
    const initialLight = saved === 'light';
    applyTheme(initialLight);

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const isLight = !document.body.classList.contains('light-theme');
            applyTheme(isLight);
            localStorage.setItem('site-theme', isLight ? 'light' : 'dark');
        });
    }
});
