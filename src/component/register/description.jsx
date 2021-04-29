import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import vodafone from "../../assets/description/download.png";
import dhl from "../../assets/description/download (6).png";
import itworx from "../../assets/description/visa-bacd39ad46073f187dc48d9d193b25d2.png";
import abk from "../../assets/description/download (2).png";
import amideast from "../../assets/description/download (3).png";
import elattal from "../../assets/description/download (1).png";
import allianz from "../../assets/description/download (5).png";
import goodmsmart from "../../assets/description/download (4).png";
const useStyles = makeStyles((theme) => ({
  descriptionContainer: {
    marginTop: "85px",
  },
  descriptionHeader: {
    fontSize: "28px",
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: "-0.7px",
    lineHeight: "40px",
    color: "white",
    margin: "24px 0",
  },
  descriptionItem: {
    color: "#ffffff",
    fontSize: "20px",
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  image: {
    width: "76px",
    height: "57px",
    marginRight: "24px",
    marginBottom: "24px",
    borderRadius: "4px",
  },
}));
const CheckMark = () => {
  return (
    <svg width="24" height="24" preserveAspectRatio="none" viewBox="0 0 24 24">
      <path
        fill="#ffffff"
        d="M5.612 5.652C7.379 3.884 9.509 3 12 3s4.614.877 6.368 2.632C20.123 7.386 21 9.509 21 12c0 2.491-.877 4.614-2.632 6.368C16.614 20.123 14.491 21 12 21c-2.491 0-4.614-.877-6.368-2.632C3.877 16.614 3 14.491 3 12c0-2.491.87-4.607 2.612-6.348zM16.62 8.987c.026-.027.04-.067.04-.12 0-.081-.014-.135-.04-.162l-1.246-.964c-.027-.027-.08-.04-.16-.04-.054 0-.094.013-.121.04l-4.46 5.746a935.15 935.15 0 0 1-1.808-1.728c-.08-.08-.16-.12-.241-.12-.027 0-.08.04-.16.12l-1.046 1.045c-.026.026-.04.08-.04.16 0 .054.014.094.04.12l.08.041a3364.35 3364.35 0 0 1 3.175 3.054c.08.08.147.12.2.12.054 0 .121-.04.202-.12l5.585-7.192z"
      ></path>
    </svg>
  );
};

const items = [
  "Apply for jobs easily",
  "Receive alerts for the best jobs",
  "Get discovered by top companies",
  "Explore the right jobs & career opportunities",
];

const images = [
  vodafone,
  elattal,
  itworx,
  abk,
  amideast,
  goodmsmart,
  allianz,
  dhl,
];
const DescriptionContainer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      item
      xs={6}
      className={classes.descriptionContainer}
    >
      <h3 className={classes.descriptionHeader}>Find the Best Jobs in Egypt</h3>
      <ul>
        {items.map((d, n) => (
          <li className={classes.descriptionItem} key={n}>
            <i
              style={{
                display: "inline-flex",
                lineHeight: "1em",
                width: "24px",
                height: "24px",
                marginRight: "8px",
              }}
              key={n}
            >
              <CheckMark />
            </i>
            {d}
          </li>
        ))}
      </ul>

      <h3 className={classes.descriptionHeader}>
        Trusted by over 25,000 companies
      </h3>

      <div style={{ width: "448px", marginBottom: "24px" }}>
        {images.map((s, n) => (
          <img className={classes.image} src={s} alt="" key={n} />
        ))}
      </div>
    </Grid>
  );
};

export default DescriptionContainer;
