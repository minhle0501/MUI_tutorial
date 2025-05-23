import { Snackbar, Button,Alert,AlertProps} from "@mui/material";
import { useState,forwardRef } from "react";

const SnackbarAlert = forwardRef<HTMLDivElement,AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props}/>
    }
)
const MuiSnackBar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
     {/*  <Snackbar
        message="Form submitted"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      /> */}
      {/* Custom snackbar */}
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <SnackbarAlert onClose={handleClose} severity="success">
        Form submitted
      </SnackbarAlert>
      </Snackbar>
    </>
  );
};

export default MuiSnackBar;
