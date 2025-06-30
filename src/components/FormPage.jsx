"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

export default function FormPageFixed() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    class: "",
    school: "",
   
    address: "",
    interests: [],
  });
  const [errors, setErrors] = useState({});
  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student name is required";
    } else if (formData.studentName.trim().length < 2) {
      newErrors.studentName = "Student name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (
      !/^[+]?[1-9]\d{0,15}$/.test(formData.phone.replace(/[\s\-()]/g, ""))
    ) {
      newErrors.phone = "Please enter a valid phone number";
    }

  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  }; // Helper function to handle submission success
  const handleSubmissionSuccess = (result) => {
    const successMessage = result.usingFallback
      ? "Application received! We're processing your submission and will contact you soon."
      : `Application submitted successfully! Lead ID: ${result.leadId}. We'll contact you soon.`;

    toast.success(successMessage, {
      duration: 6000,
      icon: "🎉",
    });

    // Reset form after successful submission
    setFormData({
      studentName: "",
      email: "",
      phone: "",
      class: "",
      school: "",
     
      address: "",
      interests: [],
    });
    setErrors({});

    // Redirect after a delay
    setTimeout(() => {
      router.push("/thank-you");
    }, 2000);
  };

  // Helper function to handle submission errors
  const handleSubmissionError = (error) => {
    console.error("Form submission error:", error);

    let errorMessage = "Submission failed. Please try again.";

    if (error.name === "AbortError") {
      errorMessage =
        "Request timed out. Please check your connection and try again.";
    } else if (error.message.includes("HTTP 400")) {
      errorMessage =
        "Invalid form data. Please check your information and try again.";
    } else if (error.message.includes("HTTP 429")) {
      errorMessage = "Too many requests. Please wait a moment and try again.";
    } else if (error.message.includes("HTTP 500")) {
      errorMessage =
        "Server error. Our team has been notified. Please try again later.";
    } else if (error.message.includes("Failed to fetch")) {
      errorMessage =
        "Network error. Please check your connection and try again.";
    }

    toast.error(errorMessage, {
      duration: 8000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    // Validate form
    if (!validateForm()) {
      toast.error("Please fix the errors below and try again");
      return;
    }

    setIsSubmitting(true);
    let loadingToast;

    try {
      // Show loading toast
      loadingToast = toast.loading("Submitting your application...", {
        duration: 0, // Don't auto-dismiss
      });

      // Prepare clean data for submission
      const cleanFormData = {
        ...formData,
        studentName: formData.studentName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),

        address: formData.address.trim(),
        school: formData.school.trim(),
      };

      // Submit to HubSpot API with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch("/api/hubspot-leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanFormData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();

      // Dismiss loading toast
      toast.dismiss(loadingToast);

      if (result.success) {
        handleSubmissionSuccess(result);
      } else {
        throw new Error(result.error || result.message || "Submission failed");
      }
    } catch (error) {
      // Dismiss loading toast
      if (loadingToast) {
        toast.dismiss(loadingToast);
      }

      handleSubmissionError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white relative">
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-sm mx-4 text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Submitting Application
            </h3>
            <p className="text-sm text-gray-600">
              Please wait while we process your application...
            </p>
          </div>
        </div>
      )}

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
            </label>{" "}
            <input
              type="text"
              id="studentName"
              name="studentName"
              value={formData.studentName}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-yellow-500 sm:text-sm p-3 border transition-colors ${
                errors.studentName
                  ? "border-red-300 focus:border-red-500"
                  : "border-gray-300 focus:border-yellow-500"
              } ${isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""}`}
              placeholder="Enter student's full name"
            />
            {errors.studentName && (
              <p className="mt-1 text-sm text-red-600">{errors.studentName}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address *
            </label>{" "}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-yellow-500 sm:text-sm p-3 border transition-colors ${
                errors.email
                  ? "border-red-300 focus:border-red-500"
                  : "border-gray-300 focus:border-yellow-500"
              } ${isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""}`}
              placeholder="student@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number *
            </label>{" "}
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
              className={`mt-1 block w-full rounded-md shadow-sm focus:ring-yellow-500 sm:text-sm p-3 border transition-colors ${
                errors.phone
                  ? "border-red-300 focus:border-red-500"
                  : "border-gray-300 focus:border-yellow-500"
              } ${isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""}`}
              placeholder="+91 9876543210"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-700"
            >
              Current Class
            </label>{" "}
            <select
              id="class"
              name="class"
              value={formData.class}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border transition-colors ${
                isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""
              }`}
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
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>{" "}
            <textarea
              id="address"
              name="address"
              rows={3}
              value={formData.address}
              onChange={handleInputChange}
              disabled={isSubmitting}
              className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm p-3 border transition-colors ${
                isSubmitting ? "bg-gray-50 cursor-not-allowed" : ""
              }`}
              placeholder="Complete address with city, state, and PIN code"
            />
          </div>{" "}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex-1 rounded-md px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 shadow-lg transition-all duration-200 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-yellow-600 cursor-pointer"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Application"
              )}
            </button>
            <button
              type="button"
              onClick={() => router.push("/")}
              disabled={isSubmitting}
              className={`rounded-md px-4 py-3 text-sm font-semibold text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-600 hover:bg-gray-500 cursor-pointer"
              }`}
            >
              ← Back to Home
            </button>
          </div>{" "}
        </form>
      </div>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#363636",
            color: "#fff",
          },
          success: {
            duration: 6000,
          },
          error: {
            duration: 8000,
          },
        }}
      />
    </div>
  );
}
