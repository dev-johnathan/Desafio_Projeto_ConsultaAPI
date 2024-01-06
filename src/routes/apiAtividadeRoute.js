// importação de módulos
const express = require('express');
const axios = require('axios');
const apiAtividade = require('../controller/atividadeController');


// criação de instância
const router = express.Router();

// Rota GET para /atividades
router.get('/api/atividades', async (req, res) => {
    try {
      const dadosAtividade = await apiAtividade.getAtividades();
      res.status(200).json(dadosAtividade);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Exportação do módulo router
module.exports = router;