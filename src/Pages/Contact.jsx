import * as React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import Reaptcha from 'reaptcha';
import Footer from "./Footer";


export default function Contact() {

    const theme = createTheme({
        typography: {
            h1: {
                fontFamily: "Helvetica",
                fontSize: "3rem"
            },
            h5: {
                fontFamily: "Helvetica",
                fontSize: "1.2rem"
            }
        }
    });

    let [clicked, setClicked] = React.useState(false);
    let [instaClick, setInstaClick] = React.useState(false);

    let [verified, setVerified] = React.useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="start"
                minHeight="95vh"
                marginTop="5vh"
            >
                <Grid container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center">
                    <Grid item xs={12}>

                        <Typography variant="h1">// contact</Typography>
                    </Grid>
                    <Grid item xs={12} marginTop="5vh">
                        <Button onClick={() => setInstaClick(true)} style={{ color: 'black', textDecoration: 'none', fontSize:"1.2rem", fontFamily: 'Helvetica'}}>instagram</Button>
                        {instaClick && <a href="https://www.instagram.com/hennibbale/" style={{ color: 'black', textDecoration: 'none', fontSize:"1rem"}}>@hennibbale</a>}
                </Grid>
                        <Button onClick={() => setClicked(true)}style={{ color: 'black', textDecoration: 'none', fontSize:"1.2rem", fontFamily: 'Helvetica', marginTop:"5vh"      }}>e-mail</Button>
                        {clicked && <Reaptcha
                            sitekey={'6Le12eMhAAAAAAJkvS4zSYBrLI-rVvX5WF5v8lAR'}
                            onVerify={() => setVerified(true)}
                        >
                        </Reaptcha>}
                        {verified &&
                            <a href="mailto:pesentileonid@gmail.com" style={{ color: 'black', textDecoration: 'none', fontSize:"1rem"}}>pesentileonid@gmail.com</a>
                        }
                    </Grid>

            </Box>
            <Footer></Footer>
        </ThemeProvider>
    );
}