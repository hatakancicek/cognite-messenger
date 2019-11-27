import { USERS, MESSAGES } from "../mocks";

export function getUser({ id }) {
  return USERS[id];
}

export function getMessages() {
  return MESSAGES;
}
