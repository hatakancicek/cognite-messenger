import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import User from "./User";
import Other from "./Other";

function Message({ senderID, user, createdAt, text }) {
  if (senderID === user) return <User createdAt={createdAt} text={text} />;

  return <Other createdAt={createdAt} text={text} />;
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  user: PropTypes.number.isRequired,
  senderID: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired
};

const connected = connect(({ user }) => ({ user }))(Message);

export default connected;
