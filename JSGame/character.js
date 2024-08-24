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
    this.shotPathY = 0;
    this.shotPathX = 0;

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
        if (keyState.shotFired) {
            this.shotPathX = this.locationX;
            this.shotPathY = this.locationY;
                keyState.isActiveShot = true;
        }   
    }
 
    updateShotPosition() {
    if (keyState.isActiveShot && this.shotPathY > 0) {            
        this.shotPathY -= 25;
             this.ctx.fillStyle = 'green';
                this.ctx.fillRect(this.shotPathX + 20, this.shotPathY - 10, 5, 20);
   /*           console.log(this.shotPathX);
                console.log(this.shotPathY); */
        }
    }
}

export default Character;
