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

export default function HubSpotLeadsPage() {
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
  }); // Fetch HubSpot leads from API
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
  }, [searchTerm, statusFilter, classFilter]);

  // Export to Excel
  const exportToExcel = async () => {
    setExportLoading(true);
    try {
      // Fetch filtered data for export (with current search and filter parameters)
      const params = new URLSearchParams({
        limit: "1000", // Get all filtered results
        ...(searchTerm && { search: searchTerm }),
        ...(statusFilter && { status: statusFilter }),
        ...(classFilter && { class: classFilter }),
      });

      const response = await fetch(`/api/hubspot-leads?${params}`);
      const result = await response.json();

      if (result.success) {
        const exportData = result.data.map((lead) => ({
          "Lead ID": lead.id,
          "Student Name": lead.studentName,
          "Father Name": lead.fatherName,
          Email: lead.email,
          Phone: lead.phone,
          "Class Interested": lead.classInterested,
          School: lead.school,
          Location: lead.location,
          Source: lead.source || "Website Form",
          Status: lead.status,
          "Lead Score": lead.leadScore,
          "Date Created": new Date(lead.dateCreated).toLocaleDateString(),
          Budget: lead.budget,
          Timeline: lead.timeline,
          "Additional Notes": lead.additionalNotes || "None",
        }));

        const ws = XLSX.utils.json_to_sheet(exportData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "HubSpot Leads");
        XLSX.writeFile(
          wb,
          `hubspot_leads_${new Date().toISOString().split("T")[0]}.xlsx`
        );

        alert("HubSpot leads exported successfully!");
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
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py- pt-20">
        {/* Added pt-24 for fixed navbar */}
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">HubSpot Leads</h1>
              <p className="mt-2 text-purple-100">
                Manage and track form submissions from your website
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-purple-100">
                Total Leads: {stats.total || 0}
              </span>{" "}
              <button
                onClick={exportToExcel}
                disabled={exportLoading}
                className="flex items-center space-x-2 bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {exportLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600"></div>
                ) : (
                  <ArrowDownTrayIcon className="h-5 w-5" />
                )}
                <span>{exportLoading ? "Exporting..." : "Export Excel"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <div className="flex  flex-col sm:flex-row gap-3 items-center justify-between mb-6 px-2">
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
            >
              <option value="">All Status</option>
              {filters.statuses &&
                filters.statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
            </select>
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500"
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

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <EyeIcon className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Leads</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.total || 0}
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
                  {stats.contacted || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <EnvelopeIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Qualified</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.qualified || 0}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <UserIcon className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Converted</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.converted || 0}
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
                    Preferences
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
                {tableLoading ? (
                  <tr>
                    <td colSpan="6" className="px-6 py-12 text-center">
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
                        <span className="ml-3 text-gray-500">
                          Loading leads...
                        </span>
                      </div>
                    </td>
                  </tr>
                ) : hubspotLeadsData && hubspotLeadsData.length > 0 ? (
                  hubspotLeadsData.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {lead.studentName}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {lead.id}
                          </div>
                          <div className="text-sm text-gray-500">
                            Father: {lead.parentName}
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
                            {lead.address}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">
                            Class: {lead.class}
                          </div>
                          <div className="text-sm text-gray-500">
                            {lead.school}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm text-gray-900">
                            Budget: {lead.budget}
                          </div>
                          <div className="text-sm text-gray-500">
                            Timeline: {lead.timeline}
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
                          {new Date(lead.dateCreated).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <span
                            className={`text-sm font-medium ${getScoreColor(
                              lead.leadScore
                            )}`}
                          >
                            {lead.leadScore}%
                          </span>
                          {lead.notes && (
                            <div className="text-xs text-gray-500 mt-1 truncate max-w-32">
                              {lead.notes}
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No leads found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-700">
                Showing {(pagination.page - 1) * pagination.limit + 1} to{" "}
                {Math.min(pagination.page * pagination.limit, pagination.total)}{" "}
                of {pagination.total} results
              </div>
              <div className="flex space-x-2">
                {" "}
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
                  className="px-3 py-1 text-sm border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                  Previous
                </button>
                <span className="px-3 py-1 text-sm">
                  Page {pagination.page} of {pagination.totalPages}
                </span>{" "}
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
                  className="px-3 py-1 text-sm border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
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
