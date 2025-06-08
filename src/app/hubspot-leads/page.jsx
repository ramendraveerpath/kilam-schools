"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import * as XLSX from "xlsx";
import { useToast } from "../../components/Toast";

export default function HubSpotLeadsPage() {
  const { showToast, ToastContainer } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [tableLoading, setTableLoading] = useState(true);
  const [exportLoading, setExportLoading] = useState(false);
  const [hubspotLeadsData, setHubspotLeadsData] = useState([]);
  const [stats, setStats] = useState({});
  const [filters, setFilters] = useState({ classes: [], statuses: [] });
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 0,
  });
  const [updating, setUpdating] = useState(null); // Track which lead is being updated

  // Function to update lead status
  const updateLeadStatus = async (leadId, newStatus) => {
    setUpdating(leadId);
    try {
      const response = await fetch(`/api/hubspot-leads/${leadId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      });

      const result = await response.json();

      if (result.success) {
        // Update the local state to reflect the change
        setHubspotLeadsData((prevData) =>
          prevData.map((lead) =>
            lead.id === leadId ? { ...lead, status: newStatus } : lead
          )
        );

        // Refresh data to update stats
        await fetchHubspotLeads(
          pagination.page,
          searchTerm,
          statusFilter,
          classFilter
        );

        showToast("Lead status updated successfully!", "success");
      } else {
        console.error("Failed to update status:", result.error);
        showToast("Failed to update lead status. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      showToast("An error occurred while updating the status.", "error");
    } finally {
      setUpdating(null);
    }
  };

  // Get available status options with fallback defaults
  const getStatusOptions = () => {
    const defaultStatuses = [
      "New",
      "Contacted",
      "Qualified",
      "Converted",
      "Nurturing",
      "Lost",
    ];
    const availableStatuses = filters.statuses || [];

    // Combine and deduplicate
    const allStatuses = [
      ...new Set([...availableStatuses, ...defaultStatuses]),
    ];
    return allStatuses;
  };

  // Fetch HubSpot leads from API
  const fetchHubspotLeads = async (
    page = 1,
    search = "",
    status = "",
    classValue = ""
  ) => {
    setTableLoading(true);
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: pagination.limit.toString(),
        ...(search && { search }),
        ...(status && { status }),
        ...(classValue && { class: classValue }),
      });

      const response = await fetch(`/api/hubspot-leads?${params}`);
      const result = await response.json();

      if (result.success) {
        setHubspotLeadsData(result.data);
        setStats(result.stats);
        setFilters(result.filters);
        setPagination(result.pagination);
      } else {
        console.error("Failed to fetch HubSpot leads:", result.error);
      }
    } catch (error) {
      console.error("Error fetching HubSpot leads:", error);
    } finally {
      setTableLoading(false);
    }
  }; // Initial load
  useEffect(() => {
    fetchHubspotLeads(1, "", "", "");
  }, []);
  // Handle search and filter changes
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      fetchHubspotLeads(1, searchTerm, statusFilter, classFilter);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm, statusFilter, classFilter]); // Export to Excel
  const exportToExcel = async () => {
    setExportLoading(true);
    try {
      // Fetch ALL filtered data for export (remove limit to get all matching records)
      const params = new URLSearchParams({
        limit: "1000", // Increase limit to get more records for export
        page: "1", // Start from first page
        ...(searchTerm && { search: searchTerm }),
        ...(statusFilter && { status: statusFilter }),
        ...(classFilter && { class: classFilter }),
      });

      const response = await fetch(`/api/hubspot-leads?${params}`);
      const result = await response.json();

      if (result.success && result.data.length > 0) {
        const exportData = result.data.map((lead) => ({
          "Lead ID": lead.id,
          "Student Name": lead.studentName,
          "Father Name": lead.fatherName || lead.parentName,
          Email: lead.email,
          Phone: lead.phone,
          "Class Interested": lead.classInterested || lead.class,
          School: lead.school,
          Location: lead.location || lead.address,
          Source: lead.source || "Website Form",
          Status: lead.status,
          "Lead Score": lead.leadScore,
          "Date Created": new Date(lead.dateCreated).toLocaleDateString(),
          Budget: lead.budget,
          Timeline: lead.timeline,
          "Additional Notes": lead.additionalNotes || lead.notes || "None",
        }));

        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "HubSpot Leads");

        // Use writeFileXLSX with blob approach to avoid clipboard API issues
        const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const blob = new Blob([wbout], { type: "application/octet-stream" });
        const fileName = `hubspot_leads_${
          new Date().toISOString().split("T")[0]
        }.xlsx`;

        // Create download link
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);

        alert(
          `HubSpot leads exported successfully! ${exportData.length} records exported.`
        );
      } else {
        alert("No data to export with current filters.");
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
      case "Converted":
        return "bg-purple-100 text-purple-800";
      case "Nurturing":
        return "bg-orange-100 text-orange-800";
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
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                HubSpot Leads
              </h1>
              <p className="mt-2 text-sm sm:text-base text-purple-100">
                Manage and track form submissions from your website
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-purple-100 text-sm sm:text-base text-center">
                Total Leads: {stats.total || 0}
              </span>
              <button
                onClick={exportToExcel}
                disabled={exportLoading}
                className="flex items-center justify-center space-x-2 bg-white text-purple-600 px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto text-sm sm:text-base"
              >
                {exportLoading ? (
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-purple-600"></div>
                ) : (
                  <ArrowDownTrayIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                )}
                <span>{exportLoading ? "Exporting..." : "Export Excel"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Search and Filters */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-6 overflow-hidden">
          <div className="relative flex-1 max-w-full lg:max-w-md">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 overflow-hidden">
            <div className="relative w-full sm:w-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 text-sm sm:text-base w-full sm:w-auto appearance-none"
              >
                <option value="">All Status</option>
                {filters.statuses &&
                  filters.statuses.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
              </select>
            </div>
            <div className="relative w-full sm:w-auto">
              <select
                value={classFilter}
                onChange={(e) => setClassFilter(e.target.value)}
                className="px-3 sm:px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 text-sm sm:text-base w-full sm:w-auto appearance-none"
              >
                <option value="">All Classes</option>
                {filters.classes &&
                  filters.classes.map((classVal) => (
                    <option key={classVal} value={classVal}>
                      {classVal}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <EyeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
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
              <div className="p-2 bg-blue-100 rounded-lg">
                <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
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
                <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-gray-600">
                  Converted
                </p>
                <p className="text-lg sm:text-2xl font-semibold text-gray-900">
                  {stats.converted || 0}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Data Table */}{" "}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap min-w-[120px]">
                    Name
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap hidden sm:table-cell min-w-[80px]">
                    ID
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap hidden md:table-cell min-w-[120px]">
                    Father Name
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap min-w-[150px]">
                    Email
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap min-w-[100px]">
                    Phone
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap hidden lg:table-cell min-w-[120px]">
                    Address
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap hidden lg:table-cell min-w-[80px]">
                    Class
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap hidden xl:table-cell min-w-[120px]">
                    School
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap hidden md:table-cell min-w-[100px]">
                    Budget
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap min-w-[140px]">
                    Status
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap hidden sm:table-cell min-w-[80px]">
                    Score
                  </th>
                  <th className="px-2 sm:px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap hidden sm:table-cell min-w-[100px]">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableLoading ? (
                  <tr>
                    <td colSpan="12" className="px-2 sm:px-3 py-12 text-center">
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-purple-600"></div>
                        <span className="ml-3 text-gray-500 text-sm sm:text-base">
                          Loading leads...
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : hubspotLeadsData && hubspotLeadsData.length > 0 ? (
                  hubspotLeadsData.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-2 sm:px-3 py-4">
                        <div className="text-xs sm:text-sm font-medium text-gray-900 break-words">
                          {lead.studentName}
                        </div>
                        <div className="sm:hidden mt-1">
                          <div className="text-xs text-gray-500">
                            ID: {lead.id}
                          </div>
                          <div className="text-xs text-gray-500">
                            Father: {lead.parentName}
                          </div>
                        </div>
                      </td>
                      {/* ID */}
                      <td className="px-2 sm:px-3 py-4 hidden sm:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900">
                          {lead.id}
                        </div>
                      </td>
                      {/* Father Name */}
                      <td className="px-2 sm:px-3 py-4 hidden md:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900 break-words">
                          {lead.parentName}
                        </div>
                      </td>
                      {/* Email */}
                      <td className="px-2 sm:px-3 py-4">
                        <div className="text-xs sm:text-sm text-gray-900 break-words">
                          {lead.email}
                        </div>
                        {/* Show phone on mobile */}
                        <div className="sm:hidden mt-1">
                          <div className="text-xs text-gray-500">
                            {lead.phone}
                          </div>
                        </div>
                      </td>

                      {/* Phone */}
                      <td className="px-2 sm:px-3 py-4 hidden sm:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900">
                          {lead.phone}
                        </div>
                      </td>
                      {/* Address */}
                      <td className="px-2 sm:px-3 py-4 hidden lg:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900 break-words">
                          {lead.address || lead.location}
                        </div>
                      </td>
                      {/* Class */}
                      <td className="px-2 sm:px-3 py-4 hidden lg:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900">
                          {lead.class || lead.classInterested}
                        </div>
                      </td>
                      {/* School */}
                      <td className="px-2 sm:px-3 py-4 hidden xl:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900 break-words">
                          {lead.school}
                        </div>
                      </td>
                      {/* Budget */}
                      <td className="px-2 sm:px-3 py-4 hidden md:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900">
                          {lead.budget}
                        </div>
                      </td>
                      {/* Status */}
                      <td className="px-2 sm:px-3 py-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                              lead.status
                            )}`}
                          >
                            {lead.status}
                          </span>
                          {updating === lead.id ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-600"></div>
                          ) : (
                            <select
                              value={lead.status}
                              onChange={(e) =>
                                updateLeadStatus(lead.id, e.target.value)
                              }
                              disabled={updating === lead.id}
                              className="text-xs border border-gray-300 rounded px-1 py-0.5 bg-white focus:ring-1 focus:ring-purple-500 focus:border-purple-500"
                            >
                              {getStatusOptions().map((status) => (
                                <option key={status} value={status}>
                                  {status}
                                </option>
                              ))}
                            </select>
                          )}
                        </div>
                        {/* Show additional info on mobile */}
                        <div className="lg:hidden mt-1">
                          <div className="text-xs text-gray-500">
                            Class: {lead.class || lead.classInterested}
                          </div>
                          <div className="text-xs text-gray-500">
                            Budget: {lead.budget}
                          </div>
                        </div>
                      </td>

                      {/* Score */}
                      <td className="px-2 sm:px-3 py-4 hidden sm:table-cell">
                        <span
                          className={`text-xs sm:text-sm font-medium ${getScoreColor(
                            lead.leadScore
                          )}`}
                        >
                          {lead.leadScore}%
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-2 sm:px-3 py-4 hidden sm:table-cell">
                        <div className="text-xs sm:text-sm text-gray-900">
                          {new Date(lead.dateCreated).toLocaleDateString()}
                        </div>
                        {lead.notes && (
                          <div className="text-xs text-gray-500 mt-1 truncate max-w-32">
                            {lead.notes}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="12"
                      className="px-3 sm:px-6 py-12 text-center text-gray-500"
                    >
                      <div className="flex flex-col items-center">
                        <svg
                          className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mb-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <h3 className="text-sm sm:text-lg font-medium text-gray-900 mb-2">
                          No leads found
                        </h3>
                        <p className="text-sm text-gray-500 max-w-md text-center">
                          {stats.total === 0
                            ? "No leads have been submitted yet. When students fill out your contact forms, they'll appear here."
                            : "No leads match your current search criteria. Try adjusting your filters or search terms."}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="px-3 sm:px-6 py-3 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="text-xs sm:text-sm text-gray-700 text-center sm:text-left">
                Showing {(pagination.page - 1) * pagination.limit + 1} to
                {Math.min(pagination.page * pagination.limit, pagination.total)}
                of {pagination.total} results
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    fetchHubspotLeads(
                      pagination.page - 1,
                      searchTerm,
                      statusFilter,
                      classFilter
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
                    fetchHubspotLeads(
                      pagination.page + 1,
                      searchTerm,
                      statusFilter,
                      classFilter
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
      <ToastContainer />
    </div>
  );
}
