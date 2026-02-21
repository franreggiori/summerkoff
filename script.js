const revealItems = document.querySelectorAll('.reveal');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const bookingForm = document.querySelector('#booking-form');
const bookingMessage = document.querySelector('#booking-message');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

if (bookingForm && bookingMessage) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(bookingForm);
    const sucursal = data.get('sucursal');
    const servicio = data.get('servicio');
    const profesional = data.get('profesional');
    const fecha = data.get('fecha');

    bookingMessage.textContent = `Reserva solicitada para ${sucursal} · ${servicio} con ${profesional} el ${fecha}. Nos comunicaremos para confirmar tu horario.`;
  });
}
