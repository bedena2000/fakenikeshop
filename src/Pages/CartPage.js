import React, { useContext } from "react";
import styles from "./CartPage.module.css";
import CartItem from "./CartItem";
import Context from "../Context/Context";

const CartPage = () => {
  const { storeData } = useContext(Context);
  console.log(storeData.cartItems);
  return <div></div>;
};

export default CartPage;
