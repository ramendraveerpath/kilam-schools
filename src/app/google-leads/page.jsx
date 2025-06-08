"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import * as XLSX from "xlsx";

export default function GoogleLeadsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [campaignFilter, setCampaignFilter] = useState("");
  const [tableLoading, setTableLoading] = useState(true);
  const [exportLoading, setExportLoading] = useState(false);
  const [googleLeadsData, setGoogleLeadsData] = useState([]);
  const [stats, setStats] = useState({});
  const [filters, setFilters] = useState({ campaigns: [], statuses: [] });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });

  // Fetch Google Ads leads from API
  const fetchGoogleLeads = async (
    page = 1,
    search = "",
    status = "",
    campaign = ""
  ) => {
    setTableLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
        ...(search && { search }),
        ...(status && { status }),
        ...(campaign && { campaign }),
      });

      const response = await fetch(`/api/google-leads?${params}`);
      const result = await response.json();

      if (result.success) {
        setGoogleLeadsData(result.data);
        setStats(result.stats);
        setFilters(result.filters);
        setPagination(result.pagination);
      } else {
        console.error("Failed to fetch Google leads:", result.error);
      }
    } catch (error) {
      console.error("Error fetching Google leads:", error);
    } finally {
      setTableLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchGoogleLeads(1, "", "", "");
  }, []);

  // Handle search and filter changes
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchGoogleLeads(1, searchTerm, statusFilter, campaignFilter);
    }, 500);
    return () => clearTimeout(debounceTimer);
  }, [searchTerm, statusFilter, campaignFilter]);

  // Export to Excel
  const exportToExcel = async () => {
    setExportLoading(true);
    try {
      // Fetch filtered data for export (with current search and filter parameters)
      const params = new URLSearchParams({
        limit: "1000", // Get all filtered results
        ...(searchTerm && { search: searchTerm }),
        ...(statusFilter && { status: statusFilter }),
        ...(campaignFilter && { campaign: campaignFilter }),
      });

      const response = await fetch(`/api/google-leads?${params}`);
      const result = await response.json();

      if (result.success) {
        const exportData = result.data.map((lead) => ({
          "Lead ID": lead.id,
          Name: lead.name,
          Email: lead.email,
          Phone: lead.phone,
          "Father Name": lead.fatherName,
          Class: lead.class,
          School: lead.school,
          Location: lead.location,
          Campaign: lead.campaign,
          "Ad Group": lead.adGroup,
          Keyword: lead.keyword,
          "Cost (₹)": lead.cost,
          Status: lead.status,
          "Lead Score": lead.leadScore,
          "Date Created": new Date(lead.dateCreated).toLocaleDateString(),
          "Last Activity": new Date(lead.lastActivity).toLocaleDateString(),
          Budget: lead.budget,
          Timeline: lead.timeline,
          Interests: lead.interests.join(", "),
        }));

        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Google Ads Leads");
        XLSX.writeFile(
          wb,
          `google_ads_leads_${new Date().toISOString().split("T")[0]}.xlsx`
        );

        alert("Google Ads leads exported successfully!");
      }
    } catch (error) {
      console.error("Export error:", error);
      alert("Failed to export leads");
    } finally {
      setExportLoading(false);
    }
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
    <div className="bg-white min-h-screen overflow-x-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Google Ads Leads
              </h1>
              <p className="mt-2 text-sm sm:text-base text-blue-100">
                Manage and track leads from Google Ads campaigns
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-blue-100 text-sm sm:text-base text-center">
                Total Leads: {stats.total || 0}
              </span>
              <button
                onClick={exportToExcel}
                disabled={exportLoading}
                className="flex items-center justify-center space-x-2 bg-white text-blue-600 px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto text-sm sm:text-base"
              >
                {exportLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-blue-600"></div>
                ) : (
                  <ArrowDownTrayIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
                <span>{exportLoading ? "Exporting..." : "Export Excel"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Search and Filters */}{" "}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-6 overflow-hidden">
          <div className="relative flex-1 max-w-full lg:max-w-md">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 overflow-hidden">
            <div className="relative w-full sm:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base w-full sm:w-auto appearance-none"
              >
                <option value="">All Status</option>
                {filters.statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative w-full sm:w-auto">
              <select
                value={campaignFilter}
                onChange={(e) => setCampaignFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 text-sm sm:text-base w-full sm:w-auto appearance-none"
              >
                <option value="">All Campaigns</option>
                {filters.campaigns.map((campaign) => (
                  <option key={campaign} value={campaign}>
                    {campaign}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>{" "}
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <EyeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Total Leads
                </p>
                <p className="text-lg sm:text-2xl font-semibold text-gray-900">
                  {stats.total || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Contacted
                </p>
                <p className="text-lg sm:text-2xl font-semibold text-gray-900">
                  {stats.contacted || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Qualified
                </p>
                <p className="text-lg sm:text-2xl font-semibold text-gray-900">
                  {stats.qualified || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <ArrowDownTrayIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Avg Cost
                </p>
                <p className="text-lg sm:text-2xl font-semibold text-gray-900">
                  ₹{stats.avgCost || 0}
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* Data Table */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Student Details
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact Info
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Academic Info
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Campaign Details
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Score & Cost
                  </th>
                </tr>
              </thead>{" "}
              <tbody className="bg-white divide-y divide-gray-200">
                {tableLoading ? (
                  <tr>
                    <td colSpan="6" className="px-3 sm:px-6 py-12 text-center">
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-blue-600"></div>
                        <span className="ml-3 text-gray-500 text-sm sm:text-base">
                          Loading leads...
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : googleLeadsData.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-3 sm:px-6 py-12 text-center text-gray-500 text-sm sm:text-base"
                    >
                      No leads found matching your criteria.
                    </td>
                  </tr>
                ) : (
                  googleLeadsData.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-3 sm:px-6 py-4">
                        <div>
                          <div className="text-xs sm:text-sm font-medium text-gray-900 break-words">
                            {lead.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            ID: {lead.id}
                          </div>
                          <div className="text-xs text-gray-500 break-words">
                            {lead.location}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4">
                        <div>
                          <div className="text-xs sm:text-sm text-gray-900 break-words">
                            {lead.email}
                          </div>{" "}
                          <div className="text-xs text-gray-500">
                            {lead.phone}
                          </div>
                          <div className="text-xs text-gray-500 break-words">
                            Father: {lead.fatherName}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 hidden lg:table-cell">
                        <div>
                          <div className="text-xs sm:text-sm text-gray-900">
                            Class: {lead.class}
                          </div>
                          <div className="text-xs text-gray-500 break-words">
                            {lead.school}
                          </div>
                          <div className="text-xs text-gray-500 break-words">
                            Interests: {lead.interests?.join(", ") || "N/A"}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 hidden md:table-cell">
                        <div>
                          <div className="text-xs sm:text-sm text-gray-900 break-words">
                            {lead.campaign}
                          </div>
                          <div className="text-xs text-gray-500 break-words">
                            {lead.adGroup}
                          </div>
                          <div className="text-xs text-gray-500 break-words">
                            {lead.keyword}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            lead.status
                          )}`}
                        >
                          {lead.status}
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          {new Date(lead.dateCreated).toLocaleDateString()}
                        </div>
                        {/* Show academic info on mobile */}
                        <div className="lg:hidden mt-2">
                          <div className="text-xs text-gray-700">
                            Class: {lead.class}
                          </div>
                        </div>
                      </td>
                      <td className="px-3 sm:px-6 py-4 hidden sm:table-cell">
                        <div>
                          <span
                            className={`text-xs sm:text-sm font-medium ${getScoreColor(
                              lead.leadScore
                            )}`}
                          >
                            {lead.leadScore}%
                          </span>{" "}
                          <div className="text-sm text-gray-500">
                            ₹{lead.cost}
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>{" "}
          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="px-3 sm:px-6 py-3 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs sm:text-sm text-gray-700 text-center sm:text-left">
                Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
                {Math.min(pagination.page * pagination.limit, pagination.total)}{" "}
                of {pagination.total} results
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    fetchGoogleLeads(
                      pagination.page - 1,
                      searchTerm,
                      statusFilter,
                      campaignFilter
                    )
                  }
                  disabled={pagination.page <= 1}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  Previous
                </button>
                <span className="px-2 sm:px-3 py-1 text-xs sm:text-sm">
                  Page {pagination.page} of {pagination.totalPages}
                </span>
                <button
                  onClick={() =>
                    fetchGoogleLeads(
                      pagination.page + 1,
                      searchTerm,
                      statusFilter,
                      campaignFilter
                    )
                  }
                  disabled={pagination.page >= pagination.totalPages}
                  className="px-2 sm:px-3 py-1 text-xs sm:text-sm border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
