import {Piada} from '../models/piada.js';
import {Atividade} from '../models/atividade.js';

document.getElementById('chuckNorrisButton').addEventListener('click', ChuckNorris);
document.getElementById('activityButton').addEventListener('click', Activitys);

function clear(){
    const buttons= document.getElementById('buttons');
    buttons.style.display="none";
}

async function ChuckNorris() {
    try {
        const response = await fetch(`http://localhost:3000/api/piadas`, {
			method: 'GET',
		});
		const data = await response.json();
		clear();

        const piadaModel = new Piada(data);
        let textDiv = document.getElementById("content");
        textDiv.innerHTML = piadaModel.obterPiadaFormatada();
    } catch (error) {
        console.error('Error:', error);
    }
}

async function Activitys() {
    try {
        const response = await fetch(`http://localhost:3000/api/atividades`, {
            method: 'GET',
        });
        const data = await response.json();
        clear();

        const activityModel = new Atividade(data);
        let textDiv = document.getElementById("content");
        textDiv.innerHTML = activityModel.obterAtividadeFormatada();
    } catch (error) {
        console.error('Error:', error);
    }
}

