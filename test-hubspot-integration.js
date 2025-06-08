// Test HubSpot Integration
const { createHubSpotLead, getHubSpotLeads } = require("./src/lib/hubspot.js");

async function testHubSpotIntegration() {
  console.log("🔄 Testing HubSpot Integration...\n");

  try {
    // Test 1: Create a test lead
    console.log("1️⃣ Testing lead creation...");
    const testLead = {
      studentName: "Test Student",
      email: "test@example.com",
      phone: "+91-9876543210",
      class: "9th",
      school: "Test School",
      parentName: "Test Parent",
      address: "Test Address",
      interests: ["NDA", "Physical Training"],
      budget: "50000-75000",
      timeline: "Immediate",
    };

    const createResult = await createHubSpotLead(testLead);
    console.log(
      "✅ Lead creation result:",
      createResult.success ? "SUCCESS" : "FAILED"
    );
    if (!createResult.success) {
      console.log("❌ Error:", createResult.error);
      return;
    }

    // Test 2: Retrieve leads
    console.log("\n2️⃣ Testing lead retrieval...");
    const leadsResult = await getHubSpotLeads({ page: 1, limit: 10 });
    console.log(
      "✅ Lead retrieval result:",
      leadsResult.success ? "SUCCESS" : "FAILED"
    );
    console.log("📊 Total leads found:", leadsResult.stats?.total || 0);
    console.log("📋 Sample leads:", leadsResult.data?.slice(0, 2));

    console.log("\n🎉 HubSpot integration test completed successfully!");
    console.log("\nNext steps:");
    console.log("1. Go to HubSpot → Contacts to see your test lead");
    console.log(
      "2. Visit http://localhost:3000/hubspot-leads to see the dashboard"
    );
    console.log("3. Test form submission at http://localhost:3000/form");
  } catch (error) {
    console.error("❌ Integration test failed:", error.message);
    console.log("\nTroubleshooting:");
    console.log(
      "1. Check your .env.local file has correct HUBSPOT_ACCESS_TOKEN"
    );
    console.log(
      "2. Verify your HubSpot private app has the required permissions"
    );
    console.log("3. Ensure your HubSpot account is active");
  }
}

testHubSpotIntegration();
