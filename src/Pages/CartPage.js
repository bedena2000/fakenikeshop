import React, { useContext, useEffect, useState } from "react";
import styles from "./CartPage.module.css";
import CartItem from "./CartItem";
import Context from "../Context/Context";

const CartPage = () => {
  const { storeData } = useContext(Context);
  const [fullAmount, setFullAmount] = useState(0);
  console.log(storeData.cartItems);
  useEffect(() => {
    let fullAmountPrice = 0;
    storeData.cartItems.map((item) => {
      const { price, counter, value } = item;
      let newPrice = price * counter;
      fullAmountPrice += newPrice;
    });
    setFullAmount(fullAmountPrice);
  });
  return (
    <>
      <h2
        style={{
          fontSize: "62px",
          marginTop: "32px",
        }}
      >
        Full Amount: ${fullAmount}
      </h2>
      <div
        style={{
          marginTop: "100px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {storeData.cartItems.length ? (
          storeData.cartItems.map((item) => <CartItem itemsProps={item} />)
        ) : (
          <p style={{ fontSize: "32px" }}>0 items in the store</p>
        )}
      </div>
    </>
  );
};

export default CartPage;
