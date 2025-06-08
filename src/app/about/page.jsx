"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AcademicCapIcon,
  TrophyIcon,
  UserGroupIcon,
  BookOpenIcon,
  ClockIcon,
  StarIcon,
  CheckIcon,
  CalendarIcon,
  DocumentTextIcon,
  UsersIcon,
  CurrencyRupeeIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowTopRightOnSquareIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import CTA from "@/components/cta";

const stats = [
  { name: "Successful Selections", value: "1000+", icon: TrophyIcon },
  { name: "Years of Experience", value: "15+", icon: ClockIcon },
  { name: "Expert Faculty", value: "25+", icon: UserGroupIcon },
  { name: "Target Exams", value: "3+", icon: AcademicCapIcon },
];

const missionPoints = [
  {
    title: "Quality Education Access",
    description: "Making education accessible to both urban and rural students",
    icon: GlobeAltIcon,
  },
  {
    title: "Premier School Preparation",
    description:
      "Focused training for Navodaya Vidyalaya, Sainik Schools & RMS",
    icon: ShieldCheckIcon,
  },
  {
    title: "Holistic Development",
    description: "Academic excellence combined with disciplined guidance",
    icon: StarIcon,
  },
];

const whyChooseUs = [
  {
    title: "1000+ Successful Selections",
    description: "Proven track record of student success",
    icon: TrophyIcon,
  },
  {
    title: "Expert Faculty",
    description: "Subject experts with years of experience",
    icon: UserGroupIcon,
  },
  {
    title: "Result-Oriented Study Plan",
    description: "Systematic and strategic approach to learning",
    icon: DocumentTextIcon,
  },
  {
    title: "Affordable Fee Structure",
    description: "Quality education at accessible prices",
    icon: CurrencyRupeeIcon,
  },
  {
    title: "Progress Reporting System",
    description: "Regular parent-student progress updates",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    title: "Mock Tests & Evaluation",
    description: "National-level test series with performance analysis",
    icon: CheckIcon,
  },
];

const courseOfferings = [
  {
    title: "Online Classes",
    description:
      "Live interactive sessions, recorded video lectures, regular mock tests, and daily practice questions",
    icon: BookOpenIcon,
    features: [
      "Live Sessions",
      "Video Lectures",
      "Mock Tests",
      "Daily Practice",
    ],
  },
  {
    title: "Offline Classes",
    description:
      "Classroom teaching by expert faculty, doubt-clearing sessions, and scheduled test series",
    icon: UserGroupIcon,
    features: [
      "Expert Faculty",
      "Doubt Clearing",
      "Test Series",
      "Personal Attention",
    ],
  },
  {
    title: "Comprehensive Coverage",
    description:
      "Fully updated curriculum as per JNVST & Sainik School entrance guidelines",
    icon: AcademicCapIcon,
    features: [
      "Updated Syllabus",
      "JNVST Pattern",
      "AISSEE Pattern",
      "RMS Pattern",
    ],
  },
  {
    title: "Moral Training",
    description:
      "Special focus on discipline, ethics, and personality development aligned with the Sainik School ethos",
    icon: ShieldCheckIcon,
    features: [
      "Discipline Training",
      "Ethics Focus",
      "Personality Development",
      "Leadership Skills",
    ],
  },
];

const navodayaClass6Dates = [
  { event: "Form Filling Start", date: "30 May 2025" },
  { event: "Last Date", date: "29 July 2025" },
  { event: "Exam Date", date: "11 April 2026" },
];

const navodayaClass6Pattern = [
  {
    subject: "Mental Ability Test",
    questions: 40,
    marks: 1.25,
    totalMarks: 50,
  },
  { subject: "Arithmetic", questions: 20, marks: 1.25, totalMarks: 25 },
  { subject: "Language Test", questions: 20, marks: 1.25, totalMarks: 25 },
];

const navodayaClass9Pattern = [
  { subject: "Hindi", questions: 15, marks: 1, totalMarks: 15 },
  { subject: "English", questions: 15, marks: 1, totalMarks: 15 },
  { subject: "Mathematics", questions: 35, marks: 1, totalMarks: 35 },
  { subject: "Science", questions: 35, marks: 1, totalMarks: 35 },
];

