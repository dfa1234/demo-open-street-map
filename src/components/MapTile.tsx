import {MapContainer, Marker, TileLayer} from 'react-leaflet'
import {FC} from "react";
import {Task} from "../models/Task";
import {Driver} from "../models/Driver";
import 'leaflet/dist/leaflet.css';
import {iconDriver, iconTask} from "./markerIcons";

const startingPosition = {lat: 31.7683, lng: 35.2137};

export const MapTile: FC<{ drivers: Driver[], tasks: Task[] }> = ({drivers, tasks}) => {
    return (
        <MapContainer center={startingPosition} zoom={14} style={{height: '100%', width: '100%'}}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {drivers?.map(driver => <Marker position={driver.location} key={driver.id} icon={iconDriver}/>)}
            {tasks?.map(task => <Marker position={task.location} key={task.id} icon={iconTask}/>)}
        </MapContainer>
    )
}