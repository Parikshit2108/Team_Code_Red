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
  { id: "date", lable: "Appointment Date" },
  { id: "docName", lable: "DocName" },
  { id: "slot", lable: "AvailabelSlot" },
];

export default function Users() {
  const classes = useStyles();

  const [data, setData] = useState([
    {
      id: "1",
      name: "abcd",
      date: "13062023",
      docName: "alexander",
      slot: "available",
    },
    {
      id: "2",
      name: "abcd",
      date: "13062023",
      docName: "alexander",
      slot: "available",
    },
  ]);
  // console.log(setData);

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
            <TableHeads />
            <TableBody>
              {data.map((item) => {
                return (
                  <TableRow sx={{ bgcolor: "lightskyblue" }} key={item.id}>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.id}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.name}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.date}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.docName}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {item.slot}
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
