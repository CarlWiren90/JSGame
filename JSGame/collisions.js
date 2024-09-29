import { player1, player2 } from "./main.js";
import Shot from "./shot";


const shotCollision = (renderX, renderY, shot) => {
    //Player 2 is hit algo.
    if (shot.startX < player2.locationX + player2.hitboxWidth && shot.startX + shot.shotWidth > player2.locationX && shot.startY < player2.locationY + player2.hitboxHeight && shot.startY + shot.shotHeight > player2.locationY) {
        console.log('Player 2 hit!');
        player2.playerLives --;
        console.log(player2.playerLives);
        shot.isActiveShot = false;
    }

    if (renderX >= gameArea.width || renderY >= gameArea.height || renderX === 0 || renderY === 0) {
        shot.isActiveShot = false;
    }
}

const checkIfAlive = () => {
    if (player1.playerLives === 0) {
        console.log('Player 2 wins!');  
        return false; 
    }
    if (player2.playerLives === 0) {
        console.log('Player 1 wins!');
        return false;
    }
}

export { shotCollision, checkIfAlive };