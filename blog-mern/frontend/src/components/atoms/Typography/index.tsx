import { SxProps, Typography } from "@mui/material"

export interface MyTypographyProps {
    typographyText:string;
    sx?:SxProps;
}

const MyTypography = (props : MyTypographyProps) => {
  return (
    <Typography sx={props.sx} > {props.typographyText} </Typography>
  )
}

export default MyTypography