import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { changeChat } from "../store/actions";

import { getUser } from "../utils";

function ChatThumbnail({ userID, lastText, selectedChat, onClick }) {
  const user = React.useMemo(() => getUser({ id: userID }), [userID]);

  const handleClick = React.useCallback(() => onClick({ userID }), [
    userID,
    onClick
  ]);
  const isSelected = React.useMemo(() => selectedChat === userID, [
    selectedChat,
    userID
  ]);

  return (
    <ListItem button selected={isSelected} onClick={handleClick}>
      <ListItemText primary={user} secondary={lastText} />
    </ListItem>
  );
}

ChatThumbnail.propTypes = {
  onClick: PropTypes.func.isRequired,
  userID: PropTypes.number.isRequired,
  lastText: PropTypes.string.isRequired,
  selectedChat: PropTypes.number.isRequired
};

const connected = connect(
  ({ userID }) => ({
    selectedChat: userID
  }),
  d => ({
    onClick: ({ userID }) => d(changeChat({ userID }))
  })
)(ChatThumbnail);

export default connected;
