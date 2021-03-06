/* Alex Starter Code */
window.onload = () => {
  introMusic.play();
};

let introMusic = document.getElementById('start');
let playingMusic = document.getElementById('playing');
let stepMusic = document.getElementById('step');
let successMusic = document.getElementById('success');
let finalLevel = document.getElementById('finalLevel');
let gameOver = document.getElementById('gameOver');
let gameWin= document.getElementById('gameWin');

introMusic.volume = 0.1;
playingMusic.volume = 0.03;
stepMusic.volume = 0.04;
successMusic.volume = 0.03;
gameOver.volume = 0.3;
gameWin.volume = 0.4;
finalLevel.volume = 0.3;

lives = 3;
let gameTracker = {
  name: 'John Doe',
  sex: 1,
  country: 'Colombia',
  level: 1,
  hp: 100 ,
  lives: lives,
  cFlag: '../images/colombia-flag-country.png',
  alive: true,
};

const tracker = () => {
  //Update GAME TRACKER INFO
  let trackDiv = document.getElementById('gameTracker');
  let initVal = `<div id="gInfo"><h1>${gameTracker.country}: Level ${gameTracker.level}/5</h1>
  <h3>${gameTracker.name} Health: ${gameTracker.hp}pts - Lives Left: ${lives}</h3></div></div>
  <div id="gFlag"><img src="${gameTracker.cFlag}" alt=""></div> 
</div>`;
  trackDiv.innerHTML = initVal;
};

const setPlayField = () => {
  document.getElementById('explodeCovid').style.display = 'none';
  document.getElementById('mainPage').style.display = 'none';
  document.getElementById('game-board').style.display = 'grid';
  document.getElementById(
    'body'
  ).style.backgroundImage = `url('../images/bogota.jpg')`;
};

const setPlayerSex = (n) => {
  
    switch (Number(n)) {
      case 1:
        img.src = './images/sprite.png';
        break;
        case 2:
          img.src = './images/female.png';
        break;
        case 3:
          img.src = './images/skeleton.png';
        break;
      default:
        break;
    }
  
  }


const begin = () => {
  setPlayField(); //Clear landingPage info
  gameTracker.name = document.getElementById('name').value
  gameTracker.sex = document.getElementById('sex').value
  setPlayerSex(gameTracker.sex); 
  tracker(); //Init scoreboard info
  createObstacles();
  //createVirus();
  startGame();
  introMusic.pause();
  playingMusic.play();
};

/* Alex End Code */

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
ctx.font = "14px Arial";
let animateId = null;
let newLevel = false;
let lightCounter = 0;
let lightSwitch = false;
let lightTime = 100;
let canMove = true;
let stageCounter = 0;
let direction = '';
let img = new Image();
img.src = './images/skeleton.png';// Loads player
let contamination = 0;
let currentLoopIndex = 0;
let frameCount = 0;
let virusCount = 0;
let obstacleImage = new Image()
obstacleImage.src =  './images/log.png'
let covidImage = new Image()
covidImage.src = './images/covid19.png'
let canvasImage = new Image()
canvasImage.src = './images/mat to colombia.jpg'
let level = 1
let stage = 1
let levelLoadScreen = 0
let levelLoadText = `YOU'RE ON YOUR WAY TO COLOMBIA TO FIND DR. JUANCHITO!`
let levelLoadText2 = "THANKFULLY THIS FIRST TRIP WON'T REQUIRE YOU TO TRAVEL AT NIGHT ;)"
let levelLoadText3 = "MOVE QUICKLY THOUGH! THE CORONA FOG WILL DETERIORATE YOUR HEALTH!"
let virusSpeed = 0.25
let levelLoadImg = new Image();
levelLoadImg.src = '/images/coronabeer.jpg'
/* HUGO CODE */

//  NEW IMAGES
let canvasBack = {
  image: canvasImage,
  x:0,
  y:0,
  w:700,
  h:500,
}
let colCanvas = new Image();
colCanvas.src = './images/mat to colombia.jpg'
let montCanvas = new Image();
montCanvas.src = './images/map to montenegro.jpg'
let grceCanvas = new Image();
grceCanvas.src = './images/map to greece.jpg'
let treeImg = new Image();
treeImg.src = './images/tree.png'
let rockImg = new Image();
rockImg.src = './images/rocks.png'
let mountainImg = new Image();
mountainImg.src = './images/mountain.png'
let metalFloorCanvas = new Image();
metalFloorCanvas.src = './images/metalfloor.png'
let column = new Image();
column.src = '/images/greek-column.png';
let fogImg = new Image();
fogImg.src = './images/greenfog_1024.png'

