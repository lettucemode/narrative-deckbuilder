class State {
    constructor(init_values={}, init_decks={}, init_triggers={}, id='state') {
        this._values = {};
        this._decks = {};
        this._triggers = {};
        this._id = id;
        for (const key of Object.keys(init_values)) {
            this.setValue(key, init_values[key]);
        }
        for (const key of Object.keys(init_decks)) {
            this.addDeck(init_decks[key], key);
        }
        for (const key of Object.keys(init_triggers)) {
            this.addTrigger(init_triggers[key], key);
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
        console.log(`Error: Deck ${_id} already present.`);
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

    // Trigger Methods
    addTrigger(id, trigger) {
        if (!(id in this._triggers)) {
            this._triggers[id] = trigger;
            return;
        }
        console.log(`Error: Trigger ${id} already present.`);
    }
    removeTrigger(id) {
        if (id in this._triggers) {
            const t = this._triggers[id];
            delete this._triggers[id];
            return t;
        }
        console.log(`Error: Trigger ${id} does not exist.`);
        return new Trigger();
    }
    applyTriggers() {
        for (const key of Object.keys(this._triggers)) {
            this._triggers[key].apply(this);
        }
    }

    display(id='') {
        const i = id || this._id;
        const el = document.getElementById(i+'-container');
        const newEl = el.cloneNode(false);
        for (const key of Object.keys(this._values)) {
            const item = document.createElement('LI');
            item.innerText = `${key}: ${this._values[key]}`;
            newEl.append(item);
        }
        el.parentNode.replaceChild(newEl,el); // Clears all children from past display
    }
}
