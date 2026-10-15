const converterC = document.querySelector("#converterC");
const converterF = document.querySelector("#converterF");
const resultado = document.querySelector("#resultado");

const celsiusParaFahrenheit = (celsius) => {
    return (celsius * 9 / 5) + 32
}

const fahrenheitParaCelsius = (fahrenheit) => {
    return (fahrenheit - 32) * 5 / 9
}

converterC.onclick = () => {
    const celsius = Number(document.querySelector("#celsius").value);
    
    const f = celsiusParaFahrenheit(celsius);

    resultado.textContent = "Fahrenheit: " + f.toFixed(1) + " F°"
}

converterF.onclick = () => {
    const fahrenheit = Number(document.querySelector("#fahrenheit").value);

    const c = fahrenheitParaCelsius(fahrenheit);

    resultado.textContent = "Celsius: " + c.toFixed(1) + " C°"
}