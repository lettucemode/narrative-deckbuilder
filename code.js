class Card {
    constructor (id, card) {
        this.id = id;
        this.name = card.name;
        this.description = card.description;
        this.tags = card.tags!=null ? card.tags : [];
    }

    show() {
        const el = document.getElementById("card");
        el.querySelector("#cardID").innerText = this.id;
        el.querySelector("#cardName").innerText = this.name;
        el.querySelector("#cardDescription").innerText = this.description;
    }
}

const NoCard = new Card(0, {name: "Empty Deck", description: "No cards left"});

class Deck {
    constructor () {
        this.deck = [];
    }

    insert(card) {
        this.deck.push(card);
    }

    draw(cond = []) {
        let d = this.deck;
        for (const c of cond) {
            d = d.filter(c);
        }
        if (d.length < 1) {
            return NoCard;
        }
        let rand = Math.floor(Math.random()*d.length);
        return d[rand];
    }
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

const deck = new Deck();
for (const c in Cards) {
    const card = Cards[c];
    deck.insert(new Card(c, card));
}