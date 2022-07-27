import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import "./Table.css";

function createData(name, cab, date, status) {
  return { name, cab, date, status };
}

const rows = [
  createData("GNB entreprise", 189084, "18 juillet", "Approuver"),
  createData("apple ", 189084, "2 juillet", "En attente"),
  createData("wbi", 189084, "4 juillet", "Approuver"),
  createData("oodoo", 18908421, "7 juillet", "Livré"),
];

const makeStyle = (status) => {
  if (status === "Approuver") {
    return {
      color: "blue",
    };
  } else if (status === "En attente") {
    return {
      color: "red",
    };
  } else {
    return {
      color: "green",
    };
  }
};

export default function BasicTable() {
  return (
    <div className="Table">
      <h3>Contrat récent</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Production</TableCell>
              <TableCell align="left">Cab</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.cab}</TableCell>
                <TableCell align="left">{row.date}</TableCell>
                <TableCell align="left">
                  <span className="status" style={makeStyle(row.status)}>
                    {row.status}
                  </span>
                </TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
