import { Stack, Chip, Avatar } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";
const MuiChip = () => {
    const [chips, setChips] = useState(['Chip1', 'Chip2', 'Chip3']);
    const handleDelete = (chipToDelete: string) => {
        setChips(chips => chips.filter((prevChips) => prevChips !== chipToDelete));
    }
  return (
    <Stack direction={"row"} spacing={1}>
      <Chip label="Chip" color="primary" size="medium" icon={<FaceIcon />} />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="medium"
        variant="outlined"
        avatar={<Avatar>CO</Avatar>}
      />
      <Chip label='Click' color='success' size='medium' onClick={() => alert('click')} />
      <Chip label='Delete' color='error' size='medium' onClick={() => alert('click')} onDelete={() => alert('delete')} />
        {chips.map((chip) => (
            <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
        ))}
    </Stack>
  );
};

export default MuiChip;
