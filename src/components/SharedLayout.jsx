"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  VideoCameraOutlined,
  TrophyOutlined,
  HomeOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme, Typography } from "antd";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;
const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
  background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)",
};

const logoStyle = {
  height: "64px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255, 255, 255, 0.1)",
  margin: "16px",
  borderRadius: "8px",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
};

const SharedLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const headerStyle = {
    padding: 0,
    background: "linear-gradient(90deg, #ffffff 0%, #f8fafc 100%)",
    position: "sticky",
    top: 0,
    zIndex: 1,
    width: "100%",
    display: "flex",
    alignItems: "center",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid #e2e8f0",
  };

  return (
    <Layout hasSider>
      {" "}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={siderStyle}
        width={280}
        collapsedWidth={80}
      >
        <div style={logoStyle}>
          {!collapsed ? (
            <div style={{ textAlign: "center", color: "white" }}>
              <TrophyOutlined style={{ fontSize: "24px", color: "#fbbf24" }} />
              <Title
                level={4}
                style={{
                  color: "white",
                  margin: "8px 0 0 0",
                  fontSize: "16px",
                  fontWeight: "600",
                }}
              >
                Sainik Academy
              </Title>
              <div
                style={{ fontSize: "11px", color: "#e2e8f0", marginTop: "2px" }}
              >
                Defense Excellence
              </div>
            </div>
          ) : (
            <TrophyOutlined style={{ fontSize: "32px", color: "#fbbf24" }} />
          )}
        </div>{" "}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ background: "transparent", border: "none" }}
          items={[
            {
              key: "1",
              icon: <HomeOutlined />,
              label: "Home",
              onClick: () => router.push("/"),
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Enquiry Form",
              onClick: () => router.push("/form"),
            },
            {
              key: "3",
              icon: <DatabaseOutlined />,
              label: "Google Leads",
              onClick: () => router.push("/google-leads"),
            },
            {
              key: "4",
              icon: <DatabaseOutlined />,
              label: "HubSpot Leads",
              onClick: () => router.push("/hubspot-leads"),
            },
          ]}
        />
      </Sider>
      <Layout>
        {" "}
        <Header style={headerStyle}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "#374151",
            }}
          />
          <div style={{ marginLeft: "auto", marginRight: "24px" }}>
            <Title
              level={4}
              style={{
                margin: 0,
                color: "#1e40af",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Sainik Academy Dashboard
            </Title>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;
