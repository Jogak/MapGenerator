import {Hex, Layout, Point} from "../youssef/lib-module.js";

/* BEGIN functions */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function indicesItemInArray(array, item) {
    let indices = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j].includes(item)) {
                indices.push([i, j]);
            }
        }
    }
    return indices;
}
function createMatrix(rows, cols) {
    var i;
    var j;
    var a = new Array(rows);
    for (i=0; i < rows; i++) {
        a[i] = new Array(cols);
        for (j=0; j < cols; j++) {
            a[i][j] = "";
        }
    }
    return(a);
}
function hexIsAccessible(a, x, y) {
    if(a[x] == undefined) return false;
    if(a[x][y] == undefined) return false;
    if(a[x][y] == "") return false;
    if(a[x][y].includes("mountains") || a[x][y].includes("water")) return false;

    return true;
}
function hexDistance(x1 ,y1 ,x2 ,y2) {
    let dx = Math.abs(x1-x2);
    let dy = Math.abs(y2-y1);
    return Math.sqrt((dx*dx) + (dy*dy));
}
function path(a, start_x, start_y, end_x, end_y, size_x, size_y) {
    var error=0;
    if (start_x == end_x && start_y == end_y) error=1;
    if (!hexIsAccessible(a,start_x,start_y)) error=1;
    if (!hexIsAccessible(a,end_x,end_y)) error=1;
    if (error==1) return false;

    var openlist = new Array(size_x*size_y+2);
    var openlist_x = new Array(size_x);
    var openlist_y = new Array(size_y);
    var statelist = createMatrix(size_x+1,size_y+1);
    var openlist_g = createMatrix(size_x+1,size_y+1);
    var openlist_f = createMatrix(size_x+1,size_y+1);
    var openlist_h = createMatrix(size_x+1,size_y+1);
    var parent_x = createMatrix(size_x+1,size_y+1);
    var parent_y = createMatrix(size_x+1,size_y+1);
    var path = createMatrix(size_x*size_y+2,2);

    var select_x = 0;
    var select_y = 0;
    var node_x = 0;
    var node_y = 0;
    var counter = 1;
    var selected_id = 0;
    var set_first, lowest_found, lowest_x, lowest_y;

    openlist[1] = true;
    openlist_x[1] = start_x;
    openlist_y[1] = start_y;
    openlist_f[start_x][start_y] = 0;
    openlist_h[start_x][start_y] = 0;
    openlist_g[start_x][start_y] = 0;
    statelist[start_x][start_y] = true;

    while (statelist[end_x][end_y] != true) {
        set_first = true;
        for (var i in openlist) {
            if(openlist[i] == true){
                select_x = openlist_x[i];
                select_y = openlist_y[i];
                if(set_first == true) {
                    lowest_found = openlist_f[select_x][select_y];
                    set_first = false;
                }
                if (openlist_f[select_x][select_y] <= lowest_found) {
                    lowest_found = openlist_f[select_x][select_y];
                    lowest_x = openlist_x[i];
                    lowest_y = openlist_y[i];
                    selected_id = i;
                }
            }
        }
        if(set_first==true) {
            return false;
        }
        statelist[lowest_x][lowest_y] = 2;
        openlist[selected_id]= false;
        for(i=1;i<7;i++) {
            switch(i){
                case 1:
                    node_x = lowest_x-1;
                    node_y = lowest_y;
                    break;
                case 2:
                    node_x = lowest_x;
                    node_y = lowest_y-1;
                    break;
                case 3:
                    node_x = lowest_x+1;
                    node_y = lowest_y-1;
                    break;
                case 4:
                    node_x = lowest_x+1;
                    node_y = lowest_y;
                    break;
                case 5:
                    node_x = lowest_x;
                    node_y = lowest_y+1;
                    break;
                case 6:
                    node_x = lowest_x-1;
                    node_y = lowest_y+1;
                    break;
            }
            if (hexIsAccessible(a,[node_x],[node_y])) {
                if(statelist[node_x][node_y] == true) {
                    if(openlist_g[node_x][node_y] < openlist_g[lowest_x][lowest_y]) {
                        parent_x[lowest_x][lowest_y] = node_x;
                        parent_y[lowest_x][lowest_y] = node_y;
                        openlist_g[lowest_x][lowest_y] = openlist_g[node_x][node_y] + 10;
                        openlist_f[lowest_x][lowest_y] = openlist_g[lowest_x][lowest_y] + openlist_h[lowest_x][lowest_y];
                    }
                } else if (statelist[node_x][node_y] == 2) {
                    // do nothing
                } else {
                    counter++;

                    openlist[counter] = true;
                    openlist_x[counter] = node_x;
                    openlist_y[counter] = node_y;
                    statelist[node_x][node_y] = true;

                    parent_x[node_x][node_y] = lowest_x;
                    parent_y[node_x][node_y] = lowest_y;

                    var ydist = end_y - node_y;
                    if ( ydist < 0 ) ydist = ydist*-1;
                    var xdist = end_x - node_x;
                    if ( xdist < 0 ) xdist = xdist*-1;
                    openlist_h[node_x][node_y] = hexDistance(node_x,node_y,end_x,end_y) * 10;
                    openlist_g[node_x][node_y] = openlist_g[lowest_x][lowest_y] + 10;
                    openlist_f[node_x][node_y] = openlist_g[node_x][node_y] + openlist_h[node_x][node_y];
                }
            }
        }
    }

    let temp_x=end_x;
    let temp_y=end_y;
    counter = 0;
    while(temp_x != start_x || temp_y != start_y) {
        counter++;
        path[counter][1] = temp_x;
        path[counter][2] = temp_y;
        temp_x = parent_x[path[counter][1]][path[counter][2]];
        temp_y = parent_y[path[counter][1]][path[counter][2]];
    }
    counter++;
    path[counter][1] = start_x;
    path[counter][2] = start_y;

    var f = new Layout(Layout.flat, new Point(15.0, 15.0), new Point(15, 0));
    while(counter!=0) {
        if (path[counter-1][1] != "" && path[counter-1][2] != "") {
            let hex = new Hex(path[counter][1], path[counter][2], -path[counter][1]-path[counter][2]);
            let next_hex = new Hex(path[counter-1][1], path[counter-1][2], -path[counter-1][1]-path[counter-1][2]);
            ctx.moveTo(f.hexToPixel(hex).x+16, f.hexToPixel(hex).y+24);
            ctx.lineTo(f.hexToPixel(next_hex).x+16, f.hexToPixel(next_hex).y+24);
            ctx.stroke();
        }

        counter--;
    }
}
/* END functions */

