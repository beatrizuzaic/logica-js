const mostrar = (mensagem, classe) => {
    const saida = document.querySelector("#resultado");
    saida.textContent = mensagem;
    saida.className = classe;
}

const ehPar = (num) => num % 2 === 0;