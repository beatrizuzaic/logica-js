const botao = document.querySelector("#calcular");
const saida = document.querySelector("#resultado");

botao.onclick = () => {
    const preco = Number(document.querySelector("#preco").value);
    const desconto = Number(document.querySelector("#desconto").value);
    const descontoValor = preco * (desconto / 100);
    const precoFinal = preco - descontoValor;
    saida.textContent = "Desconto: R$" + descontoValor.toFixed(2)
    +"\nPreço Final: R$" + precoFinal.toFixed(2);
}