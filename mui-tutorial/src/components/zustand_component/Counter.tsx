import { Button, Container, Typography, Box } from "@mui/material";
import { useCounterStore } from "../../store/useCounterStore";
const Counter: React.FC = () => {
  const { count, increment, decrement, reset } = useCounterStore();

  return (
    <Container sx={{ textAlign: "center", marginTop: 5 }}>
      <Typography variant="h3" gutterBottom>
        Counter
      </Typography>
      <Typography variant="h4">{count}</Typography>
      <Box sx={{ marginTop: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={decrement}
          sx={{ marginLeft: 1 }}
        >
          -
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={reset}
          sx={{ marginLeft: 1 }}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={increment}
          sx={{ marginLeft: 1 }}
        >
          +
        </Button>
      </Box>
    </Container>
  );
};

export default Counter;
