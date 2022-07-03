import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ItemList.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import MediaCard from "./EachItem";

const ItemList = ({ itemsArray }) => {
  console.log(itemsArray);
  return (
    <div className={`${styles["item-list"]}`}>
      {itemsArray.storeItems.length ? (
        itemsArray.storeItems.map((item) => {
          return <MediaCard dataInfo={item}/>; 
        })
      ) : (
        <ClipLoader />
      )}
    </div>
  );
};

export default ItemList;
