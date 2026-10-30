// These variables remember the current round.
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let player = { name: "Ian", rounds: 0 };

// Find the HTML elements that JavaScript will update.
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let playerEl = document.getElementById("player-el");
let startButton = document.getElementById("start-btn");
let newCardButton = document.getElementById("new-card-btn");

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  hasBlackJack = false;
  isAlive = true;
  player.rounds += 1;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "";
  for (let i = 0; i < cards.length; i++) {
    let cardEl = document.createElement("span");
    cardEl.className = "card";
    cardEl.textContent = cards[i];
    cardEl.setAttribute("aria-label", "Card " + (i + 1) + ": " + cards[i]);
    cardsEl.appendChild(cardEl);
  }
  sumEl.textContent = sum;

  let message = "";
  if (sum < 21) {
    message = "Still in the game. Want another card?";
  } else if (sum === 21) {
    message = "You've got Blackjack! Start a new round?";
    hasBlackJack = true;
  } else {
    message = "Over 21 — you're out this round. Try again?";
    isAlive = false;
  }
  messageEl.textContent = message;
  newCardButton.disabled = !isAlive || hasBlackJack;
  startButton.textContent = "NEW ROUND";
  playerEl.textContent = player.name + " · Round " + player.rounds;
}

function newCard() {
  // Prevent drawing before starting, after a win, or after going over 21.
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    cards.push(card);
    sum += card;
    renderGame();
  }
}

startButton.addEventListener("click", startGame);
newCardButton.addEventListener("click", newCard);
playerEl.textContent = player.name + " · Ready for round 1";
