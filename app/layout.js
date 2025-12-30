import "./globals.css";
import Footer from "@/components/Layout/Footer";
import ContextProvider from "@/components/ContextProvider";
import {
  Nunito_Sans,
  Inter,
  Poppins,
  Nova_Square,
  Onest,
  Mochiy_Pop_P_One,
} from "next/font/google";

/* =======================
   Fonts
======================= */

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  variable: "--font-nunito-sans",
});

const mochy = Mochiy_Pop_P_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mochy",
});

const onest = Onest({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  variable: "--font-onest",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  variable: "--font-poppins",
});

const nova = Nova_Square({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-nova-square",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  variable: "--font-inter",
});

/* =======================
   SEO METADATA
======================= */

export const metadata = {
  metadataBase: new URL("https://szaib.dev"),

  title: {
    default: "Shahzaib Mirza | Software Engineer & Web Developer",
    template: "%s | Shahzaib Mirza",
  },

  description:
    "Official portfolio of Shahzaib Mirza, a Software Engineer and Web Developer specializing in Next.js, React, SEO-optimized websites, and modern full-stack development.",

  keywords: [
    "Shahzaib Mirza",
    "Shahzaib Mirza Software Engineer",
    "Shahzaib Mirza Web Developer",
    "Next.js Developer",
    "React Developer",
    "Full Stack Developer",
    "Portfolio Shahzaib Mirza",
  ],

  authors: [{ name: "Shahzaib Mirza", url: "https://szaib.dev" }],
  creator: "Shahzaib Mirza",
  publisher: "Shahzaib Mirza",

  alternates: {
    canonical: "https://szaib.dev",
  },
  verification: {
    google: "7I1oz1wJX5kIlBMoUyZogdD782ayb7Sp3mxqcFeP9jg"
  },

  openGraph: {
    title: "Shahzaib Mirza | Software Engineer & Web Developer",
    description:
      "Portfolio of Shahzaib Mirza – Software Engineer & Web Developer specializing in Next.js, React, and SEO-driven applications.",
    url: "https://szaib.dev",
    siteName: "Shahzaib Mirza",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shahzaib Mirza Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Shahzaib Mirza | Software Engineer",
    description:
      "Official portfolio of Shahzaib Mirza, Software Engineer & Web Developer.",
    images: ["/og-image.jpg"],
  },
};

/* =======================
   ROOT LAYOUT
======================= */

export default function RootLayout({ children }) {
  return (
      <html
        lang="en"
        className={`${nunitoSans.variable} ${mochy.variable} ${inter.variable} ${poppins.variable} ${nova.variable} ${onest.variable}`}
      >
        <ContextProvider>

        <body className={nunitoSans.className}>
          {children}
          <Footer />

          {/* ===== STRUCTURED DATA (PERSON ENTITY) ===== */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Shahzaib Mirza",
                url: "https://szaib.dev",
                image: "https://szaib.dev/og-image.jpg",
                jobTitle: "Software Engineer",
                sameAs: [
                  "https://www.linkedin.com/in/szaib-dev",
                  "https://github.com/szbr1",
                  "https://www.upwork.com/freelancers/~01f111c45d418698af"
                ],
              }),
            }}
            />
        </body>
            </ContextProvider>
      </html>
  );
}



