const tilesMap = providesTilesMap(img);
const tilesDrawn = new Map();

var img = document.createElement('IMG');
img.src = TILES_FILE_NAME;

var size = SIZE
var side = SIDE
var scale = SCALE;
var temperature_level = TEMPERATURE;

var n;
var tile;
var key;

/* BEGIN drawing canva */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

grid_x_pixels = 0.5 * canvas.width;
grid_y_pixels = 0.5 * canvas.height;

separation_x = 3 * size;
separation_y = 0.86 * size;

grid_x = (grid_x_pixels/separation_x) + 1;
grid_y = (grid_y_pixels/separation_y) + 1;

current_x = canvas.width/2.0 - grid_x_pixels/2.0;
current_y = canvas.height/2.0 - grid_y_pixels/2.0;

img.onload = function () {
    noise.seed(getRandomInt(65536)+1);
    for (let i = 0; i < grid_y; i++) {
        if (i % 2 != 0) {
            current_x += 1.5 * size;
        }
        for (let j = 0; j < grid_x; j++) {
            ctx.beginPath();
            ctx.moveTo(current_x + size * Math.cos(0), current_y + size * Math.sin(0));

            n = Math.abs(noise.perlin2(current_x*scale, current_y*scale))*128/100;

            // temperature level
            if (temperature_level == -1) {
                if (n < 0.05) {
                    // water
                    tile = tilesMap.get("water_light");
                    key = "water_light";
                } else if (n < 0.1) {
                    // water iceberg
                    switch (getRandomInt(3)) {
                        case 0:
                            tile = tilesMap.get("water_light_ice_1");
                            key = "water_light_ice_1";
                            break;
                        case 1:
                            tile = tilesMap.get("water_light_ice_2");
                            key = "water_light_ice_2";
                            break;
                        case 2:
                            tile = tilesMap.get("water_light_ice_3");
                            key = "water_light_ice_3";
                            break;
                    }
                } else if (n < 0.2) {
                    // mixed dark water + iceberg
                    switch (getRandomInt(5)) {
                        case 0:
                            tile = tilesMap.get("water_dark");
                            key = "water_dark";
                            break;
                        case 1:
                            tile = tilesMap.get("water_dark_ice_1");
                            key = "water_dark_ice_1";
                            break;
                        case 2:
                            tile = tilesMap.get("water_dark_ice_2");
                            key = "water_dark_ice_2";
                            break;
                        case 3:
                            tile = tilesMap.get("water_dark_ice_3");
                            key = "water_dark_ice_3";
                            break;
                        case 4:
                            tile = tilesMap.get("water_dark_iceberg");
                            key = "water_dark_iceberg";
                            break;
                    }
                } else if (n < 0.4) {
                    // snow
                    tile = tilesMap.get("winter_soil");
                    key = "winter_soil";
                } else if (n < 0.45) {
                    // snow grass
                    tile = tilesMap.get("winter_grass");
                    key = "winter_grass";
                } else if (n < 0.5) {
                    // snow small trees
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("winter_trees_1");
                            key = "winter_trees_1";
                            break;
                        case 1:
                            tile = tilesMap.get("winter_trees_2");
                            key = "winter_trees_2";
                            break;
                    }
                } else if (n < 0.6) {
                    // snow forest
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("winter_forest_1");
                            key = "winter_forest_1";
                            break;
                        case 1:
                            tile = tilesMap.get("winter_forest_2");
                            key = "winter_forest_2";
                            break;
                    }
                } else if (n < 2) {
                    // snow mountains trees
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("winter_mountains_trees_1");
                            key = "winter_mountains_trees_1";
                            break;
                        case 1:
                            tile = tilesMap.get("winter_mountains_trees_2");
                            key = "winter_mountains_trees_2";
                            break;
                    }
                } else if (n < 2) {
                    // snow mountains
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("winter_mountains_1");
                            key = "winter_mountains_1";
                            break;
                        case 1:
                            tile = tilesMap.get("winter_mountains_2");
                            key = "winter_mountains_2";
                            break;
                    }
                }


                ctx.drawImage(img, tile[0]*32, tile[1]*48, 32, 48, current_x, current_y, 32, 48);
                tilesDrawn.set(j+"_"+i, key);

            } else if (temperature_level == 0) {
                if (n < 0.15) {
                    // water
                    tile = tilesMap.get("water_light");
                } else if (n < 0.20) {
                    // green soil
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("temperate_soil_1");
                            break;
                        case 1:
                            tile = tilesMap.get("temperate_soil_2");
                            break;
                    }
                } else if (n < 0.25) {
                    // grass
                    tile = tilesMap.get("temperate_grass");
                } else if (n < 0.3) {
                    // small trees
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("temperate_trees_1");
                            break;
                        case 1:
                            tile = tilesMap.get("temperate_trees_2");
                            break;
                    }
                } else if (n < 0.35) {
                    // forest
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("temperate_forest_1");
                            break;
                        case 1:
                            tile = tilesMap.get("temperate_forest_2");
                            break;
                    }
                } else if (n < 0.40) {
                    // mountain trees
                    switch (getRandomInt(2)) {
                       case 0:
                           tile = tilesMap.get("temperate_mountains_trees_1");
                           break;
                       case 1:
                           tile = tilesMap.get("temperate_mountains_trees_2");
                           break;
                   }
               } else if (n < 0.45) {
                     // mountains
                     switch (getRandomInt(3)) {
                        case 0:
                            tile = tilesMap.get("temperate_mountains_1");
                            break;
                        case 1:
                            tile = tilesMap.get("temperate_mountains_2");
                            break;
                        case 2:
                            tile = tilesMap.get("temperate_mountains_3");
                            break;
                    }
                } else if (n < 0.55) {
                    // marsh
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("temperate_marsh_1");
                            break;
                        case 1:
                            tile = tilesMap.get("temperate_marsh_2");
                            break;
                    }
                } else if (n < 0.56) {
                    // lake
                    tile = tilesMap.get("temperate_lake");
                } else if (n < 0.65) {
                    // snow
                    tile = tilesMap.get("winter_soil");
                } else if (n < 0.7) {
                    // snow grass
                    tile = tilesMap.get("winter_grass");
                } else if (n < 0.75) {
                    // snow small trees
                    tile = tilesMap.get("winter_grass");
                } else if (n < 0.8) {
                    // snow forest
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("winter_forest_1");
                            break;
                        case 1:
                            tile = tilesMap.get("winter_forest_2");
                            break;
                    }
                } else if (n < 0.85) {
                    // snow mountains trees
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("winter_mountains_trees_1");
                            break;
                        case 1:
                            tile = tilesMap.get("winter_mountains_trees_2");
                            break;
                    }
                } else if (n < 0.88) {
                    // snow mountains
                    switch (getRandomInt(2)) {
                        case 0:
                            tile = tilesMap.get("winter_mountains_1");
                            break;
                        case 1:
                            tile = tilesMap.get("winter_mountains_2");
                            break;
                    }
                } else if (n < 1.5) {
                    // mountain summit
                    tile = tilesMap.get("temperate_mountains_summit");
                }
                ctx.drawImage(img, tile[0]*32, tile[1]*48, 32, 48, current_x, current_y, 32, 48);
            }
            current_x += separation_x;
        }
        current_x = canvas.width/2.0 - grid_x_pixels/2.0;
        current_y += separation_y;
    }

    console.log(tilesDrawn);
}
/* END drawing canva */
