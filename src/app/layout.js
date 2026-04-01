import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  metadataBase: new URL("https://codecyclon.vercel.app"),
  title: {
    default: "Codecyclon | Web & App Development Agency India",
    template: "%s | Codecyclon",
  },
  description: "India's modern web & app development agency. Custom websites, mobile apps, e-commerce, SEO, marketing & maintenance. 35+ projects delivered. Get a free quote today.",
  keywords: [
    "web development agency india", "website development company",
    "mobile app development india", "custom website design",
    "ecommerce development", "SEO services india",
    "Next.js development", "React development",
    "freelance web developer india", "digital marketing agency",
    "website maintenance services", "landing page design",
  ],
  authors: [{ name: "Codecyclon", url: "https://codecyclon.vercel.app" }],
  creator: "Codecyclon",
  publisher: "Codecyclon",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://codecyclon.vercel.app" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://codecyclon.vercel.app",
    siteName: "Codecyclon",
    title: "Codecyclon | Web & App Development Agency India",
    description: "Custom websites, mobile apps, e-commerce, SEO & marketing. 35+ projects delivered with 100% client satisfaction.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Codecyclon — Web & App Development Agency" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codecyclon | Web & App Development Agency India",
    description: "Custom websites, mobile apps, e-commerce, SEO & marketing. 35+ projects delivered.",
    images: ["/og-image.png"],
  },
  verification: {
    // google: "your-google-verification-code",
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Codecyclon",
  "url": "https://codecyclon.vercel.app",
  "logo": "https://codecyclon.vercel.app/logo.png",
  "description": "Full-service web & app development agency offering custom websites, mobile apps, e-commerce, SEO, marketing, and maintenance services.",
  "email": "codecyclon@gmail.com",
  "telephone": "+91-9520535135",
  "address": { "@type": "PostalAddress", "addressCountry": "IN" },
  "priceRange": "₹₹",
  "areaServed": { "@type": "Country", "name": "India" },
  "serviceType": ["Web Development", "App Development", "E-commerce", "SEO", "Digital Marketing", "Website Maintenance"],
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "35", "bestRating": "5" },
  "sameAs": ["https://github.com/harshvortex"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ paddingTop: '64px', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <ThemeProvider>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
