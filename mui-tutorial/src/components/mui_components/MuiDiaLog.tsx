import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import { useState } from "react";

const MuiDiaLog = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open DiaLog</Button>
      <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="dialog-title" aria-describedby="dialog-description">
        <DialogTitle id='dialog-title'>Submit the test</DialogTitle>
        <DialogContent>
            <DialogContentText>Are you sure to submit the test? You will not be able to edit after submitting</DialogContentText>
            <DialogActions>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button autoFocus onClick={() => setOpen(false)}>Submit</Button>
            </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MuiDiaLog;
