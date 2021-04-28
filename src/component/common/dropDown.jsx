import React from "react";
import {
  InputLabel,
  FormControl,
  Select,
  makeStyles,
  FormHelperText,
} from "@material-ui/core/";

const useStyle = makeStyles((theme) => ({
  btnColor: {
    color: "#0C4A70",
  },
}));

const renderKey = (item) => {
  if (item.key) return item.key;
  else return item;
};
const renderValue = (item) => {
  if (item.value) return item.value;
  else return item;
};
const DropDown = ({
  items,
  label,
  id,
  onChange,
  value,
  name,
  size,
  error,
  disabled,
}) => {
  const classes = useStyle();
  return (
    <FormControl fullWidth size={size} variant="outlined" disabled={disabled}>
      <InputLabel size="large" id={id}>
        {label}
      </InputLabel>
      <Select
        native
        label={label}
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        classes={{ icon: classes.btnColor }}
      >
        {items.map((item) => (
          <option key={renderKey(item)} value={renderKey(item)}>
            {renderValue(item)}
          </option>
        ))}
      </Select>
      <FormHelperText>{error && error}</FormHelperText>
    </FormControl>
  );
};
export default DropDown;
