var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = new Image();
image.src = "fantasyhextiles_v3.png";
//ctx.drawImage(image, 0, 0);

const HEXTILES_IMAGE = new Image();
HEXTILES_IMAGE.src = 'fantasyhextiles_v3.png';
Promise.all([
    new Promise( (resolve) => {HEXTILES_IMAGE.addEventListener('load', () => { resolve();}); })
])
.then(() => {
  var hex = [1,2,3,4,5];
  for(var j = 0; j < 10; j++){
    for (var i = 0; i < 10; i++) {
      ctx.drawImage(image,32*(Math.floor(Math.random() * Math.floor(5))),50*(Math.floor(Math.random() * Math.floor(5))),32,50, i*30, j*15,20,25);
      ctx.drawImage(image,32*(Math.floor(Math.random() * Math.floor(5))),50*(Math.floor(Math.random() * Math.floor(5))),32,50, i*30+15, j*15+8,20,25);
    }
  }
});
