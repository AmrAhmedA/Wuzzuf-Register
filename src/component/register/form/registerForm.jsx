import React from "react";
import { Grid, makeStyles, Paper, withWidth } from "@material-ui/core";
import googleLogo from "../../../assets/googleLogo/4ed17f1480990b96fc90612ef2f5b5e7.svg";
import DividerWithText from "../../common/divider";
import PropTypes from "prop-types";
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
  paperBorder: {
    borderRadius: "4px 4px 0 0",
  },
}));
const RegisterForm = ({ renderInputField, showPassword }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} md={6}>
      <Paper
        variant="outlined"
        elevation={2}
        classes={{ rounded: classes.paperBorder }}
        className={classes.formPaper}
      >
        <Grid style={{ margin: "24px 32px" }}>
          <p className={classes.formHeader}>
            Sign Up and Start Applying For Jobs
          </p>
          <button className={classes.googleButton}>
            <img
              style={{
                position: "absolute",
                left: "0",
                top: "0",
                bottom: "0",
              }}
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
          <Grid>
            <p
              style={{
                fontSize: "12px",
                color: " #4D6182",
                textAlign: "center",
                borderBottom: "1px solid #D9DDE4",
                padding: "17px 2px 8px",
              }}
            >
              By signing up, you agree to our{" "}
              <a
                href="https://www.facebook.com/amrahmedgewaly/"
                style={{ textDecoration: "none", color: "#0055D9" }}
              >
                Terms and Conditions
              </a>
            </p>
          </Grid>
          <Grid>
            <p
              style={{
                textAlign: "center",
                fontSize: "14px",
                fontWeight: "600",
                margin: "8px auto 24px",
              }}
            >
              {" "}
              Already on WUZZUF?
              <a
                href="https://www.facebook.com/amrahmedgewaly/"
                style={{
                  textDecoration: "none",
                  color: "#0055D9",
                  marginLeft: "8px",
                }}
              >
                Sign in
              </a>
            </p>
          </Grid>
        </Grid>
      </Paper>
      <Grid
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#E6EFFF",
          height: "51px",
          borderRadius: "0 0 4px 4px",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: " #4D6182",
            textAlign: "center",
            padding: "17px 2px 8px",
          }}
        >
          Looking to post jobs?
          <a
            href="https://www.facebook.com/amrahmedgewaly/"
            style={{
              textDecoration: "none",
              color: "#0055D9",
              marginLeft: "8px",
            }}
          >
            Create an Employer Account.
          </a>
        </p>
      </Grid>
    </Grid>
  );
};

RegisterForm.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(RegisterForm);
