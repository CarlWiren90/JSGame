'use strict';
import "./style.css";
/* import { keyStatePlayer1, keyStatePlayer2 } from "./State/globalState.js";
 */import Character from "./character.js";
import Shot from './shot.js'
import renderUIPlayer1, { renderWeaponBullets, renderPlayerLives, renderActiveWeapon } from "./Player UI/playerUIPlayer1.js";
import { checkIfAlive } from "./Collisions/collisions.js";
import { weaponGlock44, weaponAK47 } from "./Weapons/weapons.js";

//Render UI
renderUIPlayer1();

//Render game Area (Player 1)
const gameArea = document.createElement("canvas");
gameArea.id = 'gameArea';
gameArea.height = 900;
gameArea.width = 900;
game.appendChild(gameArea);
const ctx = gameArea.getContext('2d');


//Render game Area (Player2)
const gameAreaPlayer2 = document.createElement("canvas");
gameAreaPlayer2.id = 'gameAreaPlayer2';
gameAreaPlayer2.height = 900;
gameAreaPlayer2.width = 900;
game.appendChild(gameAreaPlayer2);
const ctxPlayer2 = gameAreaPlayer2.getContext('2d');

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
        player1.keyState.wPressed = true;
        player2.keyState.wPressed = true;
    }
    if (e.key === 's') {
        player1.keyState.sPressed = true;
        player2.keyState.sPressed = true;
    }
    if (e.key === 'a') {
        player1.keyState.aPressed = true;
        player2.keyState.aPressed = true;
    }
    if (e.key === 'd') {
        player1.keyState.dPressed = true;
        player2.keyState.dPressed = true;
    }
    if (e.key === ' ') {
        player1.keyState.shotFired = true;
        player2.keyState.shotFired = true;
    }
    if (e.key === 'r') {
        setTimeout(() => {
            player1.keyState.isReloading = true;
            player2.keyState.isReloading = true;
        }, 500);
    }
});  


keyUp = document.addEventListener("keyup", (e) => {
    if (e.key === 'w') {
        player1.keyState.wPressed = false;
        player2.keyState.wPressed = false;
    }
    if (e.key === 's') {
        player1.keyState.sPressed = false;
        player2.keyState.sPressed = false;
    }
    if (e.key === 'a') {
        player1.keyState.aPressed = false;
        player2.keyState.aPressed = false;
    }
    if (e.key === 'd') {
        player1.keyState.dPressed = false;
        player2.keyState.dPressed = false;
    }
    if (e.key === ' ') {
       player1.keyState.shotFired = false;
       player2.keyState.shotFired = false;
    }
});


//create weapons
const glock44 = new weaponGlock44();
const ak47 = new weaponAK47();

//Created characters
const player1 = new Character(true, 'Calle', 'Space Marine', 20, 800);
const player2 = new Character(false, 'Rasmus', 'German', 825, 50);

gameArea.addEventListener('mousemove', (e) => {
    // Update player1's mouse state with the current mouse position
    player1.mouseState.mouseX = e.offsetX;
    player1.mouseState.mouseY = e.offsetY;
});


const GameLoop = () => {
    clearCanvas();
    player1.playerMove();
    player1.playerShoot();
    player1.reload();
    Shot.updateShotPosition();
    player1.drawCharacter();
    /* player2.playerMove(); */
    player2.playerShoot();
    player2.reload();
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

