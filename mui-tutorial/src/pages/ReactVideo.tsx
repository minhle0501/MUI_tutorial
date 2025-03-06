import {
  Container,
  Box,
} from "@mui/material";

import ReactPlayer from "react-player";
import PlayerControl from "../components/mui_components/PlayerComponent/PlayerControl";
const ReactVideo = () => {
 

  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ position: "relative", width: "100%" }}>
          <ReactPlayer
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          />
          <PlayerControl />
        </Box>
      </Container>
    </>
  );
};

export default ReactVideo;
