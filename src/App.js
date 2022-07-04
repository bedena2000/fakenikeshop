import React, { useState, useEffect, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Error from "./Components/Error/Error";
import ShopPage from "./Pages/ShopPage";
import Context from "./Context/Context";
// import ItemDescribe from "./Pages/ItemDescribe";
import PuffLoader from "react-spinners/PuffLoader";
import CartPage from "./Pages/CartPage";

function App() {
  const [storeData, setStoreData] = useState({
    storeItems: [],
    cartItems: [],
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
  console.log("cart items", storeData.cartItems);
  const modifyCart = (item) => {
    let itemChecker = false;
    let findCart = storeData.cartItems.forEach((subItem) => {
      if (subItem.id === item.id) {
        itemChecker = true;
      }
    });
    console.log(itemChecker);
    if (itemChecker) {
      return;
    } else {
      console.log("not include");
      let newArray = storeData.cartItems;
      newArray.push(item);
      setStoreData({
        ...storeData,
        cartItems: newArray,
      });
    }
  };

  const ItemDescribe = React.lazy(() => import("./Pages/ItemDescribe"));

  return (
    <Context.Provider
      value={{ storeData, initializeStore, checkerInitial, modifyCart }}
    >
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="shop" element={<ShopPage />} />
          <Route
            path="/shop/:id"
            element={
              <Suspense fallback={<PuffLoader />}>
                <ItemDescribe />
              </Suspense>
            }
          />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
