import * as React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import pic1 from "./photography/fashion/locarno/leonidpesenti-67.jpg";
import pic2 from "./photography/fashion/locarno/leonidpesenti-68.jpg";
import pic3 from "./photography/fashion/locarno/leonidpesenti-69.jpg";
import pic4 from "./photography/fashion/locarno/leonidpesenti-70.jpg";
import pic5 from "./photography/fashion/locarno/leonidpesenti-71.jpg";
import Footer from "../Footer";

export default function Fashion() {
    const theme = createTheme({
        typography: {
            h1: {
                fontFamily: "Helvetica",
                fontSize: "3rem"
            }
        }
    });
    let images = [pic1, pic2, pic3, pic4, pic5];

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50vw',
        maxHeight: '80vh',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflow: 'auto'
    };

    const themeForBreakpoints = createTheme();

    const sm = useMediaQuery(themeForBreakpoints.breakpoints.down('sm'));
    const lg = useMediaQuery(themeForBreakpoints.breakpoints.up('lg'));
    const tablet = useMediaQuery('(min-width:768px) and (max-width:1000px)');

    const [open, setOpen] = React.useState(false);
    const [modalData, setModalData] = React.useState(null);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ThemeProvider theme={theme}>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                marginTop={lg ? "5vh" : "0"}
                flexDirection="column"
            >
            <Link to="/ph/fashion" style={{ color: 'black', textDecoration: 'none', fontSize:"3rem"    }}>// fashion</Link>
                    <Link to="/ph/fashion/locarno"  style={{ color: 'black', textDecoration: 'none', fontSize:"2rem"  }} marginLeft="2vw">// locarno
                </Link>
                <Grid container direction="row" spacing={2} padding="5vh" paddingTop="5vh">
                    {images.map((image) => {
                        if (tablet) {
                            return (
                                <Grid item xs={6} key={image} >
                                    <img src={image} width="100%" />
                                </Grid>
                            );
                        }
                        else if (sm) {
                            return (
                                <Grid item xs={12} key={image} >
                                    <img src={image} width="100%" />
                                </Grid>
                            );
                        }
                        else {
                            return (
                                <Grid item xs={3} key={image} >
                                    <Button onClick={() => {
                                        setModalData(image);
                                        handleOpen();
                                    }}>
                                        <img src={image} width="100%" />
                                    </Button>
                                </Grid>
                            );
                        }
                    })}
                </Grid>
            <Footer></Footer>
            </Box>


            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                    <img src={modalData} width="100%" />
                </Box>
            </Modal>





        </ThemeProvider>
    );
}