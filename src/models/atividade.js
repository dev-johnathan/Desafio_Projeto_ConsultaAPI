// classe com as informações das atividades
class Atividade {
    constructor(activity) {
      // atributos
      this.activity = activity.activity;
      this.type = activity.type;
      this.participants = activity.participants;
      this.price = activity.price;
      this.link = activity.link;
    }

    
    obterAtividadeFormatada() {
      return `
        <div class="atividade>
          <p>ID: ${this.id}</p>
          <p>Joke: ${this.activity}</p>
          <p>Category: ${this.type}</p>
          <p>Chuck Norris: ${this.participants}</p>
          <p>Created At: ${this.price}</p>
        </div>
      `;
  }
  }
  
  module.exports = Atividade;
