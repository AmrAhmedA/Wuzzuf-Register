import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import RegisterHeader from "./header";

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
    padding: theme.spacing(2),
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
    </Grid>
  );
};

export default RegisterContainer;
