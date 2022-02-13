import {createTheme} from "@mui/material";

export const theme = createTheme({
    typography: {
        h1: {
            color: "white"
        },
        h2: {
            color: "white"
        },
        h3: {
            color: "white"
        },
    },
    palette: {
        text: {
            primary: 'rgba(0,0,0,0.87)',
            secondary: 'rgba(0,0,0,0.54)',
            disabled: 'rgba(0,0,0,0.38)',
        },
    },
});