let hugostacle = [
  {
    x: 100,
    y: Math.floor(Math.random() * 300),
    w: 30,
    h: 200,
  },
  {
    x: 300,
    y: Math.floor(Math.random() * 50 + 250),
    w: 30,
    h: 200,
  },
  {
    x: 450,
    y: Math.floor(Math.random() * 300),
    w: 30,
    h: 200,
  },
];

let fog = {
  x: 0,
  y: 0,
  w: 0,
  h: 500,
  image: fogImg
}

function drawLog() {
  for (i = 0; i < hugostacle.length; i++) {
    ctx.drawImage(
      logImg,
      hugostacle[i].x,
      hugostacle[i].y,
      hugostacle[i].w,
      hugostacle[i].h
    );
  }
}
function drawColumn() {
  for (i = 0; i < hugostacle.length; i++) {
    ctx.drawImage(
      column,
      hugostacle[i].x,
      hugostacle[i].y,
      60,
      hugostacle[i].h
    );
  }
}

function drawColCanvas() {
  ctx.drawImage(
    colCanvas,
    canvasSize.x,
    canvasSize.y,
    canvasSize.w,
    canvasSize.h
  );
}
function drawMontCanvas() {
  ctx.drawImage(
    montCanvas,
    canvasSize.x,
    canvasSize.y,
    canvasSize.w,
    canvasSize.h
  );
}
function drawGrceCanvas() {
  ctx.drawImage(
    grceCanvas,
    canvasSize.x,
    canvasSize.y,
    canvasSize.w,
    canvasSize.h
  );
}
function drawMetalFloor() {
  ctx.drawImage(
    metalFloorCanvas,
    canvasSize.x,
    canvasSize.y,
    canvasSize.w,
    canvasSize.h
  );

}

function drawFloor(image){ // <--optional: Depending on what works best with code
  ctx.drawImage(image, canvasSize.x, canvasSize.y, canvasSize.w, canvasSize.h)
} // ^Combines these functions in one 
// function drawColCanvas() {
//   ctx.drawImage(colCanvas, canvasSize.x, canvasSize.y, canvasSize.w, canvasSize.h)
// }
// function drawMontCanvas() {
//   ctx.drawImage(montCanvas, canvasSize.x, canvasSize.y, canvasSize.w, canvasSize.h)
// }
// function drawGrceCanvas() {
//   ctx.drawImage(grceCanvas, canvasSize.x, canvasSize.y, canvasSize.w, canvasSize.h)
// }
// function drawMetalFloor() {
//   ctx.drawImage(metalFloorCanvas, canvasSize.x, canvasSize.y, canvasSize.w, canvasSize.h)
// }

function drawTree() {
  ctx.drawImage(treeImg, 320, 200, 70, 90);
}
function drawMountain() {
  ctx.drawImage(mountainImg, 320, 300, 70, 90);
}
function drawRocks() {
  ctx.drawImage(rockImg, 320, 30, 70, 90);
}
let winImage = new Image();
winImage.src = '/images/Juan.jpg'
let stefan = new Image();
stefan.src = '/images/stefan.jpeg'
let niko = new Image();
niko.src = '/images/Niko.png'

function winningShade() {
  ctx.drawImage(win.image, win.x, win.y, win.w, win.h);
}

/* END HUGO CODE */

let player = {
  //This is your player object
  sx: 0,
  sy: 704,
  sw: 64,
  sh: 64,
  x: 0,
  y: 0,
  w: 64,
  h: 64,
  image: img,
};

function faceDirection(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(
    img,
    frameX,
    frameY,
    player.sw,
    player.sh,
    canvasX,
    canvasY,
    player.sw,
    player.sh
  );
  player.sx = frameX;
  player.sy = frameY;
  player.x = canvasX;
  player.y = canvasY;
}

