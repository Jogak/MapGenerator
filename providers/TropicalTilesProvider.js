import {getRandomInt} from "../utils/Utils.js";

export class TropicalTilesProvider {

    #tilesMap = providesTilesMap();

    constructor() {
    }

    getTile(noise) {
        let n = noise;
        let key;
        if (n < 0.15) {
            // water
            key = "water_light";
        } else if (n < 0.20) {
            // savannah soil
            switch (getRandomInt(2)) {
                case 0:
                    key = "savannah_soil_1";
                    break;
                case 1:
                    key = "savannah_soil_2";
                    break;
            }
        } else if (n < 0.25) {
            // savannah trees
            switch (getRandomInt(3)) {
                case 0:
                    key = "savannah_trees_1";
                    break;
                case 1:
                    key = "savannah_trees_2";
                    break;
                case 2:
                    key = "savannah_trees_3";
                    break;
            }
        } else if (n < 0.40) {
            // tropical soil
            switch (getRandomInt(2)) {
                case 0:
                    key = "tropical_soil_1";
                    break;
                case 1:
                    key = "tropical_soil_2";
                    break;
            }
        } else if (n < 0.50) {
            // tropical palm trees
            key =  "tropical_palm_trees";
        } else if (n < 0.65) {
            // tropical small trees
            key = "tropical_trees";
        } else if (n < 0.70) {
            // tropical forest
            switch (getRandomInt(3)) {
                case 0:
                    key = "tropical_forest_1";
                    break;
                case 1:
                    key = "tropical_forest_2";
                    break;
                case 2:
                    key = "tropical_forest_3";
                    break;
            }
        } else if (n < 0.75) {
            // tropical forest clearing
            key = "tropical_forest_clearing";
        } else if (n < 2) {
            // tropical marsh
            switch (getRandomInt(2)) {
                case 0:
                    key = "tropical_marsh_1";
                    break;
                case 1:
                    key = "tropical_marsh_2";
                    break;
            }
        }

        let pos = this.#tilesMap.get(key);

        return new Tile(key,pos);
    }
}
