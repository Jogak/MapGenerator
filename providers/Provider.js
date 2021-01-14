function providesTilesMap() {
  var tilesMap = new Map();

  /* BEGIN temperate tiles */
  tilesMap.set("temperate_soil_1", [0,0]);
  tilesMap.set("temperate_soil_2", [1,0]);
  tilesMap.set("temperate_grass", [2,0]);
  tilesMap.set("temperate_trees_1", [3,0]);
  tilesMap.set("temperate_trees_2", [4,0]);
  tilesMap.set("temperate_forest_1", [5,0]);
  tilesMap.set("temperate_forest_2", [6,0]);
  tilesMap.set("temperate_mountains_1", [7,0]);
  tilesMap.set("temperate_mountains_2", [8,0]);
  tilesMap.set("temperate_mountains_3", [9,0]);
  tilesMap.set("temperate_mountains_trees_1", [10,0]);
  tilesMap.set("temperate_mountains_trees_2", [11,0]);
  tilesMap.set("temperate_mountains_summit", [0,6]);
  tilesMap.set("temperate_marsh_1", [12,0]);
  tilesMap.set("temperate_marsh_2", [3,1]);
  tilesMap.set("temperate_lake", [13,0]);
  /* END temperate tiles */

  /* BEGIN tropical tiles */
  tilesMap.set("tropical_soil_1", [0,1]);
  tilesMap.set("tropical_soil_2", [1,1]);
  tilesMap.set("tropical_marsh_1", [2,1]);
  tilesMap.set("tropical_marsh_2", [8,1]);
  tilesMap.set("tropical_trees", [4,1]);
  tilesMap.set("tropical_forest_1", [5,1]);
  tilesMap.set("tropical_forest_2", [6,1]);
  tilesMap.set("tropical_forest_3", [7,1]);
  tilesMap.set("tropical_forest_clearing", [9,1]);
  tilesMap.set("tropical_palm_trees", [10,1]);
  /* END tropical tiles */

  /* BEGIN savannah tiles */
  tilesMap.set("savannah_soil_1", [0,2]);
  tilesMap.set("savannah_soil_2", [1,2]);
  tilesMap.set("savannah_trees_1", [2,2]);
  tilesMap.set("savannah_trees_2", [3,2]);
  tilesMap.set("savannah_trees_3", [4,2]);
  tilesMap.set("savannah_grass_trees_1", [5,2]);
  tilesMap.set("savannah_grass_trees_2", [6,2]);
  tilesMap.set("savannah_grass_trees_3", [7,2]);
  tilesMap.set("savannah_mountains_1", [8,2]);
  tilesMap.set("savannah_mountains_2", [9,2]);
  tilesMap.set("savannah_forest_1", [10,2]);
  tilesMap.set("savannah_forest_2", [11,2]);
  /* END savannah tiles */

  /* BEGIN winter tiles */
  tilesMap.set("winter_soil", [5,3]);
  tilesMap.set("winter_grass", [0,3]);
  tilesMap.set("winter_trees_1", [1,3]);
  tilesMap.set("winter_trees_2", [6,3]);
  tilesMap.set("winter_forest_1", [2,3]);
  tilesMap.set("winter_forest_2", [7,3]);
  tilesMap.set("winter_mountains_1", [3,3]);
  tilesMap.set("winter_mountains_2", [8,3]);
  tilesMap.set("winter_mountains_trees_1", [4,3]);
  tilesMap.set("winter_mountains_trees_2", [9,3]);
  /* END winter tiles */

  /* BEGIN desert tiles */
  tilesMap.set("desert_soil_1", [0,4]);
  tilesMap.set("desert_soil_2", [2,4]);
  tilesMap.set("desert_palm_trees", [1,4]);
  tilesMap.set("desert_cactus", [6,4]);
  tilesMap.set("desert_mountains", [3,4]);
  tilesMap.set("desert_canyon_1", [4,4]);
  tilesMap.set("desert_canyon_2", [5,4]);
  /* END desert tiles */

  /* BEGIN water tiles */
  tilesMap.set("water_light", [0,5]);
  tilesMap.set("water_light_ice_1", [1,5]);
  tilesMap.set("water_light_ice_2", [2,5]);
  tilesMap.set("water_light_ice_3", [3,5]);
  tilesMap.set("water_dark", [4,5]);
  tilesMap.set("water_dark_ice_1", [5,5]);
  tilesMap.set("water_dark_ice_2", [6,5]);
  tilesMap.set("water_dark_ice_3", [7,5]);
  tilesMap.set("water_dark_iceberg", [8,5]);
  tilesMap.set("water_light_bay_left", [9,5]);
  tilesMap.set("water_light_bay_right", [10,5]);
  tilesMap.set("water_light_bay_ice_left", [11,5]);
  tilesMap.set("water_light_bay_ice_right", [12,5]);
  tilesMap.set("water_light_lighthouse", [13,5]);
  /* END water tiles */

  /* BEGIN volcano tiles */
  tilesMap.set("volcano_magma_1", [13,6]);
  tilesMap.set("volcano_magma_2", [14,6]);
  tilesMap.set("volcano_summit_1", [1,6]);
  tilesMap.set("volcano_summit_2", [4,6]);
  tilesMap.set("volcano_summit_3", [7,6]);
  tilesMap.set("volcano_summit_4", [10,6]);
  tilesMap.set("volcano_crater_1", [2,6]);
  tilesMap.set("volcano_crater_2", [3,6]);
  tilesMap.set("volcano_crater_3", [5,6]);
  tilesMap.set("volcano_crater_4", [6,6]);
  tilesMap.set("volcano_crater_5", [11,6]);
  tilesMap.set("volcano_crater_6", [12,6]);
  /* END volcano tiles */

  /* BEGIN city tiles */
  tilesMap.set("city_temperate_1", [0,7]);
  tilesMap.set("city_temperate_2", [1,7]);
  tilesMap.set("city_tropical", [2,7]);
  tilesMap.set("city_winter_1", [3,7]);
  tilesMap.set("city_winter_2", [4,7]);
  tilesMap.set("city_winter_3", [5,7]);
  tilesMap.set("city_winter_4", [0,9]);
  tilesMap.set("city_savannah_1", [6,7]);
  tilesMap.set("city_savannah_2", [7,7]);
  tilesMap.set("city_desert", [8,7]);
  /* END city tiles */

  return tilesMap;
}
