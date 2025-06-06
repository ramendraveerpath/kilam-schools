"use client";
import React, { useState, useMemo } from "react";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function GoogleLeadsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for Google Leads
  const googleLeadsData = [
    {
      id: "GL001",
      name: "Rahul Sharma",
      email: "rahul.sharma@gmail.com",
      phone: "+91-9876543210",
      fatherName: "Rajesh Sharma",
      fatherPhone: "+91-9876543211",
      age: 12,
      class: "7",
      source: "Google Ads",
      campaign: "Sainik School Prep",
      keyword: "sainik school coaching",
      location: "Delhi",
      status: "New",
      date: "2025-06-05",
      score: 85,
    },
    {
      id: "GL002",
      name: "Priya Gupta",
      email: "priya.gupta@gmail.com",
      phone: "+91-9876543212",
      fatherName: "Amit Gupta",
      fatherPhone: "+91-9876543213",
      age: 11,
      class: "6",
      source: "Google Search",
      campaign: "Military School Prep",
      keyword: "military school entrance",
      location: "Mumbai",
      status: "Contacted",
      date: "2025-06-04",
      score: 78,
    },
    {
      id: "GL003",
      name: "Arjun Singh",
      email: "arjun.singh@gmail.com",
      phone: "+91-9876543214",
      fatherName: "Vikram Singh",
      fatherPhone: "+91-9876543215",
      age: 13,
      class: "8",
      source: "Google Display",
      campaign: "Defense Academy",
      keyword: "defense school admission",
      location: "Bangalore",
      status: "Qualified",
      date: "2025-06-03",
      score: 92,
    },
    {
      id: "GL004",
      name: "Anjali Patel",
      email: "anjali.patel@gmail.com",
      phone: "+91-9876543216",
      fatherName: "Suresh Patel",
      fatherPhone: "+91-9876543217",
      age: 10,
      class: "5",
      source: "Google Shopping",
      campaign: "Prep Materials",
      keyword: "sainik school books",
      location: "Ahmedabad",
      status: "Enrolled",
      date: "2025-06-02",
      score: 96,
    },
    {
      id: "GL005",
      name: "Karan Mehta",
      email: "karan.mehta@gmail.com",
      phone: "+91-9876543218",
      fatherName: "Deepak Mehta",
      fatherPhone: "+91-9876543219",
      age: 14,
      class: "9",
      source: "Google Video",
      campaign: "Success Stories",
      keyword: "sainik school results",
      location: "Pune",
      status: "New",
      date: "2025-06-01",
      score: 73,
    },
  ];

  const filteredData = useMemo(() => {
    if (!searchTerm) return googleLeadsData;

    return googleLeadsData.filter(
      (lead) =>
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm) ||
        lead.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.source.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const exportToExcel = () => {
    const headers = [
      "ID",
      "Student Name",
      "Email",
      "Phone",
      "Father Name",
      "Father Phone",
      "Age",
      "Class",
      "Source",
      "Campaign",
      "Keyword",
      "Location",
      "Status",
      "Date",
      "Score",
    ];

    const csvContent = [
      headers.join(","),
      ...filteredData.map((lead) =>
        [
          lead.id,
          `"${lead.name}"`,
          lead.email,
          lead.phone,
          `"${lead.fatherName}"`,
          lead.fatherPhone,
          lead.age,
          lead.class,
          `"${lead.source}"`,
          `"${lead.campaign}"`,
          `"${lead.keyword}"`,
          `"${lead.location}"`,
          lead.status,
          lead.date,
          lead.score,
        ].join(",")
      ),
    ].join("\\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute(
      "download",
      `google-leads-${new Date().toISOString().split("T")[0]}.csv`
    );
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-800";
      case "Contacted":
        return "bg-yellow-100 text-yellow-800";
      case "Qualified":
        return "bg-green-100 text-green-800";
      case "Enrolled":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-600 font-semibold";
    if (score >= 80) return "text-blue-600 font-semibold";
    if (score >= 70) return "text-yellow-600 font-semibold";
    return "text-red-600 font-semibold";
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Google Leads</h1>
              <p className="mt-2 text-blue-100">
                Manage and track leads from Google Ads campaigns
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-blue-100">
                Total Leads: {filteredData.length}
              </span>
              <button
                onClick={exportToExcel}
                className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                <span>Export Excel</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-4">
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500">
              <option>All Status</option>
              <option>New</option>
              <option>Contacted</option>
              <option>Qualified</option>
              <option>Enrolled</option>
            </select>
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500">
              <option>All Sources</option>
              <option>Google Ads</option>
              <option>Google Search</option>
              <option>Google Display</option>
              <option>Google Video</option>
            </select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <EyeIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {googleLeadsData.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <PhoneIcon className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Contacted</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {
                    googleLeadsData.filter((l) => l.status === "Contacted")
                      .length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <EnvelopeIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Qualified</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {
                    googleLeadsData.filter((l) => l.status === "Qualified")
                      .length
                  }
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <ArrowDownTrayIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">
                  Conversion Rate
                </p>
                <p className="text-2xl font-semibold text-gray-900">
                  {Math.round(
                    (googleLeadsData.filter((l) => l.status === "Enrolled")
                      .length /
                      googleLeadsData.length) *
                      100
                  )}
                  %
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Academic Info
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Source Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Score
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {lead.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          ID: {lead.id}
                        </div>
                        <div className="text-sm text-gray-500">
                          {lead.location}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">
                          {lead.email}
                        </div>
                        <div className="text-sm text-gray-500">
                          {lead.phone}
                        </div>
                        <div className="text-sm text-gray-500">
                          Father: {lead.fatherName}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">
                          Age: {lead.age}
                        </div>
                        <div className="text-sm text-gray-500">
                          Class: {lead.class}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">
                          {lead.source}
                        </div>
                        <div className="text-sm text-gray-500">
                          {lead.campaign}
                        </div>
                        <div className="text-sm text-gray-500">
                          {lead.keyword}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                          lead.status
                        )}`}
                      >
                        {lead.status}
                      </span>
                      <div className="text-xs text-gray-500 mt-1">
                        {lead.date}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`text-sm font-medium ${getScoreColor(
                          lead.score
                        )}`}
                      >
                        {lead.score}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
