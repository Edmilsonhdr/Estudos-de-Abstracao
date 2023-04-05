class Carrinho {
   
    constructor() {
        this.produtos = [];
        this.total = 0;
    }

    adicionarProduto(nome, preco, quantidade) {
        let subtotal = preco * quantidade;
        let produto = { nome: nome, preco: preco, quantidade: quantidade, subtotal: subtotal };
        this.produtos.push(produto);
        this.total += subtotal;
    }

    removerProduto(index) {
        let produtoRemovido = this.produtos.splice(index, 1)[0];
        this.total -= produtoRemovido.subtotal;
    }

    exibirProdutos() {
        console.log("Produtos no carrinho:");
        for(let i = 0; i < this.produtos.length; i++) {
          console.log(this.produtos[i].nome + " (x" + this.produtos[i].quantidade + ") - R$" + this.produtos[i].subtotal);
        }
        console.log("Total: R$" + this.total);
    }

    atualizarQuantidade(index, novaQuantidade) {
        let produto = this.produtos[index];
        let novoSubtotal = produto.preco * novaQuantidade;
        this.total += novoSubtotal - produto.subtotal;
        produto.quantidade = novaQuantidade;
        produto.subtotal = novoSubtotal;
    }
}

// Criar objeto de carrinho de compras
let carrinho = new Carrinho();

// Adicionar produtos ao carrinho
carrinho.adicionarProduto("Camiseta preta tamanho M", 29.99, 1);
carrinho.adicionarProduto("Calça jeans azul tamanho 42", 49.99, 2);

// Exibir produtos no carrinho
carrinho.exibirProdutos();

// Remover um produto do carrinho
carrinho.removerProduto(1);

// Exibir produtos atualizados no carrinho
carrinho.exibirProdutos();

// Atualizar a quantidade de um produto no carrinho
carrinho.atualizarQuantidade(0, 3);

// Exibir produtos atualizados no carrinho
carrinho.exibirProdutos();