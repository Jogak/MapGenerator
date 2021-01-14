const tilesDrawn = new Map();

let img = document.createElement('IMG');

img.src = TILES_FILE_NAME;

let size = SIZE
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

grid_x_pixels = 0.5 * canvas.width;
grid_y_pixels = 0.5 * canvas.height;

separation_x = 3 * size;
separation_y = 0.86 * size;

grid_x = (grid_x_pixels/separation_x) + 1;
grid_y = (grid_y_pixels/separation_y) + 1;

let current_x = canvas.width/2.0 - grid_x_pixels/2.0;
let current_y = canvas.height/2.0 - grid_y_pixels/2.0;

img.onload = function () {

    noise.seed(getRandomInt(65536)+1);
    for (let i = 0; i < grid_y; i++) {

        if (i % 2 != 0) {
            current_x += 1.5 * size;
        }

        for (let j = 0; j < grid_x; j++) {
            ctx.beginPath();
            ctx.moveTo(current_x + size * Math.cos(0), current_y + size * Math.sin(0));

            n = Math.abs(noise.perlin2(current_x * scale, current_y * scale)) * 128 / 100;

            let t = getTile(temperature_level, n);
            key = t.key;
            tile = t.position;
            ctx.drawImage(img, tile[0] * 32, tile[1] * 48, 32, 48, current_x, current_y, 32, 48);
            tilesDrawn.set(j + "_" + i, key);

            current_x += separation_x;
        }

        current_x = canvas.width / 2.0 - grid_x_pixels / 2.0;
        current_y += separation_y;
    }

    console.log(tilesDrawn);
}
/* END drawing canva */
