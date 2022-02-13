import React from 'react';
import {Box, ThemeProvider, Typography} from '@mui/material';
import {theme} from './theme';
import {DRIVERS_URL, TASK_URL, useDataApi} from "./hooks/useDataApi";
import {Driver} from "./models/Driver";
import {Task} from "./models/Task";
import {MapTile} from "./components/MapTile";
import {DriverBox} from "./components/DriverBox";

const styles = {
    defaultMargin: {mx: 1, my: 2},
    driverTable: {mx: 1, my: 1},
    taskTable: {backgroundColor: '#badaf8', mx: 1, my: 1},
    mapWrapper: {backgroundColor: 'white', mx: 1, my: 1}
};

function App() {

    const [drivers, isLoadingDriver, errorDrivers] = useDataApi<Driver[]>(DRIVERS_URL);
    const [tasks, isLoadingTasks, errorTasks] = useDataApi<Task[]>(TASK_URL);

    return (
        <ThemeProvider theme={theme}>

            <Box height={'100vh'} width={'100vw'} display={'flex'} flexDirection={'column'}>

                <Typography variant="h4" component="h1" align="center" sx={styles.defaultMargin}>
                    Welcome to Drivers App
                </Typography>

                <Box display="flex" flexDirection="column" flex="1">

                    <Box display="flex" flexDirection="row">
                        <Box sx={styles.driverTable} flexBasis="40%">

                            <Typography variant="h5" component="h2" align="center" sx={{backgroundColor: '#8ee183'}}>
                                Drivers List
                            </Typography>

                            {drivers?.map((driver: Driver) => <DriverBox key={driver.id} driver={driver}/>)}
                        </Box>
                        <Box sx={styles.mapWrapper} flex={1} height="400px" width="400px">
                            <MapTile drivers={drivers} tasks={tasks}/>
                        </Box>
                    </Box>

                    <Box sx={styles.taskTable} flex={1}>
                        {tasks?.map((task: Task) => <Box key={task.id}>
                            {task.title}
                        </Box>)
                        }
                    </Box>

                </Box>

            </Box>

        </ThemeProvider>
    );
}

export default App;
