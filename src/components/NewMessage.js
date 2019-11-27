import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled from "styled-components";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";

import SendIcon from "@material-ui/icons/Send";

import { sendMessage } from "../store/actions";

const Root = styled(Grid)`
  width: 100%;
  min-height: 40px;
`;

function NewMessage({ userID, send }) {
  const [text, setText] = React.useState("");

  const handleChangeText = React.useCallback(e => setText(e.target.value), [
    setText
  ]);

  // Clear text on user's change
  React.useEffect(() => setText(""), [userID]);

  const handleSend = React.useCallback(() => {
    if (!text) return;
    send({ userID, text });
    setText("");
  }, [send, userID, text]);

  const handleKeyDown = React.useCallback(
    e => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <Root container direction="row" alignItems="center">
      <Grid item xs>
        <Box width="100%" m={1}>
          <TextField
            fullWidth
            multiline
            rowsMax={2}
            value={text}
            color="primary"
            variant="outlined"
            onSubmit={handleSend}
            onChange={handleChangeText}
            onKeyDown={handleKeyDown}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box m={1}>
          <IconButton disabled={!text} onClick={handleSend}>
            <SendIcon color="primary" />
          </IconButton>
        </Box>
      </Grid>
    </Root>
  );
}

NewMessage.propTypes = {
  send: PropTypes.func.isRequired,
  userID: PropTypes.number.isRequired
};

const connected = connect(
  ({ userID }) => ({ userID }),
  d => ({
    send: ({ userID, text }) => d(sendMessage({ userID, text }))
  })
)(NewMessage);

export default connected;
