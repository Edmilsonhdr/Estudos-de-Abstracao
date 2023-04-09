class Usuario {
    constructor(nome, email, senha) {
      this.nome = nome;
      this.email = email;
      this.senha = senha;
      this.amigos = []; // lista de amigos do usuário
      this.publicacao = []; // lista de publicacao do usuário
    }
  
    adicionarAmigo(usuario) {
      this.friends.push(usuario);
    }
  
    removerAmigo(usuario) {
      const index = this.friends.indexOf(usuario);
      if (index !== -1) {
        this.friends.splice(index, 1);
      }
    }
  
    fazerPublicacao(content) {
      const publicacao = new Post(content, this);
      this.publicacao.push(publicacao);
    }
  }
  