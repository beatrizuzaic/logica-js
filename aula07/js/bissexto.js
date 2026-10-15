// Exercício 4.3 (Ano Bissexto)
const botao = document.querySelector("#verificar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const ano = Number(document.querySelector("#ano").value)

  // divisível por 4 e não por 100, OU divisível por 400
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    saida.textContent = ano + " é bissexto (fevereiro tem 29 dias)"
    saida.className = "ok"
  } else {
    saida.textContent = ano + " não é bissexto"
    saida.className = "alerta"
  }
}
