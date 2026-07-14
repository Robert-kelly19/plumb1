import type { Metadata } from "next";
import Link from "next/link";
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL("https://rapidplumbing.co.uk"),
  title: "Rapid Plumbing - Expert Plumbing Services London | 24/7 Emergency",
  description: "Professional plumbing services in London. Emergency plumbing, leak detection, drain cleaning, water heater installation & bathroom plumbing. Gas Safe registered. Free quotes. Call 020 7946 0123.",
  keywords: "plumbers London, emergency plumber London, leak detection London, drain cleaning London, water heater installation, bathroom plumbing, Gas Safe registered plumbers",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },
  verification: {
    google: "your-google-verification-code",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://rapidplumbing.co.uk",
    siteName: "Rapid Plumbing",
    title: "Rapid Plumbing - Expert Plumbing Services London | 24/7 Emergency",
    description: "Professional plumbing services in London. Emergency plumbing, leak detection, drain cleaning, water heater installation & bathroom plumbing. Gas Safe registered. Free quotes.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rapid Plumbing - Expert Plumbing Services London"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Plumbing - Expert Plumbing Services London | 24/7 Emergency",
    description: "Professional plumbing services in London. Emergency plumbing, leak detection, drain cleaning, water heater installation & bathroom plumbing. Gas Safe registered.",
    creator: "@rapidplumbing",
    images: ["/og-image.png"]
  },
  alternates: {
    canonical: "https://rapidplumbing.co.uk"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Plumber",
                "name": "Rapid Plumbing",
                "description": "Expert plumbing services in London including emergency repairs, leak detection, drain cleaning, water heater installation, bathroom plumbing, and boiler services. Gas Safe registered with 15+ years experience.",
                "url": "https://rapidplumbing.co.uk",
                "telephone": "+44-20-7946-0123",
                "email": "info@rapidplumbing.co.uk",
                "logo": "https://rapidplumbing.co.uk/logo.png",
                "sameAs": [
                  "https://www.facebook.com/rapidplumbinglondon",
                  "https://twitter.com/rapidplumbing",
                  "https://www.instagram.com/rapidplumbinglondon"
                ],
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "123 Plumber Street",
                  "addressLocality": "London",
                  "postalCode": "EC1A 1AA",
                  "addressCountry": "GB"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "51.5074",
                  "longitude": "-0.1278"
                },
                "areaServed": [
                  "City of London",
                  "Camden",
                  "Islington",
                  "Hackney",
                  "Tower Hamlets",
                  "Southwark",
                  "Lambeth",
                  "Westminster",
                  "Kensington and Chelsea",
                  "Hammersmith and Fulham",
                  "Wandsworth",
                  "Haringey",
                  "Enfield",
                  "Waltham Forest",
                  "Redbridge",
                  "Barking and Dagenham",
                  "Havering",
                  "Newham",
                  "Bexley",
                  "Bromley",
                  "Croydon",
                  "Sutton",
                  "Kingston upon Thames",
                  "Merton",
                  "Richmond upon Thames",
                  "Hounslow",
                  "Ealing",
                  "Brent",
                  "Harrow",
                  "Barnet"
                ],
                "serviceType": [
                  "Emergency Plumbing",
                  "Leak Detection and Repair",
                  "Drain Cleaning and Unblocking",
                  "Pipe Repair and Replacement",
                  "Water Heater Installation and Repair",
                  "Boiler Installation and Repair",
                  "Bathroom Plumbing and Installation",
                  "Kitchen Plumbing",
                  "Gas Safety Certificates",
                  "Pipe Insulation",
                  "Water Pressure Regulation",
                  "Fixture Installation"
                ],
                "priceRange": "££",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "08:00",
                    "closes": "18:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Saturday",
                    "opens": "09:00",
                    "closes": "16:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "8:00",
                    "closes": "20:00"
                  }
                ],
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "reviewCount": "5000",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "hasCredential": {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Gas Safe Register",
                  "credentialCategory": "license",
                  "recognizedBy": {
                    "@type": "Organization",
                    "name": "Gas Safe Register"
                  }
                },
                "founder": {
                  "@type": "Person",
                  "name": "John Smith"
                },
                "foundingDate": "2009",
                "employeeCount": "25",
                "funder": {
                  "@type": "Organization",
                  "name": "Rapid Plumbing Ltd"
                },
                "potentialAction": {
                  "@type": "ReserveAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://rapidplumbing.co.uk/contact",
                    "inLanguage": "en-GB"
                  },
                  "result": {
                    "@type": "Service",
                    "name": "Plumbing Service Appointment"
                  }
                }
              })
            }}
          />
      </head>
      <body className="antialiased font-body">
        
        <div className="bg-linear-to-r from-primary to-primary-dark text-white py-2 sm:py-2.5 px-4 sm:px-6 hidden md:block shadow-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center gap-4 sm:gap-8">
              <a href="tel:02079460123" className="flex items-center gap-2 hover:text-accent transition-all duration-300 group">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-mono tracking-wide">020 7946 0123</span>
              </a>
              <span className="hidden lg:flex items-center gap-2 text-white/90">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>24/7 Emergency Service</span>
              </span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Gas Safe Registered</span>
              </span>
            </div>
          </div>
        </div>

        
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-20 focus:left-4 focus:z-100 focus:bg-accent focus:text-white focus:px-6 focus:py-3 focus:rounded-xl focus:shadow-xl focus:font-semibold focus:text-sm focus:backdrop-blur-sm">
          Skip to main content
        </a>

        
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm transition-all duration-300" id="main-nav">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-18 sm:h-20 transition-all duration-300" id="nav-content">
              
              <div className="shrink-0">
                <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
                  <div className="w-9 h-9 sm:w-10 lg:w-11 bg-linear-to-br from-accent to-accent-light rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 ring-2 ring-white/20">
                    <svg className="w-5 h-5 sm:w-6 lg:w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <div className="hidden sm:block">
                    <span className="text-lg sm:text-xl font-bold text-primary">Rapid</span>
                    <span className="text-lg sm:text-xl font-bold text-accent">Plumbing</span>
                  </div>
                </Link>
              </div>
              
                
                <div className="hidden lg:flex items-center gap-1">
                  <Link href="/" className="nav-link px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 text-sm lg:text-base text-gray-700 font-medium hover:text-primary relative after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
                    Home
                  </Link>
                  <Link href="/services" className="nav-link px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 text-sm lg:text-base text-gray-700 font-medium hover:text-primary relative after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
                    Services
                  </Link>
                  <Link href="/about" className="nav-link px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 text-sm lg:text-base text-gray-700 font-medium hover:text-primary relative after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
                    About
                  </Link>
                  <Link href="/contact" className="nav-link px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-all duration-200 text-sm lg:text-base text-gray-700 font-medium hover:text-primary relative after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 after:transition-transform">
                    Contact
                  </Link>
                </div>

             
              <div className="hidden lg:block">
                <Link href="/contact" className="btn btn-primary text-sm py-2 px-4">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Get a Quote
                </Link>
              </div>

              
              <div className="lg:hidden flex items-center gap-2 sm:gap-3">
                <a href="tel:02079460123" className="w-9 h-9 sm:w-10 bg-primary/5 rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors">
                  <svg className="w-4 sm:w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <button className="w-9 h-9 sm:w-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary-light transition-colors" id="mobile-menu-btn">
                  <svg className="w-4 sm:w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

      
      
        <div className="mobile-menu" id="mobile-menu">
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold">
                <span className="text-primary">Rapid</span>
                <span className="text-accent">Plumbing</span>
              </span>
              <button id="close-menu-btn" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
