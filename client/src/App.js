import { Container, Grid } from "@material-ui/core";
import Nav from "./containers/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Nav />
      </Container>
    </div>
  );
}

export default App;
