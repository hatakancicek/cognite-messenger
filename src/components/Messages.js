import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";

import Message from "./Message";

function Messages({ messages, userID }) {
  const sorted = messages.sort((a, b) => a.createdAt - b.createdAt);

  const dummy = React.useRef();

  // Anythime chat changes, we scroll to the bottom.
  React.useEffect(() => {
    // This acts weird
    // if(dummy.current)
    // dummy.current.scrollIntoView({ behavior: "smooth" })
  }, [userID, messages]);

  return (
    <>
      {sorted.map((message, index) => (
        <Grid item key={index}>
          <Message {...message} />
        </Grid>
      ))}
      <div style={{ float: "left", clear: "both" }} ref={dummy} />
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.number.isRequired,
      senderID: PropTypes.number.isRequired,
      recieverID: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ),
  userID: PropTypes.number.isRequired
};

const connected = connect(({ messages, userID }) => ({
  // Filter chats fro current target user.
  messages: messages.filter(
    ({ senderID, recieverID }) => recieverID === userID || senderID === userID
  ),
  userID
}))(Messages);

export default connected;
