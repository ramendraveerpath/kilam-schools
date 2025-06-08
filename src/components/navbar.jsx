"use client";
import { useState } from "react";
import Link from "next/link";
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
  TrophyIcon,
  ChartBarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

// Main navigation items
const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

// Leads dropdown items
const leadsItems = [
  {
    name: "Google Leads",
    description: "Manage and track leads from Google Ads campaigns",
    href: "/google-leads",
    icon: ChartBarIcon,
  },
  {
    name: "HubSpot Leads",
    description: "Manage form submissions from your website",
    href: "/hubspot-leads",
    icon: UserGroupIcon,
  },
];

const callsToAction = [
  { name: "Enroll Now", href: "/form", icon: DocumentTextIcon },
  { name: "Call Us", href: "tel:+91-9897841033", icon: PhoneIcon },
  {
    name: "View Success Stories",
    href: "/#testimonials",
    icon: AcademicCapIcon,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 fixed inset-x-0 top-0 z-50 shadow-sm">
      {" "}
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo - Left Side */}{" "}
        <div className="flex items-center">
          <Link href="/" className="flex items-center -m-1.5 px-1.5">
            <span className="sr-only">VEERPATH DEFENCE ACADEMY</span>
            <Image src='/images/logo.png' alt='logo' width={100} height={70} className="h-12 w-auto" />  
            <span className="ml-2 text-xl font-bold text-white hidden md:block">
              VEERPATH DEFENCE ACADEMY
            </span>
          </Link>
        </div>
        {/* Right Side - Desktop Navigation and Mobile Menu Button */}
        <div className="flex items-center">
          {/* Desktop navigation */}{" "}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            {/* Main navigation items */}{" "}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white hover:text-yellow-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            {/* Leads dropdown */}
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-yellow-500 transition-colors cursor-pointer">
                Leads
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-80 overflow-hidden rounded-lg bg-gray-800 shadow-lg ring-1 ring-gray-70 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
              >
                <div className="p-4 cursor-pointer">
                  {" "}
                  {leadsItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group relative flex items-center gap-x-4 rounded-lg p-3 text-sm leading-6 hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                      <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                        <item.icon
                          className="h-4 w-4 text-yellow-500 group-hover:text-yellow-400"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <div className="block font-semibold text-white">
                          {item.name}
                        </div>
                        <p className="mt-1 text-xs text-gray-300">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
            {/* Enroll Now button */}{" "}
            <Link
              href="/form"
              className="ml-4 text-sm font-semibold leading-6 text-gray-900 bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors"
            >
              Enroll Now <span aria-hidden="true">&rarr;</span>
            </Link>
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
      </nav>
      {/* Mobile menu */}
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-700">
          {" "}
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center -m-1.5 p-1.5">
              <span className="sr-only">VEERPATH DEFENCE ACADEMY</span>
               <Image src='/images/logo.png' alt='logo' width={100} height={70} className="h-8 w-auto" /> 
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
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-700">
              {" "}
              <div className="space-y-2 py-6">
                {" "}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="-mx-3 block cursor-pointer rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                  Leads
                </div>{" "}
                {leadsItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm leading-7 text-gray-300 hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>{" "}
              <div className="py-6">
                <Link
                  href="/form"
                  className="block w-full text-center text-sm font-semibold leading-6 text-gray-900 bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
