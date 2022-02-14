import React, {FC} from "react";
import {Driver} from "../models/Driver";
import {Avatar, Box, Button, Card, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors";

export const DriverBox: FC<{ driver: Driver }> = ({driver}) => {

    return <Card variant="outlined" sx={{m: 1}}>
        <Box display="flex" flexDirection="row" alignItems="end">
            <Avatar sx={{bgcolor: deepPurple[500], m: 2}}>{driver.firstName[0] + driver.lastName[0]}</Avatar>

            <Box>
                <Typography variant="subtitle1">
                    {driver.firstName + ' ' + driver.lastName}
                </Typography>

                <Typography variant="subtitle2" sx={{mb: 1}}>
                    Age: {driver.age}
                </Typography>
            </Box>

            <Box sx={{ml: 'auto'}}>
                <Button variant="contained" sx={{m: 1}}>Location</Button>
                <Button variant="contained" color="warning" sx={{m: 1}}>Remove</Button>
            </Box>
        </Box>
    </Card>
}