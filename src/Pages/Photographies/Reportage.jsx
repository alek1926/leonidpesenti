import * as React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';

export default function Reportage() {
    const theme = createTheme({
        typography: {
            h1:{
                fontFamily: "Helvetica",
                fontSize: "3rem"
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
    <Box
        display="flex"
        justifyContent="center"
        alignItems="start"
        minHeight="100vh"
        marginTop="5vh"
    >
        <Typography variant="h1">// REPORTAGE</Typography>
    </Box>
    </ThemeProvider>
    );
}