import L from 'leaflet';

// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

import automobileSVG from './images/automobile.svg';
import packageSVG from './images/package.svg';


export const iconDriver = new L.Icon({
    iconUrl: automobileSVG,
    iconSize: [40,40]
});

export const iconTask = new L.Icon({
    iconUrl: packageSVG,
    iconSize: [40,40]
});
