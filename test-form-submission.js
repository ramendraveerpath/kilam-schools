/**
 * Test script for HubSpot form submission
 * This script tests the form submission flow to ensure it works correctly
 */

const testFormSubmission = async () => {
  const testData = {
    studentName: "Test Student",
    email: "test@example.com",
    phone: "+91 9876543210",
    class: "6th",
    school: "",
    parentName: "Test Parent",
    address: "123 Test Street, Test City, Test State 123456",
    interests: [],
  };

  try {
    console.log("Testing form submission...");

    const response = await fetch("http://localhost:3000/api/hubspot-leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(testData),
    });

    const result = await response.json();

    console.log("Response status:", response.status);
    console.log("Response data:", result);

    if (result.success) {
      console.log("✅ Form submission test PASSED");
      console.log("Lead ID:", result.leadId);
      console.log("Using fallback:", result.usingFallback);
    } else {
      console.log("❌ Form submission test FAILED");
      console.log("Error:", result.error);
    }
  } catch (error) {
    console.error("❌ Test failed with error:", error.message);
  }
};

// Run the test
testFormSubmission();
