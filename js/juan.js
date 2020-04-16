const spriteImg = new Image();
      spriteImg.src = "../images/hg-sprite.png";
let spriteX = 0;
let spriteY = 704;
let canvasX = 0
let canvasY = 0
let gameOver = false
document.body.onkeydown = function (e) {
  // if(gameOver === false )
  switch (e.keyCode) {
    case 38:
      // up
      spriteX = 0
      break;
    case 40:
      // down
      spriteX = 0
      break;
    case 37:
      // left
      spriteX = 0
      break;
    case 39:
      //right
      if(spriteX >= 512){
        spriteX = 0
      }
      spriteX +=64
      canvasX += 2
      break;
    default:
      break;
  }
};
const animationLoop = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(spriteImg, spriteX, spriteY, 64, 64, canvasX, canvasY, 64, 64);
  requestAnimationFrame(animationLoop)
}