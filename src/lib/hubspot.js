import { Client } from "@hubspot/api-client";

// Helper function to get HubSpot client (lazy initialization)
function getHubSpotClient() {
  // Try multiple ways to get the access token
  let accessToken =
    process.env.HUBSPOT_ACCESS_TOKEN ||
    process.env.NEXT_PUBLIC_HUBSPOT_ACCESS_TOKEN 

  console.log("🔧 getHubSpotClient() called");
  console.log("- NODE_ENV:", process.env.NODE_ENV);
  console.log("- Has token:", !!accessToken);
  console.log("- Token length:", accessToken?.length);

  if (!accessToken) {
    console.error("❌ No access token available");
    return null;
  }

  try {
    const client = new Client({ accessToken });
    console.log("✅ HubSpot client created successfully");
    return client;
  } catch (error) {
    console.error("❌ Error creating HubSpot client:", error);
    return null;
  }
}

// In-memory storage for demo leads when HubSpot is not available
let demoLeadsData = [
  {
    id: "DEMO001",
    studentName: "Rahul Sharma",
    email: "rahul.sharma@gmail.com",
    phone: "+91-9876543210",
    class: "9th",
    classInterested: "9th",
    school: "Delhi Public School",
    parentName: "Vikram Sharma",
    fatherName: "Vikram Sharma",
    address: "New Delhi",
    location: "New Delhi",
    interests: ["NDA", "Physical Training"],
    source: "Website Form",
    status: "New",
    leadScore: 85,
    dateCreated: new Date().toISOString(),
    lastActivity: new Date().toISOString(),
    notes: "Demo lead for testing",
    additionalNotes: "Demo lead for testing",
    budget: "50000-75000",
    timeline: "3-6 months",
  },
  {
    id: "DEMO002",
    studentName: "Priya Patel",
    email: "priya.patel@gmail.com",
    phone: "+91-9876543211",
    class: "8th",
    classInterested: "8th",
    school: "Kendriya Vidyalaya",
    parentName: "Kiran Patel",
    fatherName: "Kiran Patel",
    address: "Mumbai",
    location: "Mumbai",
    interests: ["Leadership", "Sports"],
    source: "Website Form",
    status: "Contacted",
    leadScore: 92,
    dateCreated: new Date().toISOString(),
    lastActivity: new Date().toISOString(),
    notes: "Demo lead for testing",
    additionalNotes: "Demo lead for testing",
    budget: "75000-100000",
    timeline: "Immediate",
  },
  {
    id: "DEMO003",
    studentName: "Arjun Kumar",
    email: "arjun.kumar@gmail.com",
    phone: "+91-9876543212",
    class: "10th",
    classInterested: "10th",
    school: "St. Xavier School",
    parentName: "Sunil Kumar",
    fatherName: "Sunil Kumar",
    address: "Bangalore",
    location: "Bangalore",
    interests: ["Military Academy", "Discipline"],
    source: "Website Form",
    status: "Qualified",
    leadScore: 88,
    dateCreated: new Date().toISOString(),
    lastActivity: new Date().toISOString(),
    notes: "Demo lead for testing",
    additionalNotes: "Demo lead for testing",
    budget: "100000+",
    timeline: "6-12 months",
  },
];

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
    studentName: `${properties.firstname || ""} ${properties.lastname || ""
      }`.trim(),
    email: properties.email || "",
    phone: properties.phone || "",
    class: properties.student_class || "",
    classInterested: properties.student_class || "", // Add this for frontend compatibility
    school: properties.school || "",
    parentName: properties.parent_name || "",
    fatherName: properties.parent_name || "", // Add this for frontend compatibility
    address: properties.address || "",
    location: properties.address || "", // Add this for frontend compatibility
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
    additionalNotes: properties.notes || "", // Add this for frontend compatibility
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
 * Map application status to HubSpot lead status
 */
