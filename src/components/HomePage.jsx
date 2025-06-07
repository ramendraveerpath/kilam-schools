"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  AcademicCapIcon,
  TrophyIcon,
  UserGroupIcon,
  ChartBarIcon,
  BookOpenIcon,
  ClockIcon,
  StarIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import CTA from "./cta";

const stats = [
  { name: "Successful Selections", value: "1000+", icon: AcademicCapIcon },
  { name: "Years of Experience", value: "15+", icon: TrophyIcon },
  { name: "Expert Faculty", value: "25+", icon: UserGroupIcon },
  { name: "Target Exams", value: "3", icon: ChartBarIcon },
];

const features = [
  {
    name: "Online & Offline Classes",
    description:
      "Live interactive sessions, recorded lectures, and classroom teaching by expert faculty with doubt-clearing sessions.",
    icon: BookOpenIcon,
  },
  {
    name: "Comprehensive Syllabus Coverage",
    description:
      "Fully updated curriculum as per JNVST, AISSEE & RMS entrance guidelines with complete preparation materials.",
    icon: UserGroupIcon,
  },
  {
    name: "Mock Tests & Evaluation",
    description:
      "National-level test series with performance analysis, progress reports, and regular practice questions.",
    icon: ClockIcon,
  },
  {
    name: "Moral & Leadership Training",
    description:
      "Special focus on discipline, ethics, and personality development aligned with defence academy ethos.",
    icon: TrophyIcon,
  },
];

const testimonials = [
  {
    name: "Arjun Sharma",
    school: "Jawahar Navodaya Vidyalaya, Delhi",
    image: "/images/2.jpg",
    text: "VEERPATH DEFENCE ACADEMY helped me crack JNVST in my first attempt. The mock tests and expert guidance were exceptional!",
  },
  {
    name: "Priya Gupta",
    school: "Sainik School, Ghorakhal",
    image: "/images/3.jpg",
    text: "The online classes and personalized mentorship helped me secure admission in my dream Sainik School. Forever grateful!",
  },
  {
    name: "Vikram Singh",
    school: "Rashtriya Military School, Ajmer",
    image: "/images/4.jpg",
    text: "The comprehensive study material and disciplined approach of VEERPATH made all the difference in my RMS selection!",
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
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-24">
        {/* Added pt-24 for fixed navbar */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-center">
            <div className="lg:pr-8 lg:-mt-20">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Premier Coaching for{" "}
                <span className="text-indigo-600">
                  Navodaya & Sainik School
                </span>{" "}
                Entrance Exams
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                <span className="font-semibold text-gray-800">
                  विश्वास और अनुशासन से सफलता
                </span>
                <br />
                Join VEERPATH DEFENCE ACADEMY - Where success begins! Online &
                Offline learning programs available for JNVST, AISSEE & RMS
                entrance exams.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/form"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Start Your Journey
                </Link>
                <a
                  href="#features"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="mt-10 lg:mt-5 flex justify-center lg:justify-end">
              <Image
                width={500}
                height={100}
                alt="Sainik School Students"
                src="/images/1.jpg"
                className="w-ful rounded-2xl object-cover shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>
      {/* Stats Section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-24 lg:px-8">
        <div className="mx-auto flex flex-col ax-w-2xl lg:mx-0 items-center">
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
              className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
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
        className="mx-auto mt-32 max-w-7xl px-6 sm:mt-24 lg:px-8"
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
      <div
        id="testimonials"
        className="mx-auto mt-32 max-w-7xl px-6 sm:mt-24 lg:px-8"
      >
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
              className="flex flex-col justify-between rounded-2xl hover:shadow-2xl transition-all duration-300 ease-in-out bg-white p-8 shadow-lg ring-1 ring-gray-200"
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
              </div>{" "}
              <div className="mt-8 flex items-center gap-x-4">
                <Image
                  alt={testimonial.name}
                  src={testimonial.image}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full bg-gray-50 object-cover"
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
        </div>{" "}
      </div>
      {/* Campus Life Gallery Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Campus Life
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experience the Academy Environment
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get a glimpse of the disciplined and inspiring environment that
              shapes future leaders
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gray-900">
              <Image
                src="/images/2.jpg"
                alt="Academy Training Session"
                width={600}
                height={400}
                className="h-64 w-full object-cover opacity-75 lg:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Interactive Learning Sessions
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Expert faculty guiding students through comprehensive
                    preparation
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-gray-900">
              <Image
                src="/images/3.jpg"
                alt="Student Achievement Ceremony"
                width={600}
                height={400}
                className="h-64 w-full object-cover opacity-75 lg:h-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 flex items-end p-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Achievement & Recognition
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Celebrating student success and milestones
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Target Exams Section */}
      <div className="relative bg-gray-50 py-24 sm:py-32">
        {/* <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/4.jpg"
            alt="Academy Background"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-10"
          />
        </div> */}
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Target Exams
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Specialized Coaching Programs
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We prepare students for India's most prestigious residential
              school entrance examinations
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <AcademicCapIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  JNVST (Class 6 & 9)
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  Jawahar Navodaya Vidyalaya Selection Test - Mental ability,
                  arithmetic, and language preparation
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <TrophyIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  AISSEE (Class 6 & 9)
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  All India Sainik School Entrance Examination - Mathematics,
                  language, intelligence, and GK
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <UserGroupIcon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  Rashtriya Military School
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  RMS entrance preparation with focus on academic excellence and
                  disciplinary values
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
