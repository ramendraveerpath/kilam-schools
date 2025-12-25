import { NextResponse } from "next/server";

// Import the mock data (in a real app, this would be from a database)
// For now, we'll simulate the update operation
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

    // In a real application, you would update the database here
    // For now, we'll simulate a successful update
    // This would typically involve updating a Google Sheets or database record

    // Simulate update delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      data: {
        id: id,
        status: status,
      },
    });
  } catch (error) {
    console.error("Error updating Google lead status:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
