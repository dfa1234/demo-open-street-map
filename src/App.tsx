import React from 'react';
import {Box, ThemeProvider, Typography, useMediaQuery} from '@mui/material';
import {theme} from './theme';
import {DRIVERS_URL, TASK_URL, useDataApi} from "./hooks/useDataApi";
import {Driver} from "./models/Driver";
import {Task} from "./models/Task";
import {TasksListContainer} from "./components/TasksListContainer";
import {DriversListContainer} from "./components/DriverListContainer";
import {MapContainer} from "./components/MapContainer";


function App() {

    const [drivers] = useDataApi<Driver[]>(DRIVERS_URL);
    const [tasks] = useDataApi<Task[]>(TASK_URL);

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>

            <Box>

                <Typography variant="h4" component="h1" align="center" sx={{m: 1}} color="whitesmoke">
                    Welcome to Drivers App
                </Typography>

                <Box display="flex" flexDirection="column" flex="1">

                    <Box display="flex" flexDirection={isMobile ? "column" : "row"}>

                        <DriversListContainer drivers={drivers}/>

                        <MapContainer drivers={drivers} tasks={tasks}/>

                    </Box>

                    <TasksListContainer drivers={drivers} tasks={tasks}/>
                </Box>

            </Box>

        </ThemeProvider>
    );
}

export default App;
