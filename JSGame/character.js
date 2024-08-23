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
        if (keyState.isShooting) {
            this.ctx.fillStyle = 'green';
                this.ctx.fillRect(this.locationX + 20, this.locationY - 30, 5, 20);
                console.log(this.shotYStart);
                console.log(this.shotXStart);
        }   
    }
    /* 
    Till imorgon. Iom att X-Y uppdateras under hela tiden som space hålls inne
    så kommer ShotPathX och Y alltid vara samma som location X och Y.
    Behöver ett sätt att playerShoot endast sparar nuvarande koordinater,
    i två nya variabler och att updateShotPosition fortsätter med dessa för att göra så att
    skotter fortsätter från var det avfyrades oavsett vart karaktären går.
    */
    updateShotPosition() {
        this.shotPathX = this.locationX;
    if (keyState.isShooting) {            
        this.shotYStart -= 20;
        }
    }
}

export default Character;
