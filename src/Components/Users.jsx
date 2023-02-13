import { Paper, TableBody, TableCell, TableRow } from "@mui/material";
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
  { id: "date", lable: "Appointment Data" },
  { id: "docName", lable: "DocName" },
  { id: "slot", lable: "AvailabeSlot" },
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

  const { TableContainer, TableHeads } = useTable(data, headCells);

  return (
    <>
      <Paper className={classes.pageContent}>
        <TableContainer>
          <TableHeads />
          <TableBody>
            {data.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.docName}</TableCell>
                  <TableCell>{item.slot}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
      </Paper>
    </>
  );
}
