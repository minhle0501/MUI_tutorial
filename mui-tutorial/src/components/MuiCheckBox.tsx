import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const MuiCheckBox = () => {
  // State for Terms and Conditions checkbox
  const [acceptTnc, setAcceptTnc] = useState(false);

  // State for the skills checkboxes
  const [skills, setSkills] = useState<string[]>([]);

  console.log({ acceptTnc, skills });

  // Handle change for Terms and Conditions checkbox
  const handleTncChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnc(e.target.checked);
  };

  // Handle change for skill checkboxes
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSkills([...skills, value]); // Add skill if checked
    } else {
      setSkills(skills.filter((skill) => skill !== value)); // Remove skill if unchecked
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept the terms and conditions"
          control={<Checkbox checked={acceptTnc} onChange={handleTncChange} />}
        />
      </Box>
    
      <Checkbox
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
        checked={acceptTnc}
        onChange={handleTncChange}
      />
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            />
            <FormControlLabel
              label="JavaScript"
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default MuiCheckBox;

