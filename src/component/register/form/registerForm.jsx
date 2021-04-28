import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import googleLogo from "../../../assets/googleLogo/4ed17f1480990b96fc90612ef2f5b5e7.svg";
import DividerWithText from "../../common/divider";
const useStyles = makeStyles((theme) => ({
  formHeader: {
    marginBottom: "20px",
    fontSize: "20px",
  },
  googleButton: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
    padding: "0 12px",
    border: "1px solid transparent",
    borderRadius: "2px",
    minHeight: "40px",
    lineHeight: "32px",
    width: "100%",
    position: "relative",
    // backgroundColor: "#EBEDF0",
    borderColor: "#D9DDE4",
    background: "#4285f4",
    color: "#ffffff",
    cursor: "pointer",
    "&:hover": {
      background: "#346ecc",
    },
  },
  formPaper: {
    transition: ".3s",
    // width: "488px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "64px",
      minHeight: "100vh",
      width: "100%",
      border: "none",
    },
  },
}));
const RegisterForm = () => {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Paper variant="outlined" elevation={2} className={classes.formPaper}>
        <Grid style={{ margin: "24px 32px", textAlign: "center" }}>
          <p className={classes.formHeader}>
            Sign Up and Start Applying For Jobs
          </p>
          <button className={classes.googleButton}>
            <img
              style={{ position: "absolute", left: "0", top: "0", bottom: "0" }}
              src={googleLogo}
              alt=""
            />
            Sign up with Google
          </button>
          <div style={{ margin: "20px auto" }}>
            <DividerWithText>or</DividerWithText>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default RegisterForm;
