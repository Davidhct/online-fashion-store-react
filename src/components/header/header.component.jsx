import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/online-fashion-store-react">
      <h1 className="logo">onlineFashion</h1>
    </Link>
    <div className="options">
      <Link className="option" to="/online-fashion-store-react/shop">
        SHOP
      </Link>
      <Link className="option" to="/online-fashion-store-react/shop">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
