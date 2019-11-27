import React from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import grey from "@material-ui/core/colors/grey";
import Typography from "@material-ui/core/Typography";

const Root = styled(Typography)`
  padding: 0.5em !important;
  max-width: 350px !important;
  text-align: left !important;
  margin: 0.25em 0.5em !important;
  border-width: 1px;
  min-width: 100px;
  border-radius: 4px;
  border-style: solid;
  background-color: ${grey[200]};
  border-color: ${grey[500]};
`;

export default function({ text }) {
  return (
    <Grid item>
      <Grid item container direction="row" justify="flex-start">
        <Grid item>
          <Root variant="body1">{text}</Root>
        </Grid>
      </Grid>
    </Grid>
  );
}
