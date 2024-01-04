const Piada = require('../models/piada');
const Atividade= require('../models/atividade');

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

        const piadaModel= new Piada(data);

        piadaModel.

        console.log(data);

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

