// Define the Card object with 'value' and 'suit' properties
function Card(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  
  // Function to create a deck of cards
  function createDeck() {
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs'];
    const deck = [];
  
    for (const suit of suits) {
      for (let i = 0; i < values.length; i++) {
        const card = new Card(values[i], suit);
        deck.push(card);
      }
    }
  
    return deck;
  }
  
  // Function to display the selected cards on the HTML page
  function displayCards(selectedCards) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';
  
    for (const card of selectedCards) {
      let cardValue = card.value;
      if (['J', 'Q', 'K', 'A'].includes(cardValue)) {
        // Display 'name' for face cards
        switch (cardValue) {
          case 'J':
            cardValue = 'Jack';
            break;
          case 'Q':
            cardValue = 'Queen';
            break;
          case 'K':
            cardValue = 'King';
            break;
          case 'A':
            cardValue = 'Ace';
            break;
        }
      }
  
      const cardDisplay = document.createElement('p');
      cardDisplay.textContent = `${cardValue} of ${card.suit}`;
      container.appendChild(cardDisplay);
    }
  }
  
  // Function to randomly select 5 cards from the deck
  function drawCards() {
    const deck = createDeck();
    const selectedCards = [];
  
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      selectedCards.push(deck[randomIndex]);
      deck.splice(randomIndex, 1);
    }
  
    displayCards(selectedCards);
  }
  
  // Connect the drawCards function to the HTML button
  document.getElementById('draw-button').addEventListener('click', drawCards);