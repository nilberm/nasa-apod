import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PhotoContextProvider } from "./contexts/PhotoContext";
import "./App.css";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhoto";

function App() {
  return (
    <>
      {/* I created a context just to use if I need it in the future */}
      <PhotoContextProvider>
        <Router>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<NasaPhoto />} path="/nasaphoto" />
          </Routes>
        </Router>
      </PhotoContextProvider>
    </>
  );
}

export default App;
