import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./EachItem.module.css";
import { NavLink } from "react-router-dom";
import { data } from "autoprefixer";

export default function MediaCard({ dataInfo }) {
  return (
    <div
      className={`${styles["each-card-item"]}`}
      style={{
        textAlign: "center",
        marginBottom: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flexGrow: "1",
      }}
    >
      <div style={{ height: "200px", marginBottom: "40px" }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
          src={dataInfo.images}
        />
      </div>
      <div>
        <div
          style={{
            height: "200px",
            overflow: "scroll",
            marginBottom: "30px",
          }}
        >
          <NavLink
            to={`/shop/${dataInfo.id}`}
            style={{
              fontSize: "24px",
              color: "red",
              marginBottom: "20px",
              cursor: "pointer",
            }}
          >
            {dataInfo.title}
          </NavLink>
          <p style={{ fontSize: "14px", color: "teal", marginBottom: "20px" }}>
            {dataInfo.description}
          </p>
        </div>
        <div>
          <p
            style={{
              marginBottom: "30px",
            }}
          >
            price: ${dataInfo.price}{" "}
          </p>
          <NavLink
            to="/item"
            style={{
              marginTop: "20px",
              backgroundColor: "teal",
              padding: "20px",
              color: "white",
              borderRadius: "10px",
            }}
          >
            add to cart
          </NavLink>
        </div>
      </div>
    </div>
  );
}
