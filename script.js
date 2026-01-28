let vida = 100;
let mana = 50;

function rolarDado() {
  const resultado = Math.floor(Math.random() * 20) + 1;

  document.getElementById("resultado").innerText =
    "Resultado do D20: " + resultado;

  if (resultado === 20) {
    alert("🔥 CRÍTICO ABSOLUTO! 🔥");
  } else if (resultado >= 18) {
    alert("⚡ RESULTADO ÉPICO ⚡");
  }
}const canvas = document.getElementById("fundo-paranormal");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let partículas = [];

for (let i = 0; i < 120; i++) {
  partículas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
    brilho: Math.random() * 0.5 + 0.3
  });
}

function animarFundo() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of partículas) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(180, 80, 255, ${p.brilho})`;
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  }

  requestAnimationFrame(animarFundo);
}

animarFundo();
