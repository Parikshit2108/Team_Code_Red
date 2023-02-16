import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Typography } from "@mui/material";
import { useState } from "react";

const columns = [
  { id: "rows.index", label: "Sr.No", minWidth: 100 },
  { id: "name", label: "User_name", minWidth: 100 },
  {
    id: "email",
    label: "Email",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "profile",
    label: "Profile",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "contact",
    label: "Contact_Number",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];
let userInfo = JSON.parse(localStorage.getItem("useryoutube"));

const rows = userInfo;
// [
//   {
//     srno: "",
//     name: "",
//     email: "",
//     profile: "",
//     contact: "",
//   },
// ];

export default function ColumnGroupingTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper
      sx={{
        width: { md: "80%", xs: "100%" },
        marginLeft: { sx: "50px", md: "150px" },
        marginRight: { sx: "50px", md: "100px" },
      }}
    >
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="stickyHeader">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={5}>
                <Typography variant="h4"> Registerd Users Info </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{ bgcolor: "lightblue" }}
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.contact}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