function drawPlayer() {
  
  ctx.drawImage(
    img,
    player.sx,
    player.sy,
    player.sw,
    player.sh,
    player.x,
    player.y,
    player.w,
    player.h
  );
}
function step(dir) {
  switch (dir) {
    case 'up':
      if (player.sx >= 512) {
        player.sx = 0;
      }
      faceDirection((player.sx += 64), 512, player.x, player.y);
      break;
    case 'down':
      if (player.sx >= 512) {
        player.sx = 0;
      }
      faceDirection((player.sx += 64), 640, player.x, player.y);
      break;
    case 'left':
      if (player.sx >= 512) {
        player.sx = 0;
      }
      faceDirection((player.sx += 64), 576, player.x, player.y);
      break;
    case 'right':
      if (player.sx >= 512) {
        player.sx = 0;
      }
      faceDirection((player.sx += 64), 704, player.x, player.y);
      break;
    default:
      break;
  }
}
var object = {
  x: Math.floor(Math.random() * 550 + 50),
  y: Math.floor(Math.random() * 200 + 50),
  w: 30,
  h: 100,
};
let obstacle = [];
let virus = [];
var win = {
  image: winImage,
  x: 655,
  y: Math.floor(Math.random() * 400 + 50),
  w: 50,
  h: 50,
  type: 'win',
};

function createObstacles() {
  for (i = 0; i < 3; i++) {
    let obs = {
      image: obstacleImage,
      x: 70 + Math.floor(Math.random() * 125) + 200 * i,
      y: Math.floor(Math.random() * 50 + 250 * (i % 2)),
      w: 30,
      h: 200,
    };
    obstacle.push(obs);
  }
}
function createVirus() {
  for (i = 0; i < 3; i++) {
    let obs = {
      image: covidImage,
      x: 70 + Math.floor(Math.random() * 125) + 200 * i,
      y: Math.floor(Math.random() * 50 + 250 * (i % 2)),
      w: 50,
      h: 50,
    };
    virus.push(obs);
  }
}
function deleteObstacle(index) {
  obstacle.splice(index, 1);
}
function deleteVirus(index) {
  virus.splice(index, 1);
}
function drawObstacles(obj) {
  //ctx.fillStyle = 'red';
  //ctx.fillRect(obj.x, obj.y, obj.w, obj.h);
  //console.log(obj)
  ctx.drawImage(obj.image, obj.x, obj.y, obj.w, obj.h)
}
function drawVirusObs(obj) {
  //ctx.fillStyle = 'blue';
  //ctx.fillRect(obj.x, obj.y, obj.w, obj.h)
  ctx.drawImage(obj.image, obj.x, obj.y, obj.w, obj.h)
}

function lightsOff() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 700, 500);
}
function drawCanvas() {
  // ctx.fillStyle = 'green';
  // ctx.fillRect(0, 0, 700, 500);
  ctx.drawImage(canvasBack.image,canvasBack.x,canvasBack.y,canvasBack.w,canvasBack.h)
}
function drawVirus(i) {
  // ctx.fillStyle = 'rgba(255,0,0,.25)';
  // ctx.fillRect(0, 0, -25 + i, 500);
  ctx.drawImage(fog.image, fog.x, fog.y, fog.w, fog.h)
  fog.w=i-25 
}

function detectMove(move) {
  if (move) {
    switch (direction) {
      case 'left':
        stepMusic.play();
        if (player.x <= 0) {
          console.log('Border');
        } else {
          player.x -= 5;
        }
        break;
      case 'right':
        stepMusic.play();
        if (player.x >= 636) {
          console.log('Border');
        } else {
          player.x += 5;
        }
        break;
      case 'up':
        stepMusic.play();
        if (player.y <= 0) {
          console.log('Border');
        } else {
          player.y -= 5;
        }
        break;
      case 'down':
        stepMusic.play()
        if(level === 2)
        {
          if (player.y >= 336) {
            console.log('Border');
          } else {
            player.y += 5;
          }
        }
        else{
          if (player.y >= 436) {
            console.log('Border');
          } else {
            player.y += 5;
          }
        }
        break;
    }
    step(direction);
  }
}
document.body.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38:
      direction = 'up';
      break;
    case 40:
      direction = 'down';
      break;
    case 37:
      // left
      direction = 'left';
      break;
    case 39:
      //right
      direction = 'right';
      break;
    default:
      break;
  }
};
function detectCollision(obs) {
  // obs.map((obj) => {
  var a = { x: obs.x, y: obs.y, width: obs.w, height: obs.h }; //Our obstacles
  var b = { x: player.x+20, y: player.y+15, width: player.w-40, height: player.h-15 }; //Our player
  if (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  ) {
    // collision detected!
    switch (direction) {
      case 'left':
        if (player.x <= 0) {
          console.log('Border');
        } else {
          player.x += 5;
        }
        break;
      case 'right':
        if (player.x >= 636) {
          console.log('Border');
        } else {
          player.x -= 5;
        }
        break;
      case 'up':
        if (player.y <= 0) {
          console.log('Border');
        } else {
          player.y += 5;
        }
        break;
      case 'down':
        if (player.y >= 436) {
          console.log('Border');
        } else {
          player.y -= 5;
        }
        break;
    }
  }
  
}

