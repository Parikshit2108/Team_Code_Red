import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { textAlign } from "@mui/system";
import { Grid } from "@mui/material";

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
      <Grid container>
        <Paper
          elevation={20}
          sx={{
            marginTop: 15,
            marginLeft: 30,
            marginRight: 20,
            borderRadius: 5,
            bgcolor: "#e3f2fd",
            display: "flex",
          }}
        >
          <Grid item xs={8} md={4} lg={6}>
            <Box
              sx={{
                maxWidth: 350,
                flexGrow: 2,
                borderRadius: 5,
                bgcolor: "",
                textJustify: "unset",
                //   border: 2,
                height: 600,
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h3"
                sx={{ fontFamily: "fantasy", color: "#fb8c00" }}
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
              <Button variant="contained" sx={{ marginTop: "90px" }}>
                Book Your Appointment
              </Button>
            </Box>
          </Grid>
          <Grid item xs={8} md={8} lg={6}>
            <Box sx={{ maxWidth: 900, flexGrow: 2, marginLeft: 5 }}>
              <Paper
                square
                elevation={5}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  height: 50,
                  pl: 2,
                  bgcolor: "background.default",
                  borderRadius: 5,
                  marginTop: 3,
                }}
              >
                <Typography variant="h5">{images[activeStep].label}</Typography>
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
                          height: 400,
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
        </Paper>
      </Grid>
    </>
  );
}

export default About;
