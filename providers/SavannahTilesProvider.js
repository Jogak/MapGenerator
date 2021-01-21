import {getRandomInt} from "../utils/Utils.js";

export class SavannahTilesProvider {

  #tilesMap = providesTilesMap();

  constructor() {
  }

  getTile(noise) {
    let n = noise;
    let key;
    if (n < 0.11) {
      // water
      key = "water_light";
    } else if (n < 0.18) {
      // desert soil
      switch (getRandomInt(2)) {
        case 0:
        key = "desert_soil_1";
        break;
        case 1:
        key = "desert_soil_2";
        break;
      }
    } else if (n < 0.20) {
      // desert palm trees
      key =  "desert_palm_trees";
    } else if (n < 0.22) {
      // desert cactus
      key = "desert_cactus";
    } else if (n < 0.24) {
      // desert mountains
      key = "desert_mountains";
    } else if (n < 0.30) {
      // savannah soil
      switch (getRandomInt(2)) {
        case 0:
        key = "savannah_soil_1";
        break;
        case 1:
        key = "savannah_soil_2";
        break;
      }
    } else if (n < 0.40) {
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
    } else if (n < 0.45) {
      // savannah grass trees
      switch (getRandomInt(3)) {
        case 0:
        key = "savannah_grass_trees_1";
        break;
        case 1:
        key = "savannah_grass_trees_2";
        break;
        case 2:
        key = "savannah_grass_trees_3";
        break;
      }
    } else if (n < 0.60) {
      // savannah forest
      switch (getRandomInt(2)) {
        case 0:
        key = "savannah_forest_1";
        break;
        case 1:
        key = "savannah_forest_2";
        break;
      }
    } else if (n < 2) {
      // savannah mountains
      switch (getRandomInt(2)) {
        case 0:
        key = "savannah_mountains_1";
        break;
        case 1:
        key = "savannah_mountains_2";
        break;
      }
    }

    let pos = this.#tilesMap.get(key);

    return new Tile(key,pos);
  }

  getCities(){
    return new Cities(["Bamako", "Dakar", "Kinshasa", "Nairobi", "Abidjan"], [6,7])
  }
}
