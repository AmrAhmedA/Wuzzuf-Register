import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import googleLogo from "../../../assets/googleLogo/4ed17f1480990b96fc90612ef2f5b5e7.svg";
import DividerWithText from "../../common/divider";
const useStyles = makeStyles((theme) => ({
  formHeader: {
    marginBottom: "20px",
    fontSize: "20px",
    textAlign: "center",
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
    transition: ".3s",
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
  signupButton: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: "15px",
    padding: "0 12px",
    border: "1px solid transparent",
    borderRadius: "2px",
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",
    userSelect: "none",
    minHeight: "40px",
    lineHeight: "32px",
    color: "#ffffff",
    backgroundColor: "#0055D9",
    width: "100%",
    transition: ".3s",
    "&:hover": {
      backgroundColor: "#1370fc",
    },
  },
}));
const RegisterForm = ({ renderInputField, showPassword }) => {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Paper variant="outlined" elevation={2} className={classes.formPaper}>
        <Grid style={{ margin: "24px 32px" }}>
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
          <Grid container justify="space-between" spacing={2}>
            <Grid item xs={12} md={6}>
              {renderInputField(
                "firstName",
                "firstName",
                "First Name",
                "text",
                "",
                "ltr"
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              {renderInputField(
                "lastName",
                "lastName",
                "Last Name",
                "text",
                "",
                "ltr"
              )}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            {renderInputField("email", "email", " Email", "text", "", "ltr")}
          </Grid>
          <Grid item xs={12}>
            {renderInputField(
              "password",
              "password",
              "Password",
              showPassword ? "text" : "password",
              "",
              "ltr"
            )}
          </Grid>
          <Grid item xs={12} style={{ margin: "20px 0" }}>
            <button
              onClick={() => console.log("signup button clicked")}
              className={classes.signupButton}
            >
              {" "}
              Sign up{" "}
            </button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default RegisterForm;