const tilesDrawn = new Map();

let img = document.createElement('IMG');

img.src = TILES_FILE_NAME;

let size = SIZE,
    side = 0,
    x = 100,
    y = 100;
let scale = SCALE;
let temperature_level = TEMPERATURE;

let n;
let tile;
let key;

/* BEGIN drawing canva */
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

let map_matrix = createMatrix(20, 20);
img.onload = function () {

    noise.seed(getRandomInt(65536)+1);
    var flat = new Layout(Layout.flat, new Point(15.0, 15.0), new Point(15, 0));
    var h;
    for (let index = 0; index < 20; index++) {
        /* BEGIN drawing even */
        for (let i = 0; i < 20; i += 2) {
            let k = -i / 2 + index;
            h = new Hex(i, k, -i - k);
            let n = Math.abs(noise.perlin2(flat.hexToPixel(h).x * scale, flat.hexToPixel(h).y * scale)) * 128 / 100;
            ctx.moveTo(flat.hexToPixel(h).x, flat.hexToPixel(h).y);
            let t = getTile(temperature_level, n);
            key = t.key;
            tile = t.position;
            ctx.drawImage(img, tile[0] * 32, tile[1] * 48, 32, 48, flat.hexToPixel(h).x, flat.hexToPixel(h).y, 32, 48);
            map_matrix[i][k] = key;
        }

        /* BEGIN drawing odd */
        for (let j = 1; j < 20; j+=2) {
            let l = Math.floor(-j/2)+1*index+1;
            h = new Hex(j, l, -j-l);
            let n = Math.abs(noise.perlin2(flat.hexToPixel(h).x*scale, flat.hexToPixel(h).y*scale))*128/100;
            ctx.moveTo(flat.hexToPixel(h).x, flat.hexToPixel(h).y);
            let t = getTile(temperature_level, n);
            key = t.key;
            tile = t.position;
            ctx.drawImage(img, tile[0]*32, tile[1]*48, 32, 48, flat.hexToPixel(h).x, flat.hexToPixel(h).y, 32, 48);
            // store tile's key in matrix
            map_matrix[j][l] = key;
        }

    }

    /* BEGIN get indices of possible cities to draw */
    let indices = indicesItemInArray(map_matrix, "soil");
    const max_cities = 2;
    let cities_to_draw_indices = [];
    for (let i = 0; i < max_cities; i++) {
        let index = indices[getRandomInt(indices.length)];
        cities_to_draw_indices.push(index);
    }
    /* END get indices of possible cities to draw */

    // process and draw path between positions
    path(map_matrix, cities_to_draw_indices[0][0], cities_to_draw_indices[0][1], cities_to_draw_indices[1][0], cities_to_draw_indices[1][1], 20, 20);

    /* BEGIN draw cities and write unique names */
    let north_cities = ["Stockholm", "Oslo", "Malmö", "Copenhague", "Helsinki"];
    let picked_cities = [];
    let picked_city;
    let difference;
    for (let i = 0; i < cities_to_draw_indices.length; i++) {
        let h;
        h = new Hex(cities_to_draw_indices[i][0], cities_to_draw_indices[i][1], -cities_to_draw_indices[i][0]-cities_to_draw_indices[i][1]);
        ctx.moveTo(flat.hexToPixel(h).x, flat.hexToPixel(h).y);
        ctx.drawImage(img, 4*32, 7*48, 32, 48, flat.hexToPixel(h).x, flat.hexToPixel(h).y, 32, 48);

        difference = north_cities.filter(x => !picked_cities.includes(x));
        picked_city = difference[getRandomInt(difference.length)];
        picked_cities.push(picked_city);
        ctx.font = "10px Arial";
        ctx.textAlign = "center";
        ctx.fillText(picked_city,flat.hexToPixel(h).x+16, flat.hexToPixel(h).y+60);
    }
    /* END draw cities and write unique names */

    console.log(tilesDrawn);
}
/* END drawing canva */
