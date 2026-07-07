const canvas = document.getElementById('bg-canvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let particles = [];
let w = 0;
let h = 0;

function resizeCanvas() {
  if (!canvas || !ctx) return;
  const dpr = window.devicePixelRatio || 1;
  w = canvas.width = Math.floor(window.innerWidth * dpr);
  h = canvas.height = Math.floor(window.innerHeight * dpr);
  canvas.style.width = window.innerWidth + 'px';
  canvas.style.height = window.innerHeight + 'px';
  const count = Math.min(42, Math.max(18, Math.floor(window.innerWidth / 45)));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.18 * dpr,
    vy: (Math.random() - 0.5) * 0.18 * dpr,
    r: (Math.random() * 1.8 + 0.8) * dpr
  }));
}

function drawBackground() {
  if (!canvas || !ctx) return;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = 'rgba(23, 114, 208, 0.10)';
  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > w) p.vx *= -1;
    if (p.y < 0 || p.y > h) p.vy *= -1;
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
      const dist = Math.sqrt(dx * dx + dy * dy);
      const limit = 120 * (window.devicePixelRatio || 1);
      if (dist < limit) {
        ctx.strokeStyle = `rgba(23, 114, 208, ${0.05 * (1 - dist / limit)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }
  requestAnimationFrame(drawBackground);
}

if (canvas && ctx) {
  resizeCanvas();
  drawBackground();
  window.addEventListener('resize', resizeCanvas);
}
