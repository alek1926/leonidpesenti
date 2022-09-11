import { Typography, Grid, createTheme } from '@mui/material';
import * as React from "react";

export default function Footer(props) {
    const styles = {
          width: '100%',
          bottom: '0',
          textAlign:'center',
          position: props.fixed? 'fixed':'relative'
        };



            return (
                <Grid style={styles}>
                <h5>© LP 2019-2022 | AC | LG</h5>
                </Grid>
    );
    }