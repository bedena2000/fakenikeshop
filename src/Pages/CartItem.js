import React, { useContext } from "react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineMinusSquare } from "react-icons/ai";
import Context from "../Context/Context";

const CartItem = (itemsProps) => {
  const { findAndIncrease } = useContext(Context);
  return (
    <div
      style={{
        width: "300px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginBottom: "20px",
      }}
    >
      <div>
        <button
          style={{
            border: "1px dashed black",
            width: "100%",
            padding: "5px",
            marginBottom: "10px",
          }}
        >
          Delete
        </button>
        <img src={itemsProps.itemsProps.value.images} />
        <h3
          style={{
            fontSize: "24px",
            marginBottom: "20px",
          }}
        >
          {itemsProps.itemsProps.value.title}
        </h3>
        <p
          style={{
            fontSize: "18px",
          }}
        >
          price: ${itemsProps.itemsProps.value.price}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          border: "1px dashed black",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <AiOutlinePlusSquare
          style={{
            fontSize: "30px",
            cursor: "pointer",
          }}
          onClick={() => findAndIncrease(itemsProps.itemsProps.value)}
        />
        <p
          style={{
            fontSize: "24px",
          }}
        >
          {itemsProps.itemsProps.counter}
        </p>
        <AiOutlineMinusSquare
          style={{
            fontSize: "30px",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

export default CartItem;
