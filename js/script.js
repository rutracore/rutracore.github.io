// Fade-in ao scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('section').forEach(sec => {
    observer.observe(sec);
});
// Abre o modal
document.querySelectorAll('.modal-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.modal;
        document.getElementById(target).style.display = 'block';
    });
});

// Fecha ao clicar no "x"
document.querySelectorAll('.close').forEach(span => {
    span.addEventListener('click', () => {
        span.closest('.modal').style.display = 'none';
    });
});

// Fecha ao clicar fora do modal
window.onclick = function (event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
};
