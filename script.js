const motivos = [
  "Seu sorriso e sua voz iluminam meu dia.",
  "Você me entende como ninguém.",
  "Cada momento com você é, por mais simples que seja, é especial.",
  "Você é meu porto seguro.",
  "Você cuida de mim.",
  "Você é super compreensiva comigo",
  "Você é maravilhosa de linda",
  "Você é super inteligente"
];

function mostrarMotivo() {
  const motivo = motivos[Math.floor(Math.random() * motivos.length)];
  document.getElementById('motivo').innerText = motivo;
}
function verificarSenha() {
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("mensagem-erro");
  if (senha === "080920") {
    document.getElementById("senha-container").style.display = "none";
    document.getElementById("surpresa-container").style.display = "block";
  } else {
    erro.style.display = "block";
  }
}
