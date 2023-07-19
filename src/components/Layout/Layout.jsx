import React from "react";
import Footer from "./Footer";
import Header from "./Header.jsx";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;