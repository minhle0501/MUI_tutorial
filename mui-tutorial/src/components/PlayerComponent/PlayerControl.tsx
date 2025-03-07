import {
    Box,
    Grid,
    Typography,
    Button,
    IconButton,
    Slider,
    Popover,
    List,
    ListItemButton
  } from "@mui/material";
  import { FastRewind, FastForward, PlayArrow,} from "@mui/icons-material";
  import BookMarkIcon from "@mui/icons-material/Bookmark";
  import { styled } from "@mui/material/styles";
  import { VolumeUp } from "@mui/icons-material";
  import { Fullscreen } from "@mui/icons-material";
  import { useState } from "react";

  
  const speeds = ["0.5x", "1x", "1.5x", "2x"];

  const PlayPauseButton = {
    fontSize: 40,
    color: "#ccc",
    transition: "transform 0.3s ease, color 0.3s ease",
    padding: "10px",
    "&:hover": {
      color: "white",
      transform: "scale(1.1)",
    },
  };

  const bottemButton = {
    fontSize: 40,
    color: "#ccc",
    transition: "transform 0.3s ease, color 0.3s ease",
    padding: "10px",
    "&:hover": {
      color: "white",
      transform: "scale(1.1)",
    },
  };

  const PrettoSlider = styled(Slider)({
    color: "white",
    height: 8,
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-thumb": {
      height: 24,
      width: 24,
      backgroundColor: "#fff",
      border: "2px solid currentColor",
      "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
        boxShadow: "inherit",
      },
      "&::before": {
        display: "none",
      },
    },
    "& .MuiSlider-valueLabel": {
      lineHeight: 1.2,
      fontSize: 12,
      background: "unset",
      padding: 0,
      width: 32,
      height: 32,
      borderRadius: "50% 50% 50% 0",
      backgroundColor: "#000000",
      transformOrigin: "bottom left",
      transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
      "&::before": { display: "none" },
      "&.MuiSlider-valueLabelOpen": {
        transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
      },
      "& > *": {
        transform: "rotate(45deg)",
      },
    },
  });
const PlayerControl = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClickPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? "playbackground-popover" : undefined;
  
  return (
    <Box
    sx={{
      position: "absolute",
      bottom: 0,
      top: 0,
      left: 0,
      right: 0,
      display: "flex",
      background: "rgba(0, 0, 0, 0.5)",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 1,
    }}
  >
    {/* header control */}
    <Grid
      container
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      style={{ padding: "16px" }}
    >
      <Grid item>
        <Typography variant="h5" color="white">
          Video Title
        </Typography>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          color="primary"
          startIcon={<BookMarkIcon />}
        >
          Bookmark
        </Button>
      </Grid>
    </Grid>

    {/* player controls */}
    <Grid
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <IconButton sx={PlayPauseButton} aria-label="requied">
        <FastRewind fontSize="inherit" />
      </IconButton>

      <IconButton sx={PlayPauseButton} aria-label="requied">
        <PlayArrow fontSize="inherit" />
      </IconButton>

      <IconButton sx={PlayPauseButton} aria-label="requied">
        <FastForward fontSize="inherit" />
      </IconButton>
    </Grid>

    {/* bottem control */}
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      p={2}
    >
      {/* video time ine */}
      <Grid item xs={12}>
        <PrettoSlider
          min={0}
          max={100}
          defaultValue={20}
          valueLabelDisplay="auto"
        />
      </Grid>
      {/* left botton */}
      <Grid item>
        <Grid container alignItems={"center"} direction={"row"}>
          <IconButton sx={bottemButton}>
            <PlayArrow fontSize="large" />
          </IconButton>

          <IconButton sx={bottemButton}>
            <VolumeUp fontSize="large" />
          </IconButton>

          {/* slider volume */}
          <Slider
            min={0}
            max={100}
            defaultValue={100}
            sx={{ color: "#ccc", width: 100 }}
          />

          <Button
            variant="text"
            style={{ color: "#fff", marginLeft: 16 }}
          >
            <Typography>05:05</Typography>
          </Button>
        </Grid>
      </Grid>

      {/* right botton */}
      <Grid item>
        <Button
          variant="text"
          sx={bottemButton}
          onClick={handleClickPopover}
        >
          <Typography>1x</Typography>
        </Button>

        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
        >
          <Grid container direction="column-reverse">
            <List>
              {speeds.map((speed) => (
               <ListItemButton
               component="li"
               key={speed}
               onClick={() => console.log(`Chọn tốc độ: ${speed}`)}
               sx={{
                 justifyContent: "center",
                 "&:hover": { background: "#ccc" },
               }}
             >
               <Typography color="secondary">{speed}</Typography>
             </ListItemButton>
              ))}
            </List>
          </Grid>
        </Popover>

        <IconButton sx={bottemButton}>
          <Fullscreen fontSize="large" />
        </IconButton>
      </Grid>
    </Grid>
  </Box>
  )
}

export default PlayerControl
