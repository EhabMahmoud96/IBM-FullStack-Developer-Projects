//Variables 
const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purble', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

//Accessing DOM elements
const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-Container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

//Functions
function generateCards() {
    for (const color of cards) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color = color;
        card.textContent = '?';
        gameContainer.appendChild(card);
    }
}
