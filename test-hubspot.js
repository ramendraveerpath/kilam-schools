/**
 * Test script to verify HubSpot API connection
 * Run this with: node test-hubspot.js
 */

const { Client } = require("@hubspot/api-client");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: ".env.local" });

async function testHubSpotConnection() {
  try {
    console.log("🔧 Testing HubSpot API connection...");

    // Check if environment variables are loaded
    if (!process.env.HUBSPOT_ACCESS_TOKEN) {
      throw new Error(
        "HUBSPOT_ACCESS_TOKEN not found in environment variables"
      );
    }

    console.log("✅ Environment variables loaded");
    console.log(
      "🔑 Access Token:",
      process.env.HUBSPOT_ACCESS_TOKEN.substring(0, 10) + "..."
    );

    // Initialize HubSpot client
    const hubspotClient = new Client({
      accessToken: process.env.HUBSPOT_ACCESS_TOKEN,
    });

    console.log("✅ HubSpot client initialized");

    // Test basic API call - get account info
    try {
      const accountInfo =
        await hubspotClient.settings.users.usersApi.getCurrent();
      console.log("✅ Successfully connected to HubSpot!");
      console.log("📊 Account info:");
      console.log("  - User ID:", accountInfo.id);
      console.log("  - Email:", accountInfo.email);
      console.log("  - First Name:", accountInfo.firstName);
      console.log("  - Last Name:", accountInfo.lastName);
    } catch (userError) {
      console.log("⚠️  Could not get user info, but connection seems valid");
      console.log("Error:", userError.message);
    }

    // Test contacts API
    console.log("\n🧪 Testing contacts API...");

    const contactsResponse = await hubspotClient.crm.contacts.basicApi.getPage(
      10, // limit
      undefined, // after
      ["email", "firstname", "lastname"], // properties
      undefined, // propertiesWithHistory
      undefined, // associations
      false // archived
    );

    console.log("✅ Contacts API working!");
    console.log("📈 Total contacts:", contactsResponse.total || 0);
    console.log(
      "📋 Retrieved contacts:",
      contactsResponse.results?.length || 0
    );

    if (contactsResponse.results && contactsResponse.results.length > 0) {
      console.log("👤 Sample contact:");
      const sample = contactsResponse.results[0];
      console.log("  - ID:", sample.id);
      console.log("  - Email:", sample.properties.email || "N/A");
      console.log(
        "  - Name:",
        `${sample.properties.firstname || ""} ${
          sample.properties.lastname || ""
        }`.trim() || "N/A"
      );
    }

    console.log("\n🎉 HubSpot integration test completed successfully!");

    // Test creating a test contact
    console.log("\n🧪 Testing contact creation...");

    const testContact = {
      properties: {
        email: `test-${Date.now()}@example.com`,
        firstname: "Test",
        lastname: "Student",
        phone: "+91 9999999999",
        hs_lead_status: "NEW",
        lifecyclestage: "lead",
        lead_source: "API Test",
      },
    };

    const createdContact = await hubspotClient.crm.contacts.basicApi.create(
      testContact
    );
    console.log("✅ Test contact created successfully!");
    console.log("👤 Created contact ID:", createdContact.id);

    // Clean up - delete the test contact
    await hubspotClient.crm.contacts.basicApi.archive(createdContact.id);
    console.log("🗑️  Test contact cleaned up");
  } catch (error) {
    console.error("❌ HubSpot connection test failed:");
    console.error("Error:", error.message);

    if (error.message.includes("401")) {
      console.error("\n💡 This looks like an authentication error.");
      console.error("Please check:");
      console.error("1. Your HUBSPOT_ACCESS_TOKEN in .env.local");
      console.error("2. Make sure the token has the required scopes:");
      console.error("   - crm.objects.contacts.read");
      console.error("   - crm.objects.contacts.write");
      console.error("   - settings.users.read (optional)");
    }

    if (error.message.includes("403")) {
      console.error("\n💡 This looks like a permissions error.");
      console.error("Your token might not have the required scopes.");
    }

    console.error("\n🔗 To get a new access token:");
    console.error("1. Go to HubSpot App Settings");
    console.error("2. Navigate to Integrations > Private Apps");
    console.error("3. Create a new private app or edit existing one");
    console.error("4. Set the required scopes and generate token");
  }
}

// Run the test
testHubSpotConnection();
