import { SET_USER, SET_MESSAGES, CHANGE_CHAT } from "./types";

export function setUser({ user }) {
  return {
    type: SET_USER,
    user
  };
}

export function setMessages({ messages }) {
  return {
    type: SET_MESSAGES,
    messages
  };
}

export function changeChat({ userID }) {
  return {
    type: CHANGE_CHAT,
    userID
  };
}
