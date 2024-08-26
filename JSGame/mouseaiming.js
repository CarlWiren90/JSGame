'use strict';
import {mouseState} from './globalState.js';


gameArea.addEventListener('mousemove', (e) => {

    mouseState.mouseX = e.offsetX;
    mouseState.mouseY = e.offsetY;
    console.log(mouseState.mouseX);
    console.log(mouseState.mouseY);
});


