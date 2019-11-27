import { SET_USER, SET_MESSAGES, CHANGE_CHAT } from "./types";

const initialState = {
  messages: [],
  userID: "",
  user: null
};

function handleSetUser({ state, payload: { user } }) {
  return {
    ...state,
    user
  };
}

function handleChangeChat({ state, payload: { userID } }) {
  return {
    ...state,
    userID
  };
}

function handleSetMessages({ state, payload: { messages } }) {
  return {
    ...state,
    messages
  };
}

const HANDLERS = {
  [SET_USER]: handleSetUser,
  [CHANGE_CHAT]: handleSetMessages,
  [SET_MESSAGES]: handleChangeChat
};

export default function(state = initialState, { type, ...payload }) {
  return (HANDLERS[type] || (({ state }) => state))({ state, payload });
}
