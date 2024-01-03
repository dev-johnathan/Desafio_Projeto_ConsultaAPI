// src/models/chuckNorrisModel.js

class piada {
    constructor(joke) {
      this.id = joke.id;
      this.joke = joke.value;
      this.category = joke.category;
      this.chuckNorris = joke.icon_url;
      this.createdAt = new Date(joke.created_at).toLocaleDateString();
    }
  }
  
  module.exports = ChuckNorrisModel;
  