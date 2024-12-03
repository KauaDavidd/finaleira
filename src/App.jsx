import React, { useState } from "react";
import "./App.css";
import Login from "./Login";
import Reserve from "./Reserve";
import Signup from "./Signup";
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Router path="/reserve" element={<Reserve />} />
        <Router path="/Sidnup" element={<Signup />} />
        <Route path="*" element={<h1 >404 </h1>} />
      </Routes>
    </BrowserRouter>
  );
};
export default App