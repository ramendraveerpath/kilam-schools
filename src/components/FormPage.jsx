"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function FormPageFixed() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    class: "",
    school: "",
    parentName: "",
    address: "",
    interests: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Basic validation
    if (!formData.studentName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Show loading toast
      const loadingToast = toast.loading("Submitting application...");

      // Submit to HubSpot API
      const response = await fetch("/api/hubspot-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          `Application submitted successfully! Lead ID: ${result.leadId}. We'll contact you soon.`,
          {
            duration: 5000,
            dismiss: loadingToast,
          }
        );

        // Reset form
        setFormData({
          studentName: "",
          email: "",
          phone: "",
          class: "",
          school: "",
          parentName: "",
          address: "",
          interests: [],
        });
      } else {
        toast.dismiss(loadingToast);
        throw new Error(result.error || "Submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <div className="bg-white">
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 py- pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              For Free Guidance
            </h1>
            <p className="mt-6 text-lg leading-8 text-yellow-100">
              Take the first step towards joining VEERPATH DEFENCE ACADEMY -
              Where Excellence Meets Discipline.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-6 py-16 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="studentName"
              className="block text-sm font-medium text-gray-700"
            >
              Student Name *
            </label>
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border"
            />
          </div>
          <div>
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-700"
            >
              Current Class
            </label>
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border"
            >
              <option value="">Select Class</option>
              <option value="3rd">3rd Class</option>
              <option value="4th">4th Class</option>
              <option value="5th">5th Class</option>
              <option value="6th">6th Class</option>
              <option value="7th">7th Class</option>
              <option value="8th">8th Class</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="parentName"
              className="block text-sm font-medium text-gray-700"
            >
              Parent/Guardian Name
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              rows={3}
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border"
            />
          </div>
          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 rounded-md bg-yellow-500 px-4 py-3 text-sm font-semibold text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 shadow-lg cursor-pointer"
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="rounded-md bg-gray-600 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 cursor-pointer"
            >
              ← Back to Home
            </button>
          </div>{" "}
        </form>
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
