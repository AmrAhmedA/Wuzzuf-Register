import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import RegisterHeader from "./header";
import DescriptionContainer from "./description";
import RegisterForm from "./form/registerForm";
import RegisterFormValidation from "./registerFormValidation";
import InputField from "../common/inputField";
const yup = require("yup");

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
    padding: "0 50px",
  },
  wrapper: {
    padding: "0px 20px",
    width: "1100px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 0px",
    },
  },
}));

const initialFieldValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const RegisterContainer = () => {
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateProperty = (name, value) => {
    yup
      .reach(RegisterFormValidation, name)
      .validate(value)
      .then(() => {
        let { [name]: omit, ...res } = errors;
        setErrors(res);
      })
      .catch((e) => {
        setErrors({ ...errors, [name]: e.message });
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    validateProperty(name, value);
    console.log("mora", errors);
  };

  const renderInputField = (
    id,
    name,
    label,
    type,
    placeholder,
    direction,
    float,
    disabled
  ) => {
    return (
      <InputField
        id={id}
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={handleInputChange}
        error={errors[name]}
        value={values[name]}
        direction={direction}
        float={float}
        disabled={disabled}
        showPassword={showPassword}
        handleClickShowPassword={handleClickShowPassword}
      />
    );
  };
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.mainContainer}
    >
      <Grid container className={classes.wrapper}>
        <RegisterHeader />
        <DescriptionContainer />
        <RegisterForm
          renderInputField={renderInputField}
          showPassword={showPassword}
          handleClickShowPassword={handleClickShowPassword}
        />
      </Grid>
    </Grid>
  );
};

export default RegisterContainer;
