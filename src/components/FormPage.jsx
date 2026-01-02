"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";
import Image from "next/image";

export default function FormPageFixed() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    mobile: "",
    currentClass: "",
    course: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!formData.studentName.trim()) newErrors.studentName = "Student Name is required";
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!formData.currentClass) newErrors.currentClass = "Current Class is required";
    if (!formData.course) newErrors.course = "Course is required";
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
  }; 
  
  // Helper function to handle submission success
  const handleSubmissionSuccess = (result) => {
    const successMessage = result.usingFallback
      ? "Application received! We're processing your submission and will contact you soon."
      : `Application submitted successfully! Lead ID: ${result.leadId}. We'll contact you soon.`;

    toast.success(successMessage, {
      duration: 6000,
      icon: "🎉",
    });

    setFormData({ studentName: "", mobile: "", currentClass: "", course: "" });
    setAcceptTerms(false);
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

      const cleanFormData = {
        studentName: formData.studentName.trim(),
        mobile: formData.mobile.trim(),
        currentClass: formData.currentClass,
        course: formData.course,
      };

      // Submit to HubSpot API with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch("/api/google-sheets", {
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
    <div className="min-h-screen flex flex-col lg:flex-row pt-27 lg:pt-28">
      {/* Left side - Tree planting image */}
      <div className="w-full lg:w-1/2 h-64 lg:h-auto relative overflow-hidden bg-gray-100 flex items-center justify-center">
        <Image
          src="/images/H2.jpeg"
          alt="Kilam Schools"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-green-600 mb-6 lg:mb-8">For Counselling Session</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
            <div>
              <label className="block text-gray-600 text-sm mb-2">Student Name</label>
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleInputChange}
                placeholder="Enter student name"
                className="w-full px-4 py-3 bg-gray-200 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.studentName && <p className="text-red-500 text-sm mt-1">{errors.studentName}</p>}
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">Mobile No</label>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter mobile number"
                className="w-full px-4 py-3 bg-gray-200 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">Current Class</label>
              <select
                name="currentClass"
                value={formData.currentClass}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-200 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Class</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
                <option value="Other">Other</option>
              </select>
              {errors.currentClass && <p className="text-red-500 text-sm mt-1">{errors.currentClass}</p>}
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-2">Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-200 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Course</option>
                <option value="JNV/Sainik/RMS">JNV/Sainik/RMS</option>
                <option value="Board Exams">Board Exams</option>
                <option value="CUET">CUET</option>
                <option value="CLAT">CLAT</option>
                <option value="Defence Exams-NDA/CDS">Defence Exams-NDA/CDS</option>
                <option value="Economics Courses">Economics Courses</option>
              <option value="GK/GS">GK/GS</option>
                <option value="Other">Other</option>
              </select>
              {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 lg:py-4 rounded-lg transition-colors"
            >
              {isSubmitting ? "Enviando..." : "Done"}
            </button>


          </form>
        </div>
      </div>

      <Toaster position="top-right" />
    </div>
  );
}
