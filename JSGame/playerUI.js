import './playerUI.css';
import { player1 } from './main';

let UIArea;

const renderUI = () => {
    //Render UI-area
    UIArea = document.createElement('div');
    UIArea.className = 'playerUI';
    document.body.appendChild(UIArea);

    //Render UI-components
    let player1Lives = document.createElement('div');
    player1Lives.className = 'player1Lives';
    UIArea.appendChild(player1Lives);
    player1Lives.innerHTML = 'Player 1 lives:'
}

const renderPlayerLives = () => {
    let heartImage = new Image();
    heartImage.src = './heart.png';
    heartImage.id = 'heartImage';
    for (let i = 0 ; i <= player1.playerLives ; i++) {
        let heartContainer = document.createElement('img');
        heartContainer.className = 'heartContainer';
        UIArea.appendChild(heartContainer);
        heartContainer.appendChild(heartImage);
    }
}



export default renderUI;
export {renderPlayerLives};
