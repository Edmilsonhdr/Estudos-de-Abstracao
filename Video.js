class Video {

    constructor ( titulo, descricao, duracao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.duracao = duracao;
        this.views = 0; // número de visualizações do vídeo
        this.likes = 0; // número de curtidas do vídeo
        this.dislike = 0;
    };

    play () {

        console.log(`Filme ${this.titulo} iniciado`);
    }

    pause () {

        console.log(`Pause no Filme ${this.titulo} `);
    } 

    like () {

        console.log(`Numero de Visualização ${this.likes = 10}`);
        console.log(`Numero de like ${this.views = 7}`);
    }

    deslike () {
        console.log(`Numero de Visualização ${this.views}`);
        console.log(`Numero de deslike ${this.dislike = 3}`);
    }

    adicionarVideo () {

        console.log(`Filme adicionado`);
        console.log(`Nome: ${this.titulo}`);
        console.log(`Descrição: ${this.descricao}`);
        console.log(`Diração: ${this.duracao}`);
    };
} 

let video = new Video(
    "Super Mario", 
    "Mario é um encanador junto com seu irmão Luigi. Um dia, eles vão parar no reino dos cogumelos, governado pela Princesa Peach, mas ameaçado pelo rei dos Koopas, que faz de tudo para conseguir reinar em todos os lugares.",
    "1.30")

video.play();
video.pause();
video.like();
video.deslike();
video.adicionarVideo();

let novoFilme = new Video(
    "Gato de Botas 2",
    "O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço: ele já gastou oito de suas nove vidas.",
    "1.40",
);

novoFilme.adicionarVideo();