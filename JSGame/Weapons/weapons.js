
import './weapons.css';
/* import { keyStatePlayer2, mouseStatePlayer1 } from './JSGame/State/globalState';
 */import Shot from '../Shot Logic/shot';
import { player1, player2 } from '../main';

class weaponGlock44 {
    constructor () {
        this.name = 'Glock 44';
        this.fireRate = 500;
        this.maxAmmo = 12;
        this.currentAmmo = 12;
        this.glockImg = './Weapons Icons/Glock.png'
    }
    
    shootGlock44(player1IsShooting) {
        if (player1IsShooting) {
            if (this.currentAmmo != 0) {
                let shot = new Shot(player1.locationX, player1.locationY, player1.mouseState.mouseX, player1.mouseState.mouseY, true);
                shot.calculateShot();
                player1.shots.push(shot);
                this.currentAmmo--;
                player1.keyState.canShoot = false;
    
                setTimeout(() => {
                    player1.keyState.canShoot = true;
                },this.fireRate);
            }
        }
        if (!player1IsShooting) {
            if (this.currentAmmo != 0) {
                let shot = new Shot(player2.locationX, player2.locationY, player2.mouseState.mouseX, player2.mouseState.mouseY, true);
                shot.calculateShot();
                player2.shots.push(shot);
                this.currentAmmo--;
                player2.keyState.canShoot = false;
    
                setTimeout(() => {
                    player2.keyState.canShoot = true;
                },this.fireRate);
            }
        }
    }
}


class weaponAK47 {
    constructor () {
        this.name = 'AK-47';
        this.fireRate = 150;
        this.maxAmmo = 30;
        this.ak47Img = './Weapons Icons/AK47.png'
    }   
}

export { weaponGlock44, weaponAK47};