import { Card, CardContent,Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { useState } from 'react';
import './PlansPrice.css'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';


const plan = [{
   
    test: "Blood Test",
    Price: "$500",
    Drname: "Dr.Alisha",
    availableslot: 5,


},
{
    test: "Sugar Test",
    Price: "$700",
    Drname: "Dr.Wisdom",
    availableslot: 5,
},
{
    test: "Tyroid Test",
    Price: "$800",
    Drname: "Dr.Edward",
    availableslot: 5,
},
{
    test: "Covid 19 Test",
    Price: "$900",
    Drname: "Dr.Jenny",
    availableslot: 5,
},
{
    test: "Bp Test",
    Price: "$500",
    Drname: "Dr.Charles",
    availableslot: 5,
},
{
    test: "Hiv Test",
    Price: "$2000",
    Drname: "Dr.Mark",
    availableslot: 5,
},
{
    test: "CT scans ",
    Price: "$5000",
    Drname: "Dr.David",
    availableslot: 5,
},
{
    test: "Urine Test ",
    Price: "$200",
    Drname: "Dr.Drake ramory",
    availableslot: 5,
},
{
    test: "Diabetes ",
    Price: "$500",
    Drname: "Dr.Smith",
    availableslot: 5,
},
{
    test: "Malaria Test ",
    Price: "$50",
    Drname: "Dr.Paul",
    availableslot: 5,
},
{
    test: "kidney Test ",
    Price: "$100",
    Drname: "Dr.James",
    availableslot: 5,
},
{
    test: "Eye Test ",
    Price: "$100",
    Drname: "Dr.Patra   ",
    availableslot: 5,
},

];


localStorage.setItem("plandata",JSON.stringify(plan))
function PlanpriceCard() {

const [planData, setPlanDtata] = useState(plan)
    
  let lps = localStorage.getItem("data")

  let local = lps ? JSON.parse(lps):[]
     local.push(planData)
    localStorage.setItem("data",JSON.stringify(local));

    

    return (
        <>
        <Container className='card'> 
       

            <div className='cardbody'>
            {plan.map((element,index)=>(
        <Card className='cordsize'>
      <CardContent key={index}>
      <td>
       {<BloodtypeIcon style={{backgroundColor:'white',color:'red',height:30,width:40,borderRadius:'50%'}}/>}
         
        </td>
        <Typography sx={{fontFamily:'initial',fontWeight:'bolder'}} className='text'   gutterBottom variant="h5" component="div">Test={element.test}</Typography>
        <Typography sx={{fontFamily:'initial'}} className='textc' gutterBottom variant="h5" component="div">Price={element.Price}</Typography>
        <Typography sx={{fontFamily:'initial'}} className='textc' gutterBottom variant="h5" component="div">DR.Name={element.Drname}</Typography>
        <Typography sx={{fontFamily:'initial'}} className='textc' gutterBottom variant="h5" component="div">Available Slot={element.availableslot}</Typography>
        

      </CardContent>
      </Card>
       ))}
            </div>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      

       </Container>
        </>
    )
}

export default PlanpriceCard