//intro alert letting the player know what will be happening
alert`----- Are You Ready for WAR!? -----
This is a 2 player game and the player who has the highest value card when the cards are drawn wins the point. 
The 52 card deck is shuffled and each player receives 26 cards. 
Whoever has the most points at the end wins!
The game will automatically begin when you click OK.
May the odds be ever in your favor!`;

//created arrays for these variables to hold card values, suits and cards in the deck.
//created variables for the players cards

const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];

const cardValue = {
  'Ace': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'Jack': 11,
  'Queen': 12,
  'King': 13,
};

//Created classes for the players, decks and cards.

class Player {
  constructor(deckValue) {
    // this.player1 = player1;
    // this.player2 = player2;
    this.deck = deckValue;
  }
}

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  get numberOfCards() {
    return this.cards.length;
  }

//removes the last element in the array
  pop() {
    return this.cards.shift();
  }
//adds cards to the end of the array
  push(card) {
    this.cards.push(card);
  }

  //------ Shuffle the deck ------
  //this function iterates through the 52 card deck backwards (i--) and creates a new array of shuffled cards

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }
}

//returns the shuffled cards to create a new deck
//the card consists of a value and a suit

function freshDeck() {
  return suits.flatMap(suits => {
    return values.map(values => {
      return new Card(suits, values)
    });
  });
}

//The game begings here by starting with a fresh deck and then shuffling

startWar();
function startWar() {
  const deck = new Deck();

  deck.shuffle();
  console.log(deck);

  //converts the split to a whole number in case it is not divisible by 2
  let deckMidpoint = Math.ceil(deck.numberOfCards / 2);
  console.log(deckMidpoint);
  let player1Cards = deck.cards.slice(0, deckMidpoint);
  let player2Cards = deck.cards.slice(deckMidpoint, deck.numberOfCards);
  //dealCards();
  console.log(player1Cards);
  console.log(player2Cards);

  // --------- Dealing the Cards --------
  //Each Player gets half of the shuffled deck (26 cards)

  function dealCards() {
    for (let i = 0; i < Deck.length; i++) {
      if (i % 2) {
        player1Cards.push(Deck[i]);
      } else {
        player2Cards.push(Deck[i]);
      }
    }
  }
dealCards();

  // ------- Rounds of Play --------
  // Each player takes a turn to draw a card, whichever player has the higher value card wins the point
  // If there is a tie no points are given and the game moves to the next round

  let player1Score = 0; //start at 0 so they can increase each time they are awarded a point
  let player2Score = 0;
  let player1Hand = new Player(player1Cards);
  let player2Hand = new Player(player2Cards);

  for (let i = 0; i < player1Hand.deck.length; i++) {

    player1Cards = player1Hand.deck[i].suit;
    player1CardValue = player1Hand.deck[i].value;
    console.log("1: " + player1Cards + " " + player1CardValue); //prints player 1's card suit and value to console

    player2Cards = player2Hand.deck[i].suit;
    player2CardValue = player2Hand.deck[i].value;
    console.log("2: " + player2Cards + " " + player2CardValue); //prints player 2's card suit and value to console

    if (player1CardValue + player1Cards > player2CardValue + player2Cards) { //if player 1's card value is > Player 2's then they are awarded the point
      player1Score++;
      console.log("Player 1 gets the point!"); //prints player 1 gets the point
      console.log("Player 1 Score: " + player1Score); //prints the players scores after each round
      console.log("Player 2 Score: " + player2Score);
    } else if (player2CardValue + player2Cards > player1CardValue + player1Cards) { //if player 2's card is > Player 1's then they are awarded the point
      player2Score++;
      console.log("Player 2 gets the point!"); //prints player 1 gets the point
      console.log("Player 1 Score: " + player1Score); //prints the players scores after each round
      console.log("Player 2 Score: " + player2Score);
    } else {  
      console.log("Draw! No points for this round"); //if the values are equal then no points are added
    }
  }
 
  // --------- Who Won? ---------
  // Whichever player has the higher score will win the game. If there is a tie then they will be notified to play again to declare a winner.

  if (player1Score > player2Score) {
    alert(
      `Nicely done, Player 1!
        You destroyed player 2 with a score of: ${player1Score}!
        Player 2, you had a score of: ${player2Score}.
        Play again for redemption against Player 1!`
    );
  } else if (player2Score > player1Score) {
    alert(
      `Nicely done, Player 2!
            You destroyed Player 1 with a score of: ${player2Score}!
            Player 1, you had a score of: ${player1Score}.
            Play again for redemption against Player 2!`
    );
  } else {
    alert(`WHAT?? A TIE? Unnacceptable! Play again to declare a true winner!`);
  }
}

//rounds of play was by far the hardest section for me
//did a lot of troubleshooting in here to get the scores to display in the console and for the game to run with the values and suits
//played around with a lot of different options and saw what would break the code or change the way it would work in the browser
//tried deleting player1Cards and player2Cards from the if statement but this messed up the code
//tried adding player1Hand.deck[i].value > player2Hand.deck[i].value to see what that would do - it also messed up the code
//re-wrote a lot of this section over and over but finally got it to run the game in the browser
//I had a lot of trouble this week but definitely gave it my all, with over 10 hours of troubleshooting and researching
//I am excited to keep learning and building. This was a challenge but I really enjoyed working through it!!