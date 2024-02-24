
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


async function getUrlAbilities(){

  
  // Chame as funções e trate os resultados
    try {
      const allPokemons = await callAllPokemons();
   
  
      if (allPokemons.length > 0) {
        const firstPokemon = allPokemons[0];
        const details = await getDetailsPokemon(firstPokemon.url);
        console.log('Detalhes do primeiro pokémon:', details.abilities.ability);
        return details.abilities.ability;
      } else {
        console.log('Nenhum pokémon encontrado.');
        return {};
      }
    } catch (error) {
      console.error('Erro geral:', error);
      return {};
    }
  };

  async function getDetailsPokemon(url) {
    // Função para obter detalhes de um pokémon
 try {
   const response = await fetch(url);
   const details = await response.json();
   return details;
 } catch (error) {
   console.error('Erro ao buscar detalhes do pokémon:', error);
   return {}; // Retorna um objeto vazio em caso de erro
 }
}

  getUrlAbilities();