import { Stack, Button,IconButton } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="http://google.com">
          Text
        </Button>
        <Button variant="contained">contained</Button>
        <Button variant="outlined">outlined</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <Stack display='block' spacing={2} direction='row'>
        <Button variant="contained" size="small">Small</Button>
        <Button variant="contained" size="medium">medium</Button>
        <Button variant="contained" size="large">large</Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon/>} >send </Button>
        <Button variant="contained" endIcon={<SendIcon/>} disableElevation>send </Button>
        <IconButton aria-label="send" color="success" size="small"> 
          <SendIcon/>
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
