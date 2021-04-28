import React from "react";
import { Grid } from "@material-ui/core";
import WUZZUFLOGO from "../../assets/wuzzufLogo/wuzzufLogoSVG";
const RegisterHeader = ({ classes }) => {
  return (
    <Grid container direction="row" justify="space-between" alignItems="center">
      <WUZZUFLOGO color="white" />
      <button>Hello World</button>
    </Grid>
  );
};

export default RegisterHeader;
