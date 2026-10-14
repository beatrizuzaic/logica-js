const botao = document.querySelector("#chutar");
const campo = document.querySelector("#chute");
const saida = document.querySelector("#resultado");

const limite = 7
const secreto = Math.floor(Math.random() * 100) + 1
let tentativas = 0
let fim = false
let historico = ""

botao.onclick = () => {
    const chute = Number(campo.value);
if (fim) {
        saida.textContent = "O jogo acabou, aperte F5 para jogar novamente."}
else if (campo.value === "" || chute < 1 || chute > 100) {
        saida.textContent = "Digite um número de 1 a 100.";
        saida.className = "erro";} 
        
else {   
        tentativas++
        const restam = limite - tentativas
        historico += chute + " "
       
        if (chute === secreto) {
                saida.textContent = "Acertou em " + tentativas + " tentativas.";
                saida.className = "ok";
                fim = true;} 
        else if (restam === 0) {
                saida.textContent = "Suas " + limite + " tentativas acabaram. O número era " + secreto;
                saida.className = "erro";
                fim = true;} 
        else if (chute < secreto) {
                saida.textContent = chute + " - o número é maior, restam " + restam + " tentativas";
                saida.className = "alerta";} 
        else {
                saida.textContent = chute + " - o número é menor, restam " + restam + " tentativas";
                saida.className = "alerta";}

        saida.textContent += "\nChutes: " + historico
    } 
}