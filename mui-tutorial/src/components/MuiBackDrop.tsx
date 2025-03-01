import * as React from 'react'; 
import Backdrop from '@mui/material/Backdrop'; 
import { Box, Button, CircularProgress } from '@mui/material'; 

const MuiBackDrop = () => {
    const [show, setShow] = React.useState(false); 
    const toggle = () => { setShow(!show); }; 
  
    return ( 
        <Box style={{ margin: 100, textAlign: "center" }}>
            <Button variant="contained" onClick={toggle}  
                color="success">Fetch Data</Button> 
            <Backdrop open={show}> 
                <Box style={{  
                    backgroundColor: "white",  
                    width: 200  
                }}> 
                    <br /> 
                    <CircularProgress  
                        color="success" /><br /> 
                    <p>Fetching Data from Api...</p> 
                </Box> 
            </Backdrop> 
        </Box> 
    ); 
}

export default MuiBackDrop
