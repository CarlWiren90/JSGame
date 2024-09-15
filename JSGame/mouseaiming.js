'use strict';
import {mouseState} from './globalState.js';
import { ctx } from './main.js';

gameArea.addEventListener('mousemove', (e) => {

    mouseState.mouseX = e.offsetX;
    mouseState.mouseY = e.offsetY;
});




