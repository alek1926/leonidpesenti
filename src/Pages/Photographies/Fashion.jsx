import * as React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Footer from "../Footer";

import pic1 from "./photography/fashion/locarno/leonidpesenti-67.jpg";
import pic2 from "./photography/fashion/locarno/leonidpesenti-68.jpg";
import pic3 from "./photography/fashion/locarno/leonidpesenti-69.jpg";
import pic4 from "./photography/fashion/locarno/leonidpesenti-70.jpg";
import pic5 from "./photography/fashion/locarno/leonidpesenti-71.jpg";
import pic6 from "./photography/fashion/leonidpesenti1-1.jpg";
import pic7 from "./photography/fashion/leonidpesenti1-2.jpg";
import pic8 from "./photography/fashion/leonidpesenti1-3.jpg";
import pic9 from "./photography/fashion/leonidpesenti1-4.jpg";
import pic10 from "./photography/fashion/leonidpesenti1-5.jpg";
import pic11 from "./photography/fashion/leonidpesenti1-6.jpg";
import pic12 from "./photography/fashion/leonidpesenti1-7.jpg";
import pic13 from "./photography/fashion/leonidpesenti1-8.jpg";
import pic14 from "./photography/fashion/leonidpesenti1-9.jpg";
import pic15 from "./photography/fashion/leonidpesenti1-10.jpg";
import pic16 from "./photography/fashion/leonidpesenti1-11.jpg";
import pic17 from "./photography/fashion/milan/leonidpesenti-72.jpg";
import pic18 from "./photography/fashion/milan/leonidpesenti-73.jpg";
import pic19 from "./photography/fashion/milan/leonidpesenti-74.jpg";
import pic20 from "./photography/fashion/milan/leonidpesenti-75.jpg";

export default function Fashion() {
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
    let images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20];

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

                <Typography style={{ color: 'black', textDecoration: 'none', fontSize:"2rem", margin:"2vw"    }}>// fashion</Typography>
                <Typography style={{fontSize:"1rem"}}>
// models: <a target="_blank" href="https://www.instagram.com/lilith.becker/">Lilith</a> / <a target="_blank" href="https://www.instagram.com/isabelle.bt/">Isabelle</a> / <a target="_blank" href="https://www.instagram.com/kay.aug/">Kay</a> / others</Typography>


                <Grid container direction="row" spacing={2} padding="5vh" paddingTop="0vh" marginTop="1vh">
                    {images.length > 0 && images.map((image) => {
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
                <img src={modalData} height={imageHeight>900? imageHeight*.50 :"100%"} width={imageHeight>900 ? imageWidth*.50 :"100%"}/>
                </Box>
            </Modal>





            <Footer></Footer>
        </ThemeProvider>
    );
}