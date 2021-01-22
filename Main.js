import {createMatrix, getRandomInt, indicesItemInArray, path, drawRiver, getPossiblePointRiver} from "./utils/Utils.js";
import {Layout, Point, Hex} from "./utils/lib-module.js";
import {getCities, getTile} from "./services/TilesService.js";

const tilesDrawn = new Map();
let img = document.createElement('IMG');

img.src = TILES_FILE_NAME;

let scale = SCALE;
let temperature_level = TEMPERATURE;
let tile;
let key;

/* BEGIN drawing canva */
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

let map_matrix = createMatrix(20, 20);

img.onload = function () {
    let layout = new Layout(Layout.flat, new Point(15.0, 15.0), new Point(15, 0));

    generateTilesMap(layout);
    createRiver(ctx);
    createCities(layout);

    console.log(tilesDrawn);
}

function generateTilesMap(layout) {
    noise.seed(getRandomInt(65536) + 1);
    let hexCoordonates;
    for (let index = 0; index < 20; index++) {
        /* BEGIN drawing even */
        for (let i = 0; i < 20; i += 2) {
            let k = -i / 2 + index;
            hexCoordonates = new Hex(i, k, -i - k);
            drawTile(layout, hexCoordonates, i, k);
        }

        /* BEGIN drawing odd */
        for (let j = 1; j < 20; j += 2) {
            let l = Math.floor(-j / 2) + index + 1;
            hexCoordonates = new Hex(j, l, -j - l);
            drawTile(layout, hexCoordonates, j, l);
        }

    }
}

function drawTile(layout, hexCoordonates, columnIndex, lineIndex) {
    let n = Math.abs(noise.perlin2(layout.hexToPixel(hexCoordonates).x * scale, layout.hexToPixel(hexCoordonates).y * scale)) * 128 / 100;
    ctx.moveTo(layout.hexToPixel(hexCoordonates).x, layout.hexToPixel(hexCoordonates).y);
    let t = getTile(temperature_level, n);
    key = t.key;
    tile = t.position;
    ctx.drawImage(img, tile[0] * 32, tile[1] * 48, 32, 48, layout.hexToPixel(hexCoordonates).x, layout.hexToPixel(hexCoordonates).y, 32, 48);
    // store tile's key in matrix
    map_matrix[columnIndex][lineIndex] = key;
}

function createRiver(ctx) {
    let start_x, start_y;
    start_x = getRandomInt(14);
    start_y = getRandomInt(10);

    while (!map_matrix[start_x][start_y].includes("water")) {
        start_x = getRandomInt(14);
        start_y = getRandomInt(14);
    }

    let riverPoint = [];
    riverPoint[0] = new Point(start_x, start_y);

    let possible_points = getPossiblePointRiver(map_matrix, start_x, start_y);
    let nextPoint;
    let cptPath = 0;

    while (cptPath < 7) {
        if (possible_points.length !== 0) {
            nextPoint = possible_points[getRandomInt(possible_points.length - 1)];
            riverPoint[cptPath + 1] = nextPoint;
            possible_points = getPossiblePointRiver(map_matrix, nextPoint.x, nextPoint.y);
            cptPath += 1;
        } else {
            break;
        }
    }
    if (riverPoint.length >= 2) {
        drawRiver(riverPoint, ctx);
    }
}

function createCities(flat) {
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
    path(map_matrix, cities_to_draw_indices[0][0], cities_to_draw_indices[0][1], cities_to_draw_indices[1][0], cities_to_draw_indices[1][1], 20, 20, ctx);


    /* BEGIN draw cities and write unique names */
    let c = getCities(temperature_level);
    let cities = c.names;
    let city_coord = c.position;

    let picked_cities = [];
    let picked_city;
    let difference;
    for (let i = 0; i < cities_to_draw_indices.length; i++) {
        let h;
        h = new Hex(cities_to_draw_indices[i][0], cities_to_draw_indices[i][1], -cities_to_draw_indices[i][0] - cities_to_draw_indices[i][1]);
        ctx.moveTo(flat.hexToPixel(h).x, flat.hexToPixel(h).y);
        ctx.drawImage(img, city_coord[0] * 32, city_coord[1] * 48, 32, 48, flat.hexToPixel(h).x, flat.hexToPixel(h).y, 32, 48);

        difference = cities.filter(x => !picked_cities.includes(x));
        picked_city = difference[getRandomInt(difference.length)];
        picked_cities.push(picked_city);
        ctx.font = "10px Arial";
        ctx.textAlign = "center";
        ctx.fillText(picked_city, flat.hexToPixel(h).x + 16, flat.hexToPixel(h).y + 60);
    }
    /* END draw cities and write unique names */
}
