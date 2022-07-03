import React from "react";
import styles from "./Header.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import Logo from "../../img/logo.svg";
import { FiSearch } from "react-icons/fi";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
  return (
    <div className={`header ${styles.header}`}>
      <div className={`${styles["left-part"]}`}>
        <NavLink to="/shop">
          <AiOutlineMenu className={`${styles["menu-icon"]}`} />
        </NavLink>
        <nav className="nav">
          <NavLink className={`${styles["nav-link"]}`} to="/shop">
            Clothes
          </NavLink>
          <NavLink className={`${styles["nav-link"]}`} to="/shop">
            Electronics
          </NavLink>
          <NavLink className={`${styles["nav-link"]}`} to="/shop">
            Furniture
          </NavLink>
          <NavLink className={`${styles["nav-link"]}`} to="/shop">
            Shoes
          </NavLink>
        </nav>
      </div>
      <div className={`${styles["logo-element"]}`}>
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
