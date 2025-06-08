// Simple HubSpot Test - No ES Modules
console.log("🔄 Testing HubSpot API connection...\n");

// Test the API endpoint directly
async function testHubSpotAPI() {
  try {
    console.log("1️⃣ Testing HubSpot Leads API...");

    const response = await fetch(
      "http://localhost:3000/api/hubspot-leads?page=1&limit=10"
    );
    const result = await response.json();

    console.log("✅ API Response Status:", response.status);
    console.log("✅ API Success:", result.success);
    console.log("📊 Total Leads:", result.stats?.total || 0);
    console.log("📋 Sample Data:", result.data?.length || 0, "leads found");

    if (result.success) {
      console.log("\n🎉 HubSpot integration is working!");
      console.log("\nWhat you can do now:");
      console.log(
        "1. Visit http://localhost:3000/hubspot-leads to see the dashboard"
      );
      console.log("2. Fill out the form at http://localhost:3000/form");
      console.log("3. Check your HubSpot Contacts to see new leads");
    } else {
      console.log("\n❌ Integration needs attention");
      console.log("Error:", result.error);
    }
  } catch (error) {
    console.error("❌ Test failed:", error.message);
  }
}

// Run in browser environment
if (typeof window !== "undefined") {
  testHubSpotAPI();
} else {
  console.log("⚠️  This test should be run in the browser console");
  console.log("1. Open http://localhost:3000 in your browser");
  console.log("2. Open Developer Tools (F12)");
  console.log("3. Go to Console tab");
  console.log("4. Copy and paste this code");
}
