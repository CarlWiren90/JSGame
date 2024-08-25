'use strict';
import {mouseState} from './globalState.js';


gameArea.addEventListener('mousemove', (e) => {

    mouseState.x = e.offsetX;
    mouseState.y = e.offsetY;
    console.log(mouseState.x);
    console.log(mouseState.y);

/*     
    
mouseState.mouseY = e.screenY;
    mouseState.mouseX = e.screenX;
    console.log(e.screenY);
    console.log(e.screenX); */
});


