"use client";

import React, { useState, useMemo } from "react";
import {
  Table,
  Card,
  Input,
  Select,
  Button,
  Tag,
  Space,
  Row,
  Col,
  Statistic,
  Typography,
  Avatar,
  Tooltip,
  message,
} from "antd";
import {
  SearchOutlined,
  DownloadOutlined,
  FilterOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  StarFilled,
  TrophyOutlined,
} from "@ant-design/icons";
import * as XLSX from "xlsx";

const { Title, Text } = Typography;
const { Option } = Select;

const HubSpotLeadsPage = () => {
  // Mock HubSpot leads data
  const [leadsData] = useState([
    {
      id: "HS001",
      name: "Arjun Sharma",
      email: "arjun.sharma@email.com",
      phone: "+91 9876543210",
      class: "9th",
      school: "Delhi Public School",
      location: "New Delhi",
      source: "Website Form",
      status: "New",
      leadScore: 95,
      lastActivity: "2024-01-15",
      notes: "Interested in NDA preparation",
      parentName: "Raj Sharma",
      interests: ["NDA", "Physical Training"],
      budget: "50000-75000",
      timeline: "Immediate",
    },
    {
      id: "HS002",
      name: "Priya Patel",
      email: "priya.patel@email.com",
      phone: "+91 9876543211",
      class: "8th",
      school: "Kendriya Vidyalaya",
      location: "Mumbai",
      source: "Social Media",
      status: "Contacted",
      leadScore: 88,
      lastActivity: "2024-01-14",
      notes: "Parents very supportive, looking for boarding",
      parentName: "Kiran Patel",
      interests: ["Sainik School", "Leadership"],
      budget: "75000-100000",
      timeline: "3-6 months",
    },
    {
      id: "HS003",
      name: "Rohit Kumar",
      email: "rohit.kumar@email.com",
      phone: "+91 9876543212",
      class: "10th",
      school: "St. Xavier School",
      location: "Bangalore",
      source: "Referral",
      status: "Qualified",
      leadScore: 92,
      lastActivity: "2024-01-13",
      notes: "Excellent academic record, sports background",
      parentName: "Sunil Kumar",
      interests: ["Military Academy", "Sports"],
      budget: "100000+",
      timeline: "Immediate",
    },
    {
      id: "HS004",
      name: "Ananya Singh",
      email: "ananya.singh@email.com",
      phone: "+91 9876543213",
      class: "7th",
      school: "DAV Public School",
      location: "Chennai",
      source: "Website Form",
      status: "Nurturing",
      leadScore: 75,
      lastActivity: "2024-01-12",
      notes: "Young but very motivated student",
      parentName: "Vikram Singh",
      interests: ["Academic Excellence", "Discipline"],
      budget: "25000-50000",
      timeline: "6+ months",
    },
    {
      id: "HS005",
      name: "Karan Joshi",
      email: "karan.joshi@email.com",
      phone: "+91 9876543214",
      class: "9th",
      school: "Modern School",
      location: "Pune",
      source: "Email Campaign",
      status: "Converted",
      leadScore: 100,
      lastActivity: "2024-01-11",
      notes: "Enrolled in NDA preparation course",
      parentName: "Amit Joshi",
      interests: ["NDA", "Leadership", "Sports"],
      budget: "75000-100000",
      timeline: "Enrolled",
    },
  ]);

  const [filteredData, setFilteredData] = useState(leadsData);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sourceFilter, setSourceFilter] = useState("all");

  // Get timeline color
  const getTimelineColor = (timeline) => {
    if (timeline === "Immediate") return "red";
    if (timeline === "Enrolled") return "gold";
    return "default";
  };

  // Filter data based on search and filters
  const filterData = () => {
    let filtered = leadsData;

    if (searchText) {
      filtered = filtered.filter(
        (lead) =>
          lead.name.toLowerCase().includes(searchText.toLowerCase()) ||
          lead.email.toLowerCase().includes(searchText.toLowerCase()) ||
          lead.phone.includes(searchText) ||
          lead.location.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (statusFilter !== "all") {
      filtered = filtered.filter((lead) => lead.status === statusFilter);
    }

    if (sourceFilter !== "all") {
      filtered = filtered.filter((lead) => lead.source === sourceFilter);
    }

    setFilteredData(filtered);
  };

  React.useEffect(() => {
    filterData();
  }, [searchText, statusFilter, sourceFilter]);

  // Export to Excel
  const exportToExcel = () => {
    const exportData = filteredData.map((lead) => ({
      "Lead ID": lead.id,
      Name: lead.name,
      Email: lead.email,
      Phone: lead.phone,
      Class: lead.class,
      School: lead.school,
      Location: lead.location,
      Source: lead.source,
      Status: lead.status,
      "Lead Score": lead.leadScore,
      "Last Activity": lead.lastActivity,
      "Parent Name": lead.parentName,
      Budget: lead.budget,
      Timeline: lead.timeline,
      Notes: lead.notes,
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "HubSpot Leads");
    XLSX.writeFile(
      wb,
      `hubspot_leads_${new Date().toISOString().split("T")[0]}.xlsx`
    );
    message.success("Leads exported successfully!");
  };

  // Get status color
  const getStatusColor = (status) => {
    const colors = {
      New: "blue",
      Contacted: "orange",
      Qualified: "green",
      Nurturing: "purple",
      Converted: "gold",
      Lost: "red",
    };
    return colors[status] || "default";
  };

  // Get lead score color
  const getScoreColor = (score) => {
    if (score >= 90) return "#52c41a";
    if (score >= 70) return "#faad14";
    return "#ff4d4f";
  };

  // Statistics
  const stats = useMemo(() => {
    const total = leadsData.length;
    const converted = leadsData.filter(
      (lead) => lead.status === "Converted"
    ).length;
    const qualified = leadsData.filter(
      (lead) => lead.status === "Qualified"
    ).length;
    const avgScore = Math.round(
      leadsData.reduce((sum, lead) => sum + lead.leadScore, 0) / total
    );

    return {
      total,
      converted,
      qualified,
      avgScore,
      conversionRate: ((converted / total) * 100).toFixed(1),
    };
  }, [leadsData]);

  const columns = [
    {
      title: "Lead Info",
      key: "leadInfo",
      width: 250,
      render: (_, record) => (
        <Space direction="vertical" size="small">
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Avatar size="small" icon={<UserOutlined />} />
            <Text strong>{record.name}</Text>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <MailOutlined style={{ fontSize: 12, color: "#666" }} />
            <Text type="secondary" style={{ fontSize: 12 }}>
              {record.email}
            </Text>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <PhoneOutlined style={{ fontSize: 12, color: "#666" }} />
            <Text type="secondary" style={{ fontSize: 12 }}>
              {record.phone}
            </Text>
          </div>
        </Space>
      ),
    },
    {
      title: "Academic Info",
      key: "academicInfo",
      width: 200,
      render: (_, record) => (
        <Space direction="vertical" size="small">
          <Tag color="blue">Class {record.class}</Tag>
          <Text style={{ fontSize: 12 }}>{record.school}</Text>
          <Text type="secondary" style={{ fontSize: 12 }}>
            {record.location}
          </Text>
        </Space>
      ),
    },
    {
      title: "Source",
      dataIndex: "source",
      key: "source",
      width: 120,
      render: (source) => {
        const colors = {
          "Website Form": "green",
          "Social Media": "blue",
          Referral: "gold",
          "Email Campaign": "purple",
        };
        return <Tag color={colors[source]}>{source}</Tag>;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      width: 120,
      render: (status) => <Tag color={getStatusColor(status)}>{status}</Tag>,
    },
    {
      title: "Lead Score",
      dataIndex: "leadScore",
      key: "leadScore",
      width: 100,
      render: (score) => (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <StarFilled style={{ color: getScoreColor(score), fontSize: 14 }} />
          <Text strong style={{ color: getScoreColor(score) }}>
            {score}
          </Text>
        </div>
      ),
      sorter: (a, b) => a.leadScore - b.leadScore,
    },
    {
      title: "Timeline",
      dataIndex: "timeline",
      key: "timeline",
      width: 120,
      render: (timeline) => (
        <Tag color={getTimelineColor(timeline)}>{timeline}</Tag>
      ),
    },
    {
      title: "Last Activity",
      dataIndex: "lastActivity",
      key: "lastActivity",
      width: 120,
      render: (date) => (
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <CalendarOutlined style={{ fontSize: 12, color: "#666" }} />
          <Text style={{ fontSize: 12 }}>{date}</Text>
        </div>
      ),
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
      ellipsis: true,
      render: (notes) => (
        <Tooltip title={notes}>
          <Text style={{ fontSize: 12 }}>{notes}</Text>
        </Tooltip>
      ),
    },
  ];

  return (
    <div style={{ padding: "24px", background: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "12px",
          padding: "32px",
          marginBottom: "24px",
          color: "white",
        }}
      >
        <Row align="middle">
          <Col flex="auto">
            <Title
              level={2}
              style={{
                color: "white",
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <TrophyOutlined />
              HubSpot Leads Management
            </Title>
            <Text style={{ color: "rgba(255,255,255,0.8)", fontSize: "16px" }}>
              Manage and track leads from HubSpot CRM integration
            </Text>
          </Col>
        </Row>
      </div>

      {/* Statistics Cards */}
      <Row gutter={[16, 16]} style={{ marginBottom: "24px" }}>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Total Leads"
              value={stats.total}
              prefix={<UserOutlined />}
              valueStyle={{ color: "#1890ff" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Converted"
              value={stats.converted}
              prefix={<TrophyOutlined />}
              valueStyle={{ color: "#52c41a" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Conversion Rate"
              value={stats.conversionRate}
              suffix="%"
              valueStyle={{ color: "#faad14" }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card>
            <Statistic
              title="Avg Lead Score"
              value={stats.avgScore}
              prefix={<StarFilled />}
              valueStyle={{ color: "#722ed1" }}
            />
          </Card>
        </Col>
      </Row>

      {/* Filters and Actions */}
      <Card style={{ marginBottom: "24px" }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={8} md={6}>
            <Input
              placeholder="Search leads..."
              prefix={<SearchOutlined />}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              allowClear
            />
          </Col>
          <Col xs={12} sm={8} md={4}>
            <Select
              placeholder="Status"
              value={statusFilter}
              onChange={setStatusFilter}
              style={{ width: "100%" }}
              suffixIcon={<FilterOutlined />}
            >
              <Option value="all">All Status</Option>
              <Option value="New">New</Option>
              <Option value="Contacted">Contacted</Option>
              <Option value="Qualified">Qualified</Option>
              <Option value="Nurturing">Nurturing</Option>
              <Option value="Converted">Converted</Option>
            </Select>
          </Col>
          <Col xs={12} sm={8} md={4}>
            <Select
              placeholder="Source"
              value={sourceFilter}
              onChange={setSourceFilter}
              style={{ width: "100%" }}
              suffixIcon={<FilterOutlined />}
            >
              <Option value="all">All Sources</Option>
              <Option value="Website Form">Website Form</Option>
              <Option value="Social Media">Social Media</Option>
              <Option value="Referral">Referral</Option>
              <Option value="Email Campaign">Email Campaign</Option>
            </Select>
          </Col>
          <Col xs={24} sm={24} md={4}>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              onClick={exportToExcel}
              style={{ width: "100%" }}
            >
              Export Excel
            </Button>
          </Col>
          <Col xs={24} sm={24} md={6}>
            <Text type="secondary">
              Showing {filteredData.length} of {leadsData.length} leads
            </Text>
          </Col>
        </Row>
      </Card>

      {/* Leads Table */}
      <Card>
        <Table
          columns={columns}
          dataSource={filteredData}
          rowKey="id"
          pagination={{
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} leads`,
            defaultPageSize: 10,
            pageSizeOptions: ["10", "20", "50", "100"],
          }}
          scroll={{ x: 1200 }}
          size="middle"
        />
      </Card>
    </div>
  );
};

export default HubSpotLeadsPage;
