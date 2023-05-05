import {
  Box,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import useTable from "./useTable";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
const headCells = [
  { id: "userId", lable: "ID" },
  { id: "name", lable: "Patient Name" },
  { id: "Date", lable: "Appointment Date" },
  { id: "docName", lable: "DocName" },
  { id: "slot", lable: "Booked lSlot" },
  { id: "test", lable: "Test" },
];

export default function Users() {
  const classes = useStyles();

  const [data, setData] = useState([
    {
      id: "",
      patientname: "",
      Date: "",
      Drname: "",
      gender: "",
      test: "",
      BookingSlot: "",
    },
  ]);
  let userInfo = JSON.parse(localStorage.getItem("patientData"));

  const { TableContainer, TableHeads, TblPagination } = useTable(
    data,
    headCells
  );

  return (
    <>
      <Paper className={classes.pageContent}>
        <Box>
          <Typography variant="h4" component="h4">
            {" "}
            Appointments{" "}
          </Typography>
          <TableContainer>
            <TableHeads  />
            <TableBody>
              {userInfo.map((item, index) => {
                return (
                  <TableRow sx={{ bgcolor: "lightskyblue" }} key={item.id}>
                    <TableCell sx={{ textAlign: "center" }}>
                      {index + 1}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.patientname}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.Date}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.Drname}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.BookingSlot}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.test}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </TableContainer>
          <TblPagination />
        </Box>
      </Paper>
    </>
  );
}
