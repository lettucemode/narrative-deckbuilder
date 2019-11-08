isActive = (card) => {
    return card.active == true
}
isInactive = (card) => {
    return card.active == false
}
hasAnyTag = (card) => {
    return card.tags.length > 0;
}