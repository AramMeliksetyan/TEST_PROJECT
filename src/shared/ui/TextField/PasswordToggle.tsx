import React from "react";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface IPasswordToggle {
  togglePassword: () => void;
  isPasswordVisible: boolean;
}

export const PasswordToggle = ({
  togglePassword,
  isPasswordVisible,
}: IPasswordToggle) => {
  return (
    <InputAdornment position="end">
      <IconButton
        onClick={togglePassword}
        aria-label="toggle password visibility"
      >
        {!isPasswordVisible ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  );
};
