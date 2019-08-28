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

    show() {
        const el = document.getElementById("card");
        el.querySelector("#cardID").innerText = this.id;
        el.querySelector("#cardName").innerText = this.name;
        el.querySelector("#cardDescription").innerText = this.description;
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

    insert(card) {
        this.deck.push(card);
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

    draw(cond = [isActive]) {
        let d = this.deck;
        for (const c of cond) {
            d = d.filter(c);
        }
        if (d.length < 1) {
            return NoCard;
        }
        let rand = Math.floor(Math.random()*d.length);
        const r = d[rand];
        r.active = false;
        return r;
    }

    shuffle() {
        for (const c of this.deck) {
            c.active = true;
        }
    }
}
function isActive(card) {
    return card.active == true
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

const b = document.getElementById("drawButton");
b.onclick=() => { deckM.draw().show(); };

const s = document.getElementById("shuffleButton");
s.onclick=() => { deckM.shuffle(); };