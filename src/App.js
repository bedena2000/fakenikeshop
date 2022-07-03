import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Error from "./Components/Error/Error";
import ShopPage from "./Pages/ShopPage";
import Context from "./Context/Context";

function App() {
  const [storeData, setStoreData] = useState({
    storeItems: [],
    storeCheckBox: "",
    isLoading: false,
  });

  const initializeStore = (itemsArray) => {
    setStoreData({
      ...storeData,
      storeItems: itemsArray,
      isLoading: true,
    });
  };

  return (
    <Context.Provider value={{ storeData, initializeStore }}>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
