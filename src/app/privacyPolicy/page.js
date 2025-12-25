import React from "react";
import Head from "next/head";

export const metadata = {
  title: "Privacy Policy | Veerpath Defence Academy",
  description: "Read the privacy policy of www.veerpath.com to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      <Head>
        <title>Privacy Policy | Veerpath Defence Academy</title>
      </Head>

      <h1 className="text-3xl font-bold mb-4">Privacy Policy for www.veerpath.com</h1>
      <p className="text-sm text-gray-600 mb-6">Effective Date: 12th June 2025</p>

      <p className="mb-4">
        At www.veerpath.com, we are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect,
        use, disclose, and safeguard your information when you visit our website www.veerpath.com, which provides information related
        to the entrance exams for Jawahar Navodaya Vidyalayas (JNV) and Sainik Schools.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p className="mb-2">We collect personal details like:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Name, Email, Phone, DOB, Address</li>
        <li>Educational background</li>
        <li>Usage data (IP, browser, pages visited)</li>
        <li>Cookies and tracking info</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Provide exam-related info</li>
        <li>Communicate regarding inquiries</li>
        <li>Send updates (with consent)</li>
        <li>Improve our services</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing Your Information</h2>
      <ul className="list-disc list-inside mb-4">
        <li>With trusted service providers</li>
        <li>For legal compliance if required</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We use reasonable measures to protect your data, though no method is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights and Choices</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Access, update, or delete your data</li>
        <li>Opt-out of promotional emails</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-2">6. Cookies and Tracking</h2>
      <p className="mb-4">
        You can manage cookies via browser settings. Disabling cookies may impact features.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">7. Third-Party Links</h2>
      <p className="mb-4">
        We are not responsible for the privacy policies of third-party websites.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">8. Children’s Privacy</h2>
      <p className="mb-4">
        We do not knowingly collect data from children under 13.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
      <p className="mb-4">
        Changes will be posted here with an updated date. Review periodically.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-2">10. Contact Us</h2>
      <p className="mb-1">📍 Address: 832 Radhanagar, Bulandshahar, Uttar Pradesh - 203001</p>
      <p className="mb-1">📞 Phone: 9897841033</p>
      <p className="mb-1">✉️ Email: info@veerpath.com</p>
    </div>
  );
}
