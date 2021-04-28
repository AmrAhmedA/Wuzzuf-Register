import React from "react";
import { Grid, Paper } from "@material-ui/core";

const RegisterForm = ({ classes }) => {
  return (
    <Grid item xs={6}>
      <Paper variant="outlined" elevation={2} className={classes.formPaper}>
        <Grid style={{ margin: "30px" }}>
          <h1>Hello World</h1>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default RegisterForm;