function mapAppStatusToHubSpotStatus(appStatus) {
  const statusMap = {
    New: "NEW",
    Contacted: "OPEN",
    Qualified: "IN_PROGRESS",
    Converted: "OPEN_DEAL",
    Unqualified: "UNQUALIFIED",
    Attempted: "ATTEMPTED_TO_CONTACT",
    Connected: "CONNECTED",
    "Bad Timing": "BAD_TIMING",
    Nurturing: "OPEN", // Map to OPEN as a fallback
    Lost: "UNQUALIFIED", // Map to UNQUALIFIED as a fallback
  };
  return statusMap[appStatus] || "NEW";
}

// Export the mapping function for use in API routes
export { mapAppStatusToHubSpotStatus };

/**
 * Get all contacts (leads) from HubSpot
 */

// checkk all locagtion
export async function getHubSpotLeads({
  search = "",
  status = "",
  source = "",
  classValue = "",
} = {}) {
  console.log("🔍 getHubSpotLeads called with params:", {
    search,
    status,
    source,
    classValue,
  });

  const hubspotClient = getHubSpotClient();

  if (!hubspotClient) {
    console.warn("❌ HubSpot client not available");
    return getEmptyLeadsResponse({});
  }

  const properties = [
    "email",
    "firstname",
    "lastname",
    "phone",
    "hs_lead_status",
    "lifecyclestage",
    "createdate",
    "lastmodifieddate",
    "hubspotscore",
  ];

  const allLeads = [];
  let after = undefined;
  const limit = 200; // Max allowed

  try {
    while (true) {
      const searchRequest = {
        filterGroups: [],
        properties,
        limit,
        after,
        sorts: [
          {
            propertyName: "createdate",
            direction: "DESCENDING",
          },
        ],
      };

      const apiResponse = await hubspotClient.crm.contacts.searchApi.doSearch(searchRequest);
      const contacts = apiResponse.results || [];
      allLeads.push(...contacts);

      if (!apiResponse.paging || !apiResponse.paging.next) {
        break; // No more pages
      }

      after = apiResponse.paging.next.after;
    }

    const leads = allLeads.map(mapHubSpotContactToLead);

    const uniqueClasses = [...new Set(leads.map((lead) => lead.class).filter(Boolean))];

    // Fetch stats (optional and separate)
    let stats = {
      total: 0,
      converted: 0,
      qualified: 0,
      avgLeadScore: 0,
      conversionRate: "0.0",
    };

    try {
      const statsApiResponse = await hubspotClient.crm.contacts.searchApi.doSearch({
        filterGroups: [],
        properties: ["hs_lead_status", "hubspotscore"],
        limit: 200,
      });

      stats = calculateStats(statsApiResponse.results || []);
    } catch (statsError) {
      console.warn("Stats error:", statsError.message);
      stats.total = allLeads.length;
    }

    return {
      success: true,
      data: leads,
      pagination: {
        page: 1,
        limit: allLeads.length,
        total: allLeads.length,
        totalPages: 1,
      },
      stats,
      filters: {
        sources: ["Website Form", "Manual Entry", "Import"],
        statuses: ["New", "Contacted", "Qualified", "Converted", "Unqualified"],
        classes:
          uniqueClasses.length > 0
            ? uniqueClasses
            : ["3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th"],
      },
    };
  } catch (error) {
    console.error("HubSpot API Error:", error.message);
    return getEmptyLeadsResponse({});
  }
}


/**
 * Create a new contact (lead) in HubSpot
 */
export async function createHubSpotLead(formData) {
  try {
    const client = getHubSpotClient();

    if (!client) {
      throw new Error("HubSpot client not initialized");
    }

    const properties = mapFormDataToHubSpotProperties(formData);

    const simplePublicObjectInput = {
      properties,
    };

    const apiResponse = await client.crm.contacts.basicApi.create(
      simplePublicObjectInput
    );

    console.log("✅ HubSpot API Response:", apiResponse);

    const newLead = mapHubSpotContactToLead(apiResponse);

    return {
      success: true,
      message: "Lead saved successfully to HubSpot",
      leadId: apiResponse.id,
      data: newLead,
    };
  } catch (error) {
    console.error("❌ HubSpot Create Lead Error:", error.message || error);
    return createDemoLead(formData); // fallback
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
      classes: ["3rd", "4th", "5th", "6th", "7th", "8th"],
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
