class Comida{
    constructor(nome,descricao,preco){
        this.nome = nome;
        this.descricao = descricao;
        this.preco = preco;
    }

    exibirInformacao () {
        console.log(this.nome + " - " + this.descricao);
        console.log("Preço: R$" + this.preco);
    }
}

let comida = new Comida("Arroz com Feijão", "O arroz com feijão é um prato típico da culinária brasileira, composto por arroz cozido com feijão temperado e é considerado uma refeição nutritiva e completa.", 22.75);
comida.exibirInformacao()