class Carro {
    constructor(marca, modelo, ano, capacidadePassageiros, capacidadePortaMalas, localizacaoAtual, disponibilidade, precoPorHora, condicoesDeUso, historicoDeManutencao) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
      this.capacidadePassageiros = capacidadePassageiros;
      this.capacidadePortaMalas = capacidadePortaMalas;
      this.localizacaoAtual = localizacaoAtual;
      this.disponibilidade = disponibilidade;
      this.precoPorHora = precoPorHora;
      this.condicoesDeUso = condicoesDeUso;
      this.historicoDeManutencao = historicoDeManutencao;
    }
    
    alugar() {
      if (this.disponibilidade) {
        this.disponibilidade = false;
        console.log(`O carro ${this.marca} ${this.modelo} foi alugado.`);
      } else {
        console.log(`O carro ${this.marca} ${this.modelo} não está disponível para aluguel.`);
      }
    }
    
    devolver() {
      this.disponibilidade = true;
      console.log(`O carro ${this.marca} ${this.modelo} foi devolvido.`);
    }
    
    adicionarManutencao(dataManutencao, tipoManutencao, descricaoManutencao) {
        this.historicoDeManutencao.push({ data: dataManutencao, tipo: tipoManutencao, descricao: descricaoManutencao });
        console.log(`Uma nova manutenção foi adicionada ao histórico do carro ${this.marca} ${this.modelo}.`);
      }
    
    exibirInformacoes() {
      console.log(`Marca: ${this.marca}`);
      console.log(`Modelo: ${this.modelo}`);
      console.log(`Ano: ${this.ano}`);
      console.log(`Capacidade de Passageiros: ${this.capacidadePassageiros}`);
      console.log(`Capacidade do Porta-Malas: ${this.capacidadePortaMalas}`);
      console.log(`Localização Atual: ${this.localizacaoAtual}`);
      console.log(`Disponibilidade para Aluguel: ${this.disponibilidade ? 'Disponível' : 'Não Disponível'}`);
      console.log(`Preço por Hora: ${this.precoPorHora}`);
      console.log(`Condições de Uso: Combustível ${this.condicoesDeUso.combustivel}, Quilometragem ${this.condicoesDeUso.quilometragem}`);
      console.log(`Histórico de Manutenção:`);
      for (const manutencao of this.historicoDeManutencao) {
        console.log(`  - Data: ${manutencao.data}, Tipo: ${manutencao.tipo}, Descrição: ${manutencao.descricao}`);
      }
    }
  }

  var carro = new Carro("Marca", "Modelo", "Ano", "Capacidade de Passageiros", "Capacidade do Porta-Malas", "Localização Atual", true, "Preço por Hora", {combustivel: "tipo de combustível", quilometragem: "quilometragem inicial"}, []);

  carro.alugar();
  carro.devolver();
  carro.adicionarManutencao("01/04/2023", "troca de óleo", "troca de óleo realizada");
  carro.exibirInformacoes()  