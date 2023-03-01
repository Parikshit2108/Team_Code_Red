import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Signinimg from "./Signinimg";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography } from "@mui/material";
import "../App.css";
import { Container, Row } from "react-bootstrap";

const Login = () => {
  const navigate = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const getdata = (e) => {
    const { value, name } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getuserArr = localStorage.getItem("userdata");

    const { email, password } = inpval;
    if (email === "") {
      toast.error("email field is requred", {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error("plz enter valid email addres", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password field is requred", {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error("password length greater five", {
        position: "top-center",
      });
    } else {
      if (getuserArr && getuserArr.length) {
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });

        if (userlogin.length === 0) {
          alert("invalid details");
        } else {
          alert("user login succesfully");

          let userInfo = localStorage.getItem("logindata");
          let userdata = userInfo ? JSON.parse(userInfo) : [];
          userdata.push(inpval.email);

          localStorage.setItem("logindata", JSON.stringify(userdata));

          navigate("/Aboutmain");
        }
      }
    }
  };

  return (
    <>
      <Container
        className="d-lg-flex d-sm-block"
        style={{
          // background: "black",
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        {/* <Row xs={12} md={4}> */}
        <div
          className="left_data main mt-0 p-3"
          xs={6}
          style={{
            height: "70vh",
            // width: "50%",
            margin: "5%",
            width: "20%",
          }}
        >
          <div
            style={{
              background: "#fff",
              // width: "60%",
              // marginLeft: "140px",
              height: "80%",
              marginTop: "20px",
              borderRadius: "20px",
              boxShadow: "10px 10px 20px #7ac9f1",
            }}
          >
            <h2
              className="text-center col-lg-6"
              style={{
                width: "100%",
                height: "50px",
                fontSize: "40px",
                marginTop: "0px",
              }}
            >
              Login
            </h2>
            <Form style={{ width: "100%", height: "250px", marginTop: "50px" }}>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                  style={{
                    height: "40px",
                    width: "",
                    fontSize: "20px",
                    marginTop: "15px",
                    borderColor: "none",
                    borderRadius: "10px",
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                  style={{
                    height: "40px",
                    width: "250px",
                    fontSize: "20px",
                    marginTop: "25px",
                    borderColor: "none",
                    borderRadius: "10px",
                  }}
                />
              </Form.Group>
              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                style={{
                  background: "rgb(135, 206, 235)",
                  height: "35px",
                  width: "150px",
                  fontSize: "20px",
                  borderColor: "#fff",
                  marginTop: "20px",
                  borderRadius: "10px",
                  color: "#fff",
                }}
                type="submit"
              >
                Submit
              </Button>

              <Typography marginTop="10px">
                Don't have account ?{" "}
                <Link to={"/Home"} underline="hover">
                  register here{" "}
                </Link>
              </Typography>
            </Form>
          </div>
        </div>
        {/* </Row> */}
        {/* <Row xs={12} md={4}> */}
        <div
          className="indiv"
          xs={12}
          style={{
            height: "50vh",
            // width: "60%",
            width: "50%",
            marginTop: "20%",
            // marginRight: "100px",
            boxShadow: "10px 10px 10px #f3f0f0",
          }}
        ></div>
        {/* </Row> */}
        <ToastContainer />
      </Container>
    </>
  );
};

export default Login;
