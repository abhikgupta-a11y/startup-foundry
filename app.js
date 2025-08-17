// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  document.body.classList.toggle('mobile-open');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.body.classList.remove('mobile-open');
    }
  });
});

// Fake submit handler for Apply form (replace with backend or Formspree)
const form = document.getElementById('applyForm');
const msg = document.getElementById('formMsg');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  console.log('Form data:', data);
  msg.textContent = 'Thanks! Your application has been recorded. We will reach out within 72 hours.';
  form.reset();
});
