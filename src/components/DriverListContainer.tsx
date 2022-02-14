import * as React from 'react';
import {FunctionComponent} from 'react';
import {Box, Typography} from "@mui/material";
import {Driver} from "../models/Driver";
import {DriverBox} from "./DriverBox";

export const DriversListContainer: FunctionComponent<{ drivers: Driver[] }> = ({drivers}) => {

    return (
        <Box sx={{m: 1}} flexBasis="40%">

            <Typography variant="h5" component="h2" align="center"
                        sx={{backgroundColor: '#8ee183', m: 1, borderRadius: 1}}>
                Drivers List
            </Typography>

            {drivers?.map((driver: Driver) => <DriverBox key={driver.id} driver={driver}/>)}
        </Box>
    );
}
