import './playerUI.css';
import { player1 } from './main';

let UIArea;
let livesContainer;

const renderUI = () => {
    //Render UI-area
    UIArea = document.createElement('div');
    UIArea.className = 'playerUI';
    document.body.appendChild(UIArea);

    //Render UI-component player lives
    let player1Lives = document.createElement('div');
    player1Lives.className = 'player1Lives';
    UIArea.appendChild(player1Lives);
    player1Lives.innerHTML = 'Player 1 lives:'
    livesContainer = document.createElement('div');
    livesContainer.className = 'livesContainer';
    UIArea.appendChild(livesContainer);


    //Create weapon rendering here.
    let weaponContainer = document.createElement('div');
    weaponContainer.className = 'weaponContainer';
    weaponContainer.innerHTML = 'Weapon:'
    UIArea.appendChild(weaponContainer);
    let weaponAK47Image = new Image();
    weaponAK47Image.src = './AK47.png'
    weaponAK47Image.id = 'AK47';
    weaponContainer.appendChild(weaponAK47Image);

    //Create ammunition rendering here.
}

const renderPlayerLives = () => {
    
    for (let i = 1 ; i <= player1.playerLives ; i++) {
        let heartImage = new Image();
        heartImage.src = './heart.png';
        heartImage.id = 'heartImage';
        let heartContainer = document.createElement('div');
        heartContainer.className = 'heartContainer';
        livesContainer.appendChild(heartContainer);
        heartContainer.appendChild(heartImage);
    }
}



export default renderUI;
export {renderPlayerLives};
