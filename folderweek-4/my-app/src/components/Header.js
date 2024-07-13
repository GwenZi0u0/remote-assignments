/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = function () {
  return (
    <>
      <a
        href="#"
        id="logo"
        onClick={() => (window.location.href = "../../public/index.html")}
      >
        Website Title / Logo
      </a>
    </>
  );
};

export default Header;
