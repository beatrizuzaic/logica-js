const botao = document.querySelector("#calcular")

const NOTAS = [7, 5.5, 9, 4, 8, 6.5]

botao.onclick = () => {
    let soma = 0;
    let texto = "";
    let maior = NOTAS[0];

    NOTAS.forEach ((nota,i) => {
        soma += nota
        texto += "Nota " + (i+1) + ": " + nota + "\n";
        maior = nota > maior ? nota : maior;
    });
    
    const media = soma / NOTAS.length;
    texto += "A maior nota: " + maior + "\n";
    texto += "A soma das notas: " + soma + "\n";
    texto += "A média das notas: " + media;

    mostrar(texto,"ok");
}