'use strict';
import { gameArea } from './main.js';
import { keyState } from './globalState.js';
import { mouseState } from './globalState.js';
import { ctx } from './main.js';


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
/*     this.ctx = gameArea.getContext('2d');
 */    this.shotStartX = 0;
    this.shotStartY = 0;
    this.shotPathY = 0;
    this.shotPathX = 0;
    this.shots = [];
    this.shotCounter = 0;

    }
    sayHello() {
        console.log(`I'm named ${this.name}. I'm a ${this.race} using a ${this.weapon}`);
    }

    drawCharacter() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.locationX, this.locationY, this.characterWidth, this.characterHeight);
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
            let shot = new Shot(this.locationX, this.locationY, true);
            this.shots.push(shot);
            this.shotCounter++;
            keyState.canShoot = false;
            console.log('shot fired!');
            console.log(`shot fired from ${this.locationX} and ${this.locationY} towards coordinates: ${mouseState.mouseX} and ${mouseState.mouseY}`);
            
            setTimeout(() => {
                keyState.canShoot = true;
            },250);
       }   
    }

    reload() {
        if (keyState.isReloading) {
            this.shotCounter = 0;
            keyState.isReloading = false;
        }
    }
 
    updateShotPosition() {  
        for (let i = 0; i < this.shots.length; i++) {
            if (this.shots[i].isActiveShot) {
                this.shots[i].y -= 25;     
                ctx.fillStyle = 'green';
                ctx.fillRect(this.shots[i].x + 20, this.shots[i].y - 10, 5, 20);
            }
        }
    }
}

class Shot {
    constructor(startX, startY, isActiveShot) {
        this.x = startX;
        this.y = startY;
        this.isActiveShot = isActiveShot;
    }
}

export default Character;
