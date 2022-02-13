import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet'
import {FC} from "react";
import {Task} from "../models/Task";
import {Driver} from "../models/Driver";
import 'leaflet/dist/leaflet.css';
import {iconDriver, iconTask} from "./Marker";

const position = {lat:31.7683, lng:35.2137};

const styles = {mapWrapper: {height: '100%', width: '100%'}}

export const MapTile: FC<{ drivers: Driver[], tasks: Task[] }> = ({drivers, tasks}) => {
    return (
        <MapContainer center={position} zoom={13} style={styles.mapWrapper}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {drivers?.map(driver => <Marker position={driver.location} key={driver.id} icon={iconDriver} />)}
            {tasks?.map(task => <Marker position={task.location} key={task.id} icon={iconTask} />)}
        </MapContainer>
    )
}