var img = document.createElement('IMG');
img.src = "tiles.png";


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const tilesMap = new Map();

function possibleTiles(current_x, current_y, delta_x,delta_y){
  if ((current_x <= 335 && delta_x == 0) ){
    return false;
  } else if ((current_x >= 2000 && delta_x == 2)){

    return false;
  } else if ( (current_y <= 335 && delta_y == 0)){

    return false;
  } else if ( (current_y >=2000 && delta_y == 2)){
    return false;
  }

  return true;
}

function isWaterTiles(x,y){
  tiles = tilesDrawn.get(x+"_"+y);
  console.log(tiles);
  position = tiles.indexOf("water");
  if (position >= 0){
    return true;
  }
  return false;
}

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

/* BEGIN drawing canva */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d"),side = 0,
size = 15,
x = 100,
y = 100;

var logo = document.getElementById("tiles");
let river_pattern = ctx.createPattern(logo, 'repeat');

canvas.width = 1100;
canvas.height = 1100;

grid_x_pixels = 0.5 * canvas.width;
grid_y_pixels = 0.5 * canvas.height;

separation_x = 3 * size;
separation_y = 0.86 * size;

grid_x = (grid_x_pixels/separation_x) + 1;
grid_y = (grid_y_pixels/separation_y) + 1;

current_x = canvas.width/2.0 - grid_x_pixels/2.0;
current_y = canvas.height/2.0 - grid_y_pixels/2.0;

var n;
var scale = 0.007;
var temperature_level = -1;
var tile;
var key;

const tilesDrawn = new Map();

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

    //Drawing route
    //var route_size = getRandomInt(10) +1;
    var route_size = 20;
    //var x_route = (getRandomInt(10)*size + (canvas.width/2.0 - grid_x_pixels/2.0)+1);
    //var y_route = (getRandomInt(10)*size + (canvas.height/2.0 - grid_y_pixels/2.0)+1);
    var x_pos = getRandomInt(10) +1;
    var y_pos = getRandomInt(10) +1;
    let brk =0;
    while(!isWaterTiles(x_pos,y_pos) && brk <6){
      x_pos = getRandomInt(10);
      y_pos = getRandomInt(10);
      brk +=1;
    }
    if(brk <6){
     var x_route = canvas.width/2.0 - grid_x_pixels/2.0 + size + (x_pos*(size*3));
     var y_route =  canvas.width/2.0 - grid_x_pixels/2.0 +size*2 +(y_pos*size);
     console.log(x_route);
     var delta_y;
     var delta_x;

      for (var i = 0; i < route_size; i++) {
        ctx.beginPath();
        ctx.lineWidth = '3' ;
        ctx.strokeStyle ="#18AEE4";
        ctx.strokeStyle = "black";
      //ctx.rect(98, 250, 32, 48);
//ctx.fillStyle = river_pattern;
//ctx.fill();
      ctx.moveTo(x_route,y_route);

        delta_y = getRandomInt(3);
        delta_x = getRandomInt(3);
        delta = [delta_x,delta_y];
        while(!possibleTiles(x_route,y_route,delta_x, delta_y)){
          delta_x= getRandomInt(3);
          delta_y=getRandomInt(3);

        }
        x_pos +=delta_x -1;
        y_pos += delta_y -1;

      if(!isWaterTiles(x_pos,y_pos)){
        x_pos -=delta_x +1;
        y_pos -= delta_y +1;
      } else {
      switch(delta_x){
        case 0 :
          switch(delta_y){
            case 0 :
            y_route -=size *0.86;
            x_route -= size *3;
            break;
            case 1 :

            break;
            case 2 :
            y_route +=size *0.86;
            x_route -= size *1.5;
            break;
          }

          break;
        case 1 :
          switch(delta_y){
            case 0 :
            y_route -=size*0.86;
            break;
            case 1 :

            break;
            case 2 :
            y_route +=size*0.86;
            break;
          }
          break;
        case 2 :
        switch(delta_y){
          case 0 :
          y_route -=size *0.86;
          x_route += size*1.5;
          break;
          case 1 :

          break;
          case 2 :
          y_route +=size *0.86;
          x_route += size * 1.5;
          break;
        }

        break;
      }


      ctx.lineTo(x_route,y_route);
      ctx.stroke();
    }

    /*current_x = canvas.width/2.0 - grid_x_pixels/2.0 +(size);
    current_y = canvas.height/2.0 - grid_y_pixels/2.0 + (size*2);
    ctx.beginPath();
    ctx.lineWidth = '3' ;
    ctx.strokeLine = 'black';
    ctx.moveTo(current_x,current_y);
    current_x  += size *1.5;
    current_y +=size*0.86;
    ctx.lineTo(current_x,current_y);
    ctx.moveTo(current_x,current_y);
    ctx.lineTo(current_x+size*1.5,current_y+size);
    current_x  += size *1.5;
    current_y +=size*0.86;
    ctx.moveTo(current_x,current_y);
    ctx.lineTo(current_x+size*1.5,current_y+size);
    */
    }
  }
    console.log(tilesDrawn);
}
/* END drawing canva */
