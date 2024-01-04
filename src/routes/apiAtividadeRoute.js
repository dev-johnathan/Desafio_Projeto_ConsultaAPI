const express = require('express');
const axios = require('axios');
const apiAtividade = require('../controller/atividadeController');
const Atividade= require('../models/atividade')

const router = express.Router();

  
router.get('/atividades', async (req, res) => {
    try {
      const dadosAtividade = await apiAtividade.getAtividades();
      res.status(200).json(dadosAtividade);

      const atividadeModel=new Atividade(dadosAtividade);

      const dados = document.getElementById('content');
      dados.innerHTML = atividadeModel.obterAtividadeFormatada();
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  module.exports = router;