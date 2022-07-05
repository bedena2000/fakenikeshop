import React, { useState, useEffect, useContext } from "react";
import styles from "./ShopPage.module.css";
import { BiSearchAlt } from "react-icons/bi";
import Context from "../Context/Context";
import ItemList from "../Components/ItemList/ItemList";
import { Outlet } from "react-router-dom";

const findItem = async (name) => {
  const data = await fetch(name);
  const result = await data.json();
  return result;
};

const ShopPage = () => {
  const {
    storeData = [],
    initializeStore,
    checkerInitial,
  } = useContext(Context);
  const [searchText, setSearchText] = useState("");
  const [resultText, setResultText] = useState(false);
  const [newArray, setNewArray] = useState([]);
  const [checker, setChecker] = useState();
  const options = [
    { label: "clothes" },
    { label: "electronics" },
    { label: "furniture" },
    { label: "shoes" },
  ];
  const handleChange = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  useEffect(() => {
    console.log("chceker changed");
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

  const checkerInfo = (event) => {
    const { name } = event.target;
    const dataNumber = event.target.dataset.number;
    checkerInitial(name, dataNumber);
    setChecker(name);
    console.log(storeData.checker);
    fetch(`https://api.escuelajs.co/api/v1/categories/${dataNumber}/products`)
      .then((data) => data.json())
      .then((result) => initializeStore(result));
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
          <input
            onClick={checkerInfo}
            checked={checker === "clothes"}
            name="clothes"
            type="checkbox"
            data-number={1}
          />
          Clothes
        </label>
        <label className={`${styles["checkbox-item"]}`}>
          <input
            onClick={checkerInfo}
            checked={checker === "electronics"}
            name="electronics"
            type="checkbox"
            data-number={2}
          />
          Electronics
        </label>
        <label className={`${styles["checkbox-item"]}`}>
          <input
            onClick={checkerInfo}
            checked={checker === "furniture"}
            name="furniture"
            type="checkbox"
            data-number={3}
          />
          Furniture
        </label>
        <label className={`${styles["checkbox-item"]}`}>
          <input
            onClick={checkerInfo}
            checked={checker === "shoes"}
            name="shoes"
            type="checkbox"
            data-number={4}
          />
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
