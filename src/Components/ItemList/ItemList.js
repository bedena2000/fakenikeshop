import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./ItemList.module.css";
import ClipLoader from "react-spinners/ClipLoader";
import MediaCard from "./EachItem";

const ItemList = ({ itemsArray }) => {
  console.log(itemsArray);
  return (
    <div className={`${styles["item-list"]}`}>
      {itemsArray.length ? (
        itemsArray.map((item) => {
          return <MediaCard key={item.id} dataInfo={item} />;
        })
      ) : (
        <ClipLoader />
      )}
    </div>
  );
};

export default ItemList;
