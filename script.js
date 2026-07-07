const canvas = document.getElementById('particle-bg');
const ctx = canvas.getContext('2d');
let width, height, particles;

function resize() {
  width = canvas.width = window.innerWidth * window.devicePixelRatio;
  height = canvas.height = window.innerHeight * window.devicePixelRatio;
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  initParticles();
}

function initParticles() {
  const count = Math.min(90, Math.max(42, Math.floor(window.innerWidth / 18)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.45 * window.devicePixelRatio,
    vy: (Math.random() - 0.5) * 0.45 * window.devicePixelRatio,
    r: (Math.random() * 1.8 + 0.6) * window.devicePixelRatio
  }));
}

function draw() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = 'rgba(105, 225, 255, 0.78)';
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const a = particles[i];
      const b = particles[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d = Math.sqrt(dx * dx + dy * dy);
      const limit = 150 * window.devicePixelRatio;
      if (d < limit) {
        ctx.strokeStyle = `rgba(86, 182, 255, ${0.16 * (1 - d / limit)})`;
        ctx.lineWidth = window.devicePixelRatio;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(draw);
}

window.addEventListener('resize', resize);
resize();
draw();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .research-card, .project-card').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
