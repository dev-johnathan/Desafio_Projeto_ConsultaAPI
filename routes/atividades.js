const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const boredApiResponse = await axios.get('https://www.boredapi.com/api/activity');
    
    const formattedResponse = {
      id: uuidv4(),
      atividade: boredApiResponse.data.activity,
      tipo: boredApiResponse.data.type,
      participantes: boredApiResponse.data.participants,
      acessibilidade: `${(boredApiResponse.data.accessibility * 100).toFixed(0)}%`
    };

    res.status(200).json(formattedResponse);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
