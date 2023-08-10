import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./page/Home";
import Men from "./page/Men";

import "./App.css";
import Women from "./page/Women";
import Handler404 from "./page/404";
import Article from "./page/Article";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route path='/' element={<Home />} />
        <Route path='/404' element={<Handler404 />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/article/:id' element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
