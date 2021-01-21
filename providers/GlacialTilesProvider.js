import {getRandomInt} from "../utils/Utils.js";

export class GlacialTilesProvider {

  #tilesMap = providesTilesMap();

  constructor() {

  }

  getTile(noise){
    var n = noise;
    var key;

     if (n < 0.05) {
         // water
         key = "water_light";
     } else if (n < 0.1) {
         // water iceberg
         switch (getRandomInt(3)) {
             case 0:
                 key = "water_light_ice_1";
                 break;
             case 1:
                 key = "water_light_ice_2";
                 break;
             case 2:
                 key = "water_light_ice_3";
                 break;
         }
     } else if (n < 0.2) {
         // mixed dark water + iceberg
         switch (getRandomInt(5)) {
             case 0:
                 key = "water_dark";
                 break;
             case 1:
                 key = "water_dark_ice_1";
                 break;
             case 2:
                 key = "water_dark_ice_2";
                 break;
             case 3:
                 key = "water_dark_ice_3";
                 break;
             case 4:
                 key = "water_dark_iceberg";
                 break;
         }
     } else if (n < 0.4) {
         // snow
         key = "winter_soil";
     } else if (n < 0.45) {
         // snow grass
         key = "winter_grass";
     } else if (n < 0.5) {
         // snow small trees
         switch (getRandomInt(2)) {
             case 0:
                 key = "winter_trees_1";
                 break;
             case 1:
                 key = "winter_trees_2";
                 break;
         }
     } else if (n < 0.6) {
         // snow forest
         switch (getRandomInt(2)) {
             case 0:
                 key = "winter_forest_1";
                 break;
             case 1:
                 key = "winter_forest_2";
                 break;
         }
     } else if (n < 2) {
         // snow mountains trees
         switch (getRandomInt(2)) {
             case 0:
                 key = "winter_mountains_trees_1";
                 break;
             case 1:
                 key = "winter_mountains_trees_2";
                 break;
         }
     } else if (n < 2) {
         // snow mountains
         switch (getRandomInt(2)) {
             case 0:
                 key = "winter_mountains_1";
                 break;
             case 1:
                 key = "winter_mountains_2";
                 break;
         }
     }

      let tilePos = this.#tilesMap.get(key);

      return new Tile(key, tilePos);
   }
}
