import { NextResponse } from "next/server";

// Mock Google Ads leads data
const googleAdsLeads = [
  {
    id: "GA001",
    name: "Arjun Singh",
    email: "arjun.singh@gmail.com",
    phone: "+91-9876543210",
    fatherName: "Vikram Singh",
    class: "9th",
    school: "Delhi Public School",
    location: "New Delhi",
    source: "Google Ads",
    campaign: "Sainik School Preparation",
    adGroup: "NDA Training",
    keyword: "sainik school coaching",
    cost: 45.5,
    status: "New",
    leadScore: 85,
    dateCreated: "2024-01-15T10:30:00Z",
    lastActivity: "2024-01-15T10:30:00Z",
    interests: ["NDA", "Physical Training"],
    budget: "50000-75000",
    timeline: "Immediate",
  },
  {
    id: "GA002",
    name: "Priya Patel",
    email: "priya.patel@gmail.com",
    phone: "+91-9876543211",
    fatherName: "Kiran Patel",
    class: "8th",
    school: "Kendriya Vidyalaya",
    location: "Mumbai",
    source: "Google Ads",
    campaign: "Military School Admission",
    adGroup: "Sainik School",
    keyword: "military school admission",
    cost: 52.3,
    status: "Contacted",
    leadScore: 92,
    dateCreated: "2024-01-14T09:15:00Z",
    lastActivity: "2024-01-16T14:20:00Z",
    interests: ["Sainik School", "Leadership"],
    budget: "75000-100000",
    timeline: "3-6 months",
  },
  {
    id: "GA003",
    name: "Rohit Kumar",
    email: "rohit.kumar@gmail.com",
    phone: "+91-9876543212",
    fatherName: "Sunil Kumar",
    class: "10th",
    school: "St. Xavier School",
    location: "Bangalore",
    source: "Google Ads",
    campaign: "NDA Preparation Course",
    adGroup: "Defense Training",
    keyword: "nda coaching near me",
    cost: 38.75,
    status: "Qualified",
    leadScore: 95,
    dateCreated: "2024-01-13T16:45:00Z",
    lastActivity: "2024-01-17T11:30:00Z",
    interests: ["Military Academy", "Sports"],
    budget: "100000+",
    timeline: "Immediate",
  },
  {
    id: "GA004",
    name: "Ananya Gupta",
    email: "ananya.gupta@gmail.com",
    phone: "+91-9876543213",
    fatherName: "Vikash Gupta",
    class: "7th",
    school: "DAV Public School",
    location: "Chennai",
    source: "Google Ads",
    campaign: "Early Bird Preparation",
    adGroup: "Foundation Course",
    keyword: "sainik school preparation class 7",
    cost: 41.2,
    status: "Nurturing",
    leadScore: 78,
    dateCreated: "2024-01-12T13:20:00Z",
    lastActivity: "2024-01-15T09:45:00Z",
    interests: ["Academic Excellence", "Discipline"],
    budget: "25000-50000",
    timeline: "6+ months",
  },
  {
    id: "GA005",
    name: "Karan Joshi",
    email: "karan.joshi@gmail.com",
    phone: "+91-9876543214",
    fatherName: "Amit Joshi",
    class: "9th",
    school: "Modern School",
    location: "Pune",
    source: "Google Ads",
    campaign: "Premium Coaching",
    adGroup: "All India Sainik School",
    keyword: "best sainik school coaching",
    cost: 67.85,
    status: "Converted",
    leadScore: 100,
    dateCreated: "2024-01-11T08:10:00Z",
    lastActivity: "2024-01-18T15:30:00Z",
    interests: ["NDA", "Leadership", "Sports"],
    budget: "75000-100000",
    timeline: "Enrolled",
  },
  {
    id: "GA006",
    name: "Sneha Reddy",
    email: "sneha.reddy@gmail.com",
    phone: "+91-9876543215",
    fatherName: "Ravi Reddy",
    class: "8th",
    school: "Narayana School",
    location: "Hyderabad",
    source: "Google Ads",
    campaign: "Regional Coaching",
    adGroup: "South India",
    keyword: "sainik school hyderabad",
    cost: 33.4,
    status: "New",
    leadScore: 82,
    dateCreated: "2024-01-16T12:00:00Z",
    lastActivity: "2024-01-16T12:00:00Z",
    interests: ["Academic Excellence", "Physical Training"],
    budget: "50000-75000",
    timeline: "3-6 months",
  },
];

export async function GET(request) {
  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const campaign = searchParams.get("campaign") || "";

    let filteredLeads = [...googleAdsLeads];

    // Apply search filter
    if (search) {
      filteredLeads = filteredLeads.filter(
        (lead) =>
          lead.name.toLowerCase().includes(search.toLowerCase()) ||
          lead.email.toLowerCase().includes(search.toLowerCase()) ||
          lead.phone.includes(search) ||
          lead.location.toLowerCase().includes(search.toLowerCase()) ||
          lead.campaign.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply status filter
    if (status) {
      filteredLeads = filteredLeads.filter((lead) => lead.status === status);
    }

    // Apply campaign filter
    if (campaign) {
      filteredLeads = filteredLeads.filter(
        (lead) => lead.campaign === campaign
      );
    }

    // Pagination
    const totalLeads = filteredLeads.length;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedLeads = filteredLeads.slice(startIndex, endIndex); // Calculate statistics
    const stats = {
      total: googleAdsLeads.length,
      contacted: googleAdsLeads.filter((lead) => lead.status === "Contacted")
        .length,
      qualified: googleAdsLeads.filter((lead) => lead.status === "Qualified")
        .length,
      converted: googleAdsLeads.filter((lead) => lead.status === "Converted")
        .length,
      avgCost:
        googleAdsLeads.length > 0
          ? (
              googleAdsLeads.reduce((sum, lead) => sum + lead.cost, 0) /
              googleAdsLeads.length
            ).toFixed(2)
          : 0,
      totalCost: googleAdsLeads.reduce((sum, lead) => sum + lead.cost, 0),
      avgLeadScore: Math.round(
        googleAdsLeads.reduce((sum, lead) => sum + lead.leadScore, 0) /
          googleAdsLeads.length
      ),
      conversionRate: (
        (googleAdsLeads.filter((lead) => lead.status === "Converted").length /
          googleAdsLeads.length) *
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
        campaigns: [...new Set(googleAdsLeads.map((lead) => lead.campaign))],
        statuses: [...new Set(googleAdsLeads.map((lead) => lead.status))],
      },
    });
  } catch (error) {
    console.error("Google Leads API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch Google Ads leads" },
      { status: 500 }
    );
  }
}
