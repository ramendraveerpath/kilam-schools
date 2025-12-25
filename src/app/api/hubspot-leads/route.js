import { NextResponse } from "next/server";
import { getHubSpotLeads, createHubSpotLead } from "@/lib/hubspot";

export async function GET(request) {
  try {
    // Get query parameters
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const search = searchParams.get("search") || "";
    const status = searchParams.get("status") || "";
    const source = searchParams.get("source") || "";
    const classValue = searchParams.get("class") || "";

    // Fetch leads from HubSpot
    const result = await getHubSpotLeads({
      page,
      limit,
      search,
      status,
      source,
      classValue,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error("HubSpot Leads API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const formData = await request.json();

    // Create lead in HubSpot
    const result = await createHubSpotLead(formData);

    return NextResponse.json(result);
  } catch (error) {
    console.error("HubSpot Lead Save Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
