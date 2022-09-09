import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

export default function Photography() {
    const theme = createTheme({
        typography: {
            h1: {
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
                <Typography variant="h1">// photographies
                    <List sx={{ marginLeft: '1vw' }}>
                        <ListItem><Link to="/photographies/abstract" style={{ color: 'black', textDecoration: 'none' }}>// abstract</Link></ListItem>
                        <ListItem><Link to="/photographies/architecture" style={{ color: 'black', textDecoration: 'none' }}>// architecture</Link></ListItem>
                        <ListItem><Link to="/photographies/fashion" style={{ color: 'black', textDecoration: 'none' }}>// fashion</Link></ListItem>
                        <ListItem><Link to="/photographies/portraits" style={{ color: 'black', textDecoration: 'none' }}>// portraits</Link></ListItem>
                        <ListItem><Link to="/photographies/reportage" style={{ color: 'black', textDecoration: 'none' }}>// reportage</Link></ListItem>
                    </List>
                </Typography>
            </Box>
            <Outlet />
        </ThemeProvider>
    );
}