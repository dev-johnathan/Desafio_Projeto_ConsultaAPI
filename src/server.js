const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiChuckNorrisRoute');
const port = 3000;

app.use('/piadas', apiRoutes);


app.get('/', (req, res) => {
  res.send('Página inicial');
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});