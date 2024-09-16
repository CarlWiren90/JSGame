'use strict';
import { gameArea } from './main.js';
import clearCanvas from './main.js';
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
        }
    }
 
    updateShotPosition() { 
        for (let i = 0; i < this.shots.length; i++) {
            if (this.shots[i].isActiveShot) {
                // Scale by shot speed to get movement per frame
                let moveX = this.shots[i].directionX * this.shots[i].shotSpeed;
                let moveY = this.shots[i].directionY * this.shots[i].shotSpeed;
        
                // Update the shot's position
                this.shots[i].startX += moveX;
                this.shots[i].startY += moveY;  
            
                //Round float before render
                let renderX = Math.round(this.shots[i].startX);
                let renderY = Math.round(this.shots[i].startY);
/*                 console.log(renderY);
 */                
                this.shots[i].shotCollision(renderX, renderY);

                ctx.fillStyle = 'green';          
                ctx.fillRect(renderX, renderY, 5, 5);   
                }                
            }
        }     
    }


class Shot {
    constructor(startX, startY, endX, endY, isActiveShot) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
        this.isActiveShot = isActiveShot;
        this.shotSpeed = 25;
        this.directionX = 0;
        this.directionY = 0;
        this.shotCollided = false;
    }

    calculateShot() {
        let deltaX = this.endX - this.startX;
        let deltaY = this.endY - this.startY;

        let distance = Math.sqrt(deltaX**2 + deltaY**2);
    
        this.directionX = deltaX / distance;
        this.directionY = deltaY / distance;
    }

    shotCollision(renderX, renderY) {
        if (renderX >= gameArea.width || renderY >= gameArea.height || renderX === 0 || renderY === 0) {
            this.isActiveShot = false;
            console.log(this.isActiveShot)
 
        }
    }
}

export default Character;
