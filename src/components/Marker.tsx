import L from 'leaflet';

import automobileSVG from './images/automobile.svg';
import packageSVG from './images/package.svg';


export const iconDriver = new L.Icon({
    iconUrl: automobileSVG,
    iconSize: [40, 40]
});

export const iconTask = new L.Icon({
    iconUrl: packageSVG,
    iconSize: [40, 40]
});
