document.addEventListener('DOMContentLoaded', function () {
    const cursorFollower = document.getElementById('cursorFollower');

    if (!cursorFollower || !window.matchMedia('(pointer: fine)').matches) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    function animateCursor() {
        currentX += (targetX - currentX) * 0.18;
        currentY += (targetY - currentY) * 0.18;
        cursorFollower.style.left = `${currentX}px`;
        cursorFollower.style.top = `${currentY}px`;
        requestAnimationFrame(animateCursor);
    }

    document.addEventListener('pointermove', function (event) {
        targetX = event.clientX;
        targetY = event.clientY;
        cursorFollower.classList.add('is-visible');

        const interactive = event.target.closest('a, button, .service-row, .project-card');
        cursorFollower.classList.toggle('is-hovering', Boolean(interactive));
    });

    document.addEventListener('pointerleave', function () {
        cursorFollower.classList.remove('is-visible', 'is-hovering');
    });

    animateCursor();
});