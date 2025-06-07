import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-8 sm:py-16 rounded-4xl max-w-7xl mx-auto">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-400 to-orange-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Build Your Child's Future with the Right Guidance
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
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
            <div className="mt-8 flex items-center text-gray-300">
              <CheckCircleIcon className="h-5 w-5 mr-2 text-green-400" />
              <span className="text-sm">Over 1000+ successful admissions</span>
            </div>
          </div>
          <div className="relative lg:order-last">
            <Image
              src="/images/3.jpg"
              alt="Success at VEERPATH DEFENCE ACADEMY"
              width={400}
              height={300}
              className="aspect-[4/3] w-full rounded-2xl bg-gray-50 object-cover shadow-2xl lg:aspect-auto lg:h-64"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
