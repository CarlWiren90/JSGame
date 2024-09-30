'use strict';
import "./style.css";
import { keyState } from "./globalState.js";
import Character from "./character.js";
import Shot from './shot.js'
import renderUI, { renderWeaponBullets, renderPlayerLives, renderActiveWeapon } from "./playerUI.js";
import { checkIfAlive } from "./collisions.js";
import { weaponGlock44, weaponAK47 } from "../weapons.js";

//Render UI
renderUI();

//Render game Area
const gameArea = document.createElement("canvas");
gameArea.id = 'gameArea';
gameArea.height = 900;
gameArea.width = 900;
game.appendChild(gameArea);
const ctx = gameArea.getContext('2d');


//Directions
let keyDown;
let keyUp;

let isActiveGame = true;

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


//create weapons
const glock44 = new weaponGlock44();
const ak47 = new weaponAK47();

//Created characters
const player1 = new Character(true, 'Calle', 'Space Marine', 20, 800);
const player2 = new Character(false, 'Rasmus', 'German', 825, 50);




const GameLoop = () => {
    clearCanvas();
    player1.playerMove();
    player1.playerShoot();
    player1.reload();
    Shot.updateShotPosition();
    player1.drawCharacter();
/*      player1.drawHitBox();
 /*  player2.playerMove();
        player2.playerShoot();
        player2.reload(); */
    player2.drawCharacter();
    requestAnimationFrame(GameLoop);
}

renderWeaponBullets();
renderActiveWeapon();
renderPlayerLives();
GameLoop();


export { gameArea };
export { ctx }; 
export default clearCanvas;
export {player1};
export {player2};
export {glock44};