</button>
            </div>
             <div className="space-y-2">
               <Link href="/" className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-lg font-medium text-gray-900 transition-colors mobile-nav-link">
                 Home
               </Link>
               <Link href="/services" className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-lg font-medium text-gray-900 transition-colors mobile-nav-link">
                 Services
               </Link>
               <Link href="/about" className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-lg font-medium text-gray-900 transition-colors mobile-nav-link">
                 About
               </Link>
               <Link href="/contact" className="block px-4 py-3 rounded-xl hover:bg-gray-50 text-lg font-medium text-gray-900 transition-colors mobile-nav-link">
                 Contact
               </Link>
             </div>
            <div className="mt-8 pt-8 border-t border-gray-100">
              <a href="tel:02079460123" className="flex items-center gap-3 text-gray-600 mb-4">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-mono">020 7946 0123</span>
              </a>
              <Link href="/contact" className="btn btn-primary w-full justify-center">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        
        {children}

        <footer className="footer">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
             
              <div className="lg:col-span-1">
                <Link href="/" className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-linear-to-br from-accent to-accent-light rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="text-xl font-bold text-white">Rapid Plumbing</span>
                </Link>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  Professional plumbing services in London. Available 24/7 for all your plumbing needs. Fast, reliable, and quality guaranteed.
                </p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

               
               <div>
                 <h2 className="footer-title text-lg">Quick Links</h2>
                 <ul className="space-y-3">
                   <li><Link href="/" className="footer-link flex items-center gap-2 group">
                     <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                     Home
                   </Link></li>
                   <li><Link href="/services" className="footer-link flex items-center gap-2 group">
                     <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                     Services
                   </Link></li>
                   <li><Link href="/about" className="footer-link flex items-center gap-2 group">
                     <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                     About Us
                   </Link></li>
                   <li><Link href="/contact" className="footer-link flex items-center gap-2 group">
                     <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                     Contact Us
                   </Link></li>
                 </ul>
               </div>

              
              <div>
                <h3 className="footer-title text-lg">Our Services</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="footer-link flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Emergency Plumbing
                  </a></li>
                  <li><a href="#" className="footer-link flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Leak Repair
                  </a></li>
                  <li><a href="#" className="footer-link flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Drain Cleaning
                  </a></li>
                  <li><a href="#" className="footer-link flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Boiler Installation
                  </a></li>
                </ul>
              </div>

              
              <div>
                <h3 className="footer-title text-lg">Contact Us</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-mono text-white">020 7946 0123</p>
                      <p className="text-sm text-gray-400">24/7 Emergency Line</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white">info@rapidplumbing.co.uk</p>
                      <p className="text-sm text-gray-600">We respond within 24hrs</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white">London & Surrounding Areas</p>
                      <p className="text-sm text-gray-400">All boroughs covered</p>
                    </div>
                  </li>
                </ul>
              </div>
