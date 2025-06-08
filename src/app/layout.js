import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SharedLayout from "@/components/SharedLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Veerpath Defence Academy",
  description: "Premier Coaching for Navodaya & Sainik School Entrance Exams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        <SharedLayout>{children}</SharedLayout>
      </body>
    </html>
  );
}
