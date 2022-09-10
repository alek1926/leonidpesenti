import * as React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import pic1 from "./photography/abstract/leonidpesenti-14.jpg";
import pic2 from "./photography/abstract/leonidpesenti-16.jpg";
import pic3 from "./photography/abstract/leonidpesenti-19.jpg";
import pic4 from "./photography/abstract/leonidpesenti-23.jpg";
import pic5 from "./photography/abstract/leonidpesenti-48.jpg";
import pic6 from "./photography/abstract/leonidpesenti-65.jpg";
import pic7 from "./photography/abstract/leonidpesenti-66.jpg";
import pic8 from "./photography/abstract/leonidpesenti-85.jpg";
import pic9 from "./photography/abstract/leonidpesenti-86.jpg";
import pic10 from "./photography/abstract/leonidpesenti-87.jpg";
import pic11 from "./photography/abstract/leonidpesenti-88.jpg";
import Footer from "../Footer";

export default function Abstract() {
    const theme = createTheme({
        typography: {
            h1: {
                fontFamily: "Helvetica",
                fontSize: "3rem"
            }
        }
    });

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
    let images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11];

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
                <Typography variant="h1">// abstract</Typography>
                <Grid container direction="row" spacing={2} padding="5vh" paddingTop="5vh">
                    {images.map((image) => {
                        if (tablet) {
                            return (
                                <Grid item xs={6} key={image} >
                                    <img src={image}width="100%" />
                                </Grid>
                            );
                        }
                        else if (sm) {
                            return (
                                <Grid item xs={12} key={image}  >
                                    <img src={image}width="100%" />
                                </Grid>
                            );
                        }
                        else {
                            return (
                                <Grid item xs={3} key={image}  >
                                    <Button onClick={()=>{
                                        setModalData(image);
                                         handleOpen();
                                         }}>
                                        <img src={image}width="100%" />
                                    </Button>
                                </Grid>
                            );
                        }
                    })}
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





            <Footer></Footer>
        </ThemeProvider>
    );
}