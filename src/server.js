// importação de biblioteca e criação de instancia
const express = require('express');
const app = express();
const path = require('path');
const apiChuckNorrisRoute = require('./routes/apiChuckNorrisRoute');
const apiAtividadesRoute = require('./routes/apiAtividadeRoute');
// definição de porta para iniciar o servidor
const port = 3000;

// execução de middleware das rotas
app.use('/', apiChuckNorrisRoute);
app.use('/', apiAtividadesRoute);

// execução de middleware de arquivos estáticos da pasta 'public'
app.use('/public', express.static(path.join(__dirname, './views','public')));

// rota padrão que carrega o index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './views', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});