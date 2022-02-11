import {createTheme} from "@mui/material";

export const theme = createTheme({
    typography: {
        allVariants: {
            color: "white"
        },
    },
    palette: {
        text: {
            primary: 'rgba(255, 255, 255, 0.87)',
            secondary: 'rgba(255, 255, 255, 0.54)',
            disabled: 'rgba(255, 255, 255, 0.38)',
        },
    },
});