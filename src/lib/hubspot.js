import { Client } from "@hubspot/api-client";

// Initialize HubSpot client
const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
});

// In-memory storage for demo leads when HubSpot is not available
let demoLeadsData = [];

/**
 * Map form data to HubSpot contact properties
 */
function mapFormDataToHubSpotProperties(formData) {
  return {
    email: formData.email,
    firstname: formData.studentName?.split(" ")[0] || "",
    lastname: formData.studentName?.split(" ").slice(1).join(" ") || "",
    phone: formData.phone,
    school: formData.school || "",
    hs_lead_status: "NEW", // HubSpot lead status
    lifecyclestage: "lead",
    // Custom properties (these need to be created in HubSpot first)
    student_class: formData.class || "",
    parent_name: formData.parentName || "",
    address: formData.address || "",
    interests: Array.isArray(formData.interests)
      ? formData.interests.join(", ")
      : "",
    lead_source: "Website Form",
    budget: formData.budget || "",
    timeline: formData.timeline || "Not specified",
  };
}

/**
 * Map HubSpot contact to application format
 */
function mapHubSpotContactToLead(contact) {
  const properties = contact.properties;
  return {
    id: contact.id,
    studentName: `${properties.firstname || ""} ${
      properties.lastname || ""
    }`.trim(),
    email: properties.email || "",
    phone: properties.phone || "",
    class: properties.student_class || "",
    school: properties.school || "",
    parentName: properties.parent_name || "",
    address: properties.address || "",
    interests: properties.interests ? properties.interests.split(", ") : [],
    source: properties.lead_source || "Website Form",
    status: mapHubSpotStatusToAppStatus(properties.hs_lead_status),
    leadScore:
      parseInt(properties.hubspotscore) || Math.floor(Math.random() * 30) + 70,
    dateCreated: properties.createdate || new Date().toISOString(),
    lastActivity:
      properties.lastmodifieddate ||
      properties.createdate ||
      new Date().toISOString(),
    notes:
      properties.notes ||
      `Lead from ${properties.lead_source || "Website Form"}`,
    budget: properties.budget || "",
    timeline: properties.timeline || "Not specified",
  };
}

/**
 * Map HubSpot lead status to application status
 */
function mapHubSpotStatusToAppStatus(hubspotStatus) {
  const statusMap = {
    NEW: "New",
    OPEN: "Contacted",
    IN_PROGRESS: "Qualified",
    OPEN_DEAL: "Converted",
    UNQUALIFIED: "Unqualified",
    ATTEMPTED_TO_CONTACT: "Attempted",
    CONNECTED: "Connected",
    BAD_TIMING: "Bad Timing",
  };

  return statusMap[hubspotStatus] || "New";
}

/**
 * Get all contacts (leads) from HubSpot
 */
