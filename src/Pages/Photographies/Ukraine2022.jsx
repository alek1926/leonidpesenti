import * as React from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import pic1 from "./photography/reportage/ukraine 2022/leonidpesenti-32.jpg";
import pic2 from "./photography/reportage/ukraine 2022/leonidpesenti-35.jpg";
import pic3 from "./photography/reportage/ukraine 2022/leonidpesenti-36.jpg";
import pic4 from "./photography/reportage/ukraine 2022/leonidpesenti-37.jpg";
import pic5 from "./photography/reportage/ukraine 2022/leonidpesenti-38.jpg";
import pic6 from "./photography/reportage/ukraine 2022/leonidpesenti-39.jpg";
import pic7 from "./photography/reportage/ukraine 2022/leonidpesenti-40.jpg";
import pic8 from "./photography/reportage/ukraine 2022/leonidpesenti-45.jpg";
import pic9 from "./photography/reportage/ukraine 2022/leonidpesenti-46.jpg";
import pic10 from "./photography/reportage/ukraine 2022/leonidpesenti-47.jpg";
import pic11 from "./photography/reportage/ukraine 2022/leonidpesenti-49.jpg";
import pic12 from "./photography/reportage/ukraine 2022/leonidpesenti-50.jpg";
import pic13 from "./photography/reportage/ukraine 2022/leonidpesenti-51.jpg";
import Footer from "../Footer";

export default function Ukraine2022() {
    const theme = createTheme({
        typography: {
            h1:{
                fontFamily: "Helvetica",
                fontSize: "3rem"
            }
        }
    });
   
    let images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic13];
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
            <Typography style={{ color: 'black', textDecoration: 'none', fontSize:"2rem", margin:"2vw"    }}>// ukraine 2022</Typography>
            
        <Grid container direction="row" spacing={2} padding="5vh" paddingTop="5vh" marginTop="5vh">
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
                                    <Button onClick={()=>{
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