import { CleaningServices } from "@mui/icons-material";
import { Box, Button, Checkbox, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import Loader from "../Small/Loader/Loader";

const Teacher = () => {
  const [spin, setSpin] = useState(false);
  const [students, setStudents] = useState([]);
  var data = [];
  var attendance = [];
  // console.log("hi", attendance.length);
  // console.log(click);
  const axios = require("axios");

  useEffect(() => {
    setSpin(true);
    axios
      .get("http://localhost:5000/student")
      .then(function (res) {
        // handle success
        setStudents(res.data);
        setSpin(false);
        // console.log(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [axios]);

  const handleSubmit = () => {
    setSpin(true);
    console.log(attendance);
    // Send a POST request
    axios({
      method: "post",
      url: "http://localhost:5000/attendance",
      data: attendance,
    })
      .then((res) => {
        console.log(res);
        setSpin(false);
      })
      .catch(function (error) {
        // handle error
        setSpin(false);
        console.log(error);
      });
  };

  students.map((student) =>
    data.push({
      col1: student.name,
      col2: student.id,
      //  col3: new Date().toString().slice(0, 15),
      col3: (
        <Checkbox
          name="cb"
          onChange={(e) => {
            console.log(e.target.checked);
            //  setClick(!click);
            //console.log(student.id);
            let d = new Date();
            attendance.push({
              id: student.id,
              name: student.name,
              attendance: e.target.checked,
              time: d.toString().slice(0, 15),
            });
            console.log(attendance);
          }}
        />
      ),
    })
  );
  //   const data = [
  //     {
  //       col1: "Hello",
  //       col2: "World",
  //       col4: <Checkbox name="cb" defaultChecked onChange={() => alert("hlw")} />,
  //     },
  //     {
  //       col1: "react-table",
  //       col2: "rocks",
  //       col4: <Checkbox name="cb" defaultChecked onChange={() => alert("hi")} />,
  //     },
  //     {
  //       col1: "whatever",
  //       col2: "you want",
  //       col4: (
  //         <Checkbox name="cb" defaultChecked onChange={() => alert("ahoy")} />
  //       ),
  //     },
  //   ];

  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "col2", // accessor is the "key" in the data
      },
      {
        Header: "ID",
        accessor: "col1",
      },
      //   {
      //     Header: "Time",
      //     accessor: "col3",
      //   },
      {
        Header: "Attendance",
        accessor: "col3",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <>
      {spin === true ? (
        <Box sx={{ width: "300px", mx: "auto" }}>
          <Loader></Loader>
        </Box>
      ) : (
        <>
          {" "}
          <Box sx={{ my: 10 }}>
            <table
              {...getTableProps()}
              style={{ border: "solid 1px blue", width: "100%" }}
            >
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        style={{
                          borderBottom: "solid 3px red",
                          background: "aliceblue",
                          color: "black",
                          fontWeight: "bold",
                        }}
                      >
                        {/* {console.log(column)} */}
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td
                            {...cell.getCellProps()}
                            style={{
                              padding: "10px",
                              // border: "solid 1px gray",
                              background: "papayawhip",
                            }}
                          >
                            {/* {console.log(cell.column.Header)} */}
                            {/* {console.log(cell)} */}
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
              )
            </table>
            <Box>
              <Button
                sx={{ mt: 5, "&:hover": { transform: "scale(1.1)" } }}
                variant="contained"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Teacher;
