import * as React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import pic from './Photographies/photography/tq1yA46.jpeg';
import Footer from "./Footer.jsx";

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
    const tablet = useMediaQuery('(min-width:768px) and (max-width:1000px)');

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="start"
                height="88vh"
                marginTop="5vh"
                maxWidth="100vw"
            >
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    maxWidth="100vw">
                    <Grid item xs={12}>
                        <Typography variant="h1">// about</Typography>
                    </Grid>
                    <Grid item xs={12}  margin = "5vw" marginBottom={!sm?'2vw':'0'}width={'90vw'} >
                        <Typography variant="h3">russian-born switzerland-based mathematics and psychology student</Typography>
                    </Grid>
                    <Grid item xs={12} margin = "5vw" marginTop={sm?'5vw':'0'} width={'90vw'} >
                        <img src={pic} width={'100%'}></img>
                    </Grid>
                </Grid>
            </Box>
            <Footer fixed></Footer>
        </ThemeProvider>
    );
}