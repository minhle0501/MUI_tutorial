import { Stack ,CircularProgress,LinearProgress} from "@mui/material"

const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress/>
      <CircularProgress color="warning"/>
      <CircularProgress color="success" variant="determinate" value={60}/>
      <LinearProgress/>
        <LinearProgress color="warning"/>
      <LinearProgress color="success" variant="determinate" value={60}/>
    </Stack>
  )
}

export default MuiProgress
