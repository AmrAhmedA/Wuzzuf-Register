import React from "react";
import { Grid } from "@material-ui/core";
import DescriptionContainer from "./descriptionContainer";
import RegisterContainer from "./registerContainer";
const RegisterForm = () => {
  return (
    <Grid>
      <DescriptionContainer /> <RegisterContainer />
    </Grid>
  );
};

export default RegisterForm;
