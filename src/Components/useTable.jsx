import {
  Table,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  table: {
    overflow: "hidden",
    marginTop: theme.spacing(3),
    // "& thead th": {
    //   fontWeight: "600",
    //   color: {
    //     theme: {
    //       palette: {
    //         primary: {
    //           main: purple[500],
    //         },
    //       },
    //     },
    //   },
    //   backgroundColor: theme.palette.primary.light,
  },
  "& tbody td": {
    fontWeight: "300",
  },
  "& tbody tr:hover": {
    backgroundColor: "#fffbf2",
    cursor: "pointer",
  },
}));

export default function useTable(data, headCells) {
  const classes = useStyles();
  const pages = [5, 10, 15];
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(pages[page]);
  const TableContainer = (props) => {
    return <Table className={classes.useStyles}>{props.children}</Table>;
  };
  const TableHeads = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell
              sx={{
                bgcolor: "darkgray",
                textAlign: "center",
                border: "ActiveBorder",
              }}
              key={headCell.id}
            >
              {headCell.lable}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };
  const handleChangeRowsPerPage = (event) => {
    setRowPerPage(parseInt(event.target.value, 10));
    console.log(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const TblPagination = () => (
    <TablePagination
      page={page}
      component="div"
      rowsPerPage={rowPerPage}
      rowsPerPageOptions={pages}
      count={data.length}
      onPageChange={handleChangePage}
      onChangeRowsPerpage={handleChangeRowsPerPage}
    />
  );
  return { TableContainer, TableHeads, TblPagination };
}
