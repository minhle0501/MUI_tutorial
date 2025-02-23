import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";
import { useState } from "react";

const MuiButton = () => {
    const [format, setFormat] = useState<string[]|null>(null);
    console.log({format})
    const handleFormat = (
      _event: React.MouseEvent<HTMLElement>,updatedFormat: string[] | null)=>{
        setFormat(updatedFormat);
      } 
        
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <Button variant="text" href="http://google.com">
          Text
        </Button>
        
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
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          send{" "}
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          send{" "}
        </Button>
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="vertical contained secondary button group"
        >
          <Button>left</Button>
          <Button>center</Button>
          <Button>right</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction="row">
        <ToggleButtonGroup aria-label="text formatting" value={format} onChange={handleFormat} size="small" color="success" exclusive>
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>
          <ToggleButton value="underline" aria-label="underline">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};

export default MuiButton;
