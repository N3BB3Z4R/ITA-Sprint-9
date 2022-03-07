// import { filmImages } from './filmImages';
// const POKEMON_URL = 'https://swapi.py4e.com/api';
// const IMAGES_API_URL = 'https://starwars-visualguide.com/assets/img';
const URL = 'https://api.pokemontcg.io/v2/';
const apiKey = '8b7bf345-513d-4439-96b6-ac609a5e1af3';

const getOptions = () => {
  const options = {
    Headers: {},
  };
  options.Headers['X-Api-Key'] = apiKey;
  return options;
}

const pokemonApiFetch = (...args) => {
  return fetch(...args)
    .then(res => res.json())
    .then(resData => resData.data)
    .catch (err => {
      console.log(err);
    });
}

export const api_pokemon = {
  async getCardsData(cardId) {
    return pokemonApiFetch(`${URL}cards/${cardId}`, getOptions());
  },
  async getCards() {
    return pokemonApiFetch(`${URL}cards/`, getOptions());
  },
  async getPokemonAll(arg) {
    return pokemonApiFetch(`${URL}cards/?${arg}&pageSize=75`, getOptions());
  }
};

export default api_pokemon;