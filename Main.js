import {createMatrix, getRandomInt, hexDistance, hexIsAccessible, indicesItemInArray, path} from "./utils/Utils.js";
import {Layout, Point, Hex} from "../youssef/lib-module.js";
import {getTile} from "./services/TilesService.js";

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
