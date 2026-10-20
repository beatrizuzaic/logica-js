const botao = document.querySelector("#calcular")
const saida = document.querySelector("#resultado")
const item = document.querySelector("#item")

const itens = []

botao.onclick = () => {
    if(item.value === "") {
        mostrar("Digite um item!", "erro")
    }

    else{
        itens.push(item.value)
        let texto = ""
        itens.forEach((item,i) => {
            texto += (i + 1) + ". " + item + "\n"
        })
        mostrar(texto + "Total: " + itens.length + " itens", "ok")
    }
}