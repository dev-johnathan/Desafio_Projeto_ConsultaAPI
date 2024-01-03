// classe com as informações das piadas
class piada {
    constructor(joke) {
      // atributos
      this.id = joke.id;
      this.joke = joke.value;
      this.category = joke.category;
      this.chuckNorris = joke.icon_url;
      this.createdAt = new Date(joke.created_at).toLocaleDateString();
    }
  }
  // Exportação da classe
  module.exports = ChuckNorrisModel;
  