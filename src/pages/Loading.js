import React from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Root = styled(Grid)`
  width: 100vw;
  height: 100vh;
`;

export default function Loading() {
  return (
    <Root container alignItems="center" justify="center">
      <Grid item>
        <CircularProgress size={72} />
      </Grid>
    </Root>
  );
}
