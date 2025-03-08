// src/pages/ReactVideo.tsx
import React from "react";
import { Container, Box } from "@mui/material";
import ReactPlayer from "react-player";
import PlayerControl from "../components/PlayerComponent/PlayerControl";
import { useState, useRef } from "react";
import screenfull from "screenfull";
//formatTime chuyển đổi số giay mm:ss 
import { formatTime } from "../utils/FormatTime";

const ReactVideo: React.FC = () => {
  // ref to ReactPlayer
  const playerRef = useRef<ReactPlayer>(null);
    // ref to container chứa video, dùng để fullscreen
  const playerContainerRef = useRef<HTMLDivElement | null>(null);

  const [playing, setPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [volume, setVolume] = useState<number>(0.5);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [played, setPlayed] = useState<number>(0);
  const [isSeeking, setIsSeeking] = useState<boolean>(false);
  const [timeDisplayFormat, setTimeDisplayFormat] = useState<string>("normal");

  const handlePlayPause = () => {
    setPlaying((prev) => !prev);
  };

  const handleRewind = () => {
    playerRef.current?.seekTo(playerRef.current.getCurrentTime() - 10);
  };
  const handleFastRewind = () => {
    playerRef.current?.seekTo(playerRef.current.getCurrentTime() + 10);
  };
  const handleFastForward = () => {
    if (playerRef.current) {
      const duration = playerRef.current.getDuration();
      playerRef.current.seekTo(duration);
    }
  };
  
  const handleMuted = () => {
    setIsMuted((prevIsMuted) => !prevIsMuted);
  };
  // volume use Slider 
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

  //speed (0.5, 1, 1.5, 2)
  const handelePlaybackRateChange = (speed: number) => {
    setPlaybackRate(speed);
  };
  // Fullscreen
  const toggleFullScreen = () => {
    screenfull.toggle(playerContainerRef.current!);
  }
 //Sự kiện onProgress của ReactPlayer dược gọi liên tục khi video phát
  const handleProgress = (changeState: { played: number }) => {
    // Nếu người dùng không kéo thanh, thì cập nhật progress
    if (!isSeeking) {
      setPlayed(changeState.played);
    }
  };

  //Xử lý thay đổi khi kéo thanh seek
  const handleSeekChange = (_event: Event, newValue: number | number[]) => {
    setPlayed((newValue as number) / 100);
  };
  //Khi người dùng bắt đầu kéo thanh seek
  const handleSeekMouseDown = () => {
    setIsSeeking(true);
  };
  //Khi người dùng kết thúc kéo thanh seek
  const handleSeekMouseUp = ( _event: React.SyntheticEvent | Event,
    newValue: number | number[]) => {
    setIsSeeking(false);
    if (playerRef.current) {
       // Seek đến vị trí mới
      playerRef.current.seekTo((newValue as number) / 100, "fraction");
    }
  };
 //remaining time format   
  const handleChangeTimeDisplayFormat = () => {
    setTimeDisplayFormat(
      timeDisplayFormat === "normal" ? "remaining" : "normal"
    ); 
  }
  const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : 0;

  const durantion = playerRef.current ? playerRef.current.getDuration() : 0;
  /* time format  - Nếu "normal", hiển thị thời gian đã trôi (currentTime).
   *  - Nếu "remaining", hiển thị thời gian còn lại (duration - currentTime). */
  const elapsedTime = timeDisplayFormat === "normal" ? formatTime(isNaN(currentTime) ? 0 : currentTime) : `-${formatTime(isNaN(durantion - currentTime) ? 0 : durantion -currentTime)}` ;
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
          onChangeTimeDisplayFormat={handleChangeTimeDisplayFormat}
          onFastForward={handleFastForward}
        />
      </Box>
    </Container>
  );
};

export default ReactVideo;