class atividade {
    constructor(activity) {
      this.activity = activity.activity;
      this.type = activity.type;
      this.participants = activity.participants;
      this.price = activity.price;
      this.link = activity.link;
    }
  }
  
  module.exports = ActivityModel;