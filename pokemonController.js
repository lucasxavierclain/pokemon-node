// Importe o módulo 'express'
const Ability = require("./Ability.js")
const express = require('express');
const router = express.Router();

const port = 3000; // Porta em que o servidor irá rodar
const { callAllPokemons }= require("./callPokemons");
const { getDetailsPokemon }= require("./callDetailsPokemon");
const { getUrlAbilities }= require("./getAbilities");
const e = require('express');
// Rota GET para obter todos os pokémons
router.get('/pokemons', async (req, res) => {
    try {
      const pokemons = await callAllPokemons();
      res.json(pokemons);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar pokémons' });
    }
  });

  // Rota GET para obter todos os pokémons
  router.get('/pokemon/:id', async (req, res) => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${req.params.id}`;
      const details = await getDetailsPokemon(url);
  
      const listPromises = [];
      if (details.abilities != null && details.abilities.length > 0) {
        details.abilities.forEach(element => {
          const urlDetailsAbilities = element.ability.url;
          const abilities = getUrlAbilities(urlDetailsAbilities);
          listPromises.push(abilities);
        });
      }
  
      // Use Promise.all diretamente e retorne o resultado
      const listResolve = await Promise.all(listPromises);
  
  
      res.json(listResolve);
    } catch (error) {
      throw error
      res.status(500).json({ error: 'Erro ao buscar pokémons' });
    }
  });


  
  module.exports = router;
