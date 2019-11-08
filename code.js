//import Deck from './deck.js';

const deck = new Deck([
    "spring_1",
    "spring_3",
    "spring_5"
]);
const deck2 = new Deck([
    "spring_2",
    "spring_4"
]);
const deckM = Deck.Merge([deck,deck2]);

deckM.remove(2);

const b = document.getElementById("drawButton");
b.onclick=() => { deckM.draw().show("card"); };

const s = document.getElementById("shuffleButton");
s.onclick=() => { deckM.shuffle(); };