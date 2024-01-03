const express = require('express');
const app = express();
const apiChuckNorrisRoute = require('./routes/apiChuckNorrisRoute');
const apiAtividadesRoute = require('./routes/apiAtividadeRoute');
const port = 3000;

app.use('/', apiChuckNorrisRoute);
app.use('/', apiAtividadesRoute);


app.get('/', (req, res) => {
  res.send('Página inicial');
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});