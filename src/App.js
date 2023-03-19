import React from "react";
import "./todoStyle.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/posts'
          element={<Posts />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
