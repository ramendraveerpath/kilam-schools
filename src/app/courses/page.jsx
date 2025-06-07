"use client";
import React from "react";
import Link from "next/link";
import {
  AcademicCapIcon,
  BookOpenIcon,
  ClockIcon,
  UserGroupIcon,
  TrophyIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const courses = [
  {
    id: "jnvst",
    name: "JNVST (Class 6 & 9)",
    description: "Jawahar Navodaya Vidyalaya Selection Test",
    icon: AcademicCapIcon,
    features: [
      "Mental Ability Test preparation",
      "Arithmetic problem solving",
      "Language test mastery",
      "Live interactive sessions",
      "Recorded video lectures",
      "Regular mock tests",
      "Daily practice questions",
    ],
    examPatterns: {
      class6: {
        subjects: [
          {
            name: "Mental ability test",
            questions: 40,
            marks: "1.25",
            totalMarks: 50,
          },
          { name: "Arithmetic", questions: 20, marks: "1.25", totalMarks: 25 },
          {
            name: "Language test",
            questions: 20,
            marks: "1.25",
            totalMarks: 25,
          },
        ],
        total: { questions: 80, totalMarks: 100 },
        ageEligibility: "Born between 1 MAY 2013 - 31 JULY 2015",
        importantDates: {
          formStart: "30 MAY 2025",
          formEnd: "29 JULY 2025",
          examDate: "11 April 2026",
        },
      },
      class9: {
        subjects: [
          { name: "Hindi", questions: 15, marks: "1", totalMarks: 15 },
          { name: "English", questions: 15, marks: "1", totalMarks: 15 },
          { name: "Maths", questions: 35, marks: "1", totalMarks: 35 },
          { name: "Science", questions: 35, marks: "1", totalMarks: 35 },
        ],
        total: { questions: 100, totalMarks: 100 },
        ageEligibility: "Born between 1 MAY 2010 - 31 JULY 2012",
      },
    },
  },
  {
    id: "aissee",
    name: "AISSEE (Class 6 & 9)",
    description: "All India Sainik School Entrance Examination",
    icon: TrophyIcon,
    features: [
      "Mathematics excellence",
      "Language proficiency",
      "Intelligence development",
      "General knowledge mastery",
      "Expert faculty guidance",
      "Doubt clearing sessions",
      "Performance analysis",
    ],
    examPatterns: {
      class6: {
        subjects: [
          { name: "Language", questions: 25, marks: "2", totalMarks: 50 },
          { name: "Mathematics", questions: 50, marks: "3", totalMarks: 150 },
          { name: "Intelligence", questions: 25, marks: "2", totalMarks: 50 },
          {
            name: "General knowledge",
            questions: 25,
            marks: "2",
            totalMarks: 50,
          },
        ],
        total: { questions: 125, totalMarks: 300 },
        ageEligibility: "Born between 1 APRIL 2013 - 31 MARCH 2015",
      },
      class9: {
        subjects: [
          { name: "Hindi & Maths", questions: 50, marks: "4", totalMarks: 200 },
          { name: "Intelligence", questions: 25, marks: "2", totalMarks: 50 },
          { name: "English", questions: 25, marks: "2", totalMarks: 50 },
          {
            name: "General science",
            questions: 25,
            marks: "2",
            totalMarks: 50,
          },
          { name: "Social science", questions: 25, marks: "2", totalMarks: 50 },
        ],
        total: { questions: 150, totalMarks: 400 },
        ageEligibility: "Born between 1 APRIL 2011 - 31 MARCH 2013",
      },
    },
  },
  {
    id: "rms",
    name: "Rashtriya Military School (RMS)",
    description: "Premier residential military school preparation",
    icon: UserGroupIcon,
    features: [
      "Military school curriculum",
      "Disciplinary training approach",
      "Character development focus",
      "Leadership skill building",
      "Physical fitness guidance",
      "Academic excellence coaching",
      "Personality development",
    ],
  },
];

const learningModes = [
  {
    name: "Online Classes",
    description: "Live interactive sessions from the comfort of your home",
    features: [
      "Live interactive sessions",
      "Recorded video lectures",
      "Regular mock tests",
      "Daily practice questions",
      "Digital study materials",
      "Online doubt clearing",
    ],
    icon: BookOpenIcon,
  },
  {
    name: "Offline Classes",
    description: "Traditional classroom experience with expert faculty",
    features: [
      "Classroom teaching",
      "Expert faculty guidance",
      "Doubt-clearing sessions",
      "Scheduled test series",
      "Peer learning environment",
      "Physical study materials",
    ],
    icon: UserGroupIcon,
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-white pt-24">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our <span className="text-indigo-600">Courses</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Comprehensive preparation programs for India's premier residential
              schools. Choose from our specialized courses designed for
              different entrance examinations.
            </p>
          </div>
        </div>
      </div>

      {/* Learning Modes Section */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Learning Options
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Online & Offline Learning Programs
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the learning mode that best fits your schedule and
            preferences
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {learningModes.map((mode) => (
              <div
                key={mode.name}
                className="flex flex-col border rounded-lg p-8 bg-gray-50"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <mode.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {mode.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto mb-4">{mode.description}</p>
                  <ul className="space-y-2">
                    {mode.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-x-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Courses Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Target Exams
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Coaching Programs
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  <div className="flex items-center gap-x-3 mb-6">
                    <course.icon className="h-8 w-8 text-indigo-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {course.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {course.description}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-x-2">
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {course.examPatterns && (
                    <div className="mt-8">
                      <h4 className="font-semibold text-gray-900 mb-4">
                        Exam Patterns:
                      </h4>

                      {/* Class 6 Pattern */}
                      {course.examPatterns.class6 && (
                        <div className="mb-6">
                          <h5 className="font-medium text-gray-800 mb-2">
                            Class 6th Pattern:
                          </h5>
                          <div className="overflow-x-auto">
                            <table className="min-w-full text-xs border border-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="border border-gray-200 px-2 py-1">
                                    Subject
                                  </th>
                                  <th className="border border-gray-200 px-2 py-1">
                                    Questions
                                  </th>
                                  <th className="border border-gray-200 px-2 py-1">
                                    Marks
                                  </th>
                                  <th className="border border-gray-200 px-2 py-1">
                                    Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {course.examPatterns.class6.subjects.map(
                                  (subject, index) => (
                                    <tr key={index}>
                                      <td className="border border-gray-200 px-2 py-1">
                                        {subject.name}
                                      </td>
                                      <td className="border border-gray-200 px-2 py-1 text-center">
                                        {subject.questions}
                                      </td>
                                      <td className="border border-gray-200 px-2 py-1 text-center">
                                        {subject.marks}
                                      </td>
                                      <td className="border border-gray-200 px-2 py-1 text-center">
                                        {subject.totalMarks}
                                      </td>
                                    </tr>
                                  )
                                )}
                                <tr className="bg-gray-50 font-semibold">
                                  <td className="border border-gray-200 px-2 py-1">
                                    Total
                                  </td>
                                  <td className="border border-gray-200 px-2 py-1 text-center">
                                    {course.examPatterns.class6.total.questions}
                                  </td>
                                  <td className="border border-gray-200 px-2 py-1 text-center">
                                    -
                                  </td>
                                  <td className="border border-gray-200 px-2 py-1 text-center">
                                    {
                                      course.examPatterns.class6.total
                                        .totalMarks
                                    }
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">
                            <strong>Age Eligibility:</strong>{" "}
                            {course.examPatterns.class6.ageEligibility}
                          </p>
                          {course.examPatterns.class6.importantDates && (
                            <div className="text-xs text-gray-600 mt-1">
                              <strong>Important Dates:</strong>
                              <br />
                              Form Start:{" "}
                              {
                                course.examPatterns.class6.importantDates
                                  .formStart
                              }
                              <br />
                              Form End:{" "}
                              {
                                course.examPatterns.class6.importantDates
                                  .formEnd
                              }
                              <br />
                              Exam Date:{" "}
                              {
                                course.examPatterns.class6.importantDates
                                  .examDate
                              }
                            </div>
                          )}
                        </div>
                      )}

                      {/* Class 9 Pattern */}
                      {course.examPatterns.class9 && (
                        <div>
                          <h5 className="font-medium text-gray-800 mb-2">
                            Class 9th Pattern:
                          </h5>
                          <div className="overflow-x-auto">
                            <table className="min-w-full text-xs border border-gray-200">
                              <thead className="bg-gray-50">
                                <tr>
                                  <th className="border border-gray-200 px-2 py-1">
                                    Subject
                                  </th>
                                  <th className="border border-gray-200 px-2 py-1">
                                    Questions
                                  </th>
                                  <th className="border border-gray-200 px-2 py-1">
                                    Marks
                                  </th>
                                  <th className="border border-gray-200 px-2 py-1">
                                    Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {course.examPatterns.class9.subjects.map(
                                  (subject, index) => (
                                    <tr key={index}>
                                      <td className="border border-gray-200 px-2 py-1">
                                        {subject.name}
                                      </td>
                                      <td className="border border-gray-200 px-2 py-1 text-center">
                                        {subject.questions}
                                      </td>
                                      <td className="border border-gray-200 px-2 py-1 text-center">
                                        {subject.marks}
                                      </td>
                                      <td className="border border-gray-200 px-2 py-1 text-center">
                                        {subject.totalMarks}
                                      </td>
                                    </tr>
                                  )
                                )}
                                <tr className="bg-gray-50 font-semibold">
                                  <td className="border border-gray-200 px-2 py-1">
                                    Total
                                  </td>
                                  <td className="border border-gray-200 px-2 py-1 text-center">
                                    {course.examPatterns.class9.total.questions}
                                  </td>
                                  <td className="border border-gray-200 px-2 py-1 text-center">
                                    -
                                  </td>
                                  <td className="border border-gray-200 px-2 py-1 text-center">
                                    {
                                      course.examPatterns.class9.total
                                        .totalMarks
                                    }
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">
                            <strong>Age Eligibility:</strong>{" "}
                            {course.examPatterns.class9.ageEligibility}
                          </p>
                        </div>
                      )}
                    </div>
                  )}{" "}
                  <div className="mt-6">
                    <Link
                      href="/form"
                      className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Begin Your Preparation?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Join VEERPATH DEFENCE ACADEMY and take the first step towards your
              dream school. Limited seats available!
            </p>{" "}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/form"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Enroll Now
              </Link>
              <a
                href="tel:+91-9897841033"
                className="text-sm font-semibold leading-6 text-white"
              >
                Call Us: +91-9897841033 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
