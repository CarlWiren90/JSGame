'use strict';
import "./style.css";
import Character from "./Character/character.js";
import Shot from './Shot Logic/shot.js'
import renderUIPlayer1, { renderWeaponBullets, renderPlayerLives, renderActiveWeapon } from "./Player UI/playerUIPlayer1.js";
import { weaponGlock44, weaponAK47 } from "./Weapons/weapons.js";
import renderUIPlayer2, { renderWeaponBulletsPlayer2, renderPlayerLivesPlayer2, renderActiveWeaponPlayer2 } from "./Player UI/playerUIPlayer2.js";
import { RenderMap } from "./Maps/maps.js";

//Render UI
renderUIPlayer1();
renderUIPlayer2();

//Render game Area (Player 1)
const gameArea = document.createElement("canvas");
gameArea.id = 'gameArea';
gameArea.height = 900;
gameArea.width = 900;
game.appendChild(gameArea);
const ctx = gameArea.getContext('2d');

const mapArea = document.createElement("canvas");
mapArea.id = "mapArea";
mapArea.height = 900;
mapArea.width = 900;
game.appendChild(mapArea);
const ctxMap = mapArea.getContext('2d');


//Render game Area (Player2)
/* const gameAreaPlayer2 = document.createElement("canvas");
gameAreaPlayer2.id = 'gameAreaPlayer2';
gameAreaPlayer2.height = 900;
gameAreaPlayer2.width = 900;
game.appendChild(gameAreaPlayer2);
const ctxPlayer2 = gameAreaPlayer2.getContext('2d');
 */
//Directions
let keyDown;
let keyUp;

let isActiveGame = true;

const clearCanvas = () => {
    ctx.clearRect(0,0, 1000, 1000);
}
//Eventlisteners for keydown movement
keyDown = document.addEventListener("keydown", (e) => {
    if (e.key === 'w' || e.key === 'W'  ) {
        player1.keyState.wPressed = true;
        player2.keyState.wPressed = true;
    }
    if (e.key === 's' || e.key === 'S') {
        player1.keyState.sPressed = true;
        player2.keyState.sPressed = true;
    }
    if (e.key === 'a' || e.key === 'A') {
        player1.keyState.aPressed = true;
        player2.keyState.aPressed = true;
    }
    if (e.key === 'd' || e.key === 'D') {
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
    if (e.key === 'w' || e.key === 'W') {
        player1.keyState.wPressed = false;
        player2.keyState.wPressed = false;
    }
    if (e.key === 's' || e.key === 'S') {
        player1.keyState.sPressed = false;
        player2.keyState.sPressed = false;
    }
    if (e.key === 'a' || e.key === 'A') {
        player1.keyState.aPressed = false;
        player2.keyState.aPressed = false;
    }
    if (e.key === 'd' || e.key === 'D') {
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
    player2.mouseState.mouseX = e.offsetX;
    player2.mouseState.mouseY = e.offsetY;
});


const GameLoop = () => {
    clearCanvas();
/*     player1.playerMove();
    player1.playerShoot();
    player1.reload(); */
    Shot.updateShotPositionPlayer1();
    Shot.updateShotPositionPlayer2();
    player1.drawCharacter();
    player2.playerMove();
    player2.playerShoot();
    player2.reload();
    player2.drawCharacter();
    requestAnimationFrame(GameLoop);
}

//First UI render for Player 1 at entry
renderWeaponBullets();
renderActiveWeapon();
renderPlayerLives();

//First UI render for Player 2 at entry
renderWeaponBulletsPlayer2();
renderActiveWeaponPlayer2();
renderPlayerLivesPlayer2();


//Renders chosen map
RenderMap();

//Starts gameloop
GameLoop();







export { gameArea};
export { ctx, ctxMap}; 
export default clearCanvas;
export {player1};
export {player2};
export {glock44};

