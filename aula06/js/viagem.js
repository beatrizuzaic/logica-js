const calcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

calcular.onclick = () => {
    const distancia = Number(document.querySelector("#dist").value);
    const consumo = Number(document.querySelector("#consumo").value);
    const preco = Number(document.querySelector("#preco").value);
    
    const litros = distancia / consumo;
    const custoIda = litros * preco;
    const idaVolta = custoIda * 2;
    
    resultado.textContent = "Litros gastos: " + litros.toFixed(1) + " L"
    +"\nCusto da ida: " + "R$ " + custoIda.toFixed(2)
    +"\nCusto ida e volta: " + "R$ " + idaVolta.toFixed(2)
}