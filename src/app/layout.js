import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import ConditionalLayout from "@/components/ConditionalLayout";
import PropTypes from "prop-types";
import Script from "next/script";
import Head from "next/head"; // ✅ Import Head

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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <Head>
        {/* Title & Meta Tags */}
        <title>
          JNV & Sainik School Entrance Exam 2025 - Apply Online, Dates, Syllabus, Preparation
        </title>
        <meta
          name="description"
          content="Get complete details about JNV & Sainik School Entrance Exam 2025, including application process, dates, syllabus, exam pattern, preparation tips, and more."
        />
        <meta
          name="keywords"
          content="JNV entrance exam, Sainik school entrance exam, JNVST application, AISSEE exam dates, JNVST syllabus, Sainik school preparation, JNV admission, Sainik school entrance tips"
        />

        {/* Open Graph */}
        <meta property="og:title" content="JNV & Sainik School Entrance Exam 2025 - Apply Online, Dates, Syllabus, Preparation" />
        <meta property="og:description" content="Get complete details about JNV & Sainik School Entrance Exam 2025, including application process, dates, syllabus, exam pattern, preparation tips, and more." />
        <meta property="og:image" content="URL_to_image.jpg" />
        <meta property="og:url" content="https://your-website-url.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JNV & Sainik School Entrance Exam 2025 - Apply Online, Dates, Syllabus, Preparation" />
        <meta name="twitter:description" content="Get complete details about JNV & Sainik School Entrance Exam 2025, including application process, dates, syllabus, exam pattern, preparation tips, and more." />
        <meta name="twitter:image" content="URL_to_image.jpg" />

        {/* Canonical & Robots */}
        <link rel="canonical" href="https://your-website-url.com" />
        <meta name="robots" content="index, follow" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Website",
              name: "JNV & Sainik School Entrance Exam 2025",
              url: "https://your-website-url.com",
              description:
                "Get complete details about JNV & Sainik School Entrance Exam 2025, including application process, dates, syllabus, exam pattern, preparation tips, and more.",
            }),
          }}
        />
      </Head>

      {/* Google Tag Manager */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17185201352"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17185201352');
        `}
      </Script>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <AuthProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AuthProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
