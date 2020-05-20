class Card {
    constructor (id = null) {
        if (id == null) {
            this.id = 0;
            this.name = "NoCard";
            this.description = "The deck is empty";
            this.tags = [];
            this.active = false;
            this.effect = [];
            return;
        }
        if (Cards.hasOwnProperty(id)) {
            this.id = id;
            const card = Cards[id];
            this.name = card.hasOwnProperty('name') ? card.name : "The Card With No Name";
            this.description = card.hasOwnProperty('description') ? card.description : "Description Goes Here";
            this.tags = card.hasOwnProperty('tags') ? card.tags : [];
            this.active = card.hasOwnProperty('active') ? card.active : true;
            this.effect = card.hasOwnProperty('effect') ? card.effect : [];
            return;
        }
        console.log(`Error, no ${id} exists.`);
    }

    play(state={}, deck = emptyDeck) {
        if (this.hasOwnProperty('effects')) {
            for (const e of effect) {
                e(state, deck);
            }
        }
        console.log(`Playing ${this.name}`);
        return this;
    }

    show(element) {
        const el = document.getElementById(element);
        el.querySelector(".cardID").innerText = this.id;
        el.querySelector(".cardName").innerText = this.name;
        el.querySelector(".cardDescription").innerText = this.description;
        return this;
    }

    activate() {
        this.active = true;
    }
    deactivate() {
        this.active = false;
    }
}

const NoCard = new Card();