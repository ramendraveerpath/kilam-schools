"use client";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import {
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightStartOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

// Main navigation items
const navigation = [
  { name: "Home", href: "/" },
  // { name: "Website", href: "/website" },
  // { name: "Download App", href: "/download-app" },
  { name: "About us", href: "/about" },
  { name: "Contact us", href: "/contact" },
];

const coursesItems = [
  { name: "Paid Courses", href: "https://veerpathacademy.akamai.net.in/new-courses?folderId=17" },
  { name: "Free Courses", href: "https://veerpathacademy.akamai.net.in/new-courses?folderId=18" },
];

const testSeriesItems = [
  { name: "Paid Test Series", href: "https://veerpathacademy.akamai.net.in/new-courses?folderId=17" },
  { name: "Free Test Series", href: "https://veerpathacademy.akamai.net.in/new-courses?folderId=18" },
];

const studyMaterialItems = [
  { name: "Previous Year Papers", href: "https://veerpathacademy.akamai.net.in/notes" },
  { name: "E Book", href: "https://veerpathacademy.akamai.net.in/ebooks" },
  { name: "Other PDFs", href: "https://veerpathacademy.akamai.net.in/study-material" },
];




export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-blue-900 fixed inset-x-0 top-0 z-50 shadow-sm">
      <nav
        className="w-full flex items-center justify-between px-6 py-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo - Left Side */}{" "}
        <div className="flex items-center">
          <Link href="/" className="flex items-center -m-1.5 px-1.5">
            <span className="sr-only">VEERPATH ACADEMY(VDA)</span>
            <Image
              src="/images/logo4.jpg"
              alt="logo"
              width={100}
              height={70}
              className="h-8 md:h-12 w-auto"
            />
            <span className="ml-2 sm:text-xl text:base font-bold text-white  md:block text-2xl">
              VEERPATH ACADEMY (VDA)
            </span>
          </Link>
        </div>{" "}
        {/* Right Side - Desktop Navigation and Mobile Menu Button */}
        <div className="flex items-center">
          {/* Desktop navigation */}{" "}
          <div className="hidden lg:flex lg:items-center lg:gap-x-4">
            {/* Main navigation items */} 
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xl font-serif leading-6 text-white hover:text-yellow-500 transition-colors whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            
            {/* Our Courses dropdown */}
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-xl font-serif leading-6 text-white hover:text-yellow-500 transition-colors">
                Our Courses
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </PopoverButton>
              <PopoverPanel transition className="absolute left-0 top-full z-10 mt-3 w-48 rounded-lg bg-gray-800 shadow-lg ring-1 ring-gray-700 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150">
                <div className="p-2">
                  {coursesItems.map((item) => (
                    <a key={item.name} href={item.href} className="block rounded-lg p-2 text-sm text-white hover:bg-gray-700">{item.name}</a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            {/* Our Test Series dropdown */}
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-xl font-serif leading-6 text-white hover:text-yellow-500 transition-colors">
                Our Test Series
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </PopoverButton>
              <PopoverPanel transition className="absolute left-0 top-full z-10 mt-3 w-48 rounded-lg bg-gray-800 shadow-lg ring-1 ring-gray-700 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150">
                <div className="p-2">
                  {testSeriesItems.map((item) => (
                    <a key={item.name} href={item.href} className="block rounded-lg p-2 text-sm text-white hover:bg-gray-700">{item.name}</a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>

            {/* Study Material dropdown */}
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-xl font-serif leading-6 text-white hover:text-yellow-500 transition-colors">
                Study Material
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
              </PopoverButton>
              <PopoverPanel transition className="absolute left-0 top-full z-10 mt-3 w-52 rounded-lg bg-gray-800 shadow-lg ring-1 ring-gray-700 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150">
                <div className="p-2">
                  {studyMaterialItems.map((item) => (
                    <a key={item.name} href={item.href} className="block rounded-lg p-2 text-sm text-white hover:bg-gray-700">{item.name}</a>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            

            {/* Login/Register button */}
            <a
              href="https://veerpathacademy.akamai.net.in/my-zone"
              className="ml-4 text-sm font-semibold leading-6 text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-500 transition-colors"
            >
              Login/Register
            </a>
            {/* Download button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.zntbwv.eehtyi&pcampaignid=web_share"
              className="ml-2 flex items-center gap-2 text-sm font-semibold leading-6 text-gray-900 bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              Download App
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>{" "}
      {/* Mobile menu */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed top-0 right-0 z-50 w-full bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700 max-h-fit">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center -m-1.5 p-1.5">
              <span className="sr-only">VEERPATH ACADEMY(VDA)</span>
              <Image
                src="/images/logo4.jpg"
                alt="logo"
                width={100}
                height={70}
                className="h-8 w-auto"
              />
              {/* <span className="ml-2 text-xl font-bold text-white">
                VEERPATH DEFENCE ACADEMY
              </span> */}
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>{" "}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              <div className="space-y-2 py-6 pb-48 overflow-y-auto max-h-screen">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Our Courses section */}
                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">Our Courses</div>
                {coursesItems.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm leading-7 text-gray-300 hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>{item.name}</a>
                ))}

                {/* Our Test Series section */}
                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">Our Test Series</div>
                {testSeriesItems.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm leading-7 text-gray-300 hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>{item.name}</a>
                ))}

                {/* Study Material section */}
                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">Study Material</div>
                {studyMaterialItems.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm leading-7 text-gray-300 hover:bg-gray-800" onClick={() => setMobileMenuOpen(false)}>{item.name}</a>
                ))}
                

              </div>{" "}
              <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 py-6 space-y-3 px-6">
                <a
                  href="https://veerpathacademy.akamai.net.in/my-zone"
                  className="block w-full text-center text-sm font-semibold leading-6 text-white bg-green-600 px-4 py-2 rounded-md hover:bg-green-500 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login/Register
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.zntbwv.eehtyi&pcampaignid=web_share"
                  className="flex items-center justify-center gap-2 w-full text-center text-sm font-semibold leading-6 text-gray-900 bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Download
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
