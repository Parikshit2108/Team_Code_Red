import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../plansprice/PlansPrice.css'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { Button, Card, CardContent, InputAdornment } from '@mui/material';
import { Container } from '@mui/system';
import { useState } from 'react';

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
  {
    value: 'Bp Test',
    label: 'Bp Test',
  },
  {
    value: 'Hiv Test',
    label: 'Hiv Test',
  },
  {
    value: 'CT Scans',
    label: 'CT scans',
  },
  {
    value: 'Kidney Test',
    label: 'Kindney Test',
  },
  {
    value: 'Malaria Test',
    label: 'Malaria Test',
  },
  {
    value: 'Diabetes Test',
    label: 'Diabetes Test',
  },
  ];
// const plan=[{
//   test:"Blood Test",
//   Price:"500",
//   Drname:"abcd",
//   availableslot:5,

// },
// {test:"Sugar Test",
// Price:"500",
// Drname:"abcd",
// availableslot:5,}


  
const price = [
  {
    value: 'Blood Test price $1500',
    label: 'Blood Test Price $1500',
  },
  {
    value: 'Sugar Test Price $1200',
    label: 'Sugar Test price $1200',
  },
  {
    value: 'Thyroid Test Price $2500',
    label: 'Thyroid Test price $2500',
  },
  {
    value: 'Covid Test Price $4000',
    label: 'Covid Test price $4000',
  },
  {
    value: 'Bp Test Price $3000',
    label: 'Bp Test price $3000',
  },
  {
    value: 'Hiv Test Price &7000',
    label: 'Hiv Test price $7000',
  },
  {
    value: 'CT Scans price $23000',
    label: 'CT scans price $23000',
  },
  {
    value: 'Kidney Test Price $4000',
    label: 'Kindney Test price $4000',
  },
  {
    value: 'Malaria Test Price $6000',
    label: 'Malaria Test price $6000',
  },
  {
    value: 'Diabetes Test Price $5000',
    label: 'Diabetes Test price $5000',
  },

];

const Dr = [
  {
    value: 'Dr.prem',
    label: 'Dr.prem',
  },
  {
    value: 'Dr.Mounika',
    label: 'Dr.Mounika',
  },
  {
    value: 'Dr.samanth',
    label: 'Dr.Samanth',
  },
  {
    value: 'Dr.Pallavi',
    label: 'Dr.Pallavi',
  },
  {
    value: 'Dr.Sheetal',
    label: 'Dr.Sheetal',
  },
  {
    value: 'Dr.Suhel',
    label: 'Dr.Suhel',
  },
  
];


  const slotes = [
    {
      value: 'morning 9:30Am',
      label: '9:30Am',
    },
    {
      value: 'affernoon 1:30Pm',
      label: '1:30Pm',
    },
    {
      value: 'evining 5:30Pm',
      label: '5:30pm',
    },
    
  ];

function PlansPrice() {

  const [planData, setPlanData] = useState([]);


  
  let lps = localStorage.getItem("data")

  let local = lps ? JSON.parse(lps):[]


  let addData=()=>{
    local.push(planData)
    localStorage.setItem("data",JSON.stringify(local));
  }
  return (
    <>
    <Container >
      
      <div className='doct'>
        

       

      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <h1 className='text'>Please Select you Plan</h1>
      
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1.5, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
        
            
         <TextField
          id="outlined-basic"
          select
          label="Select Plan"
          onChange={(e)=>setPlanData({...planData,plan:e.target.value})} value={planData.plan}
          
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField><br />

        <TextField
          id="outlined-basic"
          select
          label="$ Select Price"
          // defaultValue="Blood Test Price $1500"
          onChange={(e)=>setPlanData({...planData,price:e.target.value})} value={planData.price}
          
          helperText="Please select your currency"
        >
          {price.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <br />
        
        <TextField
          id="outlined-basic"
          select
          
          label="Select Doctor"
          onChange={(e)=>setPlanData({...planData,doctor:e.target.value})} value={planData.doctor}
       
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonPinIcon />
              </InputAdornment>
  )}}
        
          
          helperText="Please select your currency"
        >
          {Dr.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField><br />

        <TextField
          id="outlined-basic"
          select
          label="Select slote"
          onChange={(e)=>setPlanData({...planData,slote:e.target.value})} value={planData.slote}
          
          helperText="Please select your currency"
        >
          {slotes.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </Box>
        
        <Button onClick={addData}>Submit</Button>

        
        </CardContent>
        </Card>
        </div>
        </Container>
        
    </>
  )
}

export default PlansPrice