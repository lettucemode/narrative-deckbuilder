class State {
    constructor() {
        this._state = {};
    }

    update(key, delta) {
        if (!(key in this._state)) {
            this._state[key] = 0;
        }
        this._state[key] += delta;
    }

    set(key, value) {
        this._state[key] = value;
    }

    get(key) {
        return (key in this._state) ? this._state[key] : "";
    }
}
