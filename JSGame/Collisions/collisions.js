import { player1, player2 } from "../main.js";
import { renderPlayerLives } from "../Player UI/playerUIPlayer1.js";
import { renderPlayerLivesPlayer2 } from "../Player UI/playerUIPlayer2.js";
import Shot from "../shot.js";


const shotCollision = (renderX, renderY, shot) => {
    //Player 2 is hit algo.
    if (shot.startX < player2.locationX + player2.hitboxWidth && shot.startX + shot.shotWidth > player2.locationX && shot.startY < player2.locationY + player2.hitboxHeight && shot.startY + shot.shotHeight > player2.locationY) {
        if (player2.playerLives > 0) {
            console.log('Player 2 hit!');
            player2.playerLives --;
            console.log(player2.playerLives);
            shot.isActiveShot = false;
            renderPlayerLivesPlayer2();
        }

    }
    //Player 1 is hit algo
    if (shot.startX < player1.locationX + player1.hitboxWidth && shot.startX + shot.shotWidth > player1.locationX && shot.startY < player1.locationY + player1.hitboxHeight && shot.startY + shot.shotHeight > player1.locationY) {
        if (player1.playerLives > 0) {
            console.log('Player 1 hit!');
            player1.playerLives --;
            console.log(player1.playerLives);
            shot.isActiveShot = false;
            renderPlayerLives();
        }

    }

    if (renderX >= gameArea.width || renderY >= gameArea.height || renderX === 0 || renderY === 0) {
        shot.isActiveShot = false;
    }
    
    checkIfAlive();
}

const checkIfAlive = () => {
    if (player1.playerLives === 0) {
        console.log('Player 2 wins!');  

    }
    if (player2.playerLives === 0) {
        console.log('Player 1 wins!');
    }
}

export { shotCollision, checkIfAlive };