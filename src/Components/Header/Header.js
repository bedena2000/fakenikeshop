import React, { useContext } from "react";
import styles from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.svg";
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";
import Context from "../../Context/Context";

const Header = () => {
  return (
    <div className={`header ${styles.header}`}>
      <div className={`${styles["left-part"]}`}>
        <NavLink to="/shop">
          <AiOutlineMenu className={`${styles["menu-icon"]}`} />
        </NavLink>
        <nav className="nav">
          <NavLink
            data-number={1}
            data-checkerText="clothes"
            className={`${styles["nav-link"]}`}
            to="/shop"
          >
            Clothes
          </NavLink>
          <NavLink
            data-number={2}
            data-checkerText="electronics"
            className={`${styles["nav-link"]}`}
            to="/shop"
          >
            Electronics
          </NavLink>
          <NavLink
            data-number={3}
            data-checkerText="furniture"
            className={`${styles["nav-link"]}`}
            to="/shop"
          >
            Furniture
          </NavLink>
          <NavLink
            data-number={4}
            data-checkerText="shoes"
            className={`${styles["nav-link"]}`}
            to="/shop"
          >
            Shoes
          </NavLink>
        </nav>
      </div>
      <div className={`${styles["logo-element"]} logo-element`}>
        <NavLink to="/">
          <img className="logo" src={Logo} />
        </NavLink>
      </div>
      <div className={`${styles["right-part"]}`}>
        <NavLink
          style={{ color: "#363E61" }}
          className={`${styles["right-part-link"]}`}
          to="/shop"
        >
          <FiSearch />
        </NavLink>
        <NavLink
          style={{ color: "#363E61" }}
          className={`${styles["right-part-link"]}`}
          to="/cart"
        >
          <BsCart2 />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
