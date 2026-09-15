document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menuButton');
    const siteMenu = document.getElementById('siteMenu');

    if (!menuButton || !siteMenu) return;

    function setMenuState(isOpen) {
        siteMenu.classList.toggle('is-open', isOpen);
        menuButton.setAttribute('aria-expanded', String(isOpen));
    }

    menuButton.addEventListener('click', function (event) {
        event.stopPropagation();
        setMenuState(!siteMenu.classList.contains('is-open'));
    });

    siteMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            setMenuState(false);
        });
    });

    document.addEventListener('click', function (event) {
        if (!siteMenu.contains(event.target) && event.target !== menuButton) {
            setMenuState(false);
        }
    });
});
