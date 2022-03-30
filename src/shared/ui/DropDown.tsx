import React from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Controller, Control } from "react-hook-form";

interface IDropdown {
  options: Array<any>;
  label: string;
  optionKey?: string;
  optionId?: string;
  name: string;
  rules?: any;
  className?: any;
  disabled?: boolean;
  errors?: any;
  readOnly?: boolean;
  control: Control<any>;
}
const DropDown = (props: IDropdown) => {
  const {
    options,
    label,
    optionKey = "name",
    optionId = "id",
    name = "",
    rules,
    className,
    disabled = false,
    errors,
    readOnly = false,
    control,
  } = props;

  return (
    <Box pt={1.5} pb={1.5} className="dropdown-area">
      <FormControl fullWidth variant="outlined" size="medium">
        <InputLabel>{label}</InputLabel>
        <Controller
          name={name}
          control={control}
          rules={rules}
          render={({ field: { value, onChange } }: any) => (
            <Select
              label={label}
              name={name}
              error={!!errors?.[name]?.message}
              className={className}
              value={value}
              onChange={onChange}
              disabled={disabled}
              inputProps={{ readOnly: readOnly }}
            >
              {options?.map((option) => (
                <MenuItem
                  key={option[optionId]}
                  disabled={option?.disabled}
                  value={option[optionId]}
                >
                  {option[optionKey]}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        {errors && errors?.[name] && (
          <FormHelperText>{errors?.[name]?.message}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default DropDown;
