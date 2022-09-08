import * as React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import pic from './Photographies/photography/fashion/post-apocalyptic high fashion/leonidpesenti-29.jpg';

export default function About() {
    const theme = createTheme({
        typography: {
            h1: {
                fontFamily: "Helvetica",
                fontSize: "3rem"
            },
            h3: {
                fontFamily: "Helvetica",
                fontSize: "1rem"
            }
        }
    });

    const themeForBreakpoints = createTheme();

    const sm = useMediaQuery(themeForBreakpoints.breakpoints.down('sm'));
    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="start"
                minHeight="100vh"
                marginTop="5vh"
                maxWidth="100vw"
            >
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center">
                    <Grid item xs={12}>
                        <Typography variant="h1">// about</Typography>
                    </Grid>
                    <Grid item xs={12} marginTop = "5vh">
                        <Typography variant="h3">russian-born switzerland-based mathematics and psychology student</Typography>
                    </Grid>
                    <Grid item xs={12} marginTop = "5vh">
                        <img src={pic} width={sm && "350"}></img>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}