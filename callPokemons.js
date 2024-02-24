async function callAllPokemons() {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Erro ao buscar pokémons:', error);
      return []; // Retorna um array vazio em caso de erro
    }
  }

  module.exports ={callAllPokemons};