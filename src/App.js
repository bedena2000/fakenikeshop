import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Error from "./Components/Error/Error";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
