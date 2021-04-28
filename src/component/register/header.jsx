import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import WUZZUFLOGO from "../../assets/wuzzufLogo/wuzzufLogoSVG";

const useStyles = makeStyles((theme) => ({
  registerButton: {
    fontSize: "15px",
    padding: "0 12px",
    border: "1px solid transparent",
    borderRadius: "2px",
    textAlign: "center",
    WebkitUserSelect: "none",
    cursor: "pointer",
    minWidth: "80px",
    WebkitTransition: "color .2s",
    minHeight: "32px",
    lineHeight: "22px",
    color: "#ffffff",
    backgroundColor: "#2C9266",
    textDecorationLine: "none",
    display: "flex",
    justify: "center",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "#2f745a",
      transition: ".3s ",
    },
  },
  headerContainer: {
    margin: "32px 0",
  },
}));
const RegisterHeader = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.headerContainer}
    >
      <WUZZUFLOGO color="white" />
      <a
        href="https://www.facebook.com/amrahmedgewaly/"
        className={classes.registerButton}
      >
        Employer?
      </a>
    </Grid>
  );
};

export default RegisterHeader;
