// importação de bibliotecas
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

// função que obtêm os dados da API
async function getPiadas() {
  // requisição da API e formatação da resposta
  try {
    const chuckNorrisApiResponse = await axios.get('https://api.chucknorris.io/jokes/random');
    
    const formattedResponse = {
      data_atualizacao: formatDate(chuckNorrisApiResponse.data.updated_at),
      data_criacao: formatDate(chuckNorrisApiResponse.data.created_at),
      icone: chuckNorrisApiResponse.data.icon_url,
      id: uuidv4(),
      piada: chuckNorrisApiResponse.data.value.replace(/Chuck Norris/g, 'CHUCK NORRIS'),
      referencia: chuckNorrisApiResponse.data.url
    };

    return formattedResponse;
  } 
  // se a requisição der erro, mostra uma mensagem no console
  catch (error) { 
    console.error('Error:', error);
    throw new Error('Internal Server Error');
  }
}
// função para formatação da string de data
function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}
// exportação do modulo 
module.exports = {
  getPiadas,
};