const getPokemon = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
    const data = await response.json();
    renderPokemon(data.results);
  } catch (err) {
    console.log(`error`)
  }
}

getPokemon();

const renderPokemon = async (pokemonArray) => {
  const singlePokemon = pokemonArray.map((pokemon) => {
    pokename = pokemon.name;
    const pokemonSplit = pokemon.url.split(`/`);
    const pokeIndex = pokemonSplit[6];
    return `<a data-pokeNum="${pokeIndex}" href=""><li>${pokename}</li><a>`;
  }).join(``);
  const ul = document.querySelector(`ul`);
  ul.innerHTML = singlePokemon;
}

renderPokemon();