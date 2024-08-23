'use strict';
import { gameArea } from './main.js';
import { keyState } from './globalState.js';

class Character {
    constructor (name, race, weapon) {
    this.name = name;
    this.race = race;
    this.weapon = weapon;
    this.locationX = 20;
    this.locationY = 800;
    this.characterWidth = 40;
    this.characterHeight = 40;
    this.color = "red";
    this.ctx = gameArea.getContext('2d');
    

    }
    sayHello() {
        console.log(`I'm named ${this.name}. I'm a ${this.race} using a ${this.weapon}`);
    }

    drawCharacter() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.locationX, this.locationY, this.characterWidth, this.characterHeight);
    }

    clearCanvas() {
        this.ctx.clearRect(0,0, 1000, 1000);
    }

    playerMove() {
        if (keyState.wPressed && this.locationY > 0) {
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
        if (keyState.isShooting) {
            this.ctx.fillStyle = 'green';
            for (let i = this.locationY ; i < gameArea.height ; i ++) {
                this.ctx.fillRect(this.locationX + 20, i , 5, 5);
            }

        }
        
    }
}

export default Character;
