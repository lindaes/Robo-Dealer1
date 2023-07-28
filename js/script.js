// Define the Card object with 'value' and 'suit' properties.
function Card(value, suit) {
    this.value = value;
    this.suit = suit;
  }
  
  // Function to generate the deck of 52 unique cards.
  function generateDeck() {
    const suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
    const deck = [];
  
    for (const suit of suits) {
      for (const value of values) {
        deck.push(new Card(value, suit));
      }
    }
  
    return deck;
  }
  
  // Function to draw 5 random cards from the deck.
  function drawRandomHand() {
    const deck = generateDeck();
    const hand = [];
  
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * deck.length);
      hand.push(deck[randomIndex]);
      deck.splice(randomIndex, 1);
    }
  
    return hand;
  }
  
  // Function to display the drawn hand on the HTML page.
  function displayHand(hand) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
  
    for (const card of hand) {
      const cardElement = document.createElement('p');
      cardElement.textContent = `${card.value} of ${card.suit}`;
      cardContainer.appendChild(cardElement);
    }
  }
  
  // Event listener for the "Draw New Hand" button.
  document.getElementById('drawButton').addEventListener('click', () => {
    const hand = drawRandomHand();
    displayHand(hand);
  });