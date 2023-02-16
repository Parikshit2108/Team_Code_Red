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

function BookingModel() {
    
   const [formErrors, setformErrors] = useState({
    errorDate:false,
    errorgender: false,
    errortest: false,
    errordoctorname: false,
    errorpaymentMode: false,
    errorBookingSlot:false,
   }) 
  const [inputValue, setinputValue] = useState({
    patientname: "null",
    Date: "",
    gender: "",
    test: "",
    doctorname: "",
    paymentMode: "",
    BookingSlot:"",
  });
  console.log(inputValue);


  const confirmBooking = () => {
    
    let error= false
    let tempDate = false
    let tempgender = false
    let temptest = false
    let tempdoctorname = false
    let temppaymentMode = false
    let tempBookingSlot = false

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

    if(inputValue.doctorname===""){
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
    setformErrors({
        errorDate:tempDate,
    errorgender: tempgender,
    errortest: temptest,
    errordoctorname: tempdoctorname,
    errorpaymentMode: temppaymentMode,
    errorBookingSlot:tempBookingSlot,
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
    height: "153vh",
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

            <FormControl style={{ marginBottom: "12px" }}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                
                name="radio-buttons-group"
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
                  <MenuItem value={"Blood Test"}>Blood Test</MenuItem>
                  <MenuItem value={"Sugar Test"}>Sugar Test</MenuItem>
                  <MenuItem value={"Tyroid Test"}>Tyroid Test</MenuItem>
                  <MenuItem value={"Covid 19 Test"}>Covid 19 Test</MenuItem>
                  <MenuItem value={"BP Test"}>BP Test</MenuItem>
                  <MenuItem value={"HIV Test"}>HIV Test</MenuItem>
                  <MenuItem value={"CT Scan"}>CT Scan</MenuItem>
                  <MenuItem value={"Urine Test"}>Urine Test</MenuItem>
                  <MenuItem value={"Diabetes"}>Diabetes</MenuItem>
                  <MenuItem value={"Malaria Test"}>Malaria Test</MenuItem>
                  <MenuItem value={"Kidney Test"}>Kidney Test</MenuItem>
                  <MenuItem value={"Eye Test"}>Eye Test</MenuItem>
                </Select>
              </FormControl>
            {formErrors.errortest &&  <Typography color="error">This Field Should'nt be Empty</Typography>}

              <TextField
              variant="outlined"
              style={{ marginBottom: "12px" }}
              label="Doctor Name"
              placeholder="Enter Doctor Name"
              fullWidth
              onChange={(e) => {
                setinputValue({ ...inputValue, doctorname: e.target.value });
                console.log(e.target.value);
              }}
            />
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
                  <MenuItem value={"UPI"}>UPI</MenuItem>
                  <MenuItem value={"NetBanking"}>NetBanking</MenuItem>
                  <MenuItem value={"Cash"}>Cash</MenuItem>
                </Select>
              </FormControl>
            {formErrors.errorpaymentMode &&  <Typography color="error">This Field Should'nt be Empty</Typography>}
            
            <Button variant="contained" 
           
            sx={{ marginLeft:'32%', backgroundColor:'#64b5f6', marginTop:{xs:'0',md:'140px'}}} 
            onClick={()=>{
                    confirmBooking()
                  }} >Confirm Booking</Button>
              
            </Box>
           
         
        </Paper>
      </Grid>
    </Box>
  );
}

export default BookingModel;
