import { Typography, Grid } from '@mui/material';
import * as React from "react";

export default function Footer() {
    const styles = {
          width: '100%',
          position: 'fixed',
          bottom: 0,
          textAlign:'center', 
          marginTop: 'auto',  
          position: 'fixed'
        };

            return (
                <Grid style={styles}>
                <Typography variant="h5">© LP 2019-2022</Typography>
                </Grid>
    );
    }