class Atividade {
    constructor(activity) {
      this.activity = activity.activity;
      this.type = activity.type;
      this.participants = activity.participants;
      this.price = activity.price;
      this.link = activity.link;
    }

    
    obterAtividadeFormatada() {
      return `
          <p>ID: ${this.id}</p>
          <p>Joke: ${this.activity}</p>
          <p>Category: ${this.type}</p>
          <p>Chuck Norris: ${this.participants}</p>
          <p>Created At: ${this.price}</p>
      `;
  }
  }
  
  module.exports = Atividade;