'use strict';
import { gameArea } from './main.js';
import { keyState } from './globalState.js';
import { mouseState } from './globalState.js';
import { ctx } from './main.js';
import './character.css';
import Shot from './shot.js';


class Character {
    constructor (name, race, weapon) {
    this.name = name;
    this.race = race;
    this.weapon = weapon;
    this.locationX = 20;
    this.locationY = 800;
    this.characterWidth = 70;
    this.characterHeight = 70;
    this.color = "red";
    this.shotCounter = 0;
    this.shots = []

    

    }
    sayHello() {
        console.log(`I'm named ${this.name}. I'm a ${this.race} using a ${this.weapon}`);
    }

    drawCharacter() {
        let playerIcon = new Image();
        playerIcon.src = "./player1.png";
        ctx.drawImage(playerIcon, this.locationX, this.locationY, this.characterWidth, this.characterHeight);
    }

    createPlayerIcon() {
        let playerIcon = document.createElement("img");
        playerIcon.id = 'playerIcon';
        game.appendChild(playerIcon);
    }

    playerMove() {
        if (keyState.wPressed && this.locationY > 1) {
            this.locationY -= 7;
        }
        if (keyState.sPressed && this.locationY + this.characterHeight < gameArea.height) {
            this.locationY += 7;
        }
        if (keyState.aPressed && this.locationX > 0 ) {
            this.locationX -= 7;
        }
        if (keyState.dPressed && this.locationX + this.characterWidth < gameArea.width) {
            this.locationX += 7;   
        }
    }

    playerShoot() {
          if (keyState.shotFired && keyState.canShoot && this.shotCounter < 10) {
            let shot = new Shot(this.locationX, this.locationY, mouseState.mouseX, mouseState.mouseY, true);
            shot.calculateShot();
            this.shots.push(shot);
            this.shotCounter++;
            keyState.canShoot = false;
            console.log(`shot fired from ${this.locationX} and ${this.locationY} towards coordinates: ${mouseState.mouseX} and ${mouseState.mouseY}`);
            console.log(this.shots)

            setTimeout(() => {
                keyState.canShoot = true;
            },250);
        }   
    }

    reload() {
        if (keyState.isReloading) {
            this.shotCounter = 0;
            keyState.isReloading = false;
            this.shots = [];
            Shot.i = 0;
        }
    }
}

export default Character;
