import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import DescriptionContainer from "./descriptionContainer";
import RegisterContainer from "./registerContainer";
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
}));
const RegisterForm = () => {
  const classes = useStlyes();
  return (
    <Grid>
      <DescriptionContainer /> <RegisterContainer />
    </Grid>
  );
};

export default RegisterForm;
