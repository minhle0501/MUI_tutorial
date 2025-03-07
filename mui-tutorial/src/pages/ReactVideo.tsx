// src/pages/ReactVideo.tsx
import { Container, Box } from "@mui/material";
import ReactPlayer from "react-player";
import PlayerControl from "../components/PlayerComponent/PlayerControl";
import { useState, useRef } from "react";

const ReactVideo: React.FC = () => {
  const [playing, setPlaying] = useState<boolean>(true);
  const playerRef = useRef<ReactPlayer>(null);
  const [muted, setMuted] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0.5);

  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  const handleRewind = () => {
    playerRef.current?.seekTo(playerRef.current.getCurrentTime() - 10);
  };
  const handleFastRewind = () => {
    playerRef.current?.seekTo(playerRef.current.getCurrentTime() + 10);
  };
  const handleMuted = () => {
    setMuted((prevMuted) => !prevMuted);
  };

  const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
    setVolume((newValue as number) / 100);
    setMuted((newValue as number) === 0);
  };

  const handleVolumeSeekDown = (
    _event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    setVolume((newValue as number) / 100);
    setMuted((newValue as number) === 0);
  };

  return (
    <Container maxWidth="md">
      <Box
        component={"div"}
        sx={{ position: "relative", width: "100%", height: "100%" }}
      >
        <ReactPlayer
          ref={playerRef}
          width="100%"
          height="auto"
          playing={playing}
          muted={muted}
          volume={volume}
          url="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
        />
        <PlayerControl
          playing={playing}
          onPlayPause={handlePlayPause}
          onRewind={handleRewind}
          onFastRewind={handleFastRewind}
          muted={muted}
          onMute={handleMuted}
          onVolumeChange={handleVolumeChange}
          onVolumeSeekDown={handleVolumeSeekDown}
          volume={volume}
        />
      </Box>
    </Container>
  );
};

export default ReactVideo;