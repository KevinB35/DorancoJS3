import { Container } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./page/Home";
import Men from "./page/Men";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/' element={<Home />} />
        <Route path='men' element={<Men />} />
      </Route>
    </Routes>
  );
}

export default App;
