import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UpdateEmployeeComponent from "./UpdateEmployeeComponent";
import axios from "axios";

const ListEmployeeComponent = ({ employeeData }) => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [empData, setEmpData] = useState(employeeData);

  // Example function for handling actions (e.g., view details)
  const handleAction = (id) => {
    // console.log(`View details for ${id}`);
    // Implement your specific action logic here
    navigate(`/add-employee/${id}`);
  };
  const handledelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/v1/employees/${id}`
      );
    } catch (error) {
      setError(error);
    }
    const updatedData = empData.filter((item) => item.id !== id);
    setEmpData(updatedData);
    console.log(updatedData);
    //navigate(`/`);
  };
  
  const handleView =(id) => {
    navigate(`/view-employee/${id}`);
  }

  const addEmployee = () => {
    console.log("add Employee");
  };
  return (
    <div>
      <Stack padding="10px" direction="row" spacing={2}>
        <Button component={Link} to="/add-employee" variant="contained">
          Add Employee
        </Button>
      </Stack>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Employee First Name</TableCell>
              <TableCell>Employee Last Name</TableCell>
              <TableCell>Employee Email id</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {empData &&
              empData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.firstName}</TableCell>
                  <TableCell>{employee.lastName}</TableCell>
                  <TableCell>{employee.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleAction(employee.id)}
                      style={{ marginRight: "8px" }}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ marginRight: "8px" }}
                      onClick={() => handledelete(employee.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleView(employee.id)}
                    >
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListEmployeeComponent;
