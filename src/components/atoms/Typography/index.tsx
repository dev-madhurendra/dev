import React, { ReactNode } from "react";
import { Typography, TypographyProps } from "@mui/material";

 export interface CustomTypographyProps extends TypographyProps {
  text: ReactNode;
  
}

const MuiTypography = ({ variant, sx, text, ...rest }: CustomTypographyProps) => (
  <Typography data-testid="typography-component" variant={variant} sx={sx} {...rest}>
    {text}
  </Typography>
);

export default MuiTypography;