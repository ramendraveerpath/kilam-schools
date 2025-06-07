"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
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
  BookOpenIcon,
  ClockIcon,
  TrophyIcon,
  UserGroupIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

// Main navigation items
const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#features" },
  { name: "Apply Now", href: "/form" },
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

// Services dropdown items
const services = [
  {
    name: "Comprehensive Preparation",
    description:
      "Complete syllabus coverage for Sainik School & Military School entrance exams",
    href: "/#features",
    icon: BookOpenIcon,
  },
  {
    name: "Mock Tests",
    description: "Regular practice tests to assess your preparation level",
    href: "/#features",
    icon: ClockIcon,
  },
  {
    name: "Expert Faculty",
    description: "Learn from experienced teachers with proven track record",
    href: "/#features",
    icon: UserGroupIcon,
  },
  {
    name: "Personal Mentorship",
    description: "Get personalized guidance to identify and improve weak areas",
    href: "/#features",
    icon: TrophyIcon,
  },
];

const callsToAction = [
  { name: "Apply Now", href: "/form", icon: DocumentTextIcon },
  { name: "Call Us", href: "tel:+91-9999999999", icon: PhoneIcon },
  {
    name: "View Success Stories",
    href: "/#testimonials",
    icon: AcademicCapIcon,
  },
];

export default function Navbar() {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (href) => {
    if (href.startsWith("tel:")) {
      window.location.href = href;
    } else if (href.startsWith("/#")) {
      // Handle anchor links
      const element = document.querySelector(href.substring(1));
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 fixed inset-x-0 top-0 z-50 shadow-sm">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <button
            onClick={() => handleNavigation("/")}
            className="flex items-center -m-1.5 p-1.5"
          >
            <span className="sr-only">Sainik Academy</span>
            <TrophyIcon className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-bold text-white">
              Sainik Academy
            </span>
          </button>
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
        </div>{" "}
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {/* Main navigation items */}
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href)}
              className="text-sm font-semibold leading-6 text-white hover:text-yellow-500 transition-colors"
            >
              {item.name}
            </button>
          ))}

          {/* Leads dropdown */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-yellow-500 transition-colors">
              Leads
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-800 shadow-lg ring-1 ring-gray-700 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
            >
              <div className="p-4">
                {leadsItems.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleNavigation(item.href)}
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                      <item.icon
                        className="h-6 w-6 text-yellow-500 group-hover:text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <div className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </div>
                      <p className="mt-1 text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          {/* Services dropdown */}
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white hover:text-yellow-500 transition-colors">
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-gray-800 shadow-lg ring-1 ring-gray-700 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
            >
              <div className="p-4">
                {services.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-700 cursor-pointer"
                    onClick={() => handleNavigation(item.href)}
                  >
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-700 group-hover:bg-gray-600">
                      <item.icon
                        className="h-6 w-6 text-yellow-500 group-hover:text-yellow-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      <div className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </div>
                      <p className="mt-1 text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-700 bg-gray-700">
                {callsToAction.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-white hover:bg-gray-600 transition-colors"
                  >
                    <item.icon
                      className="h-5 w-5 flex-none text-yellow-500"
                      aria-hidden="true"
                    />
                    {item.name}
                  </button>
                ))}
              </div>{" "}
            </PopoverPanel>
          </Popover>
        </div>
        {/* Get Started button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            onClick={() => handleNavigation("/form")}
            className="text-sm font-semibold leading-6 text-gray-900 bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors"
          >
            Get Started <span aria-hidden="true">&rarr;</span>
          </button>
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
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavigation("/")}
              className="flex items-center -m-1.5 p-1.5"
            >
              <span className="sr-only">Sainik Academy</span>
              <TrophyIcon className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-xl font-bold text-white">
                Sainik Academy
              </span>
            </button>
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
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                  Leads
                </div>
                {leadsItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm leading-7 text-gray-300 hover:bg-gray-800 w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white">
                  Services
                </div>
                {services.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.href)}
                    className="-mx-3 block rounded-lg px-3 py-2 pl-6 text-sm leading-7 text-gray-300 hover:bg-gray-800 w-full text-left"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="py-6">
                <button
                  onClick={() => handleNavigation("/form")}
                  className="w-full text-sm font-semibold leading-6 text-gray-900 bg-yellow-500 px-4 py-2 rounded-md hover:bg-yellow-400 transition-colors"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
