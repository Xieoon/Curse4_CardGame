import template from './game_screen.hbs'
import cardTemplate from './cards.hbs'
import Card from '../some_logick/cardClass';
import Table from '../some_logick/tableClass';
import timer from '../some_logick/timer';

const allCards = [
    "6_dimonds",
    "7_dimonds",
    "8_dimonds",
    "9_dimonds",
    "10_dimonds",
    "jack_dimonds",
    "queen_dimonds",
    "king_dimonds",
    "ace_dimonds",
    "6_hearts",
    "7_hearts",
    "8_hearts",
    "9_hearts",
    "10_hearts",
    "jack_hearts",
    "queen_hearts",
    "king_hearts",
    "ace_hearts",
    "6_spades",
    "7_spades",
    "8_spades",
    "9_spades",
    "10_spades",
    "jack_spades",
    "queen_spades",
    "king_spades",
    "ace_spades",
    "6_clubs",
    "7_clubs",
    "8_clubs",
    "9_clubs",
    "10_clubs",
    "jack_clubs",
    "queen_clubs",
    "king_clubs",
    "ace_clubs",
  ];

export default function gameScreen() {
    const html = template();
    document.body.innerHTML = html;
    
    const gameTimer = document.querySelector('.timer')

    timer(gameTimer)

    let cards =  randomCards().map(el =>cardTemplate({card:`../static/${el}.svg`}))

    document.querySelector('.board').innerHTML = cards.join('')

  cards = Array.from(document.querySelectorAll('.board_card')).map(el => new Card(el))


  let gameDasck = new Table(cards)

  console.log(gameDasck);
  let timerStop = setTimeout(()=>{

  gameDasck.closeCards()  
},5000)
  

}


function randomCards(){
let cards = []
for(let i =0;i<window.store.dificulty/2;i++){
    cards[i] = allCards[Math.round(Math.random()*35)]
}
cards = cards.concat(cards)

cards = shuffle(cards)

return cards
}


function shuffle (arr) {
    for (var i = 0; i < arr.length; i++) {
      var j = random(arr.length);
      var k = random(arr.length);
      var t = arr[j];
      arr[j] = arr[k];
      arr[k] = t;
    }
    return arr;
  }

  function random(n) {
    return Math.floor(Math.random() * Math.floor(n));
  }