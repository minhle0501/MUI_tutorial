import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height='200px'
          image="https://picsum.photos/200"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            component="div"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
            suscipit omnis quod, voluptates quam nesciunt accusantium
            repudiandae expedita.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn more</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default MuiCard;
