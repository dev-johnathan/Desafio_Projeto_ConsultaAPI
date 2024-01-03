const express = require('express');
const apiPiada = require('../controller/piadaController');

const router = express.Router();

router.get('/piadas', async (req, res) => {
    try {
      const piada = await apiPiada.getPiadas();
      res.status(200).json(piada);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
module.exports = router;