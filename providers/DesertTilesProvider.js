import {getRandomInt} from "../utils/Utils.js";

export class DesertTilesProvider {

    #tilesMap = providesTilesMap();

    constructor() {
    }

    getTile(noise) {
        let n = noise;
        let key;
        if (n < 0.11) {
            // water
            key = "water_light";
        } else if (n < 0.30) {
            // desert soil
            switch (getRandomInt(2)) {
                case 0:
                    key = "desert_soil_1";
                    break;
                case 1:
                    key = "desert_soil_2";
                    break;
            }
        } else if (n < 0.35) {
            // desert palm trees
            key = "desert_palm_trees";
        } else if (n < 0.4) {
            // desert cactus
            key = "desert_cactus";
        } else if (n < 0.5) {
            // desert mountains
            key = "desert_mountains";
        } else if (n < 0.55) {
            // desert canyon
            switch (getRandomInt(2)) {
                case 0:
                    key = "desert_canyon_1";
                    break;
                case 1:
                    key = "desert_canyon_2";
                    break;
            }
        } else if (n < 0.65) {
            // volcano magma
            switch (getRandomInt(2)) {
                case 0:
                    key = "volcano_magma_1";
                    break;
                case 1:
                    key = "volcano_magma_2";
                    break;
            }
        } else if (n < 2) {
            // volcano craters/summits
            switch (getRandomInt(10)) {
                case 0:
                    key = "volcano_summit_1";
                    break;
                case 1:
                    key = "volcano_summit_2";
                    break;
                case 2:
                    key = "volcano_summit_3";
                    break;
                case 3:
                    key = "volcano_summit_4";
                    break;
                case 4:
                    key = "volcano_crater_1";
                    break;
                case 5:
                    key = "volcano_crater_2";
                    break;
                case 6:
                    key = "volcano_crater_3";
                    break;
                case 7:
                    key = "volcano_crater_4";
                    break;
                case 8:
                    key = "volcano_crater_5";
                    break;
                case 9:
                    key = "volcano_crater_6";
                    break;
            }
        }

        let pos = this.#tilesMap.get(key);

        return new Tile(key, pos);
    }

    getCities() {
        return new Cities(["Rabat", "Le Caire", "Tunis", "Alger", "Tripoli"], [8, 7]);
    }
}
