import { Container, Grid } from "@material-ui/core";
import Nav from "./containers/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Nav />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
