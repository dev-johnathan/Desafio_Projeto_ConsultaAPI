// importação de módulos
const express = require('express');
const apiPiada = require('../controller/piadaController');
const router = express.Router();

// Rota GET para /piadas
router.get('/api/piadas', async (req, res) => {
    try {
      const dadosPiada = await apiPiada.getPiadas();
      res.status(200).json(dadosPiada);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Exportação do módulo router
module.exports = router;