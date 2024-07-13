/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Header = function () {
  return (
    <>
      <a
        href="#"
        id="logo"
        onClick={() => (window.location.href = "../index.html")}
      >
        Counter by React
      </a>
    </>
  );
};

export default Header;
