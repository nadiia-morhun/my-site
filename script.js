document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('.fact-btn').forEach((button) => {
    const facts = JSON.parse(button.dataset.facts || '[]');
    let index = 0;
    button.addEventListener('click', () => {
      if (!facts.length) return;
      button.textContent = facts[index];
      index = (index + 1) % facts.length;
      button.classList.add('chip--shown');
    });
  });

  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form && status) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = 'Будь ласка, заповни всі обов’язкові поля коректно.';
        return;
      }

      const name = document.getElementById('name')?.value.trim() || 'друже';
      status.textContent = `Дякую, ${name}! Повідомлення для котів успішно підготовлено.`;
      form.reset();
    });
  }
});
