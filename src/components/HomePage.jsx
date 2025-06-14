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
  { name: "Expert Faculty", value: "7+", icon: UserGroupIcon },
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
  return (
    <div className="bg-white">
      {/* Hero Section with Image */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-24 pb-12 md:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        />{" "}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none lg:grid lg:grid-cols-3 lg:gap-x-12">
            <div className="lg:col-span-2 lg:pr-8 pt-20 md:pt-24">
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
                  src="/images/1.jpg"
                  className="w-full h-auto max-h-[700px] rounded-2xl object-contain shadow-lg bg-gray-50 hover:shadow-xl transition-all duration-300 ease-in-out"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
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
      {/* Testimonials Section */}
      <div
        id="testimonials"
        className="mx-auto py-12 max-w-7xl px-6 sm:py-24 lg:px-8"
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
              { src: "/images/admission.jpeg", alt: "Academy Admission Session" },
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
                Discover a well-rounded hostel experience that blends comfort, community, and academic focus.
              </p>
            </div>

            {/* Hostel Features Section */}
            <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700 text-base">
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                🏠 <strong>Accommodation Options</strong><br />
                Comfortable living arrangements with various room choices.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                ⚡ <strong>Basic Amenities</strong><br />
                24/7 Electricity, Water Supply, and High-Speed Wi-Fi.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                🍽️ <strong>Meal Services</strong><br />
                Nutritious meals served regularly in canteen or mess.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                🎮 <strong>Recreation & Entertainment</strong><br />
                Common areas for indoor games, TV, and relaxation.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                📚 <strong>Study Rooms & Library</strong><br />
                Dedicated quiet zones and academic support spaces.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                🧼 <strong>Health & Hygiene</strong><br />
                Regular cleaning, sanitization, and medical aid.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                🔒 <strong>Safety & Security</strong><br />
                Round-the-clock guards, CCTV, and secure entry.
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-sm border">
                📋 <strong>Hostel Rules & Regulations</strong><br />
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
      <div className="relative bg-gray-50 py-12 sm:py-24">
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
            </dl>{" "}
          </div>
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
                  src="/images/director.jpeg"
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
                        VEERPATH DEFENCE ACADEMY (VDA)
                      </span>
                      , where learning is not just a process but a journey
                      toward selection. We effort in preparing students for the
                      JNV/AISSEE/RMS entrance exams have been truly commendable.
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
