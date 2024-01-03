const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

async function getAtividades() {
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
  } catch (error) {
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}

module.exports = {
  getAtividades,
};