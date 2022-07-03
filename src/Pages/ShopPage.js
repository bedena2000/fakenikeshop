import React, { useState, useEffect, useContext } from "react";
import styles from "./ShopPage.module.css";
import { BiSearchAlt } from "react-icons/bi";
import Context from "../Context/Context";
import ItemList from "../Components/ItemList/ItemList";

const ShopPage = () => {
  const {storeData, initializeStore} = useContext(Context);
  const [searchText, setSearchText] = useState(""); 
  console.log(storeData);
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => initializeStore(json));
  }, []);

  const onBlurText = () => {
    // get items logic
    if (searchText) {
    } else {
    }
  };

  return (
    <div className={`${styles["shop"]}`}>
      <div className={`${styles["shop-search-form"]}`}>
        <input
          type="text"
          className={`${styles["shop-field"]}`}
          value={searchText}
          onChange={handleChange}
          onBlur={onBlurText}
          placeholder="search item"
        />
        <BiSearchAlt
          onClick={onBlurText}
          className={`${styles["search-form-icon"]}`}
        />
      </div>

      <div className={`${styles["choosed-items"]}`}>
        <label className={`${styles["checkbox-item"]}`}>
          <input type="checkbox" />
          Men
        </label>
        <label className={`${styles["checkbox-item"]}`}>
          <input type="checkbox" />
          Women
        </label>
        <label className={`${styles["checkbox-item"]}`}>
          <input type="checkbox" />
          Kids
        </label>
        <label className={`${styles["checkbox-item"]}`}>
          <input type="checkbox" />
          Trending
        </label>
      </div>

      {/* <ItemList /> */}
    </div>
  );
};

export default ShopPage;
