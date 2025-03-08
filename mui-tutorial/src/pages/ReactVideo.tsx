// src/pages/ReactVideo.tsx
import React from "react";
import { Container, Box } from "@mui/material";
import ReactPlayer from "react-player";
import PlayerControl from "../components/PlayerComponent/PlayerControl";
import { useState, useRef } from "react";
import screenfull from "screenfull";
import { formatTime } from "../utils/FormatTime";


const ReactVideo: React.FC = () => {
 
  const playerRef = useRef<ReactPlayer>(null);
  const playerContainerRef = useRef<HTMLDivElement | null>(null);

  const [playing, setPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0.5);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [played, setPlayed] = useState<number>(0);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);

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

  const handleVolumeSeekUp = (
    _event: React.SyntheticEvent | Event,
    newValue: number | number[]
  ) => {
    setVolume((newValue as number) / 100);
    setIsMuted((newValue as number) === 0);
  };

  const handelePlaybackRateChange = (speed: number) => {
    setPlaybackRate(speed);
  };

  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current!);
  }

  const handleProgress = (changeState: { played: number }) => {
    if (!isSeeking) {
      setPlayed(changeState.played);
    }
  };

  const handleSeekChange = (_event: Event, newValue: number | number[]) => {
    setPlayed((newValue as number) / 100);
  };

  const handleSeekMouseDown = () => {
    setIsSeeking(true);
  };

  const handleSeekMouseUp = ( _event: React.SyntheticEvent | Event,
    newValue: number | number[]) => {
    setIsSeeking(false);
    if (playerRef.current) {
      playerRef.current.seekTo((newValue as number) / 100, "fraction");
    }
  };

  const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : 0;

  const durantion = playerRef.current ? playerRef.current.getDuration() : 0;
  // time format
  const elapsedTime = formatTime(isNaN(currentTime) ? 0 : currentTime);
  //total time
  const totalDuration = formatTime(isNaN(durantion) ? 0 : durantion);;
  return (
    <Container maxWidth="md">
      <Box ref={playerContainerRef}
        component={"div"}
        sx={{ position: "relative", width: "100%", height: "100%" }}
      >
        <ReactPlayer
          ref={playerRef}
          width="100%"
          height="100%"
          playing={playing}
          muted={isMuted}
          volume={volume}
          playbackRate={playbackRate}
          onProgress={handleProgress}
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
          onVolumeSeekUp={handleVolumeSeekUp}
          volume={volume}
          playbackRate={playbackRate}
          onPlaybackRateChange={handelePlaybackRateChange}
          onToggleFullScreen={toggleFullScreen}
          played={played}
          onSeek={handleSeekChange}
          onSeekMouseUp={handleSeekMouseUp}
          onSeekMouseDown={handleSeekMouseDown}
          elapsedTime={elapsedTime}
          totalDuration={totalDuration}
          duration={durantion}
        />
      </Box>
    </Container>
  );
};

export default ReactVideo;