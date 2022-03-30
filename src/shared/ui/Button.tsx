import * as React from "react";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { LinearProgress } from "@mui/material";

type IVariant = "text" | "contained" | "outlined" | undefined;

interface IBottonTypes {
  startIcon?: any;
  endIcon?: any;
  disabled?: boolean;
  isLoading?: boolean;
  color?: any;
  buttonName: string;
  variant?: IVariant;
  onClick: () => void;
}

const useStyles = makeStyles((theme) => ({
  buttonWrapper: {
    position: "relative",
    overflow: "hidden",
  },
  loader: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
  },
}));

const CustomButton = (props: IBottonTypes) => {
  const {
    startIcon,
    endIcon,
    disabled,
    color = "primary",
    isLoading = false,
    buttonName,
    variant = "contained",
    onClick,
  } = props;

  const classes = useStyles();

  return (
    <Button
      startIcon={startIcon}
      endIcon={endIcon}
      disabled={isLoading || disabled}
      color={color}
      variant={variant}
      onClick={onClick}
    >
      {buttonName}
      {isLoading && <LinearProgress className={classes.loader} color={color} />}
    </Button>
  );
};

export default CustomButton;
