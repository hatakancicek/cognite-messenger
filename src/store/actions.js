import { getMessages } from "../utils";
import { SET_USER, SET_MESSAGES, CHANGE_CHAT, SEND_MESSAGE } from "./types";

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

export function loadMessages() {
  const messages = getMessages();

  return setMessages({ messages });
}

export function sendMessage({ text, userID }) {
  return {
    type: SEND_MESSAGE,
    userID,
    text
  };
}
