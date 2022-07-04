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
      if (subItem.value.id === item.id) {
        itemChecker = true;
      }
    });
    console.log(itemChecker);
    if (itemChecker) {
      return;
    } else {
      let newObjectOfData = {
        value: item,
        counter: 1,
        price: item.price,
      };
      let newArray = storeData.cartItems;
      newArray.push(newObjectOfData);
      setStoreData({
        ...storeData,
        cartItems: newArray,
      });
    }
  };

  const findAndIncrease = (item) => {
    const prevArray = storeData.cartItems;
    const findItemElement = prevArray.filter(
      (newItem) => newItem.value.id === item.id
    )[0];
    console.log(findItemElement);
    const newArrayOfItem = prevArray.filter(
      (subItem) => subItem.value.id !== item.id
    );
    const newProperty = {
      ...findItemElement,
      counter: findItemElement.counter + 1,
    };
    console.log(newProperty);
    console.log(newArrayOfItem);
    console.log(prevArray);
  };

  const findAndDecrease = (item) => {};

  const ItemDescribe = React.lazy(() => import("./Pages/ItemDescribe"));

  return (
    <Context.Provider
      value={{
        storeData,
        initializeStore,
        checkerInitial,
        modifyCart,
        findAndIncrease,
      }}
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
