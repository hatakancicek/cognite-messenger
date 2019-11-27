import React from "react";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";

import Chats from "../components/Chats";
import Divider from "../components/Divider";
import Messages from "../components/Messages";
import NewMessage from "../components/NewMessage";

const Root = styled(Grid)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled(Grid)`
  height: 100%;
  overflow: hidden;
`;

const MessagesContainer = styled(Grid)`
  overflow-y: auto;
`;

function App() {
  return (
    <Root container direction="row">
      <Grid item xs={3} container direction="row">
        <Grid item xs>
          <Chats />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
      </Grid>
      <Wrapper item xs={9}>
        <Wrapper container direction="column" alignItems="stretch">
          <MessagesContainer item xs>
            <Messages />
          </MessagesContainer>
          <Grid item>
            <NewMessage />
          </Grid>
        </Wrapper>
      </Wrapper>
    </Root>
  );
}

export default App;
