
import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface IButtonProps extends ButtonProps {}

const MuiButton = ({ ...buttonProps }: IButtonProps) => {
  return <Button {...buttonProps} disableElevation disableRipple />;
};

export default MuiButton;