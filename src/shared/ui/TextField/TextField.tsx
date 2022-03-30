import React, { useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import { PasswordToggle } from "./PasswordToggle";
import { InputAdornment, Box, TextField } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";

const INPUT_TYPE_PASSWORD = "password";

interface ITextFieldInput {
  name: string;
  type?: string;
  label: string;
  disabled?: boolean;
  className?: any;
  rules?: any;
  customHandler?: any;
  endorementValue?: any;
  isPassword?: boolean;
  control: any;
  errors?: any;
}

const TextFieldInput = (props: ITextFieldInput) => {
  const {
    name,
    type = "text",
    label,
    disabled = false,
    className,
    rules,
    endorementValue = "",
    isPassword = false,
    errors,
    control,
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] =
    useState<boolean>(isPassword);

  const togglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const startEndorementComponent = useMemo(() => {
    if (endorementValue) {
      return (
        <InputAdornment position="start">
          {endorementValue && endorementValue}
        </InputAdornment>
      );
    } else {
      return null;
    }
  }, [endorementValue]);

  return (
    <Box pt={1.5} pb={1.5} className="textfield-area">
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { value, onChange } }: any) => {
          return (
            <TextField
              id="outlined-input"
              fullWidth
              label={label}
              type={!isPasswordVisible ? type : INPUT_TYPE_PASSWORD}
              disabled={disabled}
              error={!!errors?.[name]?.message}
              className={className}
              value={value}
              onChange={onChange}
              helperText={errors?.[name]?.message}
              InputProps={{
                startAdornment: startEndorementComponent,
                endAdornment: isPassword && (
                  <PasswordToggle
                    isPasswordVisible={isPasswordVisible}
                    togglePassword={togglePassword}
                  />
                ),
              }}
            />
          );
        }}
      />
    </Box>
  );
};

export default TextFieldInput;
