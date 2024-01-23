import React, { useState } from "react";
import { TextField, Button, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateEmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const isSubmitDisabled = !firstName || !lastName || !email;

  const handleSave = async () => {
    // You can perform validation or other logic before saving
    try {
      // Replace 'http://localhost:8080/api/v1/employees' with your actual API endpoint
      const response = await axios.post(
        "http://localhost:8080/api/v1/employees",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
        }
      );

      // Handle the response as needed
      console.log("POST request successful:", response.data);

      // You may want to perform additional actions after a successful save
    } catch (error) {
      // Handle errors
      console.error("Error making POST request:", error);
    }
    navigate("/");
  };

  const handleCancel = () => {
    // Navigate back to the home page
    navigate("/");
  };
  return (
    <div style={{ padding: "16px" }}>
      <Paper style={{ padding: "16px", textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Employee Form
        </Typography>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="First Name"
                variant="outlined"
                fullWidth
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Last Name"
                variant="outlined"
                fullWidth
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                label="Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            onClick={handleSave}
            disabled = {isSubmitDisabled}
            style={{ margin: "8px" }}
          >
            Save
          </Button>
          <Button
            variant="contained"
            onClick={handleCancel}
            style={{ margin: "8px" }}
          >
            Cancel
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default CreateEmployeeComponent;
