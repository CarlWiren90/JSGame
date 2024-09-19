import './playerUI.css';
import { player1 } from './main';

const renderUI = () => {
    //Render UI-area
    let UIArea = document.createElement('div');
    UIArea.className = 'playerUI';
    document.body.appendChild(UIArea);

    //Render UI-components
    let player1Lives = document.createElement('div');
    player1Lives.className = 'player1Lives';
    UIArea.appendChild(player1Lives);
    player1Lives.innerHTML = 'Player 1 lives:'
}

export default renderUI;