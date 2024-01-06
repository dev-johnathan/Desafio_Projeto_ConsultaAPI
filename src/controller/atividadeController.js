// importação de bibliotecas
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

// função que obtêm os dados da API
async function getAtividades() {
  // requisição da API e formatação da resposta
  try {
    const boredApiResponse = await axios.get('https://www.boredapi.com/api/activity');
    
    const formattedResponse = {
      id: uuidv4(),
      atividade: boredApiResponse.data.activity,
      tipo: boredApiResponse.data.type,
      participantes: boredApiResponse.data.participants,
      acessibilidade: `${(boredApiResponse.data.accessibility * 100).toFixed(0)}%`
    };

    return formattedResponse;
  } 
  // se a requisição der erro, mostra uma mensagem no console
  catch (error) { 
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}
// exportação do modulo 
module.exports = {
  getAtividades,
};