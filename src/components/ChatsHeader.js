import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import blue from "@material-ui/core/colors/blue";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { connect } from "react-redux";

import { getUser } from "../utils";

const Root = styled(ListItem)`
  color: white !important;
  background-color: ${blue[500]} !important;
`;

function ChatsHeader({ user }) {
  return (
    <Root>
      <ListItemText color="inherit" primary={user} />
    </Root>
  );
}

ChatsHeader.propTypes = {
  user: PropTypes.string.isRequired
};

const connected = connect(({ user }) => ({
  user: getUser({ id: user })
}))(ChatsHeader);

export default connected;
