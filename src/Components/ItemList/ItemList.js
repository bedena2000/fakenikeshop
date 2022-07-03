import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ItemList.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import MediaCard from "./EachItem";

const ItemList = ({ itemsArray }) => {
  return (
    <div className={`${styles["item-list"]}`}>
      {itemsArray.storeItems.length
        ? new Array(20).fill(undefined).map((item, index) => {
            const currentItem = itemsArray.storeItems[index];
            console.log(currentItem);
            return (
              <MediaCard key={currentItem.id} eachItemInfo={currentItem} />
            );
          })
        : new Array(20).fill(undefined).map((item, index) => {
            const currentItem = itemsArray.storeItems[index];
            console.log(currentItem);
            return <MediaCard key={index} />;
          })}
    </div>
  );
};

export default ItemList;
