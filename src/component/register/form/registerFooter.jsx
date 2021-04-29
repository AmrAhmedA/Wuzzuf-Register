import { Grid } from "@material-ui/core";
import React from "react";
const RegisterFooter = () => {
  return (
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
  );
};
export default RegisterFooter;
