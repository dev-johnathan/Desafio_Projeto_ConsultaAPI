// importação de biblioteca e criação de instancia do express
const express = require('express');
const app = express();
// importação de rotas das APIs
const apiChuckNorrisRoute = require('./routes/apiChuckNorrisRoute');
const apiAtividadesRoute = require('./routes/apiAtividadeRoute');
// definição de porta para iniciaar o servidor
const port = 3000;

// Utilização das rotas das APIs
app.use('/', apiChuckNorrisRoute);
app.use('/', apiAtividadesRoute);

// rota para página inicial
app.get('/', (req, res) => {
  res.send('Página inicial');
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});