class State {
    constructor(init_values={}, init_decks={}) {
        this._values = {};
        this._decks = {};
        for (const key of Object.keys(init_values)) {
            this.setValue(key, init_values[key]);
        }
        for (const key of Object.keys(init_decks)) {
            this.addDeck(init_decks[key], key);
        }
    }

    // Value Methods
    updateValue(key, delta) {
        if (!(key in this._values)) {
            this._values[key] = 0;
        }
        this._values[key] += delta;
    }
    setValue(key, value) {
        this._values[key] = value;
    }
    getValue(key) {
        return (key in this._values) ? this._values[key] : '';
    }

    // Deck Methods
    addDeck(deck, id='') {
        const _id = id || deck.id 
        if (_id === '') {
            console.log('Cannot include an anonymous deck. Please provide one with a unique ID or specify an ID to use.');
            return;
        }
        if (!(_id in this._decks)) {
            this._decks[_id] = deck;
            return;
        }
        console.log(`Error: Deck ${deck.id} already present.`);
    }
    removeDeck(id) {
        if (id in this._decks) {
            const d = this._decks[id];
            delete this._decks[id];
            return d;
        }
        console.log(`Error: Deck ${id} does not exist.`);
        return new Deck();
    }
    getDeck(id) {
        if (id in this._decks) {
            return this._decks[id];
        }
        console.log(`Error: deck ${name} does not exist.`);
        return new Deck();
    }
}
