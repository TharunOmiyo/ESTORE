import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "./navbar.css";

export default function NavBar() {
  return (
    <div className="header">
      <div className="header_logo">
        <StorefrontIcon className="header_logoImage" fontSize="large" />
        <h2>
          <a href="#" className="header_logoTitle">
            eStore
          </a>
        </h2>
      </div>
      <div className="header_search">
        <select className="dropdown">
          <option value={"Men"}>Men</option>
          <option value={"Men"}>Women</option>
          <option value={"Men"}>Kinds</option>
        </select>
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="nav_items">
          <span className="nav_itemOne"> Guest</span>
          <span className="nav_itemTwo">SignIn</span>
        </div>
        <div className="nav_items">
          <span className="nav_itemOne">Your</span>
          <span className="nav_itemTwo">Shop</span>
        </div>
        <div className="nav_itemBasket">
          <ShoppingBasketIcon className="nav_basketIcon" />
          <span className="nav_itemTwo nav_basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
