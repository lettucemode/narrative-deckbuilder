function tick(state, clockName="time", increment=1) {
    state.updateValue(clockName, increment);
}