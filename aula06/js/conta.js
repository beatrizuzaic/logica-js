const calcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");
const taxa = 0.1;

calcular.onclick = () => {
    const valorConta = Number(document.querySelector("#valor").value);
    const pessoas = Number(document.querySelector("#pessoas").value);
    const valorServico = valorConta * taxa;
    const total = valorConta + valorServico;
    const porPessoa = total / pessoas;
    resultado.textContent = "Valor Total: " + "R$" + total.toFixed(1)
    +"\nValor Por Pessoa: " + "R$" + porPessoa.toFixed(2)
    +"\nTaxa de Serviço: " + "R$" + valorServico.toFixed(2)
}