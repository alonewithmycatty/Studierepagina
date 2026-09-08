// STUDIERE — tabs.js
// Alterna la asignatura visible en la sección "Contenido" sin recargar la página.
(function () {
  const buttons = document.querySelectorAll('.subject-button');
  if (!buttons.length) return;

  const panels = document.querySelectorAll('[data-subject-panel]');

  function activate(id) {
    buttons.forEach((btn) => {
      const isActive = btn.getAttribute('data-subject') === id;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-current', isActive ? 'page' : 'false');
    });
    panels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.id === id);
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-subject');
      if (id) {
        activate(id);
        history.replaceState(null, '', '#' + id);
      }
    });
  });

  const initial = window.location.hash ? window.location.hash.slice(1) : 'historia';
  activate(document.getElementById(initial) ? initial : 'historia');
})();
