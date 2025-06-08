"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-12 md:mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            {" "}
            <div className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={100}
                height={70}
                 className="h-8 md:h-12 w-auto"
              />
              <span className="ml-2 text-lg md:text-2xl font-bold text-white">
                VEERPATH DEFENCE ACADEMY
              </span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              <span className="font-semibold">विश्वास और अनुशासन से सफलता</span>
              <br />
              Premier coaching for Navodaya & Sainik School entrance exams with
              result-driven educational excellence.
            </p>{" "}
            {/* social media. rahul, link laga diyo isme */}
            {/* <div className="mt-6 flex space-x-4">
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
            </div> */}
          </div>{" "}
          <div>
            <h3 className="text-sm font-semibold text-white">Quick Links</h3>{" "}
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/form" className="text-gray-400 hover:text-white">
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>📞 +91-9897841033</li>
              <li>📍 832 Radhanagar, Bulandshahr</li>
              <li>🕒 Mon-Sat: 9AM-6PM</li>
              <li>🏆 1000+ Successful Selections</li>
            </ul>
          </div>
        </div>{" "}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; 2025 VEERPATH DEFENCE ACADEMY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
