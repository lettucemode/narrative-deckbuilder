const normalWeeks = new Deck([
    'spring_1',
    'spring_1',
    'spring_1',
    'spring_2',
    'spring_2',
    'spring_2',
    'spring_3',
    'spring_3',
    'spring_3',
    'spring_4',
    'spring_5',
    'spring_5'
]);
const specialEvents = new Deck([
    'bandit_1',
    'bandit_1',
    'bandit_1',
    'bandit_2',
    'surprise_1',
]);

const globalState = new State({
    'test':123
},{
    'Normal': normalWeeks,
    'Special': specialEvents,
});
let mainDeck = new Deck([],'Main');
mainDeck = mainDeck.merge([globalState.getDeck('Normal'),globalState.getDeck('Special')]);
//mainDeck = mainDeck.filter([hasAnyTag]);
globalState.addDeck(mainDeck);
globalState.getDeck('Main').show();

const b = document.getElementById('drawButton');
b.onclick=() => { globalState.getDeck('Main').draw().play(globalState).show('card'); };

const s = document.getElementById('shuffleButton');
s.onclick=() => { globalState.getDeck('Main').shuffle(); };