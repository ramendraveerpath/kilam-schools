"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  AcademicCapIcon,
  TrophyIcon,
  UserGroupIcon,
  ChartBarIcon,
  BookOpenIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const stats = [
  { name: "Students Placed", value: "2,500+", icon: AcademicCapIcon },
  { name: "Success Rate", value: "95%", icon: TrophyIcon },
  { name: "Expert Faculty", value: "50+", icon: UserGroupIcon },
  { name: "Years Experience", value: "15+", icon: ChartBarIcon },
];

const features = [
  {
    name: "Comprehensive Syllabus Coverage",
    description:
      "Complete preparation for Mathematics, English, Science, and General Knowledge as per Sainik School & Military School entrance exam pattern.",
    icon: BookOpenIcon,
  },
  {
    name: "Expert Faculty Guidance",
    description:
      "Learn from experienced teachers who have helped thousands of students crack Sainik School and Military School entrance exams.",
    icon: UserGroupIcon,
  },
  {
    name: "Regular Mock Tests",
    description:
      "Practice with our extensive question bank and take regular mock tests to assess your preparation level.",
    icon: ClockIcon,
  },
  {
    name: "Personal Mentorship",
    description:
      "Get personalized guidance and mentorship to identify your strengths and work on improvement areas.",
    icon: TrophyIcon,
  },
];

const testimonials = [
  {
    name: "Arjun Sharma",
    school: "Rashtriya Military School, Ajmer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Thanks to Sainik Academy, I cracked the entrance exam on my first attempt. The mock tests were exactly like the real exam!",
  },
  {
    name: "Priya Gupta",
    school: "Sainik School, Ghorakhal",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b5e39bb2?w=150&h=150&fit=crop&crop=face",
    text: "The personalized mentorship helped me identify my weak areas and improve them. I'm grateful for the excellent guidance!",
  },
  {
    name: "Vikram Singh",
    school: "Sainik School, Kapurthala",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    text: "The comprehensive study material and expert faculty made all the difference. I achieved my dream of joining Sainik School!",
  },
];

export default function HomePage() {
  const router = useRouter();

  const handleEnquiryClick = () => {
    router.push("/form");
  };
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              {" "}
              Master Your Dreams of{" "}
              <span className="text-indigo-600">
                Sainik & Military School
              </span>{" "}
              Entrance
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                Join thousands of successful students who achieved their dreams
                with our expert guidance and comprehensive preparation programs
                for Sainik School and Military School entrance exams.
              </p>{" "}
              <div className="mt-10 flex items-center gap-x-6">
                <button
                  onClick={handleEnquiryClick}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Start Your Journey
                </button>
                <a
                  href="#features"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <img
              alt="Sainik School Students"
              src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
      {/* Stats Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Proven Track Record of Success
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our results speak for themselves. Join the ranks of successful
            students who achieved their Sainik School and Military School
            dreams.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start"
            >
              <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                {stat.value}
              </p>
              <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                <p className="text-lg font-semibold leading-6 text-gray-900">
                  {stat.name}
                </p>
                <stat.icon className="mt-2 h-6 w-6 text-indigo-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Features Section */}
      <div
        id="features"
        className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Complete Preparation
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our comprehensive program covers all aspects of Sainik School and
            Military School preparation to ensure your success.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
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
      </div>{" "}
      {/* Testimonials Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Success Stories
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hear from our successful students
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Real stories from students who achieved their dreams with our
            guidance.
          </p>
        </div>{" "}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200"
            >
              <div>
                <div className="flex gap-x-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={`star-${testimonial.name}-${i}`}
                      className="h-5 w-5 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="mt-6 text-gray-900">
                  <p>"{testimonial.text}"</p>
                </blockquote>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                <img
                  alt=""
                  src={testimonial.image}
                  className="h-12 w-12 rounded-full bg-gray-50"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.school}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* CTA Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to achieve your dreams?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join thousands of successful students who made their mark in Sainik
            Schools and Military Schools across India.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              onClick={handleEnquiryClick}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </button>
            <a
              href="tel:+91-9999999999"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Call us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-gray-900 mt-32">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center">
                <TrophyIcon className="h-8 w-8 text-yellow-500" />
                <span className="ml-2 text-xl font-bold text-white">
                  Sainik Academy
                </span>
              </div>
              <p className="mt-4 text-gray-400 max-w-md">
                Leading the way in Sainik School and Military School entrance
                exam preparation with expert guidance and proven results.
              </p>{" "}
              <div className="mt-6 flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.5 13.588 3.5 12.017c0-1.297.49-2.448 1.297-3.323C5.694 7.866 6.999 7.168 8.57 7.168c1.297 0 2.448.49 3.323 1.297.875.806 1.573 2.113 1.573 3.684 0 1.297-.49 2.448-1.297 3.323-.875.805-2.18 1.503-3.75 1.503z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="/form" className="text-gray-400 hover:text-white">
                    Enquiry Form
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleEnquiryClick}
                    className="text-gray-400 hover:text-white"
                  >
                    Apply Now
                  </button>
                </li>
                <li>
                  <a
                    href="tel:+91-9999999999"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">Contact Info</h3>
              <ul className="mt-4 space-y-2 text-gray-400">
                <li>📧 info@sainikacademy.com</li>
                <li>📞 +91-9999999999</li>
                <li>📍 New Delhi, India</li>
                <li>🕒 Mon-Sat: 9AM-6PM</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              &copy; 2025 Sainik Academy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
