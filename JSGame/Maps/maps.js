
import { ctx, ctxMap, gameArea, player1 } from "../main";
import './maps.css';

export const maps = [
    {
    mapName: 'Village',
    mapID: 1,   
    groundTextureImage: './Maps/Village/map-village-ground-texture.jpg',
    }
];

const RenderMap = () => {
    renderVillageMap();
}

const renderVillageMap = () => {
    const groundTextureVillageMap = new Image();
    groundTextureVillageMap.id = 'groundTextureVillageMap';
    groundTextureVillageMap.src = maps[0].groundTextureImage;
   
    groundTextureVillageMap.onload = () => {
        ctxMap.drawImage(groundTextureVillageMap, 0, 0);
    }
}

export {RenderMap};