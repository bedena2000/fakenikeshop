import React from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";

const CartItem = () => {
  return (
    <div>
      <img />
      <h3>Title</h3>
      <div>
        <AiOutlinePlusSquare />
        <p>0</p>
        <AiOutlineMinusSquare />
      </div>
    </div>
  );
};

export default CartItem;
