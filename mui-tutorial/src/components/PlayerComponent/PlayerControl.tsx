import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Slider,
  Menu,
  List,
  ListItemButton,
} from "@mui/material";
import {
  Replay10,
  Forward10,
  PlayArrow,
  Pause,
  VolumeOff,
  VolumeUp,
  Fullscreen,
  Bookmark as BookMarkIcon,
  FastForward,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { formatTime } from "../../utils/FormatTime";

const speeds: number[] = [0.5, 1, 1.5, 2];

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
  playing?: boolean;
  onPlayPause?: () => void;
  onRewind?: () => void;
  onFastRewind?: () => void;
  muted?: boolean;
  onMute?: () => void;
  onVolumeChange?: (event: Event, newValue: number | number[]) => void;
  onVolumeSeekUp?: (
    event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => void;
  volume: number;
  playbackRate?: number;
  onPlaybackRateChange?: (rate: number) => void;
  onToggleFullScreen?: () => void;
  played: number;
  onSeek?: (event: Event, newValue: number | number[]) => void;
  onSeekMouseDown?: (event: React.MouseEvent<HTMLElement>) => void;
  onSeekMouseUp?: (
    event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => void;
  elapsedTime: string;
  totalDuration?: string;
  duration?: number;
  onChangeTimeDisplayFormat?: () => void;
  onFastForward?: () => void;
}

const PlayerControl: React.FC<PlayerControlProps> = ({
  onPlayPause,
  playing,
  onRewind,
  onFastRewind,
  muted,
  onMute,
  onVolumeChange,
  onVolumeSeekUp,
  volume,
  playbackRate,
  onPlaybackRateChange,
  onToggleFullScreen,
  played,
  onSeek,
  onSeekMouseUp,
  onSeekMouseDown,
  elapsedTime,
  totalDuration,
  duration = 0,
  onChangeTimeDisplayFormat,
  onFastForward,
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
        <Button variant="outlined">
          <BookMarkIcon />
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
          <Replay10 fontSize="medium" />
        </IconButton>

        <IconButton onClick={onPlayPause} sx={PlayPauseButton}>
          {playing ? (
            <Pause fontSize="inherit" />
          ) : (
            <PlayArrow fontSize="inherit" />
          )}
        </IconButton>

        <IconButton onClick={onFastRewind} sx={PlayPauseButton}>
          <Forward10 fontSize="medium" />
        </IconButton>
      </Grid>

      {/* Bottom Control */}
      <Grid container justifyContent="space-between" alignItems="center" p={2}>
        <Grid item xs={12}>
          <PrettoSlider
            min={0}
            max={100}
            value={played * 100}
            // Cho hiển thị label khi drag
            valueLabelDisplay="auto"
            // Dùng valueLabelFormat để hiển thị thời gian
            valueLabelFormat={(value: number) => {
              // Tính ra giây
              const current = (value / 100) * duration;
              return formatTime(current);
            }}
            onChange={onSeek}
            onMouseDown={onSeekMouseDown}
            onChangeCommitted={onSeekMouseUp}
          />
        </Grid>
        <Grid item>
          <Grid container alignItems="center">
            <IconButton onClick={onPlayPause} sx={bottemButton}>
              {playing ? (
                <Pause fontSize="inherit" />
              ) : (
                <PlayArrow fontSize="inherit" />
              )}
            </IconButton>
            <IconButton onClick={onFastForward} sx={bottemButton}>
              <FastForward fontSize="large" />
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
              onChangeCommitted={onVolumeSeekUp}
            />
            <Button
              onClick={onChangeTimeDisplayFormat}
              variant="text"
              style={{ color: "#fff", marginLeft: 16 }}
            >
              <Typography>
                {elapsedTime}/{totalDuration}
              </Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid item>
          <Button variant="text" sx={bottemButton} onClick={handleClickPopover}>
            <Typography>{playbackRate} x</Typography>
          </Button>
          <Menu
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            transformOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <List>
              <Typography alignItems={"center"} p={1} color="black">
                speed
              </Typography>
              {speeds.map((speed) => (
                <ListItemButton
                  key={speed}
                  onClick={() => {
                    if (onPlaybackRateChange) {
                      onPlaybackRateChange(speed);
                    }
                    handleClose();
                  }}
                >
                  <Typography
                    color={speed === playbackRate ? "primary" : "black"}
                  >
                    {speed} x
                  </Typography>
                </ListItemButton>
              ))}
            </List>
          </Menu>
          <IconButton onClick={onToggleFullScreen} sx={bottemButton}>
            <Fullscreen fontSize="large" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PlayerControl;
