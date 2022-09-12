import * as React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, Typography } from '@mui/material';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import pic1 from "./photography/portraits/leonidpesenti-1.jpg";
import pic2 from "./photography/portraits/leonidpesenti-15.jpg";
import pic3 from "./photography/portraits/leonidpesenti-17.jpg";
import pic4 from "./photography/portraits/leonidpesenti-18.jpg";
import pic5 from "./photography/portraits/leonidpesenti-20.jpg";
import pic6 from "./photography/portraits/leonidpesenti-21.jpg";
import pic7 from "./photography/portraits/leonidpesenti-22.jpg";
import pic8 from "./photography/portraits/leonidpesenti-54.jpg";
import pic9 from "./photography/portraits/leonidpesenti-55.jpg";
import pic10 from "./photography/portraits/leonidpesenti-56.jpg";
import pic11 from "./photography/portraits/leonidpesenti-57.jpg";
import pic12 from "./photography/portraits/leonidpesenti-58.jpg";
import pic13 from "./photography/portraits/leonidpesenti-59.jpg";
import pic14 from "./photography/portraits/leonidpesenti-60.jpg";
import pic15 from "./photography/portraits/leonidpesenti-61.jpg";
import pic16 from "./photography/portraits/leonidpesenti-62.jpg";
import pic17 from "./photography/portraits/leonidpesenti-63.jpg";
import pic18 from "./photography/portraits/leonidpesenti-64.jpg";
import pic19 from "./photography/portraits/leonidpesenti-76.jpg";
import pic20 from "./photography/portraits/leonidpesenti-77.jpg";
import pic21 from "./photography/portraits/leonidpesenti-78.jpg";
import Footer from "../Footer";

export default function Portraits() {

    const theme = createTheme({
        typography: {
            h1:{
                fontFamily: "Helvetica",
                fontSize: "3rem"
            }
        }
    });
    let images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21];



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
        <Typography variant="h1">// portraits</Typography>
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
                                    
                                    <Button onClick={()=>{
                                        setModalData(image);
                                         handleOpen();
                                         const img = new Image();
                                         img.src = image;     
                                         img.onload = () => {               
                                            setImageHeight(img.height);
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
                overflow="hidden"
                alignItems="center"
            >
                <Box sx={modalStyle} >
                    <img src={modalData} width={imageHeight>900? '500px':"100%"} height={imageHeight>900 ? '720px':"100%"}/>
                </Box>
            </Modal>





            <Footer></Footer>
    </ThemeProvider>
    );
}