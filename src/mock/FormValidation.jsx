import { Radio } from "@mui/material";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function FormValidation() {
  const [input, setInput] = useState({
    fname: "",
    lname: "",
    gender: "",
    error: false,
  });
  //   console.log(input);
  //   let isValid = false;
  const validation = () => {
    if (input.fname.length === 0) {
      setInput({ ...input, error: true });
    } else if (input.lname.length === 0) {
      setInput({ ...input, error: true });
    } else {
      console.log(input);
    }
  };

  return (
    <div>
      <label>First Name</label>
      <input
        error={input.error}
        placeholder={input.error ? "field Is empty" : ""}
        onChange={(e) => setInput({ ...input, fname: e.target.value })}
      />
      {input.error && <h6>"field Is empty"</h6>}
      <label>Last Name</label>
      <input
        onChange={(e) => setInput({ ...input, lname: e.target.value })}
        error={input.error}
        placeholder={input.error ? "field Is empty" : ""}
      />
      {input.error && <h6>"field Is empty"</h6>}
      <label>Gender</label>
      <Radio
        value={"male"}
        onClick={(e) => setInput({ ...input, gender: e.target.value })}
      ></Radio>
      {input.error && <h6>"field Is empty"</h6>}
      <Radio
        value={"Female"}
        onClick={(e) => setInput({ ...input, gender: e.target.value })}
      ></Radio>
      {input.error && <h6>"field Is empty"</h6>}
      <Button onClick={() => validation()}>Submit</Button>
    </div>
  );
}
