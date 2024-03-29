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

    let [email, setEmail] = React.useState('moc.liamg@dinoelitnesep');

    let handleClick = () => {
        setClicked(!clicked); 
        
        setEmail(email.split("").reverse().join(""))
    }


    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="start"
                marginTop="5vh"
                height="87vh"
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
                        <Grid container direction="column" alignItems="center">
                            <Grid item xs={12}>
                                <Button onClick={() => setInstaClick(true)} style={{ color: 'black', textDecoration: 'none', fontSize: "1.2rem", fontFamily: 'Helvetica' }}>instagram</Button>
                            </Grid>
                            <Grid item xs={12}>
                                {instaClick && <><br /><a href="https://www.instagram.com/hennibbale/" style={{ color: 'black', textDecoration: 'none', fontSize: "1rem" }}>@hennibbale</a></>}
                            </Grid>
                        </Grid>
                    </Grid>
                    <Button onClick={handleClick} style={{ color: 'black', textDecoration: 'none', fontSize: "1.2rem", fontFamily: 'Helvetica', marginTop: "5vh" }}>e-mail</Button>
                    {clicked &&
                        <a href={"mailto:" + email } style={{ color: 'black', textDecoration: 'none', fontSize: "1rem" }}>{email}</a>
                    }
                </Grid>

            </Box>
            <Footer fixed></Footer>
        </ThemeProvider>
    );
}