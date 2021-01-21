import {Hex, Layout, Point} from "./lib-module.js";


export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
export function indicesItemInArray(array, item) {
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
 export function createMatrix(rows, cols) {
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
export function hexIsAccessible(a, x, y) {
    if(a[x] == undefined) return false;
    if(a[x][y] == undefined) return false;
    if(a[x][y] == "") return false;
    if(a[x][y].includes("mountains") || a[x][y].includes("water") || a[x][y].includes("canyon") || a[x][y].includes("volcano")) return false;

    return true;
}
export function hexDistance(x1 ,y1 ,x2 ,y2) {
    let dx = Math.abs(x1-x2);
    let dy = Math.abs(y2-y1);
    return Math.sqrt((dx*dx) + (dy*dy));
}
export function path(a, start_x, start_y, end_x, end_y, size_x, size_y, ctx) {
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

function getPossiblePointRiver(a, origin_x, origin_y){
  var points = [];
  var cpt =0;
  if(hexIsAccessible(a,origin_x-1,origin_y)){ points[cpt]=(new Point(origin_x-1,origin_y)); cpt+=1;}
  if(hexIsAccessible(a,origin_x+1,origin_y)){ points[cpt]=(new Point(origin_x+1,origin_y)); cpt+=1;}
  if(hexIsAccessible(a,origin_x,origin_y-1)){ points[cpt]=(new Point(origin_x,origin_y-1)); cpt+=1;}
  if(hexIsAccessible(a,origin_x,origin_y+1)){ points[cpt]=(new Point(origin_x,origin_y+1)); cpt+=1;}

  return points;
}
function drawRiver(points, ctx){
  var f = new Layout(Layout.flat, new Point(15.0, 15.0), new Point(15, 0));
  ctx.lineWidth = '3' ;
  ctx.strokeStyle ="#18AEE4";

  ctx.moveTo(f.hexToPixel(new Hex(points[0].x,points[0].y, 0- points[0].x - points[0].y)).x+16, f.hexToPixel(new Hex(points[0].x,points[0].y, (0 -points[0].x - points[0].y))).y+28);
  for(var i = 1; i < points.length; i++){
    ctx.lineTo(f.hexToPixel(new Hex(points[i].x,points[i].y, 0- points[i].x - points[i].y)).x+16, f.hexToPixel(new Hex(points[i].x,points[i].y, (0 -points[i].x - points[i].y))).y+28);
    ctx.stroke();
  }
  ctx.lineWidth = '1';
  ctx.strokeStyle = "black";
}

export function createRiver(a,ctx){
  var start_x, start_y;
  start_x = getRandomInt(14);
  start_y = getRandomInt(10);
  while(!a[start_x][start_y].includes("water")){
    start_x = getRandomInt(14);
    start_y = getRandomInt(14);
  }
  var riverPoint =[];
  riverPoint[0] = new Point(start_x,start_y);
  var possible_points =getPossiblePointRiver(a,start_x,start_y);
  var nextPoint;
  var cptPath = 0;
  var currentPoint = riverPoint[0];
  while( cptPath <5){
  if(possible_points.length !=0){
    nextPoint = possible_points[getRandomInt(possible_points.length-1)];
    riverPoint[cptPath+1] = nextPoint;
    possible_points = getPossiblePointRiver(a,nextPoint.x,nextPoint.y);
    cptPath +=1;
    } else {
      break;
    }
}
  if(riverPoint.length >=2){
    drawRiver(riverPoint,ctx);
  }
}
