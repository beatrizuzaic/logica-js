// Exercício 2.1 (Aprovado ou Reprovado)
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)
  const media = (n1 + n2) / 2

  if (media >= 7) {
    saida.textContent = "Aprovado com média " + media.toFixed(1)
    saida.className = "ok"
  } else {
    saida.textContent = "Reprovado com média " + media.toFixed(1)
    saida.className = "erro"
  }
}
