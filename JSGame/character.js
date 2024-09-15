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
    this.shotSpeed = 25;
    

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
                // Current position of the shot
                let startX = this.shots[i].startX;
                let startY = this.shots[i].startY;
      
                // Target position (assuming you have endX and endY as the target coordinates)
                let endX = this.shots[i].endX;
                let endY = this.shots[i].endY;

                // Calculate delta (difference between current position and target)
                let deltaX = endX - startX;
                let deltaY = endY - startY;

                // Calculate the distance to the target
                let distance = Math.sqrt(deltaX**2 + deltaY**2);

                // Normalize the direction vector
                let directionX = deltaX / distance;
                let directionY = deltaY / distance;

                // Scale by shot speed to get movement per frame
                let moveX = directionX * this.shotSpeed;
                let moveY = directionY * this.shotSpeed;


            // Check if the next movement would overshoot the target
            if (distance <= this.shotSpeed) {
                // Snap to the target to prevent overshooting
                this.shots[i].startX = endX;
                this.shots[i].startY = endY;
            } else {
                // Update the shot's position
                this.shots[i].startX += moveX;
                this.shots[i].startY += moveY;  
            }
            
                //Render
                let renderX = Math.round(this.shots[i].startX);
                let renderY = Math.round(this.shots[i].startY);

           /*      if (renderX === endX) {
                    this.shots[i].isActiveShot = false;
                }
                else {  */    
                    //Paints new shot at new positon
                    ctx.fillStyle = 'green';          
                    ctx.fillRect(renderX, renderY, 5, 5);    
                /* } */
                        
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
    }
}

export default Character;
