export const getChat = () => {
  return fetch('/chat.json').then((response) => response.json);
};
