class Card {
    constructor (id = null) {
        if (id == null) {
            this.id = 0;
            this.name = "NoCard";
            this.description = "The deck is empty";
            this.tags = [];
            this.active = false;
            return;
        }
        if (Cards.hasOwnProperty(id)) {
            this.id = id;
            card = Cards[id];
            this.name = card.name;
            this.description = card.description;
            this.tags = card.tags!=null ? card.tags : [];
            this.active = true;
            return;
        }
        console.log("Error, no "+id+" exists.");
    }

    show(element) {
        const el = document.getElementById(element);
        el.querySelector(".cardID").innerText = this.id;
        el.querySelector(".cardName").innerText = this.name;
        el.querySelector(".cardDescription").innerText = this.description;
    }

    activate() {
        this.active = true;
    }
    deactivate() {
        this.active = false;
    }
}

const NoCard = new Card();

class Deck {
    constructor (cards = []) {
        this.deck = [];

        for (const c of cards) {
            this.insert(new Card(c));
        }
    }

    insert(cards) {
        for (const card of cards) {
            this.deck.push(card);
        }
    }

    remove(id) {
        if (this.deck.length <= id) {
            console.log("No "+id+" present in deck");
            return;
        }
        const card = this.deck[id];
        this.deck.splice(id,1);
        return card;
    }

    static Merge(deck1, deck2) {
        const newDeck = new Deck();
        for (const card of deck1.deck) {
            newDeck.insert(card);
        }
        for (const card of deck2.deck) {
            newDeck.insert(card);
        }
        return newDeck;
    }
    filter(predicates) {
        const newDeck = new Deck();
        let d = this.deck;
        for (const p of predicates) {
            d = d.filter(p);
        }
        for (const c of d) {
            newDeck.insert(c);
        }

        return newDeck;
    }

    draw(cond = [], active=true, inactive=false) {
        let d = this.deck;
        if (!active) cond.push(isInactive);
        if (!inactive) cond.push(isActive);
        for (const c of cond) {
            d = d.filter(c);
        }
        if (d.length < 1) {
            return NoCard;
        }
        let rand = Math.floor(Math.random()*d.length);
        const r = d[rand];
        r.deactivate();
        return r;
    }

    shuffle() {
        for (const c of this.deck) {
            c.activate();
        }
    }
}
function isActive(card) {
    return card.active == true
}
function isInactive(card) {
    return card.active == false
}
function isEven(card) {
    return (card.id)%2 == 0;
}
function isOdd(card) {
    return (card.id)%2 == 1;
}
function hasTag(card) {
    return card.tags.length > 0;
}

const deck = new Deck([1,3,5]);
const deck2 = new Deck([2,4]);
const deckM = Deck.Merge(deck,deck2);
console.log(deckM);
deckM.remove(2);
deckF = deckM.filter(isEven);
console.log(deckF);

const b = document.getElementById("drawButton");
b.onclick=() => { deckM.draw().show("card"); };

const s = document.getElementById("shuffleButton");
s.onclick=() => { deckM.shuffle(); };