// classe com as informações das atividades
export class Atividade {
    constructor(activity) {
      this.activity = activity;
    }

    obterAtividadeFormatada() {
      return `
        <div class="img">
            <img class="emoji" src="public/imgs/atividade.png" alt="">
        </div>
        <div class="atividade">
          <p>ID: ${this.activity.id}</p>
          <p>Atividade: ${this.activity.atividade}</p>
          <p>Tipo: ${this.activity.tipo}</p>
          <p>Participantes: ${this.activity.participantes}</p>
          <p>Acessibilidade: ${this.activity.acessibilidade}</p>
        </div>

       
      `;
  }
  }