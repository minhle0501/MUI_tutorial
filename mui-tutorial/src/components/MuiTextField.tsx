import { Stack,TextField,InputAdornment } from '@mui/material'
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import { useState } from 'react';

const MuiTextField = () => {
    const [value, setValue] = useState('')
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    }
  return (
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
       <TextField label='name' variant='outlined'/>
       <TextField label='name' variant='filled'/>
       <TextField label='name' variant='standard'/>
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='small secondary' size='small' variant='outlined' color='secondary'/>
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='form input' required value={value} onChange={handleChange} error={!value} helperText={!value ? 'Required' : 'Do not share password'}/>
        <TextField label='form input' helperText='please input your password'/>
        <TextField label='password' type='password'/>
      </Stack>
      <TextField label='password' inputProps={{readOnly: true}}/>
      <Stack direction='row' spacing={2}>
        <TextField label='Amount' InputProps={{startAdornment: <InputAdornment position='start'>$</InputAdornment>}}/>
        <TextField label='weight' InputProps={{endAdornment: <InputAdornment position='end'>kg</InputAdornment>}}/>
        <TextField label='password' InputProps={{endAdornment: <InputAdornment position='end'><PasswordOutlinedIcon/></InputAdornment>}}/>
      </Stack>
    </Stack>
  )
}

export default MuiTextField;
