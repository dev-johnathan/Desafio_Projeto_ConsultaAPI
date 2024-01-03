// importação de módulos
const express = require('express');
const apiPiada = require('../controller/piadaController');

// criação de instância
const router = express.Router();

// Rota GET para /piadas
router.get('/piadas', async (req, res) => {
    try {
      const piada = await apiPiada.getPiadas();
      res.status(200).json(piada);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Exportação do módulo router
module.exports = router;