import * as React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import pic10 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-24.jpg";
import pic11 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-25.jpg";
import pic12 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-26.jpg";
import pic13 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-27.jpg";
import pic14 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-28.jpg";
import pic16 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-30.jpg";
import pic17 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-31.jpg";
import pic18 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-79.jpg";
import pic19 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-80.jpg";
import pic20 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-81.jpg";
import pic21 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-82.jpg";
import pic22 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-83.jpg";
import pic23 from "./photography/fashion/post-apocalyptic high fashion/leonidpesenti-84.jpg";
import Footer from "../Footer";

export default function PostApocalypticHighFashion() {
    const theme = createTheme({
        typography: {
            h1: {
                fontFamily: "Helvetica",
                fontSize: "2rem"
            },
            h1: {
                fontFamily: "Helvetica",
                fontSize: "1.5rem"
            },
        }
    });
    let images = [pic14, pic16, pic10, pic23, pic13, pic19, pic17, pic18];

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
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
    const [imageHeight, setImageHeight] = React.useState(null);
    const [imageWidth, setImageWidth] = React.useState(null);
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
            <Typography style={{ color: 'black', textDecoration: 'none', fontSize:"2rem", margin:"2vw"    }}>// "post-apocalyptic high fashion"</Typography>
            

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
                                        const img = new Image();
                                        img.src = image;     
                                        img.onload = () => {               
                                           setImageHeight(img.height);
                                           setImageWidth(img.width);
                                           console.log(imageHeight)
                                         };
                                    }}>
                                        <img src={image} width="100%" />
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
                <img src={modalData} height={imageHeight>900? imageHeight*.60 :"100%"} width={imageHeight>900 ? imageWidth*.60 :"100%"}/>
                </Box>
            </Modal>





            <Footer></Footer>
        </ThemeProvider>
    );
}