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

const globalState = new State({
    "test":123
},{
    "normal":normalWeeks,
    "special":specialEvents
});
console.log(globalState);

globalState.addDeck("main",Deck.Merge([globalState.getDeck("normal"),globalState.getDeck("special")]).filter([hasAnyTag]));
globalState.getDeck("main").show();

const b = document.getElementById("drawButton");
b.onclick=() => { globalState.getDeck("main").draw().play(globalState).show("card"); };

const s = document.getElementById("shuffleButton");
s.onclick=() => { globalState.getDeck("main").shuffle(); };