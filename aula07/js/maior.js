// Exercício 2.3 (Qual é o Maior?)
const botao = document.querySelector("#comparar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const a = Number(document.querySelector("#numero-a").value)
  const b = Number(document.querySelector("#numero-b").value)

  if (a > b) {
    saida.textContent = "O maior é " + a
    saida.className = "ok"
  } else if (b > a) {
    saida.textContent = "O maior é " + b
    saida.className = "ok"
  } else {
    saida.textContent = "Os dois números são iguais"
    saida.className = "alerta"
  }
}
