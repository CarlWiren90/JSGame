import './playerUIPlayer1.css';
import { gameArea, player1 } from '../main';
/* import { keyStatePlayer1, player1CurrentLocation } from '../State/globalState';
 */import { ctx } from '../main';
import { glock44 } from '../main';

let UIArea;
let livesContainer;
let bulletContainer;
let reloadText = document.createElement('span');
let weaponContainer;

let heartContainer = document.createElement('div');
heartContainer.className = 'heartContainer';

const renderUIPlayer1 = () => {
    //Render UI-area
    UIArea = document.createElement('div');
    UIArea.className = 'playerUIPlayer1';
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
    weaponContainer = document.createElement('div');
    weaponContainer.className = 'weaponContainer';
    weaponContainer.innerHTML = 'Weapon:'
    UIArea.appendChild(weaponContainer);

    //Ammunition container rendering
    let ammoContainer = document.createElement('div');
    ammoContainer.className = 'ammoContainer';
    ammoContainer.innerHTML = 'Ammo:'
    UIArea.appendChild(ammoContainer);
    bulletContainer = document.createElement('div');
    bulletContainer.className = 'bulletContainer';
    ammoContainer.appendChild(bulletContainer);

    //Reload text rendering
    reloadText.id = 'reloadText';

}

const renderPlayerLives = () => {
    heartContainer.innerHTML = '';
    for (let i = 1 ; i <= player1.playerLives ; i++) {
        let heartImage = new Image();
        heartImage.src = './Players Icons/heart.png';
        heartImage.id = 'heartImage';
        livesContainer.appendChild(heartContainer);
        heartContainer.appendChild(heartImage);
    }
}

const renderActiveWeapon = () => {
    if (player1.isGlock22Active) {
        let glock44Img = new Image();
        glock44Img.src = glock44.glockImg;
        glock44Img.id = "glock44";
        weaponContainer.appendChild(glock44Img);
    }
    
/*      let weaponAK47Image = new Image();
    weaponAK47Image.src = './AK47.png'
    weaponAK47Image.id = 'AK47';
    weaponContainer.appendChild(weaponAK47Image);  */
}

const renderWeaponBullets = () => {
    bulletContainer.innerHTML = '';
    if (player1.isGlock22Active) {
        for (let i = glock44.currentAmmo ; i != 0 ; i--) {
            let bulletImg = new Image();
            bulletImg.src = './Weapons Icons/bullet.png';
            bulletImg.id = 'bulletImg';
            bulletContainer.appendChild(bulletImg);
        }
    }
}

const showReloadingUI = () => {
    if (player1.keyState.isReloading) {       
        reloadText.style.position = 'relative';
        ctx.fillStyle = 'red';
        ctx.font ='30px Pixelify Sans';
        ctx.fillText('Reloading!', player1.locationX - 40, player1.locationY - 10);
    }
}

export default renderUIPlayer1;
export {renderPlayerLives};
export {renderWeaponBullets};
export {showReloadingUI};
export {renderActiveWeapon};