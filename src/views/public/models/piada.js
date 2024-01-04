// src/models/chuckNorrisModel.js

export class Piada {
  constructor(joke) {
    this.joke = joke;
  }

  obterPiadaFormatada() {
    return `
      <div class="piada">
        <p>Data de Atualização: ${this.joke.data_atualizacao}</p>
        <p>Data de Criação: ${this.joke.data_criacao}</p>
        <img src="${this.joke.icone}" />
        <p>Id: ${this.joke.id}</p>
        <p>Piada: ${this.joke.piada}</p>
        <p>Referência: ${this.joke.referencia}</p>
      </div>
    `;
  }
}