export async function getHubSpotLeads({
  page = 1,
  limit = 10,
  search = "",
  status = "",
  source = "",
  classValue = "",
} = {}) {
  try {
    const offset = (page - 1) * limit;

    // Properties to fetch
    const properties = [
      "email",
      "firstname",
      "lastname",
      "phone",
      "school",
      "hs_lead_status",
      "lifecyclestage",
      "student_class",
      "parent_name",
      "address",
      "interests",
      "lead_source",
      "budget",
      "timeline",
      "createdate",
      "lastmodifieddate",
      "hubspotscore",
      "notes",
    ];

    // Build filter groups for search
    let filterGroups = [];
    if (search) {
      filterGroups.push({
        filters: [
          {
            propertyName: "email",
            operator: "CONTAINS_TOKEN",
            value: search,
          },
          {
            propertyName: "firstname",
            operator: "CONTAINS_TOKEN",
            value: search,
          },
          {
            propertyName: "lastname",
            operator: "CONTAINS_TOKEN",
            value: search,
          },
          {
            propertyName: "phone",
            operator: "CONTAINS_TOKEN",
            value: search,
          },
          {
            propertyName: "school",
            operator: "CONTAINS_TOKEN",
            value: search,
          },
        ],
      });
    }
    if (status) {
      const statusMappingReversed = {
        New: "NEW",
        Contacted: "OPEN",
        Qualified: "IN_PROGRESS",
        Converted: "OPEN_DEAL",
        Unqualified: "UNQUALIFIED",
        Attempted: "ATTEMPTED_TO_CONTACT",
        Connected: "CONNECTED",
        "Bad Timing": "BAD_TIMING",
      };

      const hubspotStatus = statusMappingReversed[status];
      if (hubspotStatus) {
        filterGroups.push({
          filters: [
            {
              propertyName: "hs_lead_status",
              operator: "EQ",
              value: hubspotStatus,
            },
          ],
        });
      }
    }

    if (source) {
      filterGroups.push({
        filters: [
          {
            propertyName: "lead_source",
            operator: "EQ",
            value: source,
          },
        ],
      });
    }

    if (classValue) {
      filterGroups.push({
        filters: [
          {
            propertyName: "student_class",
            operator: "EQ",
            value: classValue,
          },
        ],
      });
    }

    const searchRequest = {
      filterGroups,
      properties,
      limit,
      after: offset,
      sorts: [
        {
          propertyName: "createdate",
          direction: "DESCENDING",
        },
      ],
    };

    const apiResponse = await hubspotClient.crm.contacts.searchApi.doSearch(
      searchRequest
    );
    const contacts = apiResponse.results || [];

    // Map HubSpot contacts to application format
    const leads = contacts.map(mapHubSpotContactToLead);
    // Get total count for pagination (with simpler query for better performance)
    let total = 0;
    try {
      const totalApiResponse =
        await hubspotClient.crm.contacts.searchApi.doSearch({
          filterGroups: [], // Get all contacts for total count
          properties: ["email"], // minimal properties for count
          limit: 1,
        });
      total = totalApiResponse.total || 0;
    } catch (countError) {
      console.warn(
        "Could not get total count, using results length:",
        countError.message
      );
      total = contacts.length;
    }
    // Calculate statistics
    let stats = {
      total: 0,
      converted: 0,
      qualified: 0,
      avgLeadScore: 0,
      conversionRate: "0.0",
    };

    try {
      const statsApiResponse =
        await hubspotClient.crm.contacts.searchApi.doSearch({
          filterGroups: [],
          properties: ["hs_lead_status", "hubspotscore"],
          limit: 1000, // Get more for accurate stats
        });

      const allContacts = statsApiResponse.results || [];
      stats = calculateStats(allContacts);
    } catch (statsError) {
      console.warn(
        "Could not calculate stats, using defaults:",
        statsError.message
      );
      stats.total = total;
    }

    return {
      success: true,
      data: leads,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
      stats,
      filters: {
        sources: ["Website Form", "Manual Entry", "Import"], // You can customize this
        statuses: ["New", "Contacted", "Qualified", "Converted", "Unqualified"],
      },
    };
  } catch (error) {
    console.error("HubSpot API Error:", error);
    // Return empty data structure when HubSpot API fails
    return getEmptyLeadsResponse({
      page,
      limit,
      search,
      status,
      source,
      classValue,
    });
  }
}

/**
 * Create a new contact (lead) in HubSpot
 */
export async function createHubSpotLead(formData) {
  try {
    const properties = mapFormDataToHubSpotProperties(formData);

    const simplePublicObjectInput = {
      properties,
    };

    const apiResponse = await hubspotClient.crm.contacts.basicApi.create(
      simplePublicObjectInput
    );

    // Map the created contact back to application format
    const newLead = mapHubSpotContactToLead(apiResponse);

    return {
      success: true,
      message: "Lead saved successfully to HubSpot",
      leadId: apiResponse.id,
      data: newLead,
    };
  } catch (error) {
    console.error("HubSpot Create Lead Error:", error);
    // Store in demo storage when HubSpot is not available
    return createDemoLead(formData);
  }
}

/**
 * Update a contact (lead) in HubSpot
 */
export async function updateHubSpotLead(contactId, updateData) {
  try {
    const properties = mapFormDataToHubSpotProperties(updateData);

    const simplePublicObjectInput = {
      properties,
    };

    const apiResponse = await hubspotClient.crm.contacts.basicApi.update(
      contactId,
      simplePublicObjectInput
    );

    const updatedLead = mapHubSpotContactToLead(apiResponse);

    return {
      success: true,
      message: "Lead updated successfully in HubSpot",
      data: updatedLead,
    };
  } catch (error) {
    console.error("HubSpot Update Lead Error:", error);
    throw new Error(`Failed to update lead in HubSpot: ${error.message}`);
  }
}

/**
 * Delete a contact (lead) from HubSpot
 */
export async function deleteHubSpotLead(contactId) {
  try {
    await hubspotClient.crm.contacts.basicApi.archive(contactId);

    return {
      success: true,
      message: "Lead deleted successfully from HubSpot",
    };
  } catch (error) {
    console.error("HubSpot Delete Lead Error:", error);
    throw new Error(`Failed to delete lead from HubSpot: ${error.message}`);
  }
}

