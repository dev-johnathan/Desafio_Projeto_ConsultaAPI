//Importando as classes
import {Piada} from '../models/piada.js';
import {Atividade} from '../models/atividade.js';

//adicionando eventos aos botões
document.getElementById('chuckNorrisButton').addEventListener('click', ChuckNorris);
document.getElementById('activityButton').addEventListener('click', Activitys);
document.getElementById('backButton').addEventListener('click', reload);

//função para limpar a div "content"
function clear(){
    const textDiv = document.getElementById("content");
    
    while (textDiv.firstChild){
        textDiv.removeChild(textDiv.firstChild);
    }
}

//função para recarregar a página e voltar a rota inicial
function reload(){
    
    window.location.reload();
 
}

//função para adicionar os dados da classe Piada na div "content"
async function ChuckNorris() {
    try {
        const response = await fetch(`/api/piadas`, {
			method: 'GET',
		});

        clear();

        const data = await response.json(); //pegando os dados do fetch
        const textDiv = document.getElementById("content");//Pegando os elementos html
        const back= document.getElementById("back");//Pegando os elementos html
        const piadaModel = new Piada(data); //criando uma nova Piada
        
        textDiv.innerHTML = piadaModel.obterPiadaFormatada();//adicionando os dados no html com a função da classe
        back.style.display = "block";//Mostrando o botão de voltar
    } catch (error) {
        console.error('Error:', error);
    }
}

//função para adicionar os dados da classe Atividade na div "content"
async function Activitys() {
    try {
        const response = await fetch(`/api/atividades`, {
            method: 'GET',
        });
        
        clear();

        const data = await response.json();//pegando os dados do fetch
        const textDiv = document.getElementById("content"); //Pegando os elementos html
        const back= document.getElementById("back"); //Pegando os elementos html
        const activityModel = new Atividade(data);//criando uma nova Piada
        
        textDiv.innerHTML = activityModel.obterAtividadeFormatada();//adicionando os dados no html com a função da classe
        back.style.display = "block";//Mostrando o botão de voltar
    } catch (error) {
        console.error('Error:', error);
    }
}

