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
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WPM23SJP');`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPM23SJP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

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
