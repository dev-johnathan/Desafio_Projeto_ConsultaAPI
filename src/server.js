const express = require('express');
const app = express();
const path = require('path');
const apiChuckNorrisRoute = require('./routes/apiChuckNorrisRoute');
const apiAtividadesRoute = require('./routes/apiAtividadeRoute');
const port = 3000;

app.use('/', apiChuckNorrisRoute);
app.use('/', apiAtividadesRoute);

app.use('/public', express.static(path.join(__dirname, './views','public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});