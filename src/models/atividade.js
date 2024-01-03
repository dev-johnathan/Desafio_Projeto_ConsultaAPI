// classe com as informações das atividades
class atividade {
    constructor(activity) {
      // atributos
      this.activity = activity.activity;
      this.type = activity.type;
      this.participants = activity.participants;
      this.price = activity.price;
      this.link = activity.link;
    }
  }
  // Exportação da classe
  module.exports = ActivityModel;