import { player1 } from "./main";
import { ctx } from "./main";

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
        this.i = 0;
    }

    calculateShot() {
        let deltaX = this.endX - this.startX;
        let deltaY = this.endY - this.startY;

        let distance = Math.sqrt(deltaX**2 + deltaY**2);
    
        this.directionX = deltaX / distance;
        this.directionY = deltaY / distance;
    }

    static updateShotPosition() { 
        for (this.i = 0; this.i < player1.shots.length; this.i++) {
            if (player1.shots[this.i].isActiveShot) {
                // Scale by shot speed to get movement per frame
                let moveX = player1.shots[this.i].directionX * player1.shots[this.i].shotSpeed;
                let moveY = player1.shots[this.i].directionY * player1.shots[this.i].shotSpeed;
        
                // Update the shot's position
                player1.shots[this.i].startX += moveX;
                player1.shots[this.i].startY += moveY;  
            
                //Round float before render
                let renderX = Math.round(player1.shots[this.i].startX);
                let renderY = Math.round(player1.shots[this.i].startY);
          
                player1.shots[this.i].shotCollision(renderX, renderY);

                ctx.fillStyle = 'green';          
                ctx.fillRect(renderX, renderY, 5, 5);   
                }                
            }
        } 

    shotCollision(renderX, renderY) {
        if (renderX >= gameArea.width || renderY >= gameArea.height || renderX === 0 || renderY === 0) {
            player1.shots[this.i].isActiveShot = false;
            console.log(player1.shots[this.i].isActiveShot) 
            player1.shots.splice(this.i, 1);  
        }
    }    
}

export default Shot;