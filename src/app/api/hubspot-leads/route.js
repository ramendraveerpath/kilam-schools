import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const LEADS_FILE_PATH = path.join(process.cwd(), "data", "hubspot-leads.json");

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), "data");
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read leads from file
async function readLeadsFromFile() {
  try {
    await ensureDataDirectory();
    const data = await fs.readFile(LEADS_FILE_PATH, "utf8");
    return JSON.parse(data);
  } catch (error) {
    // Return empty array if file doesn't exist or is invalid
    return [];
  }
}

// Write leads to file
async function writeLeadsToFile(leads) {
  await ensureDataDirectory();
  await fs.writeFile(LEADS_FILE_PATH, JSON.stringify(leads, null, 2));
}

// Initial mock data for HubSpot (will be replaced by actual form submissions)
const initialHubSpotLeads = [
  {
    id: "HS001",
    studentName: "Arjun Sharma",
    email: "arjun.sharma@email.com",
    phone: "+91 9876543210",
    class: "9th",
    school: "Delhi Public School",
    parentName: "Raj Sharma",
    address: "123 Main Street, New Delhi, Delhi 110001",
    interests: ["NDA", "Physical Training"],
    source: "Website Form",
    status: "New",
    leadScore: 95,
    dateCreated: "2024-01-15T10:30:00Z",
    lastActivity: "2024-01-15T10:30:00Z",
    notes: "Interested in NDA preparation",
    budget: "50000-75000",
    timeline: "Immediate",
  },
  {
    id: "HS002",
    studentName: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 9876543211",
    class: "8th",
    school: "Kendriya Vidyalaya",
    parentName: "Kiran Patel",
    address: "456 Park Avenue, Mumbai, Maharashtra 400001",
    interests: ["Sainik School", "Leadership"],
    source: "Website Form",
    status: "Contacted",
    leadScore: 88,
    dateCreated: "2024-01-14T09:15:00Z",
    lastActivity: "2024-01-16T14:20:00Z",
    notes: "Parents very supportive, looking for boarding",
    budget: "75000-100000",
    timeline: "3-6 months",
  },
];

export async function GET(request) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Read leads from file
    let hubspotLeads = await readLeadsFromFile();

    // If no leads in file, initialize with mock data
    if (hubspotLeads.length === 0) {
      hubspotLeads = initialHubSpotLeads;
      await writeLeadsToFile(hubspotLeads);
    }

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const source = searchParams.get("source") || "";

    let filteredLeads = [...hubspotLeads];

    // Apply search filter
    if (search) {
      filteredLeads = filteredLeads.filter(
        (lead) =>
          lead.studentName.toLowerCase().includes(search.toLowerCase()) ||
          lead.email.toLowerCase().includes(search.toLowerCase()) ||
          lead.phone.includes(search) ||
          lead.school.toLowerCase().includes(search.toLowerCase()) ||
          lead.parentName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply status filter
    if (status) {
      filteredLeads = filteredLeads.filter((lead) => lead.status === status);
    }

    // Apply source filter
    if (source) {
      filteredLeads = filteredLeads.filter((lead) => lead.source === source);
    }

    // Sort by date created (newest first)
    filteredLeads.sort(
      (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
    );

    // Pagination
    const totalLeads = filteredLeads.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedLeads = filteredLeads.slice(startIndex, endIndex);

    // Calculate statistics
    const stats = {
      total: hubspotLeads.length,
      converted: hubspotLeads.filter((lead) => lead.status === "Converted")
        .length,
      qualified: hubspotLeads.filter((lead) => lead.status === "Qualified")
        .length,
      avgLeadScore: Math.round(
        hubspotLeads.reduce((sum, lead) => sum + lead.leadScore, 0) /
          hubspotLeads.length
      ),
      conversionRate: (
        (hubspotLeads.filter((lead) => lead.status === "Converted").length /
          hubspotLeads.length) *
        100
      ).toFixed(1),
    };

    return NextResponse.json({
      success: true,
      data: paginatedLeads,
      pagination: {
        page,
        limit,
        total: totalLeads,
        totalPages: Math.ceil(totalLeads / limit),
      },
      stats,
      filters: {
        sources: [...new Set(hubspotLeads.map((lead) => lead.source))],
        statuses: [...new Set(hubspotLeads.map((lead) => lead.status))],
      },
    });
  } catch (error) {
    console.error("HubSpot Leads API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch HubSpot leads" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const formData = await request.json();

    // Read existing leads
    let hubspotLeads = await readLeadsFromFile();

    // If no leads in file, initialize with mock data
    if (hubspotLeads.length === 0) {
      hubspotLeads = initialHubSpotLeads;
    }

    // Generate new lead ID
    const newId = `HS${String(hubspotLeads.length + 1).padStart(3, "0")}`;

    // Create new lead object
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
      leadScore: Math.floor(Math.random() * 30) + 70, // Random score between 70-100
      dateCreated: new Date().toISOString(),
      lastActivity: new Date().toISOString(),
      notes: `New form submission from ${formData.studentName}`,
      budget: formData.budget || "",
      timeline: formData.timeline || "Not specified",
    };

    // Add new lead to array
    hubspotLeads.push(newLead);

    // Save to file
    await writeLeadsToFile(hubspotLeads);

    return NextResponse.json({
      success: true,
      message: "Lead saved successfully",
      leadId: newId,
      data: newLead,
    });
  } catch (error) {
    console.error("HubSpot Lead Save Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save lead" },
      { status: 500 }
    );
  }
}
