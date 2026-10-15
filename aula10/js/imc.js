// Exercícios 3.1 (IMC com Faixas) e 3.3 (Campo Vazio)
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

const calcularImc = (peso,altura) => {
  return(peso / (altura * altura))
}

const classificarImc= (imc) => {
  if (imc < 18.5) {
    return "Abaixo do peso"
  }
  if (imc <25) {
    return "Peso normal"
  }
  if (imc < 30) {
    return "Sobrepeso"
  }
  else{
    return "Obesidade"
  }
}

const classeDaFaixa = (faixa) => {
  if (faixa === "Abaixo do peso") {
    return "alerta"
  }
  if (faixa === "Peso normal") {
    return "ok"
  }
  if (faixa === "Sobrepeso") {
    return "alerta"
  }
  else{
    return "erro"
  }
}

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
    const imc = calcularImc(peso,altura)
    const faixa = classificarImc(imc)
    const classe = classeDaFaixa(faixa)

    saida.textContent = "IMC " + imc.toFixed(1) + ": " + faixa
    saida.className = classe
  }
}
