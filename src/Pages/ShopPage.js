import React, { useState, useEffect, useContext } from "react";
import styles from "./ShopPage.module.css";
import { BiSearchAlt } from "react-icons/bi";
import Context from "../Context/Context";
import ItemList from "../Components/ItemList/ItemList";

const findItem = async (name) => {
  const data = await fetch(name);
  const result = await data.json();
  return result;
};

const ShopPage = () => {
  const { storeData = [], initializeStore } = useContext(Context);
  const [searchText, setSearchText] = useState("");
  const [resultText, setResultText] = useState(false);
  const [newArray, setNewArray] = useState([]);
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  useEffect(() => {
    fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=30`)
      .then((res) => res.json())
      .then((json) => initializeStore(json));
  }, []);

  const onBlurText = () => {
    // get items logic
    if (searchText) {
      let result = storeData.storeItems.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
      console.log(result);
      setNewArray(result);
      setResultText(true);
    } else {
      setResultText(false);
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
          Clothes
        </label>
        <label className={`${styles["checkbox-item"]}`}>
          <input type="checkbox" />
          Electronics
        </label>
        <label className={`${styles["checkbox-item"]}`}>
          <input type="checkbox" />
          Furniture
        </label>
        <label className={`${styles["checkbox-item"]}`}>
          <input type="checkbox" />
          Shoes
        </label>
      </div>
      {resultText ? (
        <ItemList itemsArray={newArray} />
      ) : (
        <ItemList itemsArray={storeData.storeItems} />
      )}
    </div>
  );
};

export default ShopPage;