</div>

            
            <div className="mt-10 sm:mt-12 bg-linear-to-r from-accent/20 to-transparent rounded-2xl p-5 sm:p-6 md:p-8 border border-accent/20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 md:w-14 bg-accent rounded-lg sm:rounded-xl flex items-center justify-center animate-pulse-glow">
                    <svg className="w-5 h-5 sm:w-6 md:w-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-base sm:text-lg">Plumbing Emergency?</h4>
                    <p className="text-gray-400 text-sm">We&apos;re available 24/7 for urgent plumbing issues</p>
                  </div>
                </div>
                <a href="tel:02079460123" className="btn btn-primary text-sm sm:text-base py-2 sm:py-3 px-4 sm:px-6 whitespace-nowrap">
                  <svg className="w-4 h-4 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>

           
            <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                &copy; {new Date().getFullYear()} Rapid Plumbing. All rights reserved.
              </p>
              <div className="flex items-center justify-center gap-4 sm:gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
              </div>
            </div>
          </div>
        </footer>

        
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            const menuBtn = document.getElementById('mobile-menu-btn');
            const closeBtn = document.getElementById('close-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const overlay = document.getElementById('mobile-overlay');
            
            function openMenu() {
              mobileMenu.style.transform = 'translateX(0)';
              overlay.style.opacity = '1';
              overlay.style.visibility = 'visible';
              document.body.style.overflow = 'hidden';
            }
            
            function closeMenu() {
              mobileMenu.style.transform = 'translateX(100%)';
              overlay.style.opacity = '0';
              overlay.style.visibility = 'hidden';
              document.body.style.overflow = '';
            }
            
            if (menuBtn) menuBtn.addEventListener('click', openMenu);
            if (closeBtn) closeBtn.addEventListener('click', closeMenu);
            if (overlay) overlay.addEventListener('click', closeMenu);
            
            document.querySelectorAll('.mobile-nav-link').forEach(link => {
              link.addEventListener('click', closeMenu);
            });
          })();
        `}} />

        
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            // Sticky Header Effect
            const nav = document.getElementById('main-nav');
            const navContent = document.getElementById('nav-content');
            
            function updateNav() {
              if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
                navContent.classList.add('h-16');
                navContent.classList.remove('h-20');
              } else {
                nav.classList.remove('shadow-lg');
                navContent.classList.remove('h-16');
                navContent.classList.add('h-20');
              }
            }
            
            window.addEventListener('scroll', updateNav, { passive: true });
            updateNav();

            // Scroll-triggered Animations using Intersection Observer
            const observerOptions = {
              root: null,
              rootMargin: '0px',
              threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('animate-in');
                  observer.unobserve(entry.target);
                }
              });
            }, observerOptions);

            document.querySelectorAll('.service-card, .glass-card, .testimonial-card, .glass-dark').forEach(el => {
              el.classList.add('opacity-0', 'translate-y-4');
              el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
              observer.observe(el);
            });

            // Add animation class styles
            const style = document.createElement('style');
            style.textContent = '
              .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
              }
            ';
            document.head.appendChild(style);
          })();
        `}} />
      </body>
    </html>
  );
}
