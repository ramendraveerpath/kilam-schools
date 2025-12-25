"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ThankYouPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/");
    }
  }, [countdown, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        {/* Success Icon */}
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Application Submitted Successfully!
        </h1>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for your interest in{" "}
          <strong>VEERPATH DEFENCE ACADEMY</strong>. We have received your
          application and will contact you within 24-48 hours to discuss the
          next steps.
        </p>

        {/* Next Steps */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-left">
          <h3 className="font-semibold text-yellow-800 mb-2">
            What happens next?
          </h3>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Our admission team will review your application</li>
            <li>• We'll contact you to schedule a counseling session</li>
            <li>• You'll receive detailed information about our programs</li>
            <li>• We'll guide you through the admission process</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-sm text-gray-500 mb-6">
          <p>Have questions? Contact us at:</p>
          <p className="font-medium text-gray-700">
            📞 +91-XXXX-XXXX-XX
            <br />
            📧 admissions@veerpathacademy.com
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => router.push("/")}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Back to Home
          </button>

          <button
            onClick={() => router.push("/about")}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
          >
            Learn More About Us
          </button>
        </div>

        {/* Auto Redirect Notice */}
        <p className="text-xs text-gray-400 mt-4">
          Redirecting to home page in {countdown} seconds...
        </p>
      </div>
    </div>
  );
}
