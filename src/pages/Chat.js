import React from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Chats from "../components/Chats";
import Divider from "../components/Divider";

const Root = styled(Grid)`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled(Container)`
  height: 100%;
`;

function App() {
  return (
    <Root container direction="row">
      <Grid item xs={3}>
        <Chats />
      </Grid>
      <Divider />
      <Grid item xs={9}>
        <Wrapper>
          <Grid container direction="column" alignItems="stretch">
            <Grid item xs></Grid>
            <Grid item></Grid>
          </Grid>
        </Wrapper>
      </Grid>
    </Root>
  );
}

export default App;
