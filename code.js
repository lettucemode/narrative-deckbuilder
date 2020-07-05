const normalWeeks = new Deck([
    'spring_1',
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
    'spring_5',
    'summer_1',
    'summer_1',
    'summer_1',
    'summer_1',
    'summer_2',
    'summer_2',
    'summer_2',
    'summer_3',
    'summer_3',
    'summer_3',
    'summer_4',
    'summer_5',
    'summer_5',
    'fall_1',
    'fall_1',
    'fall_1',
    'fall_1',
    'fall_2',
    'fall_2',
    'fall_2',
    'fall_3',
    'fall_3',
    'fall_3',
    'fall_4',
    'fall_5',
    'fall_5',
    'winter_1',
    'winter_1',
    'winter_1',
    'winter_1',
    'winter_2',
    'winter_2',
    'winter_2',
    'winter_3',
    'winter_3',
    'winter_3',
    'winter_4',
    'winter_5',
    'winter_5',
]);
const specialEvents = new Deck([
    'bandit_1',
    'bandit_1',
    'bandit_1',
    'bandit_2',
    'surprise_1',
]);

const globalState = new State({
    'test':123,
    'time':1
},{
    'Normal': normalWeeks,
    'Special': specialEvents,
});
let mainDeck = new Deck([],'Main');
mainDeck = mainDeck.merge([globalState.getDeck('Normal'),globalState.getDeck('Special')]);
//mainDeck = mainDeck.filter([hasAnyTag]);
globalState.addDeck(mainDeck);
globalState.getDeck('Main').show();
globalState.display();
function seasonMessage() {
    if (globalState.getValue('time') > 52) {
        alert('year!!!');
        globalState.setValue('time',1);
        globalState.getDeck('Main').shuffle();
        globalState.display();
    } else {
        alert('season!');
    }

    globalState.removeTrigger('season');
    globalState.addTrigger('season',SetTimer(13,globalState,seasonMessage));

};
globalState.addTrigger('season',SetTimer(13,globalState,seasonMessage));

const b = document.getElementById('drawButton');
b.onclick=() => { globalState.getDeck('Main').draw([getSeasonFilter(globalState)]).play(globalState).show('card'); globalState.display();globalState.applyTriggers();};

const s = document.getElementById('shuffleButton');
s.onclick=() => { globalState.getDeck('Main').shuffle(); globalState.display();};