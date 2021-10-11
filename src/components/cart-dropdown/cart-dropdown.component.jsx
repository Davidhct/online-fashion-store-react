import React from "react";

import CutomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";


const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CutomButton>GO TO CHEACKOUT</CutomButton>
        </div>
    </div>
);


export default CartDropdown;