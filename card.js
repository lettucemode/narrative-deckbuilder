//import Cards from './canonicalCards.js';

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