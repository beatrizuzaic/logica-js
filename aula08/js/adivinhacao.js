const botao = document.querySelector("#chutar");
const campo = document.querySelector("#chute");
const saida = document.querySelector("#resultado");

const secreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0

botao.onclick = () => {
    const chute = Number(campo.value);

    if (campo.value === "" || chute < 1 || chute > 100) {
            saida.textContent = "Digite um número de 1 a 100.";
            saida.className = "erro";
    } else {   
        tentativas++
            
        if (chute === secreto) {
                saida.textContent = "Acertou em " + tentativas + " tentativas.";
                saida.className = "ok";
        } else if (chute < secreto) {
                saida.textContent = chute + " o número secreto é maior.";
                saida.className = "alerta";
        } else {
                saida.textContent = chute + " o número secreto é menor.";
                saida.className = "alerta";
        }
    } 
}