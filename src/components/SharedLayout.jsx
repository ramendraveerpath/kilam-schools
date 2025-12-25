import React from "react";
import PropTypes from "prop-types";
import Navbar from "./navbar";
import Footer from "./footer";
import ProgressBar from "./ProgressBar";

const SharedLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <ProgressBar />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;
