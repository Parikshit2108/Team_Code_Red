import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../plansprice/PlansPrice.css'

const currencies = [
    {
      value: 'Blood Test',
      label: 'Blood Test',
    },
    {
      value: 'Sugar Test',
      label: 'Sugar Test',
    },
    {
      value: 'Thyroid Test',
      label: 'Thyroid Test',
    },
    {
      value: 'Covid Test',
      label: 'Covid Test',
    },
  ];

  const slotes = [
    {
      value: 'USD',
      label: '9:30Am',
    },
    {
      value: 'EUR',
      label: '1:30Pm',
    },
    {
      value: 'BTC',
      label: '5:30pm',
    },
    
  ];

function PlansPrice() {
  return (
    <div>
      <center>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
            
         <TextField
          id="outlined-basic"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField><br />

        <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br />
        
        <TextField id="outlined-basic" label="Outlined" variant="outlined" /><br />

        <TextField
          id="outlined-basic"
          select
          label="Select"
          defaultValue=""
          helperText="Please select your currency"
        >
          {slotes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>

        </center>
        
    </div>
  )
}

export default PlansPrice