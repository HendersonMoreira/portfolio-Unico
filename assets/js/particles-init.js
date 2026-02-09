// particles-init.js
// Configuração simples para efeito de neve suave
if (window.particlesJS) {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 140,
                "density": { "enable": true, "value_area": 800 }
            },
            "color": { "value": "#ffffff" },
            "shape": {
                "type": "circle"
            },
            "opacity": {
                "value": 0.8,
                "random": true,
                "anim": { "enable": false }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": { "enable": false }
            },
            "line_linked": { "enable": false },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "bottom",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": { "enable": false },
                "onclick": { "enable": false },
                "resize": true
            }
        },
        "retina_detect": true
    });
} else {
    console.warn('particles.js not loaded yet');
}
