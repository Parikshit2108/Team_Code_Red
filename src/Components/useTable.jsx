import { Table, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";

export default function useTable(records, headCells) {
  const TableContainer = (props) => <Table>{props.children}</Table>;

  const TableHeads = (props) => {
    return (
      <TableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <TableCell key={headCell.id}>{headCell.lable}</TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  return { TableContainer, TableHeads };
}
