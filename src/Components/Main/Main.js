import React from "react";
import styles from "./Main.module.css";
import Image from "../../img/Image.png";
import { NavLink } from "react-router-dom";
import footerImg1 from "../../img/category1.png";
import footerImg2 from "../../img/category2.png";
import footerImg3 from "../../img/category3.png";

const Main = () => {
  return (
    <>
      <main className={`${styles.main} main`}>
        <div className={`${styles["main-left"]} main-top`}>
          <p className={`${styles["main-left-describe"]}`}>
            TRENDING COLLECTION 2022
          </p>
          <h1 className={`${styles["main-left-title"]}`}>Fake Air Max 97</h1>
          <p className={`${styles["main-left-description"]}`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry'
          </p>
          <NavLink to="/shop">
            <button className={`${styles["main-left-btn"]}`}>Shop Page</button>
          </NavLink>
        </div>
        <div className={`${styles["main-right"]} main-top-image`}>
          <img className={`${styles["main-right-image"]} main-top-image-src`} src={Image} />
        </div>
      </main>
      <div className={`${styles["footer"]} main-footer`}>
        <NavLink className={`${styles["footer-item"]} main-footer-link`} to="/shop">
          <img src={footerImg1} />
        </NavLink>
        <NavLink className={`${styles["footer-item"]}`} to="/shop">
          <img src={footerImg2} />
        </NavLink>
        <NavLink className={`${styles["footer-item"]}`} to="/shop">
          <img src={footerImg3} />
        </NavLink>
      </div>
    </>
  );
};

export default Main;
