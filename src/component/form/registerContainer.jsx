import React from "react";
import { Grid } from "@material-ui/core";
import RegisterHeader from "./registerHeader";
const RegisterContainer = () => {
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <RegisterHeader />
      <RegisterContainer />
    </Grid>
  );
};

export default RegisterContainer;
