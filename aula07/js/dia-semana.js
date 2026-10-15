// Exercício 4.2 (Dia da Semana)
const botao = document.querySelector("#verificar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  // Number é obrigatório: o switch compara com ===, e "1" não é igual a 1
  const dia = Number(document.querySelector("#dia").value)
  let nome

  switch (dia) {
    case 1:
      nome = "Domingo"
      break
    case 2:
      nome = "Segunda-feira"
      break
    case 3:
      nome = "Terça-feira"
      break
    case 4:
      nome = "Quarta-feira"
      break
    case 5:
      nome = "Quinta-feira"
      break
    case 6:
      nome = "Sexta-feira"
      break
    case 7:
      nome = "Sábado"
      break
    default:
      nome = ""
  }

  if (nome === "") {
    saida.textContent = "Digite um número de 1 a 7."
    saida.className = "erro"
  } else if (dia === 1 || dia === 7) {
    saida.textContent = nome + ": fim de semana"
    saida.className = "alerta"
  } else {
    saida.textContent = nome + ": dia útil"
    saida.className = "ok"
  }
}
