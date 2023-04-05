class Produto{
    
    constructor( nome, preco, disponibilidade){
        this.nome = nome;
        this.preco = preco;
        this.disponibilidade = disponibilidade;
    }

    exibirInformacoes() {
        if( this.disponibilidade ) {
            console.log(`O produto ${this.nome} está disponivel por R$ ${this.preco}`)
        }else{
            console.log(`O produto ${this.nome} esta indisponivel no momento`);
        }
    }

    atualizarDisponibilidade(disponibilidade) {
        this.disponibilidade = disponibilidade;
    }
}

// Criar objetos de produto
let camisetaPreta = new Produto("Camiseta preta tamanho M", 29.99, true);
let calcaJeansAzul = new Produto("Calça jeans azul tamanho 42", 49.99, false);

// Exibir informações sobre os produtos
camisetaPreta.exibirInformacoes();
calcaJeansAzul.exibirInformacoes();

// Atualizar a disponibilidade de um produto
calcaJeansAzul.atualizarDisponibilidade(true);

// Exibir informações atualizadas
calcaJeansAzul.exibirInformacoes();