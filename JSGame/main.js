'use strict';
import "./style.css";
import Character from './character.js';
import { keyState } from "./globalState.js";

//Game Area
const gameArea = document.createElement("canvas");
gameArea.id = 'gameArea';
gameArea.height = 900;
gameArea.width = 900;
document.body.appendChild(gameArea);

//Directions
let keyDown;
let keyUp;

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
        console.log('pew pew');

    }
    console.log(`${e.key} down`)
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
    console.log(`${e.key} up`)
});


//Created character
const player1 = new Character('Calle', 'Space Marine', 'M1 Garand');
player1.sayHello();



const GameLoop = () => {
    player1.clearCanvas();
    player1.playerMove();
    player1.playerShoot();
    player1.updateShotPosition();
    player1.drawCharacter();
    requestAnimationFrame(GameLoop);
}

GameLoop();

export { gameArea };




