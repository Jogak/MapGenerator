import {getRandomInt} from "../utils/Utils.js";

export class TemperateTilesProvider {

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
                // green soil
                switch (getRandomInt(2)) {
                    case 0:
                        key = "temperate_soil_1";
                        break;
                    case 1:
                        key = "temperate_soil_2";
                        break;
                }
            } else if (n < 0.25) {
                // grass
               key =  "temperate_grass";
            } else if (n < 0.3) {
                // small trees
                switch (getRandomInt(2)) {
                    case 0:
                        key = "temperate_trees_1";
                        break;
                    case 1:
                        key = "temperate_trees_2";
                        break;
                }
            } else if (n < 0.35) {
                // forest
                switch (getRandomInt(2)) {
                    case 0:
                        key = "temperate_forest_1";
                        break;
                    case 1:
                        key = "temperate_forest_2";
                        break;
                }
            } else if (n < 0.40) {
                // mountain trees
                switch (getRandomInt(2)) {
                   case 0:
                       key = "temperate_mountains_trees_1";
                       break;
                   case 1:
                       key = "temperate_mountains_trees_2";
                       break;
               }
           } else if (n < 0.45) {
                 // mountains
                 switch (getRandomInt(3)) {
                    case 0:
                        key = "temperate_mountains_1";
                        break;
                    case 1:
                        key = "temperate_mountains_2";
                        break;
                    case 2:
                        key = "temperate_mountains_3";
                        break;
                }
            } else if (n < 0.55) {
                // marsh
                switch (getRandomInt(2)) {
                    case 0:
                        key = "temperate_marsh_1";
                        break;
                    case 1:
                        key = "temperate_marsh_2";
                        break;
                }
            } else if (n < 0.56) {
                // lake
               key = "temperate_lake";
            } else if (n < 0.65) {
                // snow
               key = "winter_soil";
            } else if (n < 0.7) {
                // snow grass
               key = "winter_grass";
            } else if (n < 0.75) {
                // snow small trees
               key = "winter_grass";
            } else if (n < 0.8) {
                // snow forest
                switch (getRandomInt(2)) {
                    case 0:
                        key = "winter_forest_1";
                        break;
                    case 1:
                        key = "winter_forest_2";
                        break;
                }
            } else if (n < 0.85) {
                // snow mountains trees
                switch (getRandomInt(2)) {
                    case 0:
                        key = "winter_mountains_trees_1";
                        break;
                    case 1:
                        key = "winter_mountains_trees_2";
                        break;
                }
            } else if (n < 0.88) {
                // snow mountains
                switch (getRandomInt(2)) {
                    case 0:
                        key = "winter_mountains_1";
                        break;
                    case 1:
                        key = "winter_mountains_2";
                        break;
                }
            } else if (n < 1.5) {
                // mountain summit
               key = "temperate_mountains_summit";
            }

           let pos = this.#tilesMap.get(key);

           return new Tile(key,pos);
    }

    getCities() {
        return new Cities( ["Paris", "Berlin", "Amsterdam", "Zurich", "Vienne"], [1,7]);
    }
}