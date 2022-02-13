import React, {FC} from "react";
import {Driver} from "../models/Driver";
import {Avatar, Box, Card, Typography} from "@mui/material";
import {deepPurple} from "@mui/material/colors";

export const DriverBox: FC<{ driver: Driver }> = ({driver}) => {

    return <Card variant="outlined">
        <Box display="flex" flexDirection="row">
            <Avatar sx={{bgcolor: deepPurple[500]}}>{driver.firstName[0] + driver.lastName[0]}</Avatar>

            <Typography variant="body2">
                {driver.firstName + ' ' + driver.lastName}
            </Typography>
        </Box>
    </Card>
}