"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  UserGroupIcon,
  ChevronDownIcon,
  BookOpenIcon,
  CheckCircleIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import CTA from "@/components/cta";

const contactInfo = [
  {
    name: "Phone",
    value: "+91-9897841033",
    href: "tel:+91-9897841033",
    icon: PhoneIcon,
    description: "Call us anytime during office hours",
  },
  {
    name: "Address",
    value: "832 Radhanagar, Bulandshahr",
    href: "#",
    icon: MapPinIcon,
    description: "Visit our campus for in-person consultation",
  },
  {
    name: "Email",
    value: "info@veerpath.com",
    href: "mailto:info@veerpath.com",
    icon: EnvelopeIcon,
    description: "Send us your queries and we'll respond quickly",
  },
  {
    name: "Office Hours",
    value: "Mon-Sat: 7:00 AM - 11:00 PM",
    href: "/contact",
    icon: ClockIcon,
    description: "We're here to help during business hours",
  },
];

const features = [
  {
    name: "Expert Guidance",
    description: "Get personalized advice from our experienced faculty",
    icon: UserGroupIcon,
  },
  {
    name: "Course Information",
    description: "Learn about our specialized coaching programs",
    icon: BookOpenIcon,
  },
  {
    name: "Quick Enrollment",
    description: "Fast and easy admission process",
    icon: CheckCircleIcon,
  },
];

const faqs = [
  {
    id: "exam-prep",
    question: "What exams does VEERPATH DEFENCE ACADEMY prepare students for?",
    answer:
      "We specialize in JNVST (Class 6 & 9), AISSEE - Sainik School Entrance (Class 6 & 9), and Rashtriya Military School (RMS) entrance examinations.",
  },
  {
    id: "class-modes",
    question: "Do you offer both online and offline classes?",
    answer:
      "Yes, we offer both online classes with live interactive sessions and recorded lectures, as well as offline classroom teaching with expert faculty.",
  },
  {
    id: "success-rate",
    question: "What is your success rate?",
    answer:
      "We have successfully helped upto 80% students secure admissions in their dream schools with our result-oriented study plan and expert guidance.",
  },
  {
    id: "enrollment",
    question: "How can I enroll my child?",
    answer:
      "You can enroll by filling out our online form, calling us at +91-9897841033, or visiting our campus at 832 Radhanagar, Bulandshahr.",
  },
  {
    id: "fees",
    question: "What is the fee structure?",
    answer:
      "We offer affordable fee structures for all our courses. Please contact us directly for detailed information about course fees and payment options.",
  },
  {
    id: "materials",
    question: "Do you provide study materials?",
    answer:
      "Yes, we provide comprehensive study materials including books, practice papers, mock tests, and online resources for all our courses.",
  },
];

