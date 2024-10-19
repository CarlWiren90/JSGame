import './playerUIPlayer2.css';
import { gameArea, /* gameAreaPlayer2, */ player2 } from '../main';
/* import { keyState, player2CurrentLocation } from '../State/globalState';
 */import { ctx } from '../main';
import { glock44 } from '../main';

let UIAreaPlayer2;
let livesContainer;
let bulletContainer;
let reloadText = document.createElement('span');
let weaponContainer;
let heartContainer = document.createElement('div');
heartContainer.className = 'heartContainer';  

const renderUIPlayer2 = () => {
    //Render UI-area
    UIAreaPlayer2 = document.createElement('div');
    UIAreaPlayer2.className = 'playerUIPlayer2';
    document.body.appendChild(UIAreaPlayer2);

    //Render UI-component player lives container
    let player2Lives = document.createElement('div');
    player2Lives.className = 'player2Lives';
    UIAreaPlayer2.appendChild(player2Lives);
    player2Lives.innerHTML = 'Player 2 lives:'
    livesContainer = document.createElement('div');
    livesContainer.className = 'livesContainer';
    UIAreaPlayer2.appendChild(livesContainer);

    //Weapon rendering and container
    weaponContainer = document.createElement('div');
    weaponContainer.className = 'weaponContainer';
    weaponContainer.innerHTML = 'Weapon:'
    UIAreaPlayer2.appendChild(weaponContainer);

    //Ammunition container rendering
    let ammoContainer = document.createElement('div');
    ammoContainer.className = 'ammoContainer';
    ammoContainer.innerHTML = 'Ammo:'
    UIAreaPlayer2.appendChild(ammoContainer);
    bulletContainer = document.createElement('div');
    bulletContainer.className = 'bulletContainer';
    ammoContainer.appendChild(bulletContainer);

    //Reload text rendering
    reloadText.id = 'reloadText';

}

const renderPlayerLivesPlayer2 = () => { 
    heartContainer.innerHTML = '';
    for (let i = 1 ; i <= player2.playerLives ; i++) {
        let heartImage = new Image();
        heartImage.src = './heart.png';
        heartImage.id = 'heartImage';
        livesContainer.appendChild(heartContainer);
        heartContainer.appendChild(heartImage);
    }
}

const renderActiveWeaponPlayer2 = () => {
    if (player2.isGlock22Active) {
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

const renderWeaponBulletsPlayer2 = () => {
    bulletContainer.innerHTML = '';
    if (player2.isGlock22Active) {
        for (let i = glock44.currentAmmo ; i != 0 ; i--) {
            let bulletImg = new Image();
            bulletImg.src = './bullet.png';
            bulletImg.id = 'bulletImg';
            bulletContainer.appendChild(bulletImg);
        }
    }
}

const showReloadingUIPlayer2 = () => {
    if (player2.keyState.isReloading) {       
        reloadText.style.position = 'relative';
        ctx.fillStyle = 'red';
        ctx.font ='30px Pixelify Sans';
        ctx.fillText('Reloading!', player2.locationX - 40, player2.locationY - 10);
    }
}

export default renderUIPlayer2;
export {renderPlayerLivesPlayer2};
export {renderWeaponBulletsPlayer2};
export {showReloadingUIPlayer2};
export {renderActiveWeaponPlayer2};