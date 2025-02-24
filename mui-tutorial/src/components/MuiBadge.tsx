import { Mail } from "@mui/icons-material"
import { Stack,Badge } from "@mui/material"


const MuiBadge = () => {
  return (
    <div>
      <Stack spacing={2} direction={'row'}>
        <Badge badgeContent={5} color="primary">
            <Mail/>
        </Badge>
        <Badge badgeContent={0} color="secondary" showZero>
            <Mail/>
        </Badge>
        <Badge badgeContent={1000} color="secondary" max={999}>
            <Mail/>
        </Badge>
        {/* invisible={true} */}
        <Badge variant="dot" color="primary">
            <Mail/>
        </Badge>
         </Stack>
    </div>
  )
}

export default MuiBadge
