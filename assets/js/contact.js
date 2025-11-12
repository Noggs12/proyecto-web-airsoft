const form = document.getElementById('contactForm');
const toast = document.getElementById('formToast');
const toastMessage = toast?.querySelector('.form-toast__message');
const toastClose = toast?.querySelector('.form-toast__close');

let toastTimerId = null;

const showToast = (message) => {
  if (!toast) return;

  if (toastMessage && message) {
    toastMessage.textContent = message;
  }

  toast.classList.add('is-visible');
  toast.setAttribute('aria-hidden', 'false');

  if (toastTimerId) {
    window.clearTimeout(toastTimerId);
  }

  toastTimerId = window.setTimeout(() => {
    hideToast();
  }, 4000);
};

const hideToast = () => {
  if (!toast) return;
  toast.classList.remove('is-visible');
  toast.setAttribute('aria-hidden', 'true');

  if (toastTimerId) {
    window.clearTimeout(toastTimerId);
    toastTimerId = null;
  }
};

if (toastClose) {
  toastClose.addEventListener('click', () => {
    hideToast();
  });
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showToast('¡Mensaje enviado correctamente!');
    form.reset();
  });
}



