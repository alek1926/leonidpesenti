import * as React from "react";
import { Link, Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Footer from "./Footer";

export default function Photography() {
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

    const themeForBreakpoints = createTheme();
    const sm = useMediaQuery(themeForBreakpoints.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="start"
                height="88vh"
                marginTop="5vh"
            >
                <Typography variant={sm?"h5":"h1"}>// photography
                    <List sx={{ marginLeft: '2vw' }}>
                        <ListItem><Link to="/ph/pahf" style={{ color: 'black', textDecoration: 'none' }}>// "post-apocalyptic high fashion"</Link></ListItem>
                        <ListItem><Link to="/ph/architecture" style={{ color: 'black', textDecoration: 'none' }}>// architecture</Link></ListItem>
                        <ListItem><Link to="/ph/fashion" style={{ color: 'black', textDecoration: 'none' }}>// fashion</Link></ListItem>
                        <ListItem><Link to="/ph/portraits" style={{ color: 'black', textDecoration: 'none' }}>// portraits</Link></ListItem>
                        <ListItem><Link to="/ph/reportage/ukraine2022" style={{ color: 'black', textDecoration: 'none' }}>// ukraine 2022</Link></ListItem>
                    </List>
                </Typography>
            </Box>
            <Footer></Footer>
        </ThemeProvider>
    );
}