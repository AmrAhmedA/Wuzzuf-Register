import React, { memo } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  inputfield: {
    color: "#0D2955",
    backgroundColor: "#FAFAFB",
    border: "1px solid",
    borderRadius: "2px",
    borderColor: "#D9DDE4",
    width: "100%",
    padding: "10px 8px",
    height: "40px",
    letterSpacing: "-0.47px",
    lineHeight: "20px",
    fontSize: "15px",
    "&:hover": {
      borderColor: "#727a88",
      boxShadow: "#727a88",
      outline: "0 none",
    },
    "&:focus": {
      borderColor: "rgba(82,168,236,.8)",
      boxShadow:
        "0 0px 0px rgba(82,168,236,.8) inset, 0 0 8px rgba(82,168,236,.8)",
      outline: "0 none",
    },
  },
}));
const InputField = memo((props) => {
  const classes = useStyles();
  const {
    label,
    name,
    value,
    id,
    helperText,
    placeholder,
    onChange,
    direction,
    error,
    float,
    disabled,
    ...rest
  } = props;

  return (
    <div>
      <div style={{ marginBottom: "4px" }}>
        <label
          style={{
            float: "left",
            color: "black",
            fontSize: "15px",
            fontWeight: "600",
            lineHeight: "22px",
            letterSpacing: "-0.86px",
          }}
        >
          {label}
        </label>
      </div>
      <input
        className={classes.inputfield}
        type="text"
        dir={direction}
        id={id}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
        {...rest}
        disabled={disabled}
      />
      <div
        style={{
          color: "rgb(254, 48, 48)",
          marginTop: "6px",
        }}
      >
        <small
          id={id}
          style={{
            color: "rgb(254, 48, 48)",
            fontSize: " 12px",
          }}
        >
          {error && error}
        </small>
      </div>
    </div>
  );
});

export default InputField;
