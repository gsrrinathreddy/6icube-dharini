import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useEffect, useState } from 'react';

function createData(name, course, Universityorboard , yearofpassing, percentage) {
  return { name,  course, Universityorboard , yearofpassing, percentage };
}

const rows = [
  createData('SSC', 'BoardofSecondaryEducation','Raghava', 2017, 7.7),
  createData('Inter', 'BoardofIntermediate', 'Sri Viswa Jr.college', 2019, 7.13),
  createData('Degree', 'B.Sc(comp)', 'KrishnaUniversity', 2022, 7.57),
  
];

export default function BasicTable() {
    let [loader,setLoader] = useState();
    let [qualification,setQualification] = useState();

    const connectToServer = async () => axios.get('http://localhost:8001/Qualification')
                                             .then(res=>{
                                                console.log(res.data);
                                                setQualification(res.data);
                                                setLoader(false)
                                             })
  useEffect(()=>{
    connectToServer();
  },[])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>name</TableCell>
            <TableCell align="right">course</TableCell>
            <TableCell align="right">Universityorboard</TableCell>
            <TableCell align="right">yearofpassing</TableCell>
            <TableCell align="right">percentage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.course}</TableCell>
              <TableCell align="right">{row.Universityorboard}</TableCell>
              <TableCell align="right">{row.yearofpassing}</TableCell>
              <TableCell align="right">{row.percentage}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}