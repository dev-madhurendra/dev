import { Button, SxProps } from "@mui/material";
import { ReactNode } from "react";
import { styled } from "styled-components";

export interface buttonProps {
  buttonText: string;
  variant: "outlined" | "contained";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  width:string;
  height:string;
  bgColor?:string;
  color?:string;
  hoverBgColor?:string;
  hoverColor?:string;
  sx?:SxProps;
  onButtonClick?:() => void;
}

const MyButton = (props: buttonProps) => {
  const StyledButton = styled(Button)`
        && {
            display:"flex";
            cursor:"pointer";
            justifyContent:"center";
            alignItems:"center";
            background-color:${props.bgColor};
            color: ${props.color};
            border-radius: 12px;
            width: ${props.width};
            height: ${props.height};
            &:hover {
                background-color: ${props.hoverBgColor};
            }
        }
    `;

  return (
    <StyledButton
      variant={props.variant}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      sx={props.sx}
      onClick={props.onButtonClick}
    >
      {props.buttonText}
    </StyledButton>
  );
};

export default MyButton;
