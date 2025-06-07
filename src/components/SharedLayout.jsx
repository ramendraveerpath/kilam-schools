import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

const SharedLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
