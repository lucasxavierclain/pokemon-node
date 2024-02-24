  async function getUrlAbilities(url){

  
    // Chame as funções e trate os resultados
      try {
        const response = await fetch(url);;
        const details  = await response.json();
          return details.effect_entries[0].effect;
        
      } catch (error) {
        console.error('Erro geral:', error);
        return {};
      }
    };
    module.exports={getUrlAbilities};