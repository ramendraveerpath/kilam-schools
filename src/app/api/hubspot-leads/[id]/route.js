import { NextResponse } from "next/server";

export async function PATCH(request, { params }) {
  try {
    const { id } = params;
    const { status } = await request.json();

    if (!id || !status) {
      return NextResponse.json(
        { success: false, error: "Lead ID and status are required" },
        { status: 400 }
      );
    }

    const hubspotResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${id}`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${process.env.HUBSPOT_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          properties: {
            hs_lead_status: status,
          },
        }),
      }
    );

    if (!hubspotResponse.ok) {
      const errorData = await hubspotResponse.text();
      console.error("HubSpot API error:", errorData);
      return NextResponse.json(
        { success: false, error: "Failed to update lead status in HubSpot" },
        { status: hubspotResponse.status }
      );
    }

    const updatedContact = await hubspotResponse.json();

    return NextResponse.json({
      success: true,
      data: {
        id: updatedContact.id,
        status: updatedContact.properties.hs_lead_status,
      },
    });
  } catch (error) {
    console.error("Error updating HubSpot lead status:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
