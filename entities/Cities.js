class Cities {
    constructor(names, position) {
        this._names = names;
        this._position = position;
    }


    get names() {
        return this._names;
    }

    get position() {
        return this._position;
    }
}