// src/pages/ReactVideo.tsx
import { Container, Box } from "@mui/material";
import ReactPlayer from "react-player";
import PlayerControl from "../components/PlayerComponent/PlayerControl";
import { useState, useRef } from "react";

const ReactVideo: React.FC = () => {
  const [playing, setPlaying] = useState<boolean>(true);
  const playerRef = useRef<ReactPlayer>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0.5);
  const [playbackRate, setPlaybackRate] = useState<number>(1);

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
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };

  const handleVolumeChange = (_event: Event, newValue: number | number[]) => {
    setVolume((newValue as number) / 100);
    setIsMuted((newValue as number) === 0);
  };

  const handleVolumeSeekDown = (
    _event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    setVolume((newValue as number) / 100);
    setIsMuted((newValue as number) === 0);
  };

  const handelePlaybackRateChange = (speed: number) => {
    setPlaybackRate(speed);
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
          muted={isMuted}
          volume={volume}
          playbackRate={playbackRate}
          url="https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
        />
        <PlayerControl
          playing={playing}
          onPlayPause={handlePlayPause}
          onRewind={handleRewind}
          onFastRewind={handleFastRewind}
          muted={isMuted}
          onMute={handleMuted}
          onVolumeChange={handleVolumeChange}
          onVolumeSeekDown={handleVolumeSeekDown}
          volume={volume}
          playbackRate={playbackRate}
          onPlaybackRateChange={handelePlaybackRateChange}
        />
      </Box>
    </Container>
  );
};

export default ReactVideo;