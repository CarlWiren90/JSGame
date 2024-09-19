'use strict';
import "./style.css";
import { keyState } from "./globalState.js";
import Character from "./character.js";
import Shot from './shot.js'

//Game Area
const gameArea = document.createElement("canvas");
gameArea.id = 'gameArea';
gameArea.height = 900;
gameArea.width = 900;
game.appendChild(gameArea);
const ctx = gameArea.getContext('2d');


//Directions
let keyDown;
let keyUp;

const clearCanvas = () => {
    ctx.clearRect(0,0, 1000, 1000);
}
//Eventlisteners for keydown movement
keyDown = document.addEventListener("keydown", (e) => {
    if (e.key === 'w') {
        keyState.wPressed = true;
    }
    if (e.key === 's') {
        keyState.sPressed = true;
    }
    if (e.key === 'a') {
        keyState.aPressed = true;
    }
    if (e.key === 'd') {
        keyState.dPressed = true;
    }
    if (e.key === ' ') {
        keyState.shotFired = true;
    }
    if (e.key === 'r') {
        setTimeout(() => {
            keyState.isReloading = true;
        }, 500);
    }
});  


keyUp = document.addEventListener("keyup", (e) => {
    if (e.key === 'w') {
        keyState.wPressed = false;
    }
    if (e.key === 's') {
        keyState.sPressed = false;
    }
    if (e.key === 'a') {
        keyState.aPressed = false;
    }
    if (e.key === 'd') {
        keyState.dPressed = false;
    }
    if (e.key === ' ') {
        keyState.shotFired = false;
    }
});


//Created character
const player1 = new Character('Calle', 'Space Marine', 'M1 Garand');
player1.sayHello();



const GameLoop = () => {
    clearCanvas();
    player1.playerMove();
    player1.playerShoot();
    player1.reload();
    Shot.updateShotPosition();
    player1.drawCharacter();
    requestAnimationFrame(GameLoop);
}

GameLoop();

export { gameArea };
export { ctx }; 
export default clearCanvas;
export {player1};


