import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Slider,
  Popover,
  List,
  ListItemButton,
} from "@mui/material";
import {
  FastRewind,
  FastForward,
  PlayArrow,
  Pause,
  VolumeOff,
  VolumeUp,
  Fullscreen,
  Bookmark as BookMarkIcon,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useState } from "react";

const speeds: string[] = ["0.5x", "1x", "1.5x", "2x"];

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
});

interface PlayerControlProps {
  playing: boolean;
  onPlayPause: () => void;
  onRewind: () => void;
  onFastRewind: () => void;
  muted: boolean;
  onMute: () => void;
  onVolumeChange: (event: Event, newValue: number | number[]) => void;
  onVolumeSeekDown: (
    event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => void;
  volume: number;
}

const PlayerControl: React.FC<PlayerControlProps> = ({
  onPlayPause,
  playing,
  onRewind,
  onFastRewind,
  muted,
  onMute,
  onVolumeChange,
  onVolumeSeekDown,
  volume,
}) => {
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
      {/* Header Control */}
      <Grid container alignItems="center" justifyContent="space-between" p={2}>
        <Typography variant="h5" color="white">
          Video Title
        </Typography>
        <Button variant="contained" color="primary" startIcon={<BookMarkIcon />}>
          Bookmark
        </Button>
      </Grid>

      {/* Player Controls */}
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
        <IconButton onClick={onRewind} sx={PlayPauseButton}>
          <FastRewind fontSize="inherit" />
        </IconButton>

        <IconButton onClick={onPlayPause} sx={PlayPauseButton}>
          {playing ? (
            <Pause fontSize="large" />
          ) : (
            <PlayArrow fontSize="large" />
          )}
        </IconButton>

        <IconButton onClick={onFastRewind} sx={PlayPauseButton}>
          <FastForward fontSize="inherit" />
        </IconButton>
      </Grid>

      {/* Bottom Control */}
      <Grid container justifyContent="space-between" alignItems="center" p={2}>
        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            defaultValue={30}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <Grid container alignItems="center">
            <IconButton onClick={onPlayPause} sx={bottemButton}>
              {playing ? (
                <Pause fontSize="large" />
              ) : (
                <PlayArrow fontSize="large" />
              )}
            </IconButton>

            <IconButton onClick={onMute} sx={bottemButton}>
              {muted ? (
                <VolumeOff fontSize="large" />
              ) : (
                <VolumeUp fontSize="large" />
              )}
            </IconButton>
            <Slider
              min={0}
              max={100}
              value={volume * 100}
              sx={{ color: "#ccc", width: 100 }}
              onChange={onVolumeChange}
              onChangeCommitted={onVolumeSeekDown}
            />
            <Button variant="text" style={{ color: "#fff", marginLeft: 16 }}>
              <Typography>05:05</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid item>
          <Button variant="text" sx={bottemButton} onClick={handleClickPopover}>
            <Typography>1x</Typography>
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <List>
              {speeds.map((speed) => (
                <ListItemButton
                  key={speed}
                  onClick={() => console.log(`Chọn tốc độ: ${speed}`)}
                >
                  <Typography color="secondary">{speed}</Typography>
                </ListItemButton>
              ))}
            </List>
          </Popover>
          <IconButton sx={bottemButton}>
            <Fullscreen fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlayerControl;