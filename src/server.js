const express = require('express');
const path = require('path')
const app = express();
const apiRoutes = require('./routes/apiChuckNorrisRoute');
const port = 3000;

app.use('/piadas', apiRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './view', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});

app.use('/public', express.static(path.join(__dirname, './view', 'public')));

