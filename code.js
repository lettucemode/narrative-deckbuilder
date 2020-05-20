//import Deck from './deck.js';

const normalWeeks = new Deck([
    "spring_1",
    "spring_1",
    "spring_1",
    "spring_2",
    "spring_2",
    "spring_2",
    "spring_3",
    "spring_3",
    "spring_3",
    "spring_4",
    "spring_5",
    "spring_5"
]);
const specialEvents = new Deck([
    "bandit_1",
    "bandit_1",
    "bandit_1",
    "bandit_2"
]);

const deckM = Deck.Merge([normalWeeks,specialEvents]);
deckM.remove(2);

const b = document.getElementById("drawButton");
b.onclick=() => { deckM.draw().show("card"); };

const s = document.getElementById("shuffleButton");
s.onclick=() => { deckM.shuffle(); };