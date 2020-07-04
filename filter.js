isActive = (card) => {
    return card.active == true
}
isInactive = (card) => {
    return card.active == false
}
hasAnyTag = (card) => {
    return card.tags.length > 0;
}
hasTag = (card,tag) => {
    return card.tags.includes(tag);
}

isSpring = (card) => {
    return hasTag(card,'spring');
}
isSummer = (card) => {
    return hasTag(card,'summer');
}
isFall = (card) => {
    return hasTag(card,'fall');
}
isWinter = (card) => {
    return hasTag(card,'winter');
}