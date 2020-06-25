class State {
    constructor(init_state={}, init_decks={}) {
        this._state = {};
        this._decks = {};
        for (const key of Object.keys(init_state)) {
            this.setValue(key,init_state[key]);
        }
        for (const key of Object.keys(init_decks)) {
            this.addDeck(key,init_decks[key]);
        }
    }

    // Value Methods
    updateValue(key, delta) {
        if (!(key in this._state)) {
            this._state[key] = 0;
        }
        this._state[key] += delta;
    }
    setValue(key, value) {
        this._state[key] = value;
    }
    getValue(key) {
        return (key in this._state) ? this._state[key] : "";
    }

    // Deck Methods
    addDeck(name, deck=new Deck()) {
        if (!(name in this._decks)) {
            this._decks[name] = deck;
            return;
        }
        console.log(`Error: deck ${name} already present.`);
    }
    removeDeck(name) {
        if (name in this._decks) {
            const d = this._decks[name];
            delete this._decks[name];
            return d;
        }
        console.log(`Error: deck ${name} does not exist.`);
    }
    getDeck(name) {
        if (name in this._decks) {
            return this._decks[name];
        }
        console.log(`Error: deck ${name} does not exist.`);
    }
}
