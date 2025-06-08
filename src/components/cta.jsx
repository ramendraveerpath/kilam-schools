import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative isolate bg-gray-900 mt-12 md:mt-24 py-8 sm:py-16 rounded-4xl max-w-7xl mx-auto overflow-visible">
      <div className="absolute inset-0 -z-10 transform-gpu overflow-hidden blur-3xl rounded-4xl">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-400 to-orange-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1 relative overflow-visible">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl text-center sm:text-left font-bold tracking-tight text-white sm:text-4xl">
              Build Your Child's Future with the Right Guidance
            </h2>
            <p className="mt-6 text-center sm:text-left text-lg leading-8 text-gray-300">
              Join VEERPATH DEFENCE ACADEMY - Where Success Begins! Transform
              your child's dreams into reality with our expert guidance and
              proven methodology.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/form"
                className="rounded-md bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-colors duration-200"
              >
                🚀 Enroll Now - Start Today
              </Link>
              <a
                href="tel:+91-9897841033"
                className="text-lg font-semibold leading-6 text-white hover:text-gray-300 transition-colors duration-200"
              >
                📞 Call: +91-9897841033 <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-8 flex justify-center items-center sm:justify-start text-gray-300 text-center sm:text-left mx-auto">
              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-400" />
              <span className="text-sm">1000+ successful admissions</span>
            </div>
          </div>
          <div className="relative hidden sm:block lg:absolute lg:order-last lg:right-0 lg:top-0 lg:w-1/3 lg:h-full lg:-translate-y-1/2">
            <div className="relative h-full w-full">
              <Image
                src="/images/3.jpg"
                alt="Success at VEERPATH DEFENCE ACADEMY"
                width={383}
                height={200}
                className="rounded-2xl object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