const sainikClass6Pattern = [
  { subject: "Language", questions: 25, marks: 2, totalMarks: 50 },
  { subject: "Mathematics", questions: 50, marks: 3, totalMarks: 150 },
  { subject: "Intelligence", questions: 25, marks: 2, totalMarks: 50 },
  { subject: "General Knowledge", questions: 25, marks: 2, totalMarks: 50 },
];

const sainikClass9Pattern = [
  { subject: "Hindi", questions: 50, marks: 4, totalMarks: 200 },
  { subject: "Intelligence", questions: 25, marks: 2, totalMarks: 50 },
  { subject: "English", questions: 25, marks: 2, totalMarks: 50 },
  { subject: "General Science", questions: 25, marks: 2, totalMarks: 50 },
  { subject: "Social Science", questions: 25, marks: 2, totalMarks: 50 },
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pb-12 md:pb-24">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>{" "}
        <div className="mx-auto max-w-7xl px-6 y-24 m:py-32 lg:px-8 pt-4">
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-12">
            {" "}
            <div className="lg:col-span-2 pt-16 md:pt-20 lg:pt-24 lg:pr-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  About{" "}
                  <span className="text-indigo-600">
                    VEERPATH DEFENCE ACADEMY
                  </span>
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600">
                  <span className="font-semibold text-gray-800">
                    विश्वास और अनुशासन से सफलता
                  </span>
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  VEERPATH DEFENCE ACADEMY is a trusted and result-driven
                  educational institute offering specialized coaching for
                  Jawahar Navodaya Vidyalaya Selection Test (JNVST), The All
                  India Sainik School Entrance Examination (AISSEE) and
                  Rashtriya Military School (RMS).
                </p>
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
            </div>{" "}
            <div className="relative lg:col-span-1 flex justify-center lg:justify-end">
              <div className="max-w-lg w-full">
                <Image
                  src="/images/2.jpg"
                  alt="VEERPATH DEFENCE ACADEMY"
                  width={700}
                  height={600}
                  className="w-full max-h-[700px] rounded-2xl bg-gray-50 object-contain lg:aspect-auto hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Mission Section */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            🎯 Our Mission
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Making Quality Education Accessible
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            To make quality education accessible to every student—whether in
            urban or rural areas—and help them achieve their dream of studying
            in premier residential schools like Navodaya Vidyalaya, Sainik
            Schools and Rashtriya Military School.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {missionPoints.map((point) => (
              <div
                key={point.title}
                className="flex flex-col items-center text-center p-4 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-600">
                  <point.icon
                    className="h-8 w-8 text-white"
                    aria-hidden="true"
                  />
                </div>
                <dt className="mt-4 text-lg font-semibold leading-7 text-gray-900">
                  {point.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {point.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              ✅ Why Choose Us
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose VEERPATH DEFENCE ACADEMY?
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              With a blend of Academic Excellence, Disciplined guidance, and
              innovative teaching methods, we aim to prepare every student to
              succeed in India's top residential schools.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-4 lg:gap-8 lg:max-w-none lg:grid-cols-3">
              {whyChooseUs.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
                >
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-6 w-6 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      {/* Courses Section */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            📌 Our Courses
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Comprehensive Learning Solutions
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from our online and offline programs designed to maximize
            your success
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {courseOfferings.map((course) => (
            <div
              key={course.title}
              className="flex flex-col rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                  {course.title}
                </h3>
                <course.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {course.description}
              </p>
              <ul className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                {course.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Target Exams */}
        <div className="mx-auto mt-24 max-w-2xl lg:text-center">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Target Exams
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
              <h4 className="font-semibold text-indigo-600">JNVST</h4>
              <p className="text-sm text-gray-600">Class 6 & 9</p>
            </div>
            <div className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
              <h4 className="font-semibold text-indigo-600">AISSEE</h4>
              <p className="text-sm text-gray-600">Class 6 & 9</p>
            </div>
            <div className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
              <h4 className="font-semibold text-indigo-600">RMS</h4>
              <p className="text-sm text-gray-600">Rashtriya Military School</p>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* About Navodaya School Section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About Navodaya Schools
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Jawahar Navodaya Vidyalaya
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Jawahar Navodaya Vidyalaya is a system of central Schools for
              students predominantly from rural areas in India targeting
              socially and economically backward students who lack access to
              accelerated learning due to financial, social and rural
              disadvantages.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://navodaya.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Visit Official Website
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Class 6 Information */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Class 6th Admission
            </h3>

            {/* Important Dates */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-indigo-600" />
                Important Dates for Class 6th
              </h4>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Event
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {navodayaClass6Dates.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.event}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Exam Pattern Class 6 */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <DocumentTextIcon className="h-5 w-5 text-indigo-600" />
                Exam Pattern - Class 6th (2026)
              </h4>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Questions
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Marks per Question
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Marks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {navodayaClass6Pattern.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.questions}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.marks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.totalMarks}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        Total
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        80
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        -
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        100
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  ✅ NO NEGATIVE MARKING
                </p>
                <p className="text-sm text-green-700 mt-1">
                  📅 Age Eligibility: Candidates must be born between 1 May 2013
                  - 31 July 2015
                </p>
              </div>
            </div>

            {/* Class 9 Information */}
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Class 9th Admission
            </h3>

            {/* Exam Pattern Class 9 */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <DocumentTextIcon className="h-5 w-5 text-indigo-600" />
                Exam Pattern - Class 9th (2026)
              </h4>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Questions
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Marks per Question
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Marks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {navodayaClass9Pattern.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.questions}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.marks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.totalMarks}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        Total
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        100
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        -
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        100
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  ✅ NO NEGATIVE MARKING
                </p>
                <p className="text-sm text-green-700 mt-1">
                  📅 Age Eligibility: Candidates must be born between 1 May 2010
                  - 31 July 2012
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Sainik Schools Section */}
      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              About Sainik Schools
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sainik Schools Society (SSS)
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sainik Schools Society (SSS) is an autonomous Organisation under
              the Ministry of Defence, Govt of India. Sainik Schools are English
              medium residential schools affiliated to CBSE. Sainik Schools
              prepare Cadets to join the National Defence Academy (NDA),
              Khadakwasla (Pune), Indian Naval Academy, Ezhimala and other
              Training Academies for officers.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              At present there are a total of 33 Sainik Schools across the
              country and 40 new approved Sainik Schools.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="https://sainikschoolsociety.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
              >
                Visit Official Website
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Sainik School Class 6 Information */}
          <div className="mx-auto mt-16 max-w-4xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Class 6th Admission
            </h3>

            {/* Exam Pattern Class 6 */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <DocumentTextIcon className="h-5 w-5 text-indigo-600" />
                Exam Pattern - Class 6th (2026)
              </h4>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Questions
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Marks per Question
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Marks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sainikClass6Pattern.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.questions}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.marks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.totalMarks}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        Total
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        125
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        -
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        300
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  ✅ NO NEGATIVE MARKING
                </p>
                <p className="text-sm text-green-700 mt-1">
                  📅 Age Eligibility: Candidates must be born between 1 April
                  2013 - 31 March 2015
                </p>
              </div>
            </div>

            {/* Class 9 Information */}
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Class 9th Admission
            </h3>

            {/* Exam Pattern Class 9 */}
            <div className="mb-12">
              <h4 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <DocumentTextIcon className="h-5 w-5 text-indigo-600" />
                Exam Pattern - Class 9th (2026)
              </h4>
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Subject
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Questions
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Marks per Question
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Marks
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {sainikClass9Pattern.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.subject}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.questions}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.marks}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.totalMarks}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        Total
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        150
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        -
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                        400
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800 font-medium">
                  ✅ NO NEGATIVE MARKING
                </p>
                <p className="text-sm text-green-700 mt-1">
                  📅 Age Eligibility: Candidates must be born between 1 April
                  2011 - 31 March 2013
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* Stats Section */}
      {/* <div className="bg-gray-900 my-12 sm:my-16 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by thousands of students across India
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Our track record speaks for itself
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col bg-white/5 p-8">
                  <stat.icon className="mx-auto mt-4 h-8 w-8 text-yellow-500" />
                  <dt className="text-sm font-semibold leading-6 text-gray-300 mt-2">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div> */}
      <CTA />
    </div>
  );
}
