// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { AuthProvider } from "@/contexts/AuthContext";
// import ConditionalLayout from "@/components/ConditionalLayout";
// import PropTypes from "prop-types";
// import Script from "next/script";
// // import Head from "next/head"; // ✅ Import Head

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Veerpath Academy(VDA) ",
//   description: "Affordable, reliable education designed for real results.Learn smarter, score higher, and unlock your true potential.विश्वास और अनुशासन से सफलता",
// };

// export const viewport = {
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 1,
//   userScalable: false,
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className="h-full bg-white">
//       <Head>
//         {/* Title & Meta Tags */}
//         <title>
//           Veerpath Academy(VDA) - JNV & Sainik School Entrance Exam Coaching 2025
//         </title>
//         <meta
//           name="description"
//           content="Veerpath Academy(VDA) offers expert coaching for JNV & Sainik School entrance exams 2025. Get complete guidance on application, syllabus, exam pattern, and preparation strategies."
//         />
//         <meta
//           name="keywords"
//           content="Veerpath Academy, VDA, JNV entrance exam coaching, Sainik school entrance exam preparation, JNVST coaching, AISSEE preparation, Navodaya coaching, entrance exam guidance"
//         />

//         {/* Open Graph */}
//         <meta property="og:title" content="Veerpath Academy(VDA) - JNV & Sainik School Entrance Exam Coaching 2025" />
//         <meta property="og:description" content="Veerpath Academy(VDA) offers expert coaching for JNV & Sainik School entrance exams 2025. Get complete guidance on application, syllabus, exam pattern, and preparation strategies." />
//         <meta property="og:image" content="URL_to_image.jpg" />
//         <meta property="og:url" content="https://your-website-url.com" />
//         <meta property="og:type" content="website" />

//         {/* Twitter Card */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Veerpath Academy(VDA) - JNV & Sainik School Entrance Exam Coaching 2025" />
//         <meta name="twitter:description" content="Veerpath Academy(VDA) offers expert coaching for JNV & Sainik School entrance exams 2025. Get complete guidance on application, syllabus, exam pattern, and preparation strategies." />
//         <meta name="twitter:image" content="URL_to_image.jpg" />

//         {/* Canonical & Robots */}
//         <link rel="canonical" href="https://your-website-url.com" />
//         <meta name="robots" content="index, follow" />

//         {/* JSON-LD Structured Data */}
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "http://schema.org",
//               "@type": "Website",
//               name: "Veerpath Academy(VDA) - JNV & Sainik School Entrance Exam Coaching",
//               url: "https://your-website-url.com",
//               description:
//                 "Veerpath Academy(VDA) offers expert coaching for JNV & Sainik School entrance exams 2025. Get complete guidance on application, syllabus, exam pattern, and preparation strategies.",
//             }),
//           }}
//         />
//       </Head>

//       {/* Google Tag Manager */}
//       <Script
//         src="https://www.googletagmanager.com/gtag/js?id=AW-17185201352"
//         strategy="afterInteractive"
//       />
//       <Script id="gtag-init" strategy="afterInteractive">
//         {`
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', 'AW-17185201352');
//         `}
//       </Script>

//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
//         <AuthProvider>
//           <ConditionalLayout>{children}</ConditionalLayout>
//         </AuthProvider>
//       </body>
//     </html>
//   );
// }

// RootLayout.propTypes = {
//   children: PropTypes.node.isRequired,
// };

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";
import ConditionalLayout from "@/components/ConditionalLayout";
import PropTypes from "prop-types";
import Script from "next/script";

/* Fonts */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* SEO Metadata (ONLY SOURCE OF TRUTH) */
export const metadata = {
  title: "Veerpath Academy (VDA) – JNV & Sainik School Coaching",
  description:
    "Veerpath Academy (VDA) offers expert coaching for JNV & Sainik School entrance exams 2025. Affordable, reliable education designed for real results.",

  verification: {
    google: "rBZai-EtwW8z9lnNse-l3ajctGODPo_E4Tki7h1LA3Q",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  keywords: [
    "Veerpath Academy",
    "VDA",
    "JNV coaching",
    "Sainik School coaching",
    "AISSEE preparation",
    "Navodaya entrance coaching",
  ],

  openGraph: {
    title: "Veerpath Academy (VDA) – JNV & Sainik School Coaching",
    description:
      "Expert coaching for JNV & Sainik School entrance exams 2025 with proven results.",
    url: "https://www.veerpath.com",
    siteName: "Veerpath Academy",
    images: [
      {
        url: "https://veerpath.com/images/logo.png",
        width: 300,
        height: 300,
        alt: "Veerpath Academy Logo",
      },
    ],
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};


/* Viewport */
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

/* Root Layout */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {/* ✅ EducationalOrganization Schema (Google Highlight Images Source) */}
        <Script
          id="schema-educational-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Veerpath Academy",
              url: "https://www.veerpath.com",
              logo: {
                "@type": "ImageObject",
                url: "https://veerpath.com/images/logo.png",
                width: 300,
                height: 300,
              },

              image: "https://veerpath.com/images/logo.png",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "H.N.-832, Hydel Colony ke Samne, Namakneshwar Wali Gali",
                addressLocality: "Bulandshahr",
                addressRegion: "UP",
                postalCode: "203001",
                addressCountry: "IN",
              },
              telephone: "+91-9897841033",
              sameAs: [
                "https://www.facebook.com/veerpathacademy",
                "https://www.instagram.com/veerpathacademy",
              ],
            }),
          }}
        />

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

        {/* App Providers */}
        <AuthProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AuthProvider>
      </body>
    </html>
  );
}

/* PropTypes */
RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
