const converter = document.querySelector("#converter");
const resultado = document.querySelector("#resultado");

converter.onclick = () => {
    const celsius = Number(document.querySelector("#celsius").value);
    const f = celsius * 9 / 5 + 32;
    resultado.textContent = "Fahrenheit: " + f.toFixed(1);
}