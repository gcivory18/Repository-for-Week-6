//intro alert letting the player know what will be happening
alert `----- Are You Ready for WAR!? -----
This is a 2 player game and the player who has the highest value card when the cards are drawn wins the point. 
The 52 card deck is shuffled and each player receives 26 cards. 
Whoever has the most points at the end wins!
The game will automatically begin when you click OK.
May the odds be ever in your favor!`

//created arrays for these variables to hold card values, suits and cards in the deck.
//created variables for the players cards 

const values = ['Ace',2,3,4,5,6,7,8,9,10,'Jack','Queen','King'];
const suits = ['♥', '♦', '♠', '♣'];
const player1Cards = [];
const player2Cards = [];
let playerSun = 0;

const cardValue = {
    'Ace' : 1,
    '2' : 2,
    '3' : 3,
    '4' : 4,
    '5' : 5,
    '6' : 6,
    '7' : 7,
    '8' : 8,
    '9' : 9,
    '10' : 10,
    'Jack' : 11,
    'Queen' : 12,
    'King' : 13,
}

//Created classes for the players, decks and cards.

class Player {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
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
        return this.cards.length
    }

    pop() {
    return this.cards.shift()
    }

    push(card) {
        this.cards.push(card)
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

function freshDeck() {
return suits.flatMap(suit => {
    return values.map(value => {
        return new Card(suit, value)
    });
});
}
//The game behings here by starting with a fresh deck and then shuffling
startWar()
function startWar() {
    const deck = freshDeck()
    deck.shuffle()

    //converts the split to a whole number in case it is not divisible by 2
    const deckMidpoint = Math.ceil(deck.numberOfCards / 2) 
    player1Cards = (deck.cards.slice(0, deckMidpoint))
    player2Cards = (deck.cards.slice(deckMidpoint, deck.numberOfCards))

    console.log(player1Cards)
    console.log(player2Cards)
}  

// --------- Dealing the Cards -------- 
//Each Player gets half of the shuffled deck

function dealCards() {

for(let i = 0; i < Deck.length; i++ ){
    if (i%2){
        player1Cards.push(Deck[i]);
    }else{
        player2Cards.push(Deck[i])
    }
}
}

// ------- Rounds of Play --------
// Each player takes a turn to draw a card, whichever player has the higher value card wins the point

player1.score = 0;
player2.score = 0;


for (let i = 0; i < player1.deck.length; i++);

    player1Cards = player1.deck[i];
    console.log('1: ' + player1Cards);

    player2Cards = player2.deck[i];
    console.log('2: ' + player2Cards);

if (cardValue[player1Cards] > cardValue[player2Cards]) {
    player1.score+=1;
console.log('Player 1 gets the point!')
}else if (cardValue[player2Cards] > cardValue[player1Cards]) {
    player2.score+=1;
console.log('Player 2 gets the point!')
} else {
    console.log('Draw! No points for this round')
}

console.log('Player 1 Points: ' + player1.score);
console.log('Player 2 Points: ' + player2.score);

// ------ Scoreboard ---------

console.log('Player 1 Score: ' + player1.score);

console.log('Player 2 Score: ' + player2.score);

// --------- Who Won? ---------
// Whichever player has the higher score will win the game. If there is a tie then they will be notified to play again to declare a winner.

if (player1.score > player2.score) {
    alert (
        `Nicely done, Player 1!
        You destroyed player 2 with a score of: ${player1.score}!
        Player 2, you had a score of: ${player2.score}.
        Play again for redemption against Player 1!`);

    } else if (player2.score > player1.score) {
        alert (
            `Nicely done, Player 2!
            You destroyed Player 1 with a score of: ${player2.score}!
            Player 2, you had a score of: ${player1.score}.
            Play again for redemption against Player 2!`);
    
        } else { 
        alert (
            `WHAT?? A TIE? Unnacceptable! Play again to declare a true winner!`);
        }      
    












