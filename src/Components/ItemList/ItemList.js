import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ItemList.module.css";
import ClipLoader from "react-spinners/ClipLoader";

const ItemList = ({ itemsArray }) => {
  return (
    <div className={`${styles["item-list"]}`}>
      {itemsArray.length ? "get" : (<ClipLoader />)}
    </div>
  );
};

export default ItemList;
