import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@mui/material";
import "../App.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Hospital Information & Management System",
    imgPath: "	https://www.karexpert.com/wp-content/uploads/2022/04/HIMS-1.webp",
  },
  {
    label: "EMR & EHR",
    imgPath:
      "	https://www.karexpert.com/wp-content/uploads/2022/04/EMR-hero-1.webp",
  },
  {
    label: "Laboratory Information Management",
    imgPath:
      "	https://www.karexpert.com/wp-content/uploads/2022/04/Lims-hero_7.webp",
  },
  {
    label: "Radiological Systems",
    imgPath:
      "	https://www.karexpert.com/wp-content/uploads/2022/04/RIS-hero.webp",
  },
  {
    label: "Emergency Management",
    imgPath:
      "	https://www.karexpert.com/wp-content/uploads/2022/04/ambulance-hero.webp",
  },
  {
    label: "Health and Test Report",
    imgPath:
      "	https://www.karexpert.com/wp-content/uploads/2022/04/ambulance-3.webp ",
  },
  {
    label: " Test Evaluations ",
    imgPath: "https://www.karexpert.com/wp-content/uploads/2022/04/lims-4.webp",
  },
  {
    label: "Intigrated Staff",
    imgPath:
      "	https://www.karexpert.com/wp-content/uploads/2022/04/disruption-section-3.webp ",
  },
];

function About() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Paper
        elevation={20}
        sx={{
          marginTop: 5,
          marginBottom: 10,
          marginLeft: { xs: 0, md: 10 },
          marginRight: { xs: 0, md: 10 },
          borderRadius: 5,
          bgcolor: "#e3f2fd",
          display: { xs: "block", md: "inline-flex" },
        }}
      >
        <Grid container>
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                maxWidth: 900,
                flexGrow: 2,
                borderRadius: 5,
                bgcolor: "",
                textJustify: "unset",
                // border: 2,
                height: 600,
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                className="about"
                variant="h3"
                // sx={{  color: "#fb8c00" }}
              >
                {" "}
                ABOUT US{" "}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontFamily: "cursive" }}>
                Our Clinic is a non-profit worldwide leader in medical care for
                everyone who needs healing. Patients traveling internationally
                are provided timely diagnostic and specialty care in a place
                designed to feel a little more like home. Here, patients have
                access to all medical and surgical sub-specialties within a
                single institution, empowering the medical team to address all
                the patient's health needs and treat the whole person.{" "}
              </Typography>
              <Button
                variant="contained"
                sx={{ marginTop: { lg: "230px", xs: "50px", md: "100px" } }}
              >
                Book Your Appointment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ maxWidth: 900, flexGrow: 2 }}>
              <Paper
                square
                elevation={5}
                sx={{
                  display: "block",
                  alignItems: "center",
                  width: { md: "100%" },
                  height: { md: 50, xs: 60 },
                  pl: 2,
                  bgcolor: "Highlight",
                  borderRadius: 3,
                  marginTop: 3,
                  marginRight: 1,
                  marginLeft: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "fantasy",
                    fontSize: { xs: "15px", md: "20px", lg: "30px" },
                    textAlign: "center",
                    paddingTop: { xs: "10px", md: "5px" },
                    paddingLeft: { xs: "5px" },
                  }}
                >
                  {images[activeStep].label}
                </Typography>
              </Paper>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "y-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: 500,
                          display: "block",
                          maxWidth: 900,
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={step.imgPath}
                        alt={step.label}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    Next
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                    Back
                  </Button>
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default About;
