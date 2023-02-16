import React, { useState } from "react";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputLabel,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Box, margin } from "@mui/system";
import { Button } from "@mui/material";
import { element } from "prop-types";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PaymentsIcon from '@mui/icons-material/Payments';


function BookingModel() {
    
   const [formErrors, setformErrors] = useState({
    errorDate:false,
    errorgender: false,
    errortest: false,
    errordoctorname: false,
    errorpaymentMode: false,
    errorBookingSlot:false,
    errorBookingSlot1:false,
   }) 
  const [inputValue, setinputValue] = useState({
    patientname: "null",
    Date: "",
    gender: "",
    test: "",
    Drname: "",
    paymentMode: "",
    BookingSlot:"",
  });
  console.log(inputValue);
//temp
let plandata=JSON.parse(localStorage.getItem("plandata"))

  const confirmBooking = () => {
    
    let error= false
    let tempDate = false
    let tempgender = false
    let temptest = false
    let tempdoctorname = false
    let temppaymentMode = false
    let tempBookingSlot = false
    let tempBookingSlot1=false

    if(inputValue.Date===""){
        tempDate=true
        error=true
    }

    if(inputValue.gender===""){
        tempgender=true
        error=true
    }

    if(inputValue.test===""){
        temptest=true
        error=true
    }

    if(inputValue.doctorname ===""){
        tempdoctorname =true
        error=true
    }

    if(inputValue.paymentMode===""){
        temppaymentMode=true
        error=true
    }

    if(inputValue.BookingSlot===""){
        tempBookingSlot=true
        error=true
    }

    if(inputValue.BookingSlot>5 || inputValue.BookingSlot<=0){
      tempBookingSlot1=true
      error=true
  }

    setformErrors({
        errorDate:tempDate,
    errorgender: tempgender,
    errortest: temptest,
    errordoctorname: tempdoctorname,
    errorpaymentMode: temppaymentMode,
    errorBookingSlot:tempBookingSlot,
    errorBookingSlot1:tempBookingSlot1,
    })

    if(error===false){
        let response = localStorage.getItem("patientData");
    let slotBook = response ? JSON.parse(response) : [];

    slotBook.push(inputValue);
    localStorage.setItem("patientData", JSON.stringify(slotBook));
    }
    
  };

  const paperStyle = {
    padding: 20,
    height: {xs: "170vh" , md:"153"},
    width: 500,
    margin: "20px auto",
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <img
            src="Images\logo.png"
            alt="image1"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50PX",
              justifyContent: "center",
              margin: "0px 12rem",
              display:"flex"
            }}
          />
          <Grid align="center">
            <h2>Book Appointment</h2>
          </Grid>
          
            <TextField
              variant="outlined"
              style={{ marginBottom: "12px" }}
              label="Patient Name"
              placeholder="Enter Patient Name"
              fullWidth
              required
              onChange={(e) => {
                setinputValue({ ...inputValue, patientname: e.target.value });
                console.log(e.target.value);
              }}
            />
            
            <TextField
              type="date"
              placeholder="Enter Booking Slot Date"
              variant="outlined"
              style={{ marginBottom: "12px" }}
              fullWidth
              required
              onChange={(e) => {
                setinputValue({ ...inputValue, Date:e.target.value });
                console.log(e.target.value);
              }}
            />
            
            {formErrors.errorDate &&  <Typography color="error">This Field Should'nt be Empty</Typography>}

            <FormControl style={{ marginBottom: "12px"}}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
              row 
                aria-labelledby="demo-row-radio-buttons-group-label"
                
                name="row-radio-buttons-group"
                onChange={(e) => {
                  setinputValue({ ...inputValue, gender: e.target.value });
                  console.log(e.target.value);
                }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            {formErrors.errorgender &&  <Typography color="error">This Field Should'nt be Empty</Typography>}

            <Box  sx={{ minWidth: 120, marginBottom: "12px", justifyContent:"center" }}>
              <FormControl fullWidth style={{ marginBottom: "12px" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ marginBottom: "12px" }}
                >
                  Select Test
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inputValue.test}
                  variant="outlined"
                  label="Select Test"
                  placeholder="Select Test"
                  onChange={(e) => {
                    setinputValue({ ...inputValue, test: e.target.value });
                    console.log(e.target.value);
                  }}

                  //   onChange={handleChange}
                >
                  {plandata.map((element)=> <MenuItem value={`${element.test}`}>{element.test}</MenuItem>)}
                </Select>
              </FormControl>
            {formErrors.errortest &&  <Typography color="error">This Field Should'nt be Empty</Typography>}
            <FormControl fullWidth style={{ marginBottom: "12px" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ marginBottom: "12px" }}
                >
                  Doctor
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inputValue.Drname}
                  variant="outlined"
                  label="Doctor"
                  placeholder="Doctor"
                  onChange={(e) => {
                    setinputValue({ ...inputValue, Drname: e.target.value });
                    console.log(e.target.value);
                  }}

                  //   onChange={handleChange}
                >
                  {plandata.map((element)=> <MenuItem value={`${element.Drname}`}>{element.Drname}</MenuItem>)}
                </Select>
              </FormControl>
            {formErrors.errordoctorname &&  <Typography color="error">This Field Should'nt be Empty</Typography>}

            <TextField
              type="text"
              placeholder="Enter Appointment Slot"
              variant="outlined"
              label="slots"
              style={{ marginBottom: "12px" }}
              fullWidth
              onChange={(e) => {
                setinputValue({ ...inputValue, BookingSlot: e.target.value });
                console.log(e.target.value);
              }}
            />
            {formErrors.errorBookingSlot &&  <Typography color="error">This Field Should'nt be Empty</Typography>}
            {formErrors.errorBookingSlot1 &&  <Typography color="error">Slot shoud be 1 to 5 only</Typography>}
              <FormControl fullWidth style={{ marginBottom: "12px" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  style={{ marginBottom: "12px" }}
                >
                  Payment Mode
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={inputValue.paymentMode}
                  label="Select Payment Mode"
                  variant="outlined"
                  placeholder="Select Payment Mode"
                  onChange={(e) => {
                    setinputValue({
                      ...inputValue,
                      paymentMode: e.target.value,
                    });
                    console.log(e.target.value);
                  }}>
                  <MenuItem value={"UPI"}>UPI<PaymentsIcon sx={{display:"flex", color:"#fb8c00"}} /></MenuItem>
                  <MenuItem value={"NetBanking"}>NetBanking<CreditCardIcon sx={{display:"flex", color:"#0d47a1"}} /></MenuItem>
                  <MenuItem  value={"Cash"}>Cash<CurrencyRupeeIcon sx={{display:"flex", color:"#1b5e20"}} /></MenuItem>
                </Select>
              </FormControl>
              
            {formErrors.errorpaymentMode &&  <Typography color="error">This Field Should'nt be Empty</Typography>}
            <Grid>
            <Button variant="contained" 
            sx={{backgroundColor:'#64b5f6'}}
           
            // sx={{ marginLeft:'2%', backgroundColor:'#64b5f6', marginTop:{xs:'10px',md:'70px'}}} 
            onClick={()=>{
                    confirmBooking()
                  }} >Confirm Booking</Button>
              </Grid>
            </Box>
           
         
        </Paper>
      </Grid>
    </Box>
  );
}

export default BookingModel;
