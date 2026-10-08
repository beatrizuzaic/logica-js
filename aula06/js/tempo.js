const calcular = document.querySelector("#calcular");
const resultado = document.querySelector("#resultado");

calcular.onclick = () => {
    const duracaoMin = Number(document.querySelector("#duracao").value);
    const resHoras = Math.floor(duracaoMin / 60);
    const resMin = duracaoMin % 60;
    resultado.textContent = duracaoMin + " minutos = " + resHoras + "h e " + resMin + "min";
}