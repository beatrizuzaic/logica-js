// Exercício 4.1 (Frete por Região): switch + operadores lógicos
const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const compra = Number(document.querySelector("#compra").value)
  const regiao = document.querySelector("#regiao").value   // texto: não precisa de Number
  let frete

  switch (regiao) {
    case "sul":
      frete = 15
      break
    case "sudeste":
      frete = 20
      break
    case "centro-oeste":
      frete = 25
      break
    case "nordeste":
      frete = 30
      break
    case "norte":
      frete = 35
      break
    default:
      frete = -1   // nenhuma região escolhida
  }

  if (frete === -1) {
    saida.textContent = "Escolha a região de entrega."
    saida.className = "erro"
  } else if (compra >= 200 && (regiao === "sul" || regiao === "sudeste")) {
    saida.textContent = "Frete grátis! Total: R$ " + compra.toFixed(2)
    saida.className = "ok"
  } else {
    const total = compra + frete
    saida.textContent = "Frete: R$ " + frete.toFixed(2) + "\n" +
                        "Total: R$ " + total.toFixed(2)
    saida.className = "resultado"
  }
}
