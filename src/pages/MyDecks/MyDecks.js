import React, { useEffect, useState, useContext } from 'react';

import { MyDecksContainer } from './MyDecks.style';

import CardSearch from '../../components/CardSearch/CardSearch';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import DecksList from '../../components/DecksList/DecksList';
import DeckContainer from '../../components/DeckContainer/DeckContainer';

import * as decks_manager from '../../utils/decks_manager'; //TO-DO ?
import { AuthenticationContext } from '../../App';

const MyDecks = () => {

  const autenticationContext = useContext(AuthenticationContext);
  const [decks, setDecks] = useState([]);
  const [selectedDeckId, setSelectedDeckId] = useState(0);

  useEffect(() => {
    refreshDecks();
    console.table(decks);
    console.log(selectedDeckId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const refreshDecks = () => {
    setDecks([...decks_manager.getDecks(autenticationContext.user)])
  }

  const handleAddCardToDeck = (cardId, selectedDeckId) => {
    decks_manager.addCardToDeck(cardId, selectedDeckId)
    console.log('card added to deck:', cardId, selectedDeckId)
    refreshDecks();
  }

  const handleAddNewDeck = () => {
    decks_manager.createDeck('New Deck '+Date.now(), autenticationContext.user); // TO-DO add modal to change name
    console.log('new deck created!')
    refreshDecks();
  }

  const handleChangeDeckName = (newName) => {
    const deck = decks.find(deck => deck.id === selectedDeckId);
    const newDeck = {...deck, name: newName};
    decks_manager.updateDeck(newDeck, autenticationContext.user);
    console.log('handleChangeDeckNam newName', newName)
    refreshDecks();
  }

  const handleDeleteCardFromDeck = (cardId, selectedDeckId) => {
    console.log('cardIndex', cardId, 'selectedDeckId', selectedDeckId)
    decks_manager.deleteCardFromDeck(cardId, selectedDeckId);
    refreshDecks();
  }

  const handleDeleteDeck = (deckId) => {
    decks_manager.deleteDeck(deckId, autenticationContext.user);
    refreshDecks();
  }

  return (
    <section className="MyDecks">
      <Header />
      {/* <div class="container-top">
        <a href="#" class="top"></a>
      </div>   */}
      <MyDecksContainer>
        <DecksList
          handleAddNewDeck={handleAddNewDeck}
          selectedDeckId={selectedDeckId}
          setSelectedDeckId={setSelectedDeckId}
          handleDeleteDeck={handleDeleteDeck}
          decks={decks}
          setDecks={setDecks}
        />
        {selectedDeckId !== 0 &&
          <div className='MyDecks__EditorContainer'>
            {/* TO-DO add the clicked deck to the prop */}
            <DeckContainer
              deck={decks.find(deck => deck.id === selectedDeckId)}
              handleChangeDeckName={handleChangeDeckName}
              handleDeleteCardFromDeck={handleDeleteCardFromDeck}
            />
            <CardSearch
              selectedDeckId={selectedDeckId}
              handleAddCardToDeck={handleAddCardToDeck}
            />
          </div>
        }        
      </MyDecksContainer>    
      <Footer />
    </section>
  );
}

export default MyDecks;