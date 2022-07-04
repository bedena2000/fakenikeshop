import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Error from "./Components/Error/Error";
import ShopPage from "./Pages/ShopPage";
import Context from "./Context/Context";
import ItemDescribe from "./Pages/ItemDescribe";

function App() {
  const [storeData, setStoreData] = useState({
    storeItems: [],
    storeCheckBox: "",
    isLoading: false,
    checker: undefined,
  });

  const initializeStore = (itemsArray) => {
    setStoreData({
      ...storeData,
      storeItems: itemsArray,
      isLoading: true,
    });
  };

  const checkerInitial = (checkerValue, checkerNumber) => {
    setStoreData({
      ...storeData,
      checker: {
        checkerValue,
        checkerNumber,
      },
    });
  };

  return (
    <Context.Provider value={{ storeData, initializeStore, checkerInitial }}>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="/shop/:id" element={<ItemDescribe />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
