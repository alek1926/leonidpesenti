import * as React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import pic6 from "./photography/fashion/milan/leonidpesenti-72.jpg";
import pic7 from "./photography/fashion/milan/leonidpesenti-73.jpg";
import pic8 from "./photography/fashion/milan/leonidpesenti-74.jpg";
import pic9 from "./photography/fashion/milan/leonidpesenti-75.jpg";

export default function Milan() {
    const theme = createTheme({
        typography: {
            h1: {
                fontFamily: "Helvetica",
                fontSize: "3rem"
            }
        }
    });
    let images = [pic6, pic7, pic8, pic9];

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
                <Typography variant="h1">// fashion</Typography>
                <Link to="/ph/fashion/milan">
                    <Typography variant="h1" style={{ color: 'black' }} marginLeft="2vw">// milan</Typography>
                </Link>
                <Grid container direction="row" spacing={2} padding="5vh" paddingTop="5vh">
                    {images.map((image) => {
                        if (tablet) {
                            return (
                                <Grid item xs={6}>
                                    <img src={image} width="100%" />
                                </Grid>
                            );
                        }
                        else if (sm) {
                            return (
                                <Grid item xs={12}>
                                    <img src={image} width="100%" />
                                </Grid>
                            );
                        }
                        else {
                            return (
                                <Grid item xs={3}>
                                    <Button onClick={() => {
                                        setModalData(image);
                                        handleOpen();
                                    }}>
                                        <img src={image} width="100%" />
                                    </Button>
                                </Grid>
                            );
                        }
                    })};
                </Grid>
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