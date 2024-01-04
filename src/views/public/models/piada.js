// src/models/chuckNorrisModel.js
 
export class Piada {
  constructor(joke) {
    // atributos
    this.id = joke.id;
    this.joke = joke.value;
    this.category = joke.category;
    this.chuckNorris = joke.icon_url;
    this.createdAt = new Date(joke.created_at).toLocaleDateString();
    this.updatedAt = new Date(joke.updated_at).toLocaleDateString();
  }
   
  obterPiadaFormatada() {
    return `
      <div class="piada">
      <p>Data de Atualização: ${this.updatedAt}</p>
      <p>Data de Criação: ${this.createdAt}</p>
      <p>ícone: ${this.chuckNorris}</p>
      <p>Id: ${this.id}</p>
      <p>Piada: ${this.joke}</p>
      <p>Referência: ${this}</p>
      </div>
      `;
  }
  }