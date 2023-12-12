import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Stack } from "@mui/material";
import styled from "styled-components";
import MyIcon from "../../atoms/Icon";
import { icons } from "../../../mocks/mocks";
import { HAMBURGER_IMG } from "../../../utils/constants";

interface Props {
  width: string;
  height: string;
}

const SideBar = ({ width, height }: Props) => {
  const StyledPaper = styled(Paper)({
    backgroundColor: "#201F24",
    width: width,
    height: height,
  });


  return (
    <>
      <Grid >
        <StyledPaper elevation={17}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            ml="24px"
          >
            {icons.map(icon => <MyIcon src={HAMBURGER_IMG} />)}
          </Stack>
        </StyledPaper>
      </Grid>
    </>
  );
};

export default SideBar;