import { useState, useEffect } from 'react';
import api_pokemon from "../utils/api_pokemon";

const useDataToSearch = () => {

  const [cards, setCards] = useState(null);
  // const [dataToSearch, setDataToSearch] = useState('Pikachu');
  const [inputData, setInputData] = useState({cardName: '', types: ''});
  // const [search, setSearch] = useState();


  useEffect(() => {
    // console.log(dataToSearch)
    api_pokemon.getPokemonAll(``)
      .then(cards => {setCards(cards)})
  }, []);

  useEffect(() => {
    console.log('entrando en apiPoke', inputData.cardName, inputData.types)
    const nameQuery = (inputData.cardName) ? `name:${inputData.cardName}*` : '';
    const typeQuery = (inputData.types) ? `types:${inputData.types}` : '';
    // if (!nameQuery && !typeQuery) return;
    const query = nameQuery || typeQuery ? `q=${[nameQuery, typeQuery].join(' ')}` : '';
    api_pokemon.getPokemonAll(query)
      .then(cards => {setCards(cards)})
  }, [inputData.cardName, inputData.types]);

  const handleOnChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name] : event.target.value
    });
  }

  return {cards, handleOnChange, setCards, inputData};
}

export default useDataToSearch;