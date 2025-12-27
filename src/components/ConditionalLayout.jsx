"use client";
import SharedLayout from "@/components/SharedLayout";
import PropTypes from "prop-types";

export default function ConditionalLayout({ children }) {
  return <SharedLayout>{children}</SharedLayout>;
}

ConditionalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
