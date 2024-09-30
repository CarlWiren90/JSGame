'use strict';
import { gameArea } from './main.js';
import { keyState, mouseState, player1CurrentLocation  } from './globalState.js';
import { ctx } from './main.js';
import './character.css';
import Shot from './shot.js';
import renderUI, { renderWeaponBullets, showReloadingUI } from './playerUI.js';
import { player1 } from './main.js';


class Character {
    constructor (player1, name, race, weapon, startLocationX, startLocationY) {
    this.player1 = player1;
    this.name = name;
    this.race = race;
    this.weapon = weapon;
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

    }
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
        if (keyState.wPressed && this.locationY > 1) {
            this.locationY -= 5;
        }
        if (keyState.sPressed && this.locationY + this.characterHeight < gameArea.height) {
            this.locationY += 5;
        }
        if (keyState.aPressed && this.locationX > 0 ) {
            this.locationX -= 5;
        }
        if (keyState.dPressed && this.locationX + this.characterWidth < gameArea.width) {
            this.locationX += 5;   
        }
    }

    playerShoot() {
          if (keyState.shotFired && keyState.canShoot && this.shotCounter > 0) {
            let shot = new Shot(this.locationX, this.locationY, mouseState.mouseX, mouseState.mouseY, true);
            shot.calculateShot();
            this.shots.push(shot);
            this.shotCounter--;
            keyState.canShoot = false;
            renderWeaponBullets();
            setTimeout(() => {
                keyState.canShoot = true;
            },500);
        }   
    }

    reload() {
        if (keyState.isReloading) {
            showReloadingUI();
            this.shotCounter = 30;
      
            this.shots = [];
            Shot.i = 0;
            console.log('Reloaded!');
            renderWeaponBullets();

            setTimeout(() => {
                keyState.isReloading = false;      
            }, 1000);
        }
    }

    currentPlayer1Position() {
        player1CurrentLocation.currentLocationY = this.locationY;
        player1CurrentLocation.currentLocationX = this.locationX;
    }
}

export default Character;
