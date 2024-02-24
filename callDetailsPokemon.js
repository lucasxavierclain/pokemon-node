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

module.exports={getDetailsPokemon}