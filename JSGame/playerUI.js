import './playerUI.css';
import { player1 } from './main';

let UIArea;
let livesContainer;
let bulletContainer

const renderUI = () => {
    //Render UI-area
    UIArea = document.createElement('div');
    UIArea.className = 'playerUI';
    document.body.appendChild(UIArea);

    //Render UI-component player lives container
    let player1Lives = document.createElement('div');
    player1Lives.className = 'player1Lives';
    UIArea.appendChild(player1Lives);
    player1Lives.innerHTML = 'Player 1 lives:'
    livesContainer = document.createElement('div');
    livesContainer.className = 'livesContainer';
    UIArea.appendChild(livesContainer);

    //Weapon rendering and container
    let weaponContainer = document.createElement('div');
    weaponContainer.className = 'weaponContainer';
    weaponContainer.innerHTML = 'Weapon:'
    UIArea.appendChild(weaponContainer);
    let weaponAK47Image = new Image();
    weaponAK47Image.src = './AK47.png'
    weaponAK47Image.id = 'AK47';
    weaponContainer.appendChild(weaponAK47Image);


    //Ammunition container rendering
    let ammoContainer = document.createElement('div');
    ammoContainer.className = 'ammoContainer';
    ammoContainer.innerHTML = 'Ammo:'
    UIArea.appendChild(ammoContainer);
    bulletContainer = document.createElement('div');
    bulletContainer.className = 'bulletContainer';
    ammoContainer.appendChild(bulletContainer);
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

const renderWeaponBullets = () => {
    bulletContainer.innerHTML = '';
        for (let i = player1.shotCounter ; i != 0 ; i--) {
            let bulletImg = new Image();
            bulletImg.src = './bullet.png';
            bulletImg.id = 'bulletImg';
            bulletContainer.appendChild(bulletImg);
            console.log('new bullets rendered');
        }
}




export default renderUI;
export {renderPlayerLives};
export {renderWeaponBullets};
