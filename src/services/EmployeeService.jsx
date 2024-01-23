import React, { useState, useEffect } from "react";
import axios from "axios";
import ListEmployeeComponent from "../components/ListEmployeeComponent";
import CreateEmployeeComponent from "../components/CreateEmployeeComponent";

const EmployeeeService = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/employees"
        );
        setEmployeeData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };


    fetchData();
  }, []); // Empty dependency array ensures that the effect runs only once on component moun

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <ListEmployeeComponent employeeData={employeeData} />
    </div>
  );
};

export default EmployeeeService;
