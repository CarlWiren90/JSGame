'use strict';
import { gameArea } from './main.js';
/* import { keyStatePlayer1, mouseStatePlayer1, player1CurrentLocation  } from './State/globalState.js';
 */import { ctx } from './main.js';
import './character.css';
import Shot from './shot.js';
import renderUIPlayer1, { renderWeaponBullets, showReloadingUI } from './Player UI/playerUIPlayer1.js';
import { player1 } from './main.js';
import {glock44} from './main.js';


class Character {
    constructor (player1, name, race, startLocationX, startLocationY) {
    this.player1 = player1;
    this.name = name;
    this.race = race;
    this.locationX = startLocationX;
    this.locationY = startLocationY;
    this.characterWidth = 70;
    this.characterHeight = 70;
    this.color = "red";
    this.shotCounter = 30;
    this.shots = []
    this.playerLives = 3;
    this.hitboxWidth = 30;
    this.hitboxHeight = 60;

    //Active weapons
    this.isGlock22Active = true;
    }

    keyState = {
        wPressed: false,
        sPressed: false,
        aPressed: false,
        dPressed: false,
        shotFired: false,
        isReloading: false,
        canShoot: true,
        canReload: true,
    };

    mouseState = {
        mouseY: 0,
        mouseX: 0,
    };

    player1CurrentLocation =  {
        currentLocationY: 0,
        currentLocationX: 0,
    };
 
    sayHello() {
        console.log(`I'm named ${this.name}. I'm a ${this.race} using a ${this.weapon}`);
    }

    drawCharacter() {
        let playerIcon = new Image();
        if (this.player1) {
            playerIcon.src = "./player1.png";
        }
        else {
            playerIcon.src = "./player2.png";
        }
        ctx.drawImage(playerIcon, this.locationX, this.locationY, this.characterWidth, this.characterHeight);
    }

    drawHitBox() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.locationX + 15, this.locationY + 5, this.hitboxWidth, this.hitboxHeight);
    }

    createPlayerIcon() {
        let playerIcon = document.createElement("img");
        playerIcon.id = 'playerIcon';
        game.appendChild(playerIcon);
    }

    playerMove() {
        if (this.keyState.wPressed && this.locationY > 1) {
            this.locationY -= 5;
        }
        if (this.keyState.sPressed && this.locationY + this.characterHeight < gameArea.height) {
            this.locationY += 5;
        }
        if (this.keyState.aPressed && this.locationX > 0 ) {
            this.locationX -= 5;
        }
        if (this.keyState.dPressed && this.locationX + this.characterWidth < gameArea.width) {
            this.locationX += 5;   
        }
    }

    playerShoot() {
        if (player1) {
            if (this.keyState.shotFired && this.keyState.canShoot && this.shotCounter > 0) {
                if (this.isGlock22Active) {
                    glock44.shootGlock44(player1);
                }
                renderWeaponBullets();
            }   
        }

    }

    reload() {
        if (this.keyState.isReloading) {
            if (this.isGlock22Active) {
                showReloadingUI();
                glock44.currentAmmo = glock44.maxAmmo;
                this.shots = [];
                Shot.i = 0;
                console.log('Reloaded!');
                renderWeaponBullets();
            }
            
            setTimeout(() => {
                this.keyState.isReloading = false;      
            }, 1000);
        }
    }
}

export default Character;