const testimonials = [
  {
    id: "parent-1",
    name: "Rajesh Kumar",
    role: "Parent of JNVST Selected Student",
    content:
      "VEERPATH DEFENCE ACADEMY guided my child excellently. The faculty is experienced and the study material is comprehensive. My son cleared JNVST Class 6 in the first attempt!",
    rating: 5,
  },
  {
    id: "parent-2",
    name: "Priya Sharma",
    role: "Parent of Sainik School Student",
    content:
      "Amazing coaching center! They provide personal attention to each student and regular progress reports. My daughter got selected in Sainik School with their guidance.",
    rating: 5,
  },
  {
    id: "parent-3",
    name: "Vikram Singh",
    role: "Parent of RMS Student",
    content:
      "The mock tests and practice sessions were very helpful. The teachers are dedicated and always available for doubt clearing. Highly recommend for military school preparation.",
    rating: 5,
  },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = React.useState(null);
  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Hero Section with Image */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-24 pb-12 md:pb-24">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>{" "}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-12">
            <div className="lg:col-span-2 pt-16 md:pt-20 lg:pt-24 lg:pr-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Contact <span className="text-indigo-600">Us</span>
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  Get in touch with VEERPATH DEFENCE ACADEMY. We're here to help
                  you start your journey towards excellence in Navodaya, Sainik
                  Schools, and RMS.
                </p>
                <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    📞 Quick Connect
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>✅ Instant Response Guaranteed</p>
                    <p>✅ Free Consultation Available</p>
                    <p>✅ Expert Guidance on Call</p>
                  </div>
                </div>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href="/form"
                    className="rounded-md bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-200"
                  >
                    Enroll Now
                  </Link>
                  <a
                    href="tel:+91-9897841033"
                    className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 transition-colors duration-200"
                  >
                    Call Us <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative lg:col-span-1 flex justify-center lg:justify-end">
              <div className="max-w-lg w-full">
                <Image
                  width={700}
                  height={600}
                  src="/images/3.jpg"
                  alt="Success at VEERPATH DEFENCE ACADEMY"
                  className="w-full max-h-[700px] rounded-2xl object-contain shadow-lg bg-gray-50 lg:aspect-auto hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </div>
            </div>{" "}
          </div>
        </div>
      </div>{" "}
      {/* Contact Information Section */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have questions about our courses or want to enroll? Reach out to us
            through any of the following methods. We're here to help guide your
            journey.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => (
            <div
              key={item.name}
              className="relative flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg mb-2">
                <item.icon className="h-8 w-8 text-white" aria-hidden="true" />
              </div>
              <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                24/7
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {item.name}
              </h3>
              {item.href.startsWith("#") ? (
                <p className="mt-3 text-lg font-medium text-gray-800">
                  {item.value}
                </p>
              ) : (
                <a
                  href={item.href}
                  className="mt-3 text-lg font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                >
                  {item.value}
                </a>
              )}
              <p className="mt-2 text-sm text-gray-500 text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Why Contact Us Section */}
      <div className="bg-gray-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Why Contact Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              We're Here to Help You Succeed
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our dedicated team is committed to providing you with all the
              information and support you need.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* Location Section */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            📍 Our Location
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Visit Our Campus
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Located in the heart of Bulandshahr, our campus is easily accessible
            and provides an ideal learning environment for aspiring students.
          </p>
        </div>{" "}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 lg:gap-12 lg:grid-cols-3">
            {/* Location Details */}{" "}
            <div className="lg:col-span-2 flex flex-col justify-center">
              <div className="space-y-8">
                {" "}
                {/* Location Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Address Card */}
                  <div className="relative bg-white pt-8 pb-6 px-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 shadow-lg">
                        <MapPinIcon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Address
                      </h3>
                      <p className="text-gray-700 font-medium leading-relaxed">
                        832 Radhanagar, Bulandshahr
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Uttar Pradesh, India
                      </p>
                    </div>
                  </div>

                  {/* Contact Card */}
                  <div className="relative bg-white pt-8 pb-6 px-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-green-600 to-green-700 shadow-lg">
                        <PhoneIcon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Contact
                      </h3>
                      <a
                        href="tel:+91-9897841033"
                        className="text-green-600 hover:text-green-500 font-semibold text-lg transition-colors duration-200 block"
                      >
                        +91-9897841033
                      </a>
                      <p className="text-sm text-gray-500 mt-2">
                        Call for directions
                      </p>
                    </div>
                  </div>

                  {/* Visit Hours Card */}
                  <div className="relative bg-white pt-8 pb-6 px-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 md:col-span-2 lg:col-span-1">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg">
                        <ClockIcon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div className="text-center pt-2">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        Visit Hours
                      </h3>
                      <p className="text-gray-700 font-medium">
                        Mon-Sat: 7:00 AM - 11:00 PM
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Sunday by appointment
                      </p>
                    </div>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <a
                    href="https://maps.google.com/?q=832+Radhanagar,+Bulandshahr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200 transform hover:scale-105"
                  >
                    <MapPinIcon className="h-5 w-5 mr-2" />
                    Get Directions
                  </a>
                  <a
                    href="tel:+91-9897841033"
                    className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-3 text-base font-semibold text-white shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
            {/* Campus Image */}
            <div className="relative lg:col-span-1 flex justify-center lg:justify-end">
              <div className="max-w-md w-full">
                <Image
                  src="/images/3.jpg"
                  alt="Success at VEERPATH DEFENCE ACADEMY"
                  width={500}
                  height={400}
                  className="w-full max-h-[500px] rounded-2xl object-contain shadow-lg bg-gray-50 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    VEERPATH DEFENCE ACADEMY
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Modern facilities for comprehensive learning
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      {/* Testimonials Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              ⭐ Success Stories
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What Parents Say About Us
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Don't just take our word for it. Here's what parents of our
              successful students have to say.
            </p>
          </div>
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col justify-between bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div>
                    {" "}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon
                          key={`star-${testimonial.id}-${i}`}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Join our family of upto 80% successful parents and students!
            </p>
            <Link
              href="/form"
              className="inline-flex items-center rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-indigo-500 hover:to-purple-500 transition-all duration-200"
            >
              Start Your Success Story
            </Link>
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              ❓ FAQ
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about our academy, courses, and
              admission process.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            {" "}
            <dl className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
                >
                  <dt>
                    <button
                      className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <span className="text-lg font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={`h-6 w-6 transform transition-transform duration-200 ${
                            openFaq === faq.id ? "rotate-180" : ""
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  </dt>
                  <dd
                    className={`transition-all duration-300 ease-in-out ${
                      openFaq === faq.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    } overflow-hidden`}
                  >
                    <div className="px-6 pb-4">
                      <p className="text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </dd>
                </div>
              ))}
            </dl>
            {/* Contact CTA in FAQ */}
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 mb-6">
                Still have questions? We're here to help!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+91-9897841033"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  Call Us Now
                </a>
                <a
                  href="mailto:info@veerpath.com"
                  className="inline-flex items-center justify-center rounded-md bg-gray-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-gray-500"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Final CTA Section */}
      <CTA />
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:+91-9897841033"
          className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-110 animate-bounce"
          title="Call Now"
        >
          <PhoneIcon className="h-8 w-8" />
        </a>
      </div>
    </div>
  );
}
