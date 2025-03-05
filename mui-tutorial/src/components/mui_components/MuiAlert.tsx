import { Stack, Alert, AlertTitle,Button } from "@mui/material";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert — check it out!</Alert>
      <Alert severity="warning">This is an warning alert — check it out!</Alert>
      <Alert severity="info">This is an info alert — check it out!</Alert>
      <Alert severity="success">This is an success alert — check it out!</Alert>

      <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an warning alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an success alert — check it out!
      </Alert>

      <Alert variant="filled" severity="error" onClose={()=>alert('close')}>
        <AlertTitle>Error</AlertTitle>
        This is an error alert — check it out!
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>warning</AlertTitle>
        This is an warning alert — check it out!
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>info</AlertTitle>
        This is an info alert — check it out!
      </Alert>
      <Alert variant="filled" severity="success" action={<Button color="inherit" size="small">UNDO</Button>}>
        <AlertTitle>Success</AlertTitle> 
        This is an success alert — check it
        out!
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
