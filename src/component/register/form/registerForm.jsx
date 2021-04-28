import React from "react";
import { Grid } from "@material-ui/core";
import DescriptionContainer from "../description";
import RegisterContainer from "..";

const RegisterForm = () => {
  return (
    <Grid>
      <DescriptionContainer /> <RegisterContainer />
    </Grid>
  );
};

export default RegisterForm;
