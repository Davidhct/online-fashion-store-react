import React from "react";

import "./custom-button.styles.scss";

const CutomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    type="button"
    className={`${inverted ? "inverted" : ""} custom-button `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CutomButton;
