class PersonagemRpg {
    constructor(nome, origem, classeDoPersonagem, idade, magia){
        this.nome = nome;
        this.origem = origem;
        this.classeDoPersonagem = classeDoPersonagem;
        this.idade = idade;
        this.magia = magia;
    }

    exibirFixaDoPersonagem(){
        console.log(`O nome do personagem é ${this.nome}`);
        console.log(`O personagem e da ${this.origem}`);
        console.log(`A classe do personagem é ${this.classeDoPersonagem}`);
        console.log(`Idade do personagem ${this.idade}`);
        console.log(`Magia do personagem ${this.magia}`);
    }
}

let personagemFixa = new PersonagemRpg("João","Europa","Mago",15,"Fogo")
personagemFixa.exibirFixaDoPersonagem();