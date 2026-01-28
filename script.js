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
}
