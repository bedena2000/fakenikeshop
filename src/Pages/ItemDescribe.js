import React from "react";
import styles from "./ItemDescribe.module.css";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Context from "../Context/Context";
import { useContext } from "react";

const ItemDescribe = () => {
  const { id } = useParams();
  const { storeData, modifyCart } = useContext(Context);
  const myItem = storeData.storeItems.filter(
    (item) => item.id === parseInt(id)
  )[0];

  return (
    <div className="item-description-wrapper">
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          gap: "30px",
        }}
        className="item-description"
      >
        <div>
          <img
            className={`${styles["item-describe-image"]}`}
            src={myItem.images}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              {myItem.title}
            </h1>

            <div className="item-describe-description">
              <p
                style={{
                  width: "400px",
                  fontSize: "20px",
                }}
              >
                {myItem.description}
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <NavLink
              className={`${styles["item-describe-btn"]}`}
              to="/cart"
              //   style={{
              //     background: "teal",
              //     padding: "20px",
              //     width: "100%",
              //     textAlign: "center",
              //     color: "white",
              //   }}
              onClick={() => modifyCart(myItem)}
            >
              Add to cart button
            </NavLink>
          </div>
        </div>
      </div>
      <p
        style={{
          fontSize: "62px",
        }}
      >
        Price: ${myItem.price}
      </p>
    </div>
  );
};

export default ItemDescribe;
