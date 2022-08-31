import * as React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Home() {


    const themeForBreakpoints = createTheme();

    const sm = useMediaQuery(themeForBreakpoints.breakpoints.down('sm'));
    const tablet = useMediaQuery('(min-width:768px) and (max-width:1000px)');

    const theme = createTheme({
        typography: {
            h1: {
                fontFamily: "Helvetica",
                fontSize: "3rem",
            },
            h5: {
                fontFamily: "Helvetica",
                fontSize: "2rem",
                fontWeight: 300,
            }
        }
    });



            return (
            <ThemeProvider theme={theme}>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems={!tablet?"center":"flex-start"}
                    minHeight="100vh"
                    marginLeft="20vw"
                    marginTop={!tablet?"0":"10vh"}
                >
                <Grid container direction={!sm ? "row" : "column"} >
                    <Grid item xs={!sm?5:12}marginRight={!sm?"0%":"25%"}paddingBottom={!sm?"0%":"25%"}>
                        <img src="https://i.imgur.com/cLXAcmo.png" width={!sm?"50%":"100%"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography >
                            <Grid container direction="column">
                                <Grid item xs={!tablet ? 6 : 12}>
                                    <Typography variant={!sm?"h1":"h5"}>
                                        Leonid Pesenti
                                    </Typography>
                                </Grid>
                                <Grid container direction="column" spacing={6} marginTop={"5vh"} marginLeft={tablet? "5vw": sm ? "-20vw" : "0"}>
                                    <Grid item width={!sm? "65%":"90%"} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                        <Link to="/about" style={{ color: 'black' }}><Typography variant="h5">about</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item width={!sm? "65%":"90%"} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                        <Link to="/photography" style={{ color: 'black' }}><Typography variant="h5">photography</Typography>
                                        </Link>
                                    </Grid>
                                    <Grid item width={!sm? "65%":"90%"} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                        <Link to="/contact" style={{ color: 'black' }}><Typography variant="h5">contact</Typography>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
    }