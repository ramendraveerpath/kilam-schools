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
  { name: "Successful Selections", value: "Upto 80%", icon: AcademicCapIcon },
  { name: "Years of Experience", value: "5+", icon: TrophyIcon },
  { name: "Expert Faculty", value: "15+", icon: UserGroupIcon },
  { name: "Target Exams", value: "10+", icon: ChartBarIcon },
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
      "Fully updated curriculum as per the entrance exams guidelines with complete preparation materials.",
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
    text: "VEERPATH ACADEMY(VDA) helped me crack JNVST in my first attempt. The mock tests and expert guidance were exceptional!",
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
  return (
    <div className="bg-white">
      {/* Banner Section */}
      <div className="w-full pt-27 pb-0 px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden h-[80px] sm:h-[120px] md:h-[150px] lg:h-[300px]">
          <div className="flex animate-[slide_15s_infinite] hover:pause">
            <Image
              width={1200}
              height={400}
              alt="Banner 1"
              src="/images/B1.jpeg"
              className="flex-shrink-0 w-full h-full rounded-lg object-cover"
              priority
            />
            <Image
              width={1200}
              height={400}
              alt="Banner 2"
              src="/images/B2.jpeg"
              className="flex-shrink-0 w-full h-full rounded-lg object-cover"
            />
            <Image
              width={1200}
              height={400}
              alt="Banner 3"
              src="/images/B3.jpeg"
              className="flex-shrink-0 w-full h-full rounded-lg object-cover"
            />
            <Image
              width={1200}
              height={400}
              alt="Banner 4"
              src="/images/B4.jpeg"
              className="flex-shrink-0 w-full h-full rounded-lg object-cover"
            />
          </div>
        </div>
        <style jsx>{`
          @keyframes slide {
            0%, 22.5% { transform: translateX(0%); }
            25%, 47.5% { transform: translateX(-100%); }
            50%, 72.5% { transform: translateX(-200%); }
            75%, 97.5% { transform: translateX(-300%); }
            100% { transform: translateX(0%); }
          }
        `}</style>
      </div>

      {/* Hero Section with Image */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 mt-8 md:mt-12 lg:mt-16 pt-0 pb-12 md:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />{" "}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-x-12">
            <div className="lg:col-span-2 lg:pr-8 pt-0">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Your Dreams. Your Exams. Our Mission.
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Affordable, reliable education designed for real results.
                <br />
                Learn smarter, score higher, and unlock your true potential.
                <br />
                <span className="font-semibold text-gray-800">
                  विश्वास और अनुशासन से सफलता
                </span>
                <br />
                
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="/form"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Start Your Journey
                </Link>
                <a
                  href="/about"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>{" "}
            <div className="mt-12 lg:mt-0 lg:col-span-1 flex items-center justify-center">
              <div className="relative w-full max-w-lg lg:max-w-none">
                <Image
                  width={700}
                  height={600}
                  alt="Sainik School Students"
                  src="/images/H1.jpeg"
                  className="w-full h-auto max-h-[500px] rounded-2xl object-cover shadow-lg bg-gray-50 hover:shadow-xl transition-all duration-300 ease-in-out"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      {/* Image Gallery Section */}
      <div className="w-full sm:px-16 px-2 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="https://veerpathacademy.akamai.net.in/new-courses?folderId=17" target="_blank" rel="noopener noreferrer" className="block">
            <Image
              width={300}
              height={200}
              alt="Paid Courses"
              src="/images/A1.jpeg"
              className="w-full h-auto rounded-lg object-cover hover:scale-105 hover:shadow-lg transition-all duration-300"
            />
          </a>
          <a href="https://veerpathacademy.akamai.net.in/new-courses?folderId=18" target="_blank" rel="noopener noreferrer" className="block">
            <Image
              width={300}
              height={200}
              alt="Free Courses"
              src="/images/A2.jpeg"
              className="w-full h-auto rounded-lg object-cover hover:scale-105 hover:shadow-lg transition-all duration-300"
            />
          </a>
          <a href="https://veerpathacademy.akamai.net.in/test-series" target="_blank" rel="noopener noreferrer" className="block">
            <Image
              width={300}
              height={200}
              alt="Paid Test Series"
              src="/images/A3.jpeg"
              className="w-full h-auto rounded-lg object-cover hover:scale-105 hover:shadow-lg transition-all duration-300"
            />
          </a>
          <a href="https://veerpathacademy.akamai.net.in/notes" target="_blank" rel="noopener noreferrer" className="block">
            <Image
              width={300}
              height={200}
              alt="Previous Year Papers"
              src="/images/A4.jpeg"
              className="w-full h-auto rounded-lg object-cover hover:scale-105 hover:shadow-lg transition-all duration-300"
            />
          </a>
          <a href="https://veerpathacademy.akamai.net.in/study-material" target="_blank" rel="noopener noreferrer" className="block">
            <Image
              width={300}
              height={200}
              alt="Study Material"
              src="/images/A5.jpeg"
              className="w-full h-auto rounded-lg object-cover hover:scale-105 hover:shadow-lg transition-all duration-300"
            />
          </a>
          <a href="https://veerpathacademy.akamai.net.in/ebooks" target="_blank" rel="noopener noreferrer" className="block">
            <Image
              width={300}
              height={200}
              alt="E Book"
              src="/images/A6.jpeg"
              className="w-full h-auto rounded-lg object-cover hover:scale-105 hover:shadow-lg transition-all duration-300"
            />
          </a>
          <a href="https://veerpathacademy.akamai.net.in/quiz" target="_blank" rel="noopener noreferrer" className="block">
            <Image
              width={300}
              height={200}
              alt="Free Quiz"
              src="/images/A7.jpeg"
              className="w-full h-auto rounded-lg object-cover hover:scale-105 hover:shadow-lg transition-all duration-300"
            />
          </a>
          <a href="https://veerpathacademy.akamai.net.in/" target="_blank" rel="noopener noreferrer" className="block">
            <Image
              width={300}
              height={200}
              alt="Study Material"
              src="/images/A8.jpeg"
              className="w-full h-auto rounded-lg object-cover hover:scale-105 hover:shadow-lg transition-all duration-300"
            />
          </a>
        </div>
      </div>



      {/* Stats Section */}
      <div className="mx-auto py-12 max-w-7xl px-6 sm:py-24 lg:px-8 overflow-hidden">
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
        <div className="mx-auto mt-16 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:fle max-w-md flex-co gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-ro lg:items-end">
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
        className="mx-auto py-12 max-w-7xl px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
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
          <dl className="grid max-w-xl grid-cols-1 gap-4 md:gap-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 ">
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
      </div>

      {/* Mobile App Section */}
      <div className="bg-gradient-to-r from-pink-50 to-indigo-50 py-16 sm:py-24 relative mx-4 sm:mx-8 lg:mx-16 rounded-3xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
            <div className="lg:pr-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Start Your Journey With 
              </h2>
              <h3 className="text-4xl font-bold tracking-tight text-yellow-600 sm:text-5xl">
                <span className="text-blue-600">VEERPATH ACADEMY</span> 
              </h3>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Download the app from Google PlayStore
              </p>
              <div className="mt-8">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.zntbwv.eehtyi&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  ANDROID APP ON Google play
                </a>
              </div>
            </div>
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Left Navigation arrow */}
              <button className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Phone mockup with sliding screens */}
              <div className="relative mx-8 sm:mx-12">
                <div className="w-56 h-[400px] sm:w-72 sm:h-[500px] bg-black rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Status bar */}
                    <div className="bg-gray-900 text-white text-xs px-4 py-2 flex justify-between items-center rounded-t-[2rem]">
                      <span>11:48</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-1 h-1 bg-white rounded-full"></div>
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    
                    {/* Sliding content */}
                    <div className="flex h-[calc(100%-2rem)] animate-[mobileSlide_12s_infinite] hover:pause">
                      <div className="flex-shrink-0 w-full h-full">
                        <a 
                          href="https://play.google.com/store/apps/details?id=com.zntbwv.eehtyi&pcampaignid=web_share"
                          className="block w-full h-full cursor-pointer"
                        >
                          <Image
                            src="/images/M0.jpeg"
                            alt="VeerPath Mobile App Screen 1"
                            width={320}
                            height={550}
                            className="w-full h-full object-fill hover:opacity-90 transition-opacity"
                          />
                        </a>
                      </div>
                      <div className="flex-shrink-0 w-full h-full">
                        <Image
                          src="/images/M1.jpeg"
                          alt="VeerPath Mobile App Screen 1"
                          width={320}
                          height={550}
                          className="w-full h-full object-fill"
                        />
                      </div>
                      <div className="flex-shrink-0 w-full h-full">
                        <Image
                          src="/images/M2.jpeg"
                          alt="VeerPath Mobile App Screen 2"
                          width={320}
                          height={550}
                          className="w-full h-full object-fill"
                        />
                      </div>
                      <div className="flex-shrink-0 w-full h-full">
                        <Image
                          src="/images/M3.jpeg"
                          alt="VeerPath Mobile App Screen 3"
                          width={320}
                          height={550}
                          className="w-full h-full object-fill"
                        />
                      </div>
                      <div className="flex-shrink-0 w-full h-full">
                        <Image
                          src="/images/M4.jpeg"
                          alt="VeerPath Mobile App Screen 3"
                          width={320}
                          height={550}
                          className="w-full h-full object-fill"
                        />
                      </div>
                      <div className="flex-shrink-0 w-full h-full">
                        <Image
                          src="/images/M5.jpeg"
                          alt="VeerPath Mobile App Screen 3"
                          width={320}
                          height={550}
                          className="w-full h-full object-fill"
                        />
                      </div>
                      <div className="flex-shrink-0 w-full h-full">
                        <Image
                          src="/images/M6.jpeg"
                          alt="VeerPath Mobile App Screen 3"
                          width={320}
                          height={550}
                          className="w-full h-full object-fill"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Navigation arrow */}
              <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes mobileSlide {
            0%, 30% { transform: translateX(0); }
            33.33%, 63.33% { transform: translateX(-100%); }
            66.66%, 96.66% { transform: translateX(-200%); }
            100% { transform: translateX(0); }
          }
        `}</style>
      </div>


      {/* New Testimonials Section with Moveable Cards */}
      <div className="bg-gray-50 py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-blue-600">
              Success Stories
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Hear from our successful students
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Real stories from students who achieved their dreams with our
              guidance.
            </p>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="flex gap-6 animate-[testimonialSlide_15s_linear_infinite] hover:pause">
              <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-blue-500 text-4xl mb-4">&ldquo;</div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Arjun Sharma</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Jawahar Navodaya Vidyalaya, Delhi</p>
                  </div>
                </div>
                <p className="text-gray-600">VEERPATH ACADEMY(VDA) helped me crack JNVST in my first attempt. The mock tests and expert guidance were exceptional!</p>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-green-500 text-4xl mb-4">&ldquo;</div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Priya Gupta</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Sainik School, Ghorakhal</p>
                  </div>
                </div>
                <p className="text-gray-600">The online classes and personalized mentorship helped me secure admission in my dream Sainik School. Forever grateful!</p>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-purple-500 text-4xl mb-4">&ldquo;</div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Vikram Singh</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600">Rashtriya Military School, Ajmer</p>
                  </div>
                </div>
                <p className="text-gray-600">The comprehensive study material and disciplined approach of VEERPATH made all the difference in my RMS selection!</p>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-red-500 text-4xl mb-4">&ldquo;</div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Vandana Singh</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                      <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">Great online classes and doubt clearing sessions. Highly recommend for RMS preparation.</p>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-indigo-500 text-4xl mb-4">&ldquo;</div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Vaishnavi Gupta</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">So very very nice sir and mam! The teaching quality is outstanding and supportive.</p>
              </div>

              <div className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-orange-500 text-4xl mb-4">&ldquo;</div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="font-semibold text-gray-900">Saloni Kumari</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(3)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600">Thanks for teaching all teachers! The academy provides good guidance for entrance exams.</p>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes testimonialSlide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-1376px); }
          }
        `}</style>
      </div>

      {/* Campus Life Gallery Section */}
      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Campus Life
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Experience the Environment
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get a glimpse of the disciplined and inspiring environment that
              shapes future leaders
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 md:gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gray-900">
              <Image
                src="/images/Sainik-School.jpg"
                alt="Academy Training Session"
                width={600}
                height={400}
                className="h-full w-full object-contain opacity-75 bg-gray-50"
              />
              {/* <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 md:flex items-end p-8 hidden">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Interactive Learning Sessions
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Expert faculty guiding students through comprehensive
                    preparation
                  </p>
                </div>
              </div> */}
            </div>{" "}
            <div className="relative overflow-hidden rounded-2xl bg-gray-900">
              <Image
                src="/images/img-sqr.jpg"
                alt="Student Achievement Ceremony"
                width={600}
                height={400}
                className="h-full w-full object-contain opacity-75 bg-gray-50"
              />
              {/* <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 hidden md:flex items-end p-8">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Achievement & Recognition
                  </h3>
                  <p className="mt-2 text-gray-300">
                    Celebrating student success and milestones
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="mx-auto mt-16 grid grid-cols-1 gap-4 sm:mt-20 md:gap-8 lg:mx-0 lg:grid-cols-3">
            {[
              { src: "/images/children.jpeg", alt: "Academy Training Session" },
              { src: "/images/cops.jpeg", alt: "Student Achievement Ceremony" },
              {
                src: "/images/admission.jpeg",
                alt: "Academy Admission Session",
              },
            ].map((img, index) => (
              <div
                key={index}
                className="relative h-64 overflow-hidden rounded-2xl bg-gray-900"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hostel gallery section */}
      <div className="bg-white py-12 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Hostels
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Live, Learn, and Grow
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover a well-rounded hostel experience that blends comfort,
                community, and academic focus.
              </p>
            </div>

            {/* Hostel Features Section */}
            <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-base">
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                🏠 <strong>Accommodation Options</strong>
                <br />
                Comfortable living arrangements with various room choices.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                ⚡ <strong>Basic Amenities</strong>
                <br />
                24/7 Electricity, Water Supply, and High-Speed Wi-Fi.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                🍽️ <strong>Meal Services</strong>
                <br />
                Nutritious meals served regularly in canteen or mess.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                🎮 <strong>Recreation & Entertainment</strong>
                <br />
                Common areas for indoor games, TV, and relaxation.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                📚 <strong>Study Rooms & Library</strong>
                <br />
                Dedicated quiet zones and academic support spaces.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                🧼 <strong>Health & Hygiene</strong>
                <br />
                Regular cleaning, sanitization, and medical aid.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                🔒 <strong>Safety & Security</strong>
                <br />
                Round-the-clock guards, CCTV, and secure entry.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                📋 <strong>Hostel Rules & Regulations</strong>
                <br />
                Clear guidelines to maintain discipline and safety.
              </div>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 md:gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-2xl bg-gray-900">
              <Image
                src="/images/hostel1.jpeg"
                alt="Academy Training Session"
                width={600}
                height={400}
                className="h-full w-full object-contain opacity-75 bg-gray-50"
              />
            </div>{" "}
            <div className="relative overflow-hidden rounded-2xl bg-gray-900">
              <Image
                src="/images/hostel2.jpeg"
                alt="Student Achievement Ceremony"
                width={600}
                height={400}
                className="h-full w-full object-contain opacity-75 bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Target Exams Section */}
      {/* <div className="relative bg-gray-50 py-12 sm:py-24"> */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/4.jpg"
            alt="Academy Background"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-10"
          />
        </div> */}
        {/* <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
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
            </dl>{" "}
          </div>
        </div>
      </div> */}

       
      {/* Target Exams */}
      <div className="mx-auto mt-24 max-w-3xl text-center">
        <h3 className="text-2xl font-bold tracking-tight text-blue-600 sm:text-3xl">
          Target Exams
        </h3>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-4">
          <a 
            href="https://navodaya.gov.in/nvs/en/Home1/"
            className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out block cursor-pointer"
          >
            <h4 className="font-semibold text-indigo-600">JNVST</h4>
            <p className="text-sm text-gray-600">Class 6 & 9</p>
          </a>
          <a 
            href="https://sainikschoolsociety.in/"
            className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out block cursor-pointer"
          >
            <h4 className="font-semibold text-indigo-600">AISSEE</h4>
            <p className="text-sm text-gray-600">Class 6 & 9</p>
          </a>
          <a 
            href="https://www.rashtriyamilitaryschools.edu.in/"
            className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out block cursor-pointer"
          >
            <h4 className="font-semibold text-indigo-600">RMS</h4>
            <p className="text-sm text-gray-600">Class 6 & 9</p>
          </a>
          <a 
            href="https://upsc.gov.in/"
            className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out block cursor-pointer"
          >
            <h4 className="font-semibold text-indigo-600">DEFENCE EXAMS</h4>
            <p className="text-sm text-gray-600">NDA/CDS/AFCAT & MORE</p>
          </a>
          <a 
            href="https://cuet.nta.nic.in/"
            className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out block cursor-pointer"
          >
            <h4 className="font-semibold text-indigo-600">CUET (UG & PG)</h4>
            <p className="text-sm text-gray-600">Common University Entrance Test</p>
          </a>
          <a 
            href="https://consortiumofnlus.ac.in/"
            className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out block cursor-pointer"
          >
            <h4 className="font-semibold text-indigo-600">CLAT</h4>
            <p className="text-sm text-gray-600">Common Law Admission Test</p>
          </a>
          <a 
            href="https://www.cbse.gov.in/"
            className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out block cursor-pointer"
          >
            <h4 className="font-semibold text-indigo-600">Board Exams</h4>
            <p className="text-sm text-gray-600">CBSE, ICSE, State Board Exams</p>
          </a>
          <a 
            href="https://veerpathacademy.akamai.net.in/new-courses?folderId=42"
            className="rounded-lg bg-indigo-50 p-6 text-center shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out block cursor-pointer"
          >
            <h4 className="font-semibold text-indigo-600">Economics Courses</h4>
          </a>
        </div>
      </div>

      {/* Director's Message Section */}
      <div className="relative bg-white py-12 md:py-24 md:pb-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Leadership
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Director's Message
            </p>
          </div>

          <div className="mx-auto max-w-7xl w-full lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
            {/* Director's Image */}
            <div className="relative mb-8 lg:mb-0">
              <div className="relative mx-auto max-w-sm lg:max-w-none">
                <Image
                  src="/images/director.webp"
                  alt="Krishan Saini - Director, VDA"
                  width={300}
                  height={200}
                  className="w-full rounded-2xl object-cover shadow-xl ring-1 ring-gray-400/10 hover:scale-105 transition-all duration-300 ease-in-out"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Krishan Saini
                  </h3>
                  <p className="text-sm text-indigo-600 font-medium">
                    Director, VDA
                  </p>
                </div>
              </div>
            </div>

            {/* Director's Message */}
            <div className="lg:pl-8">
              <div className="relative">
                <svg
                  className="absolute top-0 left-0 h-8 w-8 text-indigo-600/20 transform -translate-x-2 -translate-y-2"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <div className="relative">
                  <p className="text-lg leading-8 text-gray-600 mb-6">
                    Dear Students, Parents, and Staff,
                  </p>

                  <div className="prose prose-lg text-gray-600 space-y-4">
                    <p>
                      I extend a warm welcome to all of you at{" "}
                      <span className="font-semibold text-indigo-600">
                        VEERPATH ACADEMY (VDA)
                      </span>
                      , where learning is not just a process but a journey
                      toward selection. We effort in preparing students for the
                      all entrance exams have been truly commendable.
                      The commitment, creativity, and professionalism you have
                      shown have created a strong foundation for our students'
                      success.
                    </p>

                    <p>
                      At VDA, we believe in empowering our students to become
                      leaders, innovators, and responsible global citizens. We
                      are committed to providing a dynamic and engaging
                      environment where each student is encouraged to explore
                      their potential and strive for greatness.
                    </p>

                    <p>
                      Our dedicated faculty members, state-of-the-art
                      facilities, and a curriculum that blends tradition with
                      modernity ensure that students are well-prepared for the
                      challenges of tomorrow. We understand that education is a
                      partnership, and we work closely with parents to create a
                      nurturing space for each child's success.
                    </p>

                    <p>
                      As we continue to evolve, I invite all students to seize
                      every opportunity to grow, to challenge themselves, and to
                      always aim higher. Together, let's make VDA a place where
                      dreams are realized and futures are built.
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <CheckCircleIcon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-semibold text-gray-900">
                          Best regards,
                        </p>
                        <p className="text-lg font-bold text-indigo-600">
                          Krishan Saini
                        </p>
                        <p className="text-sm text-gray-600">Director, VDA</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}
