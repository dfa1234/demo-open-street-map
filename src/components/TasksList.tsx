import * as React from 'react';
import {FunctionComponent} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Task} from "../models/Task";
import {Box, Checkbox, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {Driver} from "../models/Driver";

export const TasksList: FunctionComponent<{ drivers: Driver[], tasks: Task[] }> = ({drivers, tasks}) => {

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Scheduled for</TableCell>
                        <TableCell>Assign to</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Lat</TableCell>
                        <TableCell>Long</TableCell>
                        <TableCell>Display</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tasks?.map(task => (
                        <TableRow
                            key={task.id}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">
                                {task.title}
                            </TableCell>
                            <TableCell>{task.scheduled}</TableCell>
                            <TableCell>
                                <Box sx={{minWidth: 120}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Please select</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            value="">
                                            {drivers?.map(driver => <MenuItem value={driver.id}
                                                                              key={driver.id}>{driver.firstName} {driver.lastName}</MenuItem>)}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </TableCell>
                            <TableCell>{task.address}</TableCell>
                            <TableCell>{task.location.lat}</TableCell>
                            <TableCell>{task.location.lng}</TableCell>
                            <TableCell><Checkbox defaultChecked/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
