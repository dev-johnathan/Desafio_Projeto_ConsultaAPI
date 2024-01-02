const express = require('express');
const piadasRoutes = require('./routes/piadas');
const atividadesRoutes = require('./routes/atividades');
const app = express();
const PORT = 5000;



app.use('/piadas', piadasRoutes);
app.use('/atividades', atividadesRoutes);

app.get('/', (req, res) => {
    res.send('Página inicial');
  });
  
  
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
