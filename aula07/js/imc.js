// Exercícios 3.1 (IMC com Faixas) e 3.3 (Campo Vazio)
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const campoPeso = document.querySelector("#peso")
  const campoAltura = document.querySelector("#altura")
  const peso = Number(campoPeso.value)
  const altura = Number(campoAltura.value)

  // 3.3: primeiro conferir a entrada, depois calcular
  if (campoPeso.value === "" || campoAltura.value === "") {
    saida.textContent = "Preencha o peso e a altura."
    saida.className = "erro"
  } else if (peso <= 0 || altura <= 0) {
    saida.textContent = "Peso e altura precisam ser maiores que zero."
    saida.className = "erro"
  } else {
    const imc = peso / (altura * altura)
    let faixa
    let classe

    // A primeira condição verdadeira vence: a ordem importa
    if (imc < 18.5) {
      faixa = "Abaixo do peso"
      classe = "alerta"
    } else if (imc < 25) {
      faixa = "Peso normal"
      classe = "ok"
    } else if (imc < 30) {
      faixa = "Sobrepeso"
      classe = "alerta"
    } else {
      faixa = "Obesidade"
      classe = "erro"
    }

    saida.textContent = "IMC " + imc.toFixed(1) + ": " + faixa
    saida.className = classe
  }
}
