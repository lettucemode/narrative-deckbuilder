const globalState = new State();

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
    "bandit_2",
    "surprise_1",
]);

const deckM = Deck.Merge([normalWeeks,specialEvents]).filter([hasAnyTag]);
deckM.show();

const b = document.getElementById("drawButton");
b.onclick=() => { deckM.draw().play(globalState).show("card"); };

const s = document.getElementById("shuffleButton");
s.onclick=() => { deckM.shuffle(); };