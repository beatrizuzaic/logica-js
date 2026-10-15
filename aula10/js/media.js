const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

const calcularMedia = (a,b) => {
  return (a + b) / 2
}

botao.onclick = () => {
  // 1. ler
  const n1 = Number(document.querySelector("#nota1").value)
  const n2 = Number(document.querySelector("#nota2").value)
  // 2. calcular
  const media = calcularMedia(n1,n2)
  // 3. mostrar
  saida.textContent = "Média: " + media.toFixed(1)
}
