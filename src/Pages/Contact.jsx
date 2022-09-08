import * as React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import Reaptcha from 'reaptcha';


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

    let [verified, setVerified] = React.useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="start"
                minHeight="100vh"
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
                        <Reaptcha
                            sitekey={'6Le12eMhAAAAAAJkvS4zSYBrLI-rVvX5WF5v8lAR'}
                            onVerify={() => setVerified(true)}
                        >
                        </Reaptcha>
                        {verified && 
                        <Typography variant="h5">pesentileonid@gmail.com
                        </Typography>        
                        }
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}