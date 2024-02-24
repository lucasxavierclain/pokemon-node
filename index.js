// app.js
const express = require('express');
const app = express();
const pokemonController = require('./pokemonController'); // Caminho para o controller

app.use('/api', pokemonController); // Use a rota no caminho /api

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});