import * as React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import pic1 from "./photography/architecture/leonidpesenti-5.jpg";
import pic2 from "./photography/architecture/leonidpesenti-7.jpg";
import pic3 from "./photography/architecture/leonidpesenti-10.jpg";
import pic4 from "./photography/architecture/leonidpesenti-33.jpg";
import pic5 from "./photography/architecture/leonidpesenti-41.jpg";
import pic6 from "./photography/architecture/leonidpesenti-43.jpg";
import pic7 from "./photography/architecture/leonidpesenti-44.jpg";
import pic8 from "./photography/architecture/leonidpesenti-53.jpg";
import pic9 from "./photography/architecture/wall textures/leonidpesenti-2.jpg";
import pic10 from "./photography/architecture/wall textures/leonidpesenti-3.jpg";
import pic11 from "./photography/architecture/wall textures/leonidpesenti-4.jpg";
import pic12 from "./photography/architecture/wall textures/leonidpesenti-6.jpg";
import pic13 from "./photography/architecture/wall textures/leonidpesenti-8.jpg";
import pic14 from "./photography/architecture/wall textures/leonidpesenti-9.jpg";
import pic15 from "./photography/architecture/wall textures/leonidpesenti-11.jpg";
import pic16 from "./photography/architecture/wall textures/leonidpesenti-12.jpg";
import pic17 from "./photography/architecture/wall textures/leonidpesenti-13.jpg";
import pic18 from "./photography/architecture/wall textures/leonidpesenti-34.jpg";
import pic19 from "./photography/architecture/wall textures/leonidpesenti-42.jpg";
import pic20 from "./photography/architecture/wall textures/leonidpesenti-52.jpg";


export default function Architecture() {
    const theme = createTheme({
        typography: {
            h1:{
                fontFamily: "Helvetica",
                fontSize: "3rem"
            }
        }
    });

    
    let images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20];
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
        <Typography variant="h1">// architecture</Typography>
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
                                    <Button onClick={()=>{
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