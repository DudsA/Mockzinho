// api.js
const axios = require('axios');

async function fetchDataFromAPI() {
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
}

module.exports = fetchDataFromAPI;
