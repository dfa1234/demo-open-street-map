import React from 'react';
import {Box, ThemeProvider, Typography} from '@mui/material';
import {theme} from './theme';

const styles = {
    defaultMargin: {mx: 2, my: 4},
    globalWrapper: {backgroundColor: '#292c34', height: '100%'},
    centerLoading: {display: "flex", justifyContent: "center"},
    centralZone: {display: "flex", alignItems: "center"},
    driverTable: {backgroundColor: '#8ee183', flexBasis: '40%', height: '40vh'},
    taskTable: {backgroundColor: '#badaf8', height: '40vh'},
    mapWrapper: {backgroundColor: 'white', flexBasis: '60%', height: '40vh'}
};

function App() {

    return (
        <ThemeProvider theme={theme}>
            <Box style={styles.globalWrapper}>
                <Typography variant="h4" component="h1" sx={styles.defaultMargin} align="center">
                    Welcome to Drivers App
                </Typography>

                <Box style={styles.centralZone}>
                    <Box style={styles.driverTable}>Driver Table</Box>
                    <Box style={styles.mapWrapper}>Map</Box>
                </Box>

                <Box style={styles.taskTable}>
                    Task Table
                </Box>

            </Box>
        </ThemeProvider>
    );
}

export default App;
