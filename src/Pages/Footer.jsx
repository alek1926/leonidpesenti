import { ThemeProvider, createTheme, Typography, Grid } from '@mui/material';
import { textAlign } from "@mui/system";
import * as React from "react";

export default function Footer() {
    
    const theme = createTheme({
        typography: {
            h5: {
                fontFamily: "Helvetica",
                fontSize: "0.8rem"
            }
        }
    });
            return (
                <Grid  style={{textAlign:'center'}}>
                <Typography variant="h5">© LP 2019-2022</Typography>
                </Grid>
    );
    }