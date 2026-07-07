const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.section, .entry, .mini-entry').forEach((el) => {
  el.classList.add('fade-in');
  observer.observe(el);
});
