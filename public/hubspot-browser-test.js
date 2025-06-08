// Browser Console Test for HubSpot Integration
async function testHubSpotIntegration() {
  console.log("🔄 Testing HubSpot Integration...\n");

  try {
    // Test 1: API Connection
    console.log("1️⃣ Testing API connection...");
    const response = await fetch("/api/hubspot-leads?page=1&limit=5");
    const result = await response.json();

    console.log("✅ Status:", response.status);
    console.log("✅ Success:", result.success);
    console.log("📊 Stats:", result.stats);
    console.log("📋 Leads found:", result.data?.length || 0);

    if (result.usingFallback) {
      console.log("⚠️  Using fallback mode - check your HubSpot token");
    }

    // Test 2: Create Test Lead
    console.log("\n2️⃣ Testing lead creation...");
    const testLead = {
      studentName: "Browser Test Student",
      email: "browsertest@example.com",
      phone: "+91-9876543999",
      class: "10th",
      school: "Browser Test School",
      parentName: "Browser Test Parent",
      address: "123 Test Street, Test City",
      interests: ["NDA Preparation", "Physical Training"],
    };

    const createResponse = await fetch("/api/hubspot-leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testLead),
    });

    const createResult = await createResponse.json();
    console.log("✅ Create Status:", createResponse.status);
    console.log("✅ Create Success:", createResult.success);
    console.log("📝 Lead ID:", createResult.leadId);

    if (createResult.success) {
      console.log("\n🎉 HubSpot integration is working perfectly!");
      console.log("\nNext steps:");
      console.log("1. Check HubSpot Contacts for your test lead");
      console.log("2. Visit /hubspot-leads to see the dashboard");
      console.log("3. Test the form at /form");
    } else {
      console.log("\n⚠️  Integration working in demo mode");
      console.log("Check your HubSpot setup if you want live data");
    }
  } catch (error) {
    console.error("❌ Test failed:", error);
  }
}

// Run the test
testHubSpotIntegration();
