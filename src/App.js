import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { LoadingPage, ChatPage } from "./pages";

function App({ loading }) {
  if (loading) return <LoadingPage />;

  return <ChatPage />;
}

App.propTypes = {
  loading: PropTypes.bool.isRequired
};

const connected = connect(({ user, messages }) => ({
  loading: !user && !messages
}))(App);

export default connected;
