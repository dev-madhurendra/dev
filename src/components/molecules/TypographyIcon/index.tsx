import React from 'react';
import { Box } from '@mui/material';
import MuiTypography from '../../atoms/Typography';
import IconComponent from '../../atoms/Icon';

const TypographyInput: React.FC<{
  variant: 'body1'; 
  sx?: object;
  text?: React.ReactNode;
  width?: string;
  height?: string;
  src: string;

}> = ({
  variant,
  sx,
  text,
  width,
  height,
  src,
}) => (
  <Box >
    <MuiTypography variant={variant} sx={sx} text={text} />
    <IconComponent width={width} height={height} src={src} />
  </Box>
);

export default TypographyInput;
