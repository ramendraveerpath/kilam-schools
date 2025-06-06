"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function FormPage() {
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
    e.preventDefault();

    // Basic validation
    if (!formData.studentName || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock HubSpot submission
      console.log("Submitting to HubSpot:", formData);

      toast.success(
        "Application submitted successfully! We'll contact you soon."
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
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Submission failed. Please try again.");
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Toaster position="top-right" />

      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Enquiry Form
            </h1>
            <p className="mt-6 text-lg leading-8 text-indigo-200">
              Take the first step towards your Sainik School and Military School
              dreams.
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
            >
              <option value="">Select Class</option>
              <option value="6th">6th Class</option>
              <option value="7th">7th Class</option>
              <option value="8th">8th Class</option>
              <option value="9th">9th Class</option>
              <option value="10th">10th Class</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="school"
              className="block text-sm font-medium text-gray-700"
            >
              Current School
            </label>
            <input
              type="text"
              id="school"
              name="school"
              value={formData.school}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
            />
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
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
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-3 border"
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="rounded-md bg-gray-600 px-4 py-3 text-sm font-semibold text-white hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              ← Back to Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
