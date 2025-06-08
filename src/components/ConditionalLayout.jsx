"use client";
import { usePathname } from "next/navigation";
import SharedLayout from "@/components/SharedLayout";
import PropTypes from "prop-types";

export default function ConditionalLayout({ children }) {
  const pathname = usePathname();
  const isAdminLogin = pathname === "/admin-login";

  if (isAdminLogin) {
    return <div className="min-h-screen bg-gray-900">{children}</div>;
  }

  return <SharedLayout>{children}</SharedLayout>;
}

ConditionalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
