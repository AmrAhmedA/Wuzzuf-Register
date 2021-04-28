import React, { memo } from "react";
import { TextField } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";

const Input = memo((props) => {
  const {
    label,
    name,
    value,
    id,
    helperText,
    placeholder,
    onChange,
    error,
    type,
    ...rest
  } = props;

  return (
    <FormControl fullWidth>
      <TextField
        variant="outlined"
        size="medium"
        id={id}
        name={name}
        value={value}
        label={label}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        {...(error && { error: true, helperText: error })}
        {...rest}
      />
    </FormControl>
  );
});

export default Input;
