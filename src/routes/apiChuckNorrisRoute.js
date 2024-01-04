const express = require('express');
const apiPiada = require('../controller/piadaController');
const Piada= require('../models/piada')
const router = express.Router();

router.get('/piadas', async (req, res) => {
    try {
      const dadosPiada = await apiPiada.getPiadas();
      res.status(200).json(dadosPiada);

      const piadaModel=new Piada(dadosPiada);

      const dados = document.getElementById('conteudo');
      dados.innerHTML = piadaModel.obterPiadaFormatada();

    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
module.exports = router;