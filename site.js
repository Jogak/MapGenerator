var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = new Image();
const HEIGHT = 10;
const LENGTH = 9;
image.src = "fantasyhextiles_v3.png";
//ctx.drawImage(image, 0, 0);

Promise.all([
    new Promise( (resolve) => {image.addEventListener('load', () => { resolve();}); })
])
.then(() => {
  var hex = [1,2,3,4,5];
  console.log("oui");
  for(var j = 0; j < HEIGHT; j++){
    for (var i = 0; i < LENGTH; i++) {
      //https://developer.mozilla.org/fr/docs/Web/API/CanvasRenderingContext2D/drawImage
      ctx.drawImage(image,32*(Math.floor(Math.random() * Math.floor(5))),50*(Math.floor(Math.random() * Math.floor(5))),32,50, i*30, j*15,20,25);
      ctx.drawImage(image,32*(Math.floor(Math.random() * Math.floor(5))),50*(Math.floor(Math.random() * Math.floor(5))),32,50, i*30+15, j*15+8,20,25);
    }
  }
});
