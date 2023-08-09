import { Container } from "@mui/material";
import "./App.css";
import Home from "./page/Home";

function App() {
  return (
    <Container maxWidth='xl' sx={{ paddingTop: 2 }}>
      <Home />
    </Container>
  );
}

export default App;
