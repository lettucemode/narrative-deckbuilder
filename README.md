# Narrative Deckbuilder

Proof of concept for narrative deckbuilder for ambient storytelling

## Cards

A Card is the basic unit of presentable data, providing a single container for the various bits of data needed to display a single event.

CanonicalCards are defined by the designer and contain the following fields:
* ID: A unique identifier for a given CanonicalCard
* Name: A short user-friendly name
* Description: Full text that explains what the card represents
* Tags: Optional array of strings, used for filters

To use Cards, they must be instantiated through `new Card(id)`, which will create a representation of the CanonicalCard referenced by the given ID.
Each of these Card instances keeps track of its own state, such as if it is currently discarded.

Card also provides the following utility methods:
* show(elementID): Will display the Card's ID, Name, and Description in the DOM element specified by the provided ID. Element must have children with class "cardID", "cardName", and "cardDescription" to properly display.
* activate(): Sets card as active, used to add a discarded card back to the deck.
* deactivate(): Sets card as inactive, used to discard a card without permanently removing it from its Deck.

## Decks

A Deck is a collection of specific cards that can be drawn from. Each deck represents a logical view of a subset of all existing cards, and can be easily combined with other decks or filtered as necessary.

Deck utility methods:
* insert(card): Adds card to the current Deck
* remove(pos): Removes card at the specified position from the Deck. Method returns the card.
* Deck.Merge(\[decks\]): Returns a single Deck that contains the union of all decks provided. Note that any card which appears in multiple decks will be represented multiple times.
* filter(\[predicates\]): Returns a Deck consisting of all cards that match the conditions specified by the predicates 
* shuffle(): Calls reactivate() on all cards in the Deck.
* draw(\[filters\]): Draws a card from the Deck 