function detectVirusObsCollision (obs,index) {
  var a = { x: obs.x, y: obs.y, width: obs.w, height: obs.h }; //Our obstacles
  var b = { x: player.x+20, y: player.y+15, width: player.w-40, height: player.h-15 }; //Our player
  if (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  ) {
    // collision detected!
    lives--;
    tracker()
    virus.splice(index, 1);
  }
}
function detectVirusCollision() {
  var a = { x: 0, y: 0, width: -25 + virusCount, height: 500 }; //Our virus
  var b = { x: player.x+20, y: player.y+15, width: player.w-40, height: player.h-15 }; //Our player
  if (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  ) {
    // collision detected!
    contamination+=level;
    
    gameTracker.hp = 100 - Math.floor(contamination/4)
    if (contamination >= 400) {
      gameTracker.hp = 100
      lives--;
      contamination = 0;

    }
    tracker()
  }
}
function detectWin() {
  var a = { x: 699, y: win.y + 25, width: 1, height: 1 }; //Our obstacles
  var b = { x: player.x, y: player.y, width: player.w, height: player.h }; //Our car
  if (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  ) {
    // collision detected!
    playingMusic.pause();
    successMusic.play();
    gameTracker.level++;
    newLevel = true;
    win.w = 0;
    win.h = 0;
    setInterval(() => {
      playingMusic.play();
    }, 1700);
  }
}
function drawLives() {
  ctx.fillStyle = 'white';
  ctx.font = '20px serif';
  ctx.fillText(lives.toString(), player.x + 17, player.y);
}

function drawName() {
  ctx.fillStyle = 'white';
  ctx.font = '14px serif';
  ctx.fillText((gameTracker.name).toString(), player.x+3, player.y-15);
}

function drawContamination() {
  ctx.fillStyle = 'red';
  ctx.fillRect(player.x+10, player.y - 10, 40, 10);
  ctx.fillStyle = 'green';
  ctx.fillRect(player.x+10, player.y - 10, 40 - 40 * (contamination / 400), 10);
}
function startGame() {
  if (level === 5)
    {
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, 700, 500);
      ctx.fillStyle = 'white';
      ctx.font = '50px serif';
      ctx.fillText('You Win!', 250, 245);
      finalLevel.pause();
      gameWin.play()
    }
  else if (lives <= 0) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, 700, 500);
    ctx.fillStyle = 'white';
    ctx.font = '50px serif';
    ctx.fillText('Game Over', 250, 245);
    playingMusic.pause();
    gameOver.play();
  }
  else{
    if(levelLoadScreen <= 800)
    {
      ctx.clearRect(0,0,700,500)
      levelLoadScreen++
      ctx.drawImage(levelLoadImg,0,120,700,380)
      ctx.fillStyle = "lightgreen"
      ctx.font = '20px serif'
      ctx.fillText(levelLoadText,60,35, 600)
      ctx.fillText(levelLoadText2,60,70, 600)
      ctx.fillText(levelLoadText3,60,105, 600)
    }
    else 
    {
      ctx.clearRect(0, 0, 700, 500);
      
      tracker();

      stepMusic.pause();

      drawCanvas();

      drawVirus(virusCount);

      for (i = 0; i < obstacle.length; i++) {
        drawObstacles(obstacle[i]);
      }

      for (j = 0; j < virus.length; j++) {
        if(level === 4)
        {
          virus[j].x -= .05
          virus[j].y -= .05
          virus[j].w += .1
          virus[j].h += .1
        }
        drawVirusObs(virus[j]);
      }
      winningShade();
      step();
      if (level === 1)
      {
        detectWin();
        detectMove(canMove);
        detectVirusCollision();
        for (i = 0; i < obstacle.length; i++) {
          detectCollision(obstacle[i]);
        }
      }
      else 
      {
        if (lightCounter % lightTime === lightTime - 1) {
          lightSwitch = !lightSwitch;
        }
        if (lightSwitch) {
          lightsOff();
          lightTime = 500;
          detectWin();
          detectMove(canMove);
          detectVirusCollision();
          for (i = 0; i < obstacle.length; i++) {
            detectCollision(obstacle[i]);
          }
          for (j = 0; j < virus.length; j++) {
            detectVirusObsCollision(virus[j],j);
          }
        } else {
          lightTime = 100;
        }
      }
      
      direction = '';
      virusCount+= virusSpeed
      lightCounter++;
      // drawCar();
      drawPlayer();
      drawName();
      // drawLives();
      drawContamination();
      if (newLevel) {
        virusCount = 0;
        lightSwitch = false;
        lightCounter = 0;
        //clear obstacle array
        for (i = 0; obstacle.length > 0;) {
          deleteObstacle(i);
        }
        for (j = 0; virus.length > 0;) {
          deleteVirus(j);
        }
        canMove = false;
        if(stage === 5)
          {
            levelLoadScreen = 0
            stage = 0
            level++
            player.x = 0
            player.y = 0
          }
        if (player.x > 0) {
          player.x -= 10;
        } else {
          //create new obstacle array
          createObstacles();
          canMove = true;
          newLevel = false;
          win.y = Math.floor(Math.random() * 300 + 50);
          win.h = 50;
          win.w = 50;
          lightCounter = 0;
          stage++
          gameTracker.level = stage
          tracker()
          switch(level)
          {
            case 1:
              canvasBack.image.src = './images/mat to colombia.jpg'
              obstacleImage.src = './images/log.png'
              break;
            case 2:
              gameTracker.cFlag = './images/montenegro-country-flag.png'
              gameTracker.country = 'Montenegro'
              tracker()
              canvasBack.image.src = './images/map to montenegro.jpg'
              obstacleImage.src = './images/log.png'
              levelLoadText = "                      GREAT! NEXT STOP IS MONTENGERO"
              levelLoadText2 = "           THERE YOU WILL FIND MAD SCIENTIST STEFAN"
              levelLoadText3 = "MANDOTORY QUARANTINE: YOU CAN ONLY TRAVEL AT NIGHT... "
              levelLoadImg.src = '/images/coronabeer2.jpg'
              winImage.src = './images/stefan.jpeg'
              break;
            case 3:
              gameTracker.cFlag = './images/greece-country-flag.png'
              gameTracker.country = 'Greece'
              tracker()
              canvasBack.image.src = './images/map to greece.jpg'
              obstacleImage.src = './images/greekcolumn.png'
              levelLoadText = "            AWESOME! NOW YOU HAVE TO TRAVEL TO GREECE"
              levelLoadText2 = "            THERE YOU WILL FIND NIKO TIKO THE PHYSICIAN"
              levelLoadText3 = "                                WATCH OUT FOR THE VIRUS!"
              levelLoadImg.src = '/images/coronabeer3.jpg'
              winImage.src = './images/niko.png'
              createVirus();
              break;
            case 4:
              playingMusic.pause()
              finalLevel.play()
              gameTracker.cFlag = './images/ironhack.svg'
              gameTracker.country = 'Ironlab'
              tracker()
              canvasBack.image.src = './images/metalfloor.png'
              obstacleImage.src = './images/metal pipe.png'
              levelLoadText =  "                     YOU'VE COLLECTED ALL THE FORMULAS!"
              levelLoadText2 = "         NOW ALL THAT'S LEFT IS TO BRING THE DATA BACK TO THE IRONLAB"
              levelLoadText3 = "                       BE CAREFUL! THE VIRUS IS GROWING!!"
              levelLoadImg.src = '/images/coronabeer4.jpg'
              winImage.src = './images/IronLab.jpg'
              createVirus();
              break;
            default:
              break;
          }
        }
      }
      
      
    }
  }
  animateId = window.requestAnimationFrame(startGame); //Game rendering -infinite loop that goes super fast
}
