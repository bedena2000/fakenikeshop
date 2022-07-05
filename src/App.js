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
    checker: {
      checkerValue: "",
      checkerNumber: undefined,
    },
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
  const modifyCart = (item) => {
    let itemChecker = false;
    let findCart = storeData.cartItems.forEach((subItem) => {
      if (subItem.value.id === item.id) {
        itemChecker = true;
      }
    });
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
    const newArray = prevArray.map((subItem) => {
      if (subItem.value.id === item.id) {
        const newValue = {
          ...subItem,
          counter: subItem.counter + 1,
        };
        return newValue;
      } else {
        return subItem;
      }
    });
    setStoreData({
      ...storeData,
      cartItems: newArray,
    });
  };

  const findAndDecrease = (item) => {
    const findThatItem = storeData.cartItems.filter(
      (subItem) => subItem.value.id === item.id
    )[0];
    if (findThatItem.counter === 1) {
      return;
    } else {
      if (item.counter !== 1) {
        const prevArray = storeData.cartItems;
        const newArray = prevArray.map((subItem) => {
          if (subItem.value.id === item.id) {
            const newValue = {
              ...subItem,
              counter: subItem.counter - 1,
            };
            return newValue;
          } else {
            return subItem;
          }
        });
        setStoreData({
          ...storeData,
          cartItems: newArray,
        });
      }
    }
  };

  const deleteItem = (item) => {
    let resultArray = storeData.cartItems.filter(
      (subItem) => subItem.value.id !== item.id
    );
    setStoreData({
      ...storeData,
      cartItems: resultArray,
    });
  };

  const ItemDescribe = React.lazy(() => import("./Pages/ItemDescribe"));

  return (
    <Context.Provider
      value={{
        storeData,
        initializeStore,
        checkerInitial,
        modifyCart,
        findAndIncrease,
        findAndDecrease,
        deleteItem,
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
