import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import List from "@material-ui/core/List";

import { connect } from "react-redux";

import ChatThumbnail from "./ChatThumbnail";
import ChatsHeader from "./ChatsHeader";
import { getUser } from "../utils";

const Root = styled(List)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0 !important;
`;

function Chats({ messages, user, userID }) {
  const users = {};

  messages.forEach(({ senderID, recieverID, text, createdAt }) => {
    const otherID = userID === senderID ? recieverID : senderID;

    if (!users[otherID]) {
      users[otherID] = {
        lastMessageAt: createdAt,
        userID: otherID,
        lastText: text
      };

      return;
    }

    const isLatter = createdAt > users[otherID].lastMessageAt;

    if (isLatter)
      users[otherID] = {
        lastMessageAt: createdAt,
        userID: otherID,
        lastText: text
      };
  });

  const thumbnails = Object.values(users).sort(
    (a, b) => a.lastMessageAt - b.lastMessageAt
  );

  return (
    <>
      <ChatsHeader />
      <Root>
        {thumbnails.map((thumbnail, index) => (
          <ChatThumbnail key={index} {...thumbnail} />
        ))}
      </Root>
    </>
  );
}

Chats.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      createdAt: PropTypes.number.isRequired,
      senderID: PropTypes.number.isRequired,
      recieverID: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  user: PropTypes.string.isRequired
};

const connected = connect(({ messages, user }) => ({
  messages,
  user: getUser({ id: user }),
  userID: user
}))(Chats);

export default connected;
