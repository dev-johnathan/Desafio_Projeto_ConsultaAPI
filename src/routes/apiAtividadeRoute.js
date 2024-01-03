const express = require('express');
const axios = require('axios');
const apiAtividade = require('../controller/atividadeController');

const router = express.Router();

  
router.get('/atividades', async (req, res) => {
    try {
      const atividade = await apiAtividade.getAtividades();
      res.status(200).json(atividade);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  module.exports = router;