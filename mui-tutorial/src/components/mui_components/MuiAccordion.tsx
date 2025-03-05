import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpnadMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(_, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpnadMoreIcon />}
        >
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            eius? Consectetur ex rem quasi soluta repudiandae fuga autem impedit
            ipsam expedita? Cumque, provident magni? A fugiat eligendi ut
            reprehenderit molestias?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(_, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel1-content"
          expandIcon={<ExpnadMoreIcon />}
        >
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            eius? Consectetur ex rem quasi soluta repudiandae fuga autem impedit
            ipsam expedita? Cumque, provident magni? A fugiat eligendi ut
            reprehenderit molestias?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(_, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel1-content"
          expandIcon={<ExpnadMoreIcon />}
        >
          Accordion 3
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            eius? Consectetur ex rem quasi soluta repudiandae fuga autem impedit
            ipsam expedita? Cumque, provident magni? A fugiat eligendi ut
            reprehenderit molestias?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MuiAccordion;
