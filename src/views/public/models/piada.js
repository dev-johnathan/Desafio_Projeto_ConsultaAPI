// classe com as informações das piadas

export class Piada {
  constructor(joke) {
    this.joke = joke;
  }

  obterPiadaFormatada() {
    return `
      <div class="img">
          <img class="emoji" src="public/imgs/haha.png" alt="">
      </div>
      <div class="piada">
        <p>Id: ${this.joke.id}</p>
        <p>Data de Atualização: ${this.joke.data_atualizacao}</p>
        <p>Data de Criação: ${this.joke.data_criacao}</p>
        <p>Piada: ${this.joke.piada}</p>
        <p>Referência: ${this.joke.referencia}</p>
        <p>${this.joke.icone} <p/>
      </div>

     
    `;
  }
}
