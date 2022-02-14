import {Box} from "@mui/material";
import {MapTile} from "./MapTile";
import React, {FunctionComponent} from "react";
import {Driver} from "../models/Driver";
import {Task} from "../models/Task";


export const MapContainer: FunctionComponent<{ drivers: Driver[], tasks: Task[] }> = ({drivers, tasks}) => {
    return (
        <Box sx={{m: 2, borderRadius: 1}} flex={1} height="450px">
            <MapTile drivers={drivers} tasks={tasks}/>
        </Box>
    );
}

