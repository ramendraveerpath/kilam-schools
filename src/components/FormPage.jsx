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
    if (!acceptTerms) newErrors.terms = "Accept terms";
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
          src="/images/H1.png"
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
            <div className="inline-block mb-3 lg:mb-4">
              <svg className="w-10 h-10 lg:w-12 lg:h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-green-600 mb-6 lg:mb-8">Counselling Session</h2>
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

            <div className="flex items-start space-x-3 mt-3 lg:mt-4">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="text-xs sm:text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </label>
            </div>
            {errors.terms && <p className="text-red-500 text-xs sm:text-sm">{errors.terms}</p>}

            <div className="text-center mt-4 lg:mt-6">
              <p className="text-xs sm:text-sm text-gray-500">
                Quer saber mais? <a href="#" className="text-green-600 hover:underline">Confira nossa FAQ</a>
              </p>
            </div>
          </form>
        </div>
      </div>

      <Toaster position="top-right" />
    </div>
  );
}
