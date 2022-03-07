export const createDeck = (deckName, user) => {
  const resolvedDeck = {
    id: Date.now(),
    user: user,
    name: deckName,   
    date: new Date().toISOString().slice(0, 10),
    cards: []
  }
  const currentLocalStorage = JSON.parse(localStorage.getItem('myDecks')) || { decks: [] }; // TO-DO
  const newLocalStorage = {
    decks: [...currentLocalStorage.decks, resolvedDeck]
  }
  localStorage.setItem('myDecks', JSON.stringify(newLocalStorage));
  return resolvedDeck;
}

export const getDeck = (deckId) => {
  const currentLocalStorage = JSON.parse(localStorage.getItem('myDecks')); // TO-DO
  const resolvedDeck = currentLocalStorage.decks.filter(deck => deck.id === deckId);
  return resolvedDeck[0];
}

export const getDecks = (user) => {
  const currentLocalStorage = JSON.parse(localStorage.getItem('myDecks')) || { decks: [] }; // TO-DO
  return currentLocalStorage.decks.filter(deck => deck.user === user);
}

export const addCardToDeck = (cardId, deckId) => {
  const currentLocalStorage = JSON.parse(localStorage.getItem('myDecks')) || { decks: [] }; // TO-DO
  const decks = currentLocalStorage.decks;
  // const targetDeck = decks.find(b => b.id === deckId) || [];
  // console.log('targetDeck', targetDeck)
  // targetDeck.push(cardId);
  const newDecks = decks.map(deck => {
    if (deck.id === deckId) {
      deck.cards.push(cardId);
    }
    return deck;
  })
  localStorage.setItem('myDecks', JSON.stringify({decks: newDecks}));
}

export const deleteCardFromDeck = (cardId, deckId) => {
  const currentLocalStorage = JSON.parse(localStorage.getItem('myDecks')) || { decks: [] }; // TO-DO
  const decks = currentLocalStorage.decks;
  const newDecks = decks.map(deck => {
    if (deck.id === deckId) {
      let hasRemoved = false;
      deck.cards = deck.cards.filter(card => {
        if (card === cardId && !hasRemoved) {
          hasRemoved = true;
          return false;
        } else {
          return true;
        }
      })
    }
    return deck;
  })
  localStorage.setItem('myDecks', JSON.stringify({decks: newDecks}));
}

export const updateDeck = (deck, user) => {
  console.log('updateDeck', deck)
  console.log('user', user)
  const currentLocalStorage = JSON.parse(localStorage.getItem('myDecks')) || { decks: [] }; // TO-DO
  const decks = currentLocalStorage.decks;
  const existingDeck = decks.find(b => b.id === deck.id) || {};
  if (existingDeck.user !== user) return
  // const modifiedDeck = {
  //   ...existingDeck,
  //   name: deck.name,
  //   cards: deck.cards
  // }
  const newDecks = decks.map(b => b.id === deck.id ? deck : b);
  console.log('newDecks', newDecks)
  localStorage.setItem('myDecks', JSON.stringify({ decks: newDecks }));
}

export const deleteDeck = (deckId, user) => {
  const currentLocalStorage = JSON.parse(localStorage.getItem('myDecks')) || { decks: [] };
  const decks = currentLocalStorage.decks;
  const existingDeck = decks.find(b => b.id === deckId) || {};
  if (existingDeck.user !== user) return
  const newDecks = decks.filter(b => b.id !== deckId);
  localStorage.setItem('myDecks', JSON.stringify({ decks: newDecks }));
}