import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import RegisterHeader from "./header";
import DescriptionContainer from "./description";
import RegisterForm from "./form/registerForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // margin: theme.spacing(3),
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(4),

    width: "100%",
    "&>*": {
      transition: ".3s",
    },
  },
  mainContainer: {
    padding: theme.spacing(5),
  },
}));
const RegisterContainer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.mainContainer}
    >
      <RegisterHeader />
      <DescriptionContainer />
      <RegisterForm />
    </Grid>
  );
};

export default RegisterContainer;
