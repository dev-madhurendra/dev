import { Grid } from "@mui/material";
import { ReactNode } from "react";
import { styled } from "styled-components";

export interface IconProps {
  src?: ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
}

const MyIcon = ({ src, width, height, onClick }: IconProps) => {

    const StyledGrid = styled(Grid)`
        width:${width},
        height:${height}
    `

    return (
      <StyledGrid onClick={onClick}>
        {src}
      </StyledGrid>
    );
};

export default MyIcon;