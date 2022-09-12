import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Footer from "./Footer";

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
                height="88vh"
                marginTop="5vh"
            >
                <Typography variant="h1">// photography
                    <List sx={{ marginLeft: '2vw' }}>
                        <ListItem><Link to="/ph/abstract" style={{ color: 'black', textDecoration: 'none' }}>// abstract</Link></ListItem>
                        <ListItem><Link to="/ph/architecture" style={{ color: 'black', textDecoration: 'none' }}>// architecture</Link></ListItem>
                        <ListItem><Link to="/ph/fashion" style={{ color: 'black', textDecoration: 'none' }}>// fashion</Link></ListItem>
                        <ListItem><Link to="/ph/portraits" style={{ color: 'black', textDecoration: 'none' }}>// portraits</Link></ListItem>
                        <ListItem><Link to="/ph/reportage" style={{ color: 'black', textDecoration: 'none' }}>// reportage</Link></ListItem>
                    </List>
                </Typography>
            </Box>
            <Footer></Footer>
        </ThemeProvider>
    );
}