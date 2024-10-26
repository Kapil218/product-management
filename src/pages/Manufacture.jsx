import { useState } from "react";
import Header from "./Header";
import { Button, Grid, TextField } from "@mui/material";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import Grid from "@material-ui/core/Grid";

export default function Manufacture() {
  const [formData, setFormData] = useState({
    manufacturerName: "",
    manufacturerDetails: "",
    manufacturerLongitude: "",
    manufacturerLatitude: "",
    productName: "",
    productCode: "",
    productPrice: "",
    productCategory: "",
  });
  const [error, setError] = useState(false);

  // Handler to update formData state on input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handler to submit the form
  const handleSubmit = () => {
    // Simple validation to check if any field is empty
    const isFormValid = Object.values(formData).every((value) => value.trim() !== "");
    if (!isFormValid) {
      setError(true);
      return;
    }
    setError(false);
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      manufacturerName: "",
      manufacturerDetails: "",
      manufacturerLongitude: "",
      manufacturerLatitude: "",
      productName: "",
      productCode: "",
      productPrice: "",
      productCategory: "",
    });
  };

  return (
    <>
      <Header />
      <div>
        <h2>Add Product</h2>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              name="manufacturerName"
              label="Manufacturer Name"
              variant="outlined"
              value={formData.manufacturerName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="manufacturerDetails"
              label="Manufacturer Details"
              variant="outlined"
              value={formData.manufacturerDetails}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="manufacturerLongitude"
              label="Longitude"
              variant="outlined"
              value={formData.manufacturerLongitude}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="manufacturerLatitude"
              label="Latitude"
              variant="outlined"
              value={formData.manufacturerLatitude}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="productName"
              label="Product Name"
              variant="outlined"
              value={formData.productName}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="productCode"
              label="Product Code"
              variant="outlined"
              value={formData.productCode}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              name="productPrice"
              label="Product Price"
              variant="outlined"
              value={formData.productPrice}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="productCategory"
              label="Product Category"
              variant="outlined"
              value={formData.productCategory}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Error message if form is incomplete */}
        {error && <p style={{ color: "red" }}>Please fill in all fields.</p>}

        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: "20px" }}
        >
          Submit
        </Button>
      </div>
    </>
  );
}
