export const checkTokens = () => {
  try {
    const serializedTokens = localStorage.getItem("tokens");
    if (serializedTokens === null) {
      return undefined;
    }
    return JSON.parse(serializedTokens);
  } catch (err) {
    return undefined;
  }
};

export const saveTokens = (tokens) => {
  try {
    const serializedTokens = JSON.stringify(tokens);
    localStorage.setItem("tokens", serializedTokens);
  } catch (err) {
    console.log(err);
  }
};
