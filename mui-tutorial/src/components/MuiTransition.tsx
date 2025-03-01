import React, { useState } from 'react';
import { Box, Grow, Slide, Zoom, Button } from '@mui/material';

const MuiTransition: React.FC = () => {
    const [grow, setGrow] = useState(false);
    const [slide, setSlide] = useState(false);
    const [zoom, setZoom] = useState(false);
    const logo = 'https://images.seeklogo.com/logo-png/10/1/pikachu-logo-png_seeklogo-108841.png';

    const handleGrow = () => {
        setGrow((grow) => !grow);
    }

    const handleSlide = () => {
        setSlide((slide) => !slide);
    }

    const handleZoom = () => {
        setZoom((zoom) => !zoom);
    }

    return (
        <Box sx={{ boxShadow: 2, margin: '20px', height: '300px', display: 'flex', width: '700px', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Grow in={grow}>
                    <img src={logo} alt='' width='200px' height='200px' />
                </Grow>
                <Button variant='contained' color='error' sx={{ width: '150px', alignItems: 'center' }} onClick={handleGrow}>grow Me</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Slide in={slide}>
                    <img src={logo} alt='' width='200px' height='200px' />
                </Slide>
                <Button variant='contained' color='error' sx={{ width: '150px', position: 'fixed', marginTop: '200px' }} onClick={handleSlide}>slide Me</Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Zoom in={zoom}>
                    <img src={logo} alt='' width='200px' height='200px' />
                </Zoom>
                <Button variant='contained' color='error' sx={{ width: '150px', position: 'fixed', marginTop: '200px' }} onClick={handleZoom}>
                    Zoom Me
                </Button>
            </div>
        </Box>
    );
}

export default MuiTransition;
