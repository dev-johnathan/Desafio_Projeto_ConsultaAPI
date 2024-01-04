import {Piada} from '/public/models/piada.js';
import {Atividade} from '/public/models/atividade.js';

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

        console.log(data);
        const piadaModel = new Piada(data);

        console.log(piadaModel);

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
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

