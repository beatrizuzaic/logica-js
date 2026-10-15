// Exercício 4.1 (Frete por Região): switch + operadores lógicos
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

const valorDoFrete = (regiao) => {
  switch(regiao) {
    case "sul":
      return 15
    case "sudeste":
      return 20
    case "centro-oeste":
      return 25
    case "nordeste":
      return 30
    case "norte":
      return 35
    default:
      return -1
  }
}

const temFreteGratis = (compra,regiao) => {
  if (compra >= 200 && (regiao === "sul" || regiao === "sudeste")) {
    return true}
  else {
    return false}
  }

botao.onclick = () => {
  const compra = Number(document.querySelector("#compra").value)
  const regiao = document.querySelector("#regiao").value   // texto: não precisa de Number
  const frete = valorDoFrete(regiao)

  if (frete === -1) {
    saida.textContent = "Escolha a região de entrega."
    saida.className = "erro"
  } 
  else if (temFreteGratis(compra,regiao)) {
    saida.textContent = "Frete grátis! Total: R$ " + compra.toFixed(2)
    saida.className = "ok"
  } 
  else {
    const total = compra + frete
    saida.textContent = "Frete: R$ " + frete.toFixed(2) + "\n" + "Total: R$ " + total.toFixed(2)
    saida.className = "resultado"
  }
}