/**
 * Calculate statistics from contacts
 */
function calculateStats(contacts) {
  const total = contacts.length;
  const converted = contacts.filter(
    (contact) => contact.properties.hs_lead_status === "OPEN_DEAL"
  ).length;
  const qualified = contacts.filter(
    (contact) => contact.properties.hs_lead_status === "IN_PROGRESS"
  ).length;

  const scores = contacts
    .map((contact) => parseInt(contact.properties.hubspotscore) || 0)
    .filter((score) => score > 0);

  const avgLeadScore =
    scores.length > 0
      ? Math.round(
          scores.reduce((sum, score) => sum + score, 0) / scores.length
        )
      : 0;

  const conversionRate =
    total > 0 ? ((converted / total) * 100).toFixed(1) : "0.0";

  return {
    total,
    converted,
    qualified,
    avgLeadScore,
    conversionRate,
  };
}

/**
 * Return empty response structure when HubSpot API fails
 */
function getEmptyLeadsResponse({
  page = 1,
  limit = 10,
  search = "",
  status = "",
  source = "",
  classValue = "",
} = {}) {
  let filteredLeads = [...demoLeadsData];

  // Apply filters to demo data if any exists
  if (search) {
    const searchLower = search.toLowerCase();
    filteredLeads = filteredLeads.filter(
      (lead) =>
        lead.studentName.toLowerCase().includes(searchLower) ||
        lead.email.toLowerCase().includes(searchLower) ||
        lead.phone.includes(search) ||
        lead.parentName.toLowerCase().includes(searchLower)
    );
  }

  if (status) {
    filteredLeads = filteredLeads.filter((lead) => lead.status === status);
  }

  if (source) {
    filteredLeads = filteredLeads.filter((lead) => lead.source === source);
  }

  if (classValue) {
    filteredLeads = filteredLeads.filter((lead) => lead.class === classValue);
  }

  // Calculate pagination
  const total = filteredLeads.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedLeads = filteredLeads.slice(startIndex, endIndex);

  // Calculate stats (will be 0 if no demo data)
  const stats = {
    total: demoLeadsData.length,
    converted: demoLeadsData.filter((lead) => lead.status === "Converted")
      .length,
    qualified: demoLeadsData.filter((lead) => lead.status === "Qualified")
      .length,
    avgLeadScore:
      demoLeadsData.length > 0
        ? Math.round(
            demoLeadsData.reduce((sum, lead) => sum + lead.leadScore, 0) /
              demoLeadsData.length
          )
        : 0,
    conversionRate:
      demoLeadsData.length > 0
        ? (
            (demoLeadsData.filter((lead) => lead.status === "Converted")
              .length /
              demoLeadsData.length) *
            100
          ).toFixed(1)
        : "0.0",
  };

  return {
    success: true,
    data: paginatedLeads,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    },
    stats,
    filters: {
      sources: ["Website Form", "Manual Entry", "Import"],
      statuses: ["New", "Contacted", "Qualified", "Converted", "Unqualified"],
      classes: ["5th", "6th", "7th", "8th"],
    },
    usingFallback: true,
    message:
      demoLeadsData.length === 0
        ? "No leads found. HubSpot integration not available."
        : undefined,
  };
}

/**
 * Create demo lead when HubSpot is not available
 */
function createDemoLead(formData) {
  const newId = `DEMO${String(demoLeadsData.length + 1).padStart(3, "0")}`;

  const newLead = {
    id: newId,
    studentName: formData.studentName,
    email: formData.email,
    phone: formData.phone,
    class: formData.class || "",
    school: formData.school || "",
    parentName: formData.parentName || "",
    address: formData.address || "",
    interests: formData.interests || [],
    source: "Website Form",
    status: "New",
    leadScore: Math.floor(Math.random() * 30) + 70,
    dateCreated: new Date().toISOString(),
    lastActivity: new Date().toISOString(),
    notes: "Lead from Website Form (Demo Mode)",
    budget: formData.budget || "",
    timeline: formData.timeline || "Not specified",
  };

  // Add to demo storage (in memory only)
  demoLeadsData.push(newLead);

  return {
    success: true,
    message:
      "Lead saved successfully (Demo Mode - HubSpot integration not available)",
    leadId: newId,
    data: newLead,
    usingFallback: true,
  };
}
