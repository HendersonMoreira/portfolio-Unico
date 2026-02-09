// Portfolio Filter e Load More functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadLessBtn = document.getElementById('loadLessBtn');
    let visibleCards = 6; // Inicialmente mostrar 6 cards

    if (!projectCards || projectCards.length === 0) {
        console.warn('Nenhum project-card encontrado — verifique o HTML da seção Portfolio.');
        return;
    }

    // Função para filtrar projetos
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remover classe active de todos os botões
            filterBtns.forEach(b => b.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            this.classList.add('active');

            // Filtrar projetos
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    // Animar cards visíveis
                    setTimeout(() => { card.style.opacity = '1'; }, 10);
                } else {
                    card.style.display = 'none';
                }
            });

            // Resetar visibilidade ao filtrar
            resetVisibility();
        });
    });

    // Função para resetar a visibilidade dos cards
    function resetVisibility() {
        // Usa getComputedStyle para descobrir visibilidade real
        const visibleFiltered = Array.from(projectCards).filter(card => window.getComputedStyle(card).display !== 'none');

        visibleFiltered.forEach((card, index) => {
            if (index < visibleCards) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });

        // Mostrar/ocultar botão "Ver Mais"
        updateLoadMoreBtn();
    }

    // Função para mostrar mais cards
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            const active = document.querySelector('.filter-btn.active');
            const filter = active ? active.getAttribute('data-filter') : 'all';
            const filteredCards = Array.from(projectCards).filter(card => {
                const category = card.getAttribute('data-category');
                return filter === 'all' || category === filter;
            });

            // Mostrar próximos 3 cards
            const currentVisible = filteredCards.filter(card => !card.classList.contains('hidden')).length;
            let shown = 0;

            for (let i = currentVisible; i < filteredCards.length && shown < 3; i++) {
                filteredCards[i].classList.remove('hidden');
                shown++;
            }

            // Atualizar botão
            updateLoadMoreBtn();
        });
    }

    // Função para mostrar menos cards
    if (loadLessBtn) {
        loadLessBtn.addEventListener('click', function() {
            const active = document.querySelector('.filter-btn.active');
            const filter = active ? active.getAttribute('data-filter') : 'all';
            const filteredCards = Array.from(projectCards).filter(card => {
                const category = card.getAttribute('data-category');
                return filter === 'all' || category === filter;
            });

            // Voltar a mostrar apenas visibleCards
            filteredCards.forEach((card, index) => {
                if (index >= visibleCards) {
                    card.classList.add('hidden');
                }
            });

            // Atualizar botões
            updateLoadMoreBtn();
        });
    }

    // Função para atualizar visibilidade dos botões
    function updateLoadMoreBtn() {
        const activeBtn = document.querySelector('.filter-btn.active');
        const filter = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
        const filteredCards = Array.from(projectCards).filter(card => {
            const category = card.getAttribute('data-category');
            return filter === 'all' || category === filter;
        });

        const hiddenCards = filteredCards.filter(card => card.classList.contains('hidden')).length;
        const visibleNow = filteredCards.filter(card => !card.classList.contains('hidden')).length;

        // Mostrar "Ver Mais" se houver cards ocultos
        if (loadMoreBtn) loadMoreBtn.style.display = hiddenCards > 0 ? 'block' : 'none';

        // Mostrar "Ver Menos" se houver mais de visibleCards visíveis
        if (loadLessBtn) loadLessBtn.style.display = visibleNow > visibleCards ? 'block' : 'none';
    }

    // Mostrar apenas 6 primeiros cards inicialmente
    projectCards.forEach((card, index) => {
        if (index >= visibleCards) card.classList.add('hidden');
    });

    // Inicializa estado dos botões
    try {
        updateLoadMoreBtn();
    } catch (err) {
        console.error('Erro ao inicializar botões de portfolio:', err);
    }
});
