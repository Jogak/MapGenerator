class Tile {
    constructor(key, position) {
        this._key = key;
        this._position = position;
    }


    get key() {
        return this._key;
    }

    get position() {
        return this._position;
    }
}