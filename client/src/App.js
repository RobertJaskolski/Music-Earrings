import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { Container } from "@material-ui/core";
import Nav from "./containers/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  const [tokens, setTokens] = useState();
  const getTokens = () => {
    const { access_token, refresh_token } = queryString.parse(
      window.location.hash
    );
    return access_token;
  };
  useEffect(() => {
    setTokens(getTokens());
  });

  return (
    <div className='App'>
      <Container maxWidth='xl'>
        <Nav />
        {tokens}
        <Footer />
      </Container>
    </div>
  );
}

export default App;
