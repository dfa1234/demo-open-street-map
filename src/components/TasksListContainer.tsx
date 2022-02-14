import * as React from 'react';
import {FunctionComponent} from 'react';
import {Task} from "../models/Task";
import {Box, Typography} from "@mui/material";
import {Driver} from "../models/Driver";
import {TasksList} from "./TasksList";

export const TasksListContainer: FunctionComponent<{ drivers: Driver[], tasks: Task[] }> = ({drivers, tasks}) => {

    return (
        <Box sx={{m: 1}} flex={1}>
            <Typography variant="h5" component="h2" align="center"
                        sx={{backgroundColor: '#8ee183', m: 1, borderRadius: 1}}>
                Task List
            </Typography>

            <Box sx={{m: 1}}>
                <TasksList tasks={tasks} drivers={drivers}/>
            </Box>
        </Box>
    );
}
