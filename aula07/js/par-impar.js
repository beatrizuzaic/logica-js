const botao = document.querySelector("#verificar")
const saida = document.querySelector("#resultado")

botao.onclick = () => {
  const numero = Number(document.querySelector("#numero").value);
  if(ehPar(numero)) {
    mostrar(`${numero} é par`, "ok");
  }
  else {
    mostrar(`${numero} é ímpar`, "alerta")
  }
}
