import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rapid Plumbing - Professional Plumbers London | 24/7 Emergency Service",
  description: "Expert plumbing services in London. Emergency plumbing, leak repair, drain cleaning & installations. Gas Safe registered. Free quotes. Call 020 7946 0123.",
  keywords: "plumbers London, emergency plumber, leak repair London, drain cleaning, plumbing installation, Gas Safe registered",
  openGraph: {
    title: "Rapid Plumbing - London's Trusted Plumbers",
    description: "24/7 emergency plumbing services across London. Professional, reliable, and affordable. Get a free quote today.",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rapid Plumbing - Professional Plumbing Services London"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rapid Plumbing - Professional Plumbers London",
    description: "24/7 emergency plumbing services across London. Professional, reliable, and affordable.",
  }
};
export default function Page() {
  return (
    <main>
      {/* ============================================
         HERO SECTION - Premium Dark Theme
         ============================================ */}
      <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden bg-primary-dark">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Clean background for hero section */}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8 animate-fade-in-up" role="status" aria-label="Emergency service availability">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-sm font-medium">24/7 Emergency Service Available</span>
              </div>
              
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up delay-100" style={{fontFamily: 'Playfair Display, serif'}}>
                Expert Plumbing.{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-yellow-500">London's Trusted.</span>
              </h1>
              
              {/* Subheadline */}
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed animate-fade-in-up delay-200">
                From emergency repairs to installations, we deliver quality workmanship you can trust. Fast response times, transparent pricing, and guaranteed satisfaction.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up delay-300">
                <Link href="/contact" className="btn btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 text-center sm:text-left" aria-label="Get a free plumbing quote">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Request a Quote
                </Link>
                <a href="tel:02079460123" className="btn btn-ghost text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 border border-white/20 text-center sm:text-left" aria-label="Call Rapid Plumbing for emergency service">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now: 020 7946 0123
                </a>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-white/10 animate-fade-in-up delay-400">
                <p className="text-sm text-gray-400 mb-4">Trusted by homeowners across London</p>
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1,2,3,4,5].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-linear-to-br from-gray-300 to-gray-400 border-2 border-primary-dark flex items-center justify-center text-xs font-bold text-gray-900">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-sm font-medium">5000+ Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Floating Stats Cards */}
            <div className="hidden lg:block lg:col-span-6 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main Stats Card */}
                <div className="absolute top-1/4 right-0 md:right-4 lg:right-4 glass-dark rounded-2xl p-6 w-48 animate-float">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300">Response Time</span>
                  </div>
                  <div className="text-3xl font-bold text-white">30<span className="text-lg text-gray-400">min</span></div>
                  <p className="text-xs text-gray-400 mt-1">Average arrival time</p>
                </div>
                
                {/* Second Stats Card */}
                <div className="absolute top-1/3 left-0 md:left-4 lg:left-4 glass-dark rounded-2xl p-6 w-44 animate-float" style={{animationDelay: '0.5s'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300">Experience</span>
                  </div>
                  <div className="text-3xl font-bold text-white">15+ <span className="text-lg text-gray-400">years</span></div>
                  <p className="text-xs text-gray-400 mt-1">Industry expertise</p>
                </div>
                
                {/* Third Stats Card */}
                <div className="absolute bottom-1/4 right-0 md:right-4 lg:right-4 glass-dark rounded-2xl p-6 w-52 animate-float" style={{animationDelay: '1s'}}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-300">Guarantee</span>
                  </div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <p className="text-xs text-gray-400 mt-1">Satisfaction guaranteed on all work</p>
                </div>
                
                {/* Main Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-linear-to-br from-accent to-yellow-600 flex items-center justify-center shadow-2xl">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 wave-divider">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-32">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafafa"/>
          </svg>
        </div>
      </section>

      {/* Emergency CTA Banner - Sticky */}
      <div id="emergency-banner" className="fixed top-0 left-0 right-0 z-40 bg-red-600 text-white py-2 px-4 transform -translate-y-full transition-transform duration-300 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span className="font-semibold">Plumbing Emergency?</span>
            <span className="hidden sm:inline">We respond within 30 minutes</span>
          </div>
          <a href="tel:02079460123" className="bg-white text-red-600 px-4 py-1 rounded-full font-bold hover:bg-gray-100 transition-colors" aria-label="Call for emergency plumbing service">
            020 7946 0123
          </a>
        </div>
      </div>

      {/* ============================================
         INTRODUCTION SECTION - Editorial Style
         ============================================ */}
      <section className="py-20 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <div className="lg:col-span-5 relative">
              <div className="relative">
                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                    alt="Professional plumber at work"
                    className="w-full h-80 md:h-96 lg:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-4 md:right-8 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 animate-fade-in-up delay-300">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Gas Safe</p>
                    <p className="text-sm text-gray-500">Registered</p>
                  </div>
                </div>
                
                {/* Experience Badge */}
                <div className="absolute -top-4 -left-4 bg-accent text-white rounded-xl shadow-xl p-4 animate-fade-in-up delay-200">
                  <p className="text-2xl font-bold">15+</p>
                  <p className="text-xs opacity-90">Years Experience</p>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="lg:col-span-7">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">About Us</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
                Your Trusted <span className="text-accent">London Plumbers</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
                At Rapid Plumbing, we understand that plumbing issues can occur at any time. That's why we offer prompt, professional services across London. Whether it's a leaking pipe, blocked drain, or a new water heater installation, our experienced team is ready to help.
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
                We pride ourselves on transparent pricing, quality workmanship, and excellent customer service. All our plumbers are fully licensed and insured, giving you peace of mind with every job we undertake.
              </p>
              
              {/* Trust Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  {icon: "✓", text: "Fully Licensed & Insured", color: "bg-green-50"},
                  {icon: "✓", text: "Transparent Pricing", color: "bg-blue-50"},
                  {icon: "✓", text: "Quality Guaranteed", color: "bg-purple-50"},
                  {icon: "✓", text: "24/7 Emergency Service", color: "bg-red-50"},
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${item.color}`}>
                    <span className="text-green-600 font-bold">{item.icon}</span>
                    <span className="text-gray-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <Link href="/contact" className="btn btn-primary">
                Get a Free Quote
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         SERVICES SECTION - Modern Card Design
         ============================================ */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              Our Plumbing Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Comprehensive plumbing solutions for homes and businesses across London. From emergency repairs to installations, we handle it all.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Service Card 1 - Featured */}
            <div className="service-card group">
              <div className="relative h-64 md:h-72 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80"
                  alt="Emergency plumbing"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    24/7 Available
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Emergency Plumbing</h3>
                <p className="text-gray-600 mb-4">
                  Available 24/7 for any plumbing emergency. Our rapid response team arrives quickly to fix burst pipes, major leaks, and other urgent issues.
                </p>
                <Link href="/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-1 group/link">
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="service-card group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&q=80"
                  alt="Leak repair"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Leak Repair</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Fast and effective leak detection and repair. From dripping taps to hidden pipe leaks.
                </p>
                <Link href="/services" className="text-accent font-medium hover:text-accent-dark inline-flex items-center gap-1">
                  <span className="text-sm">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="service-card group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
                  alt="Drain cleaning"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Drain Cleaning</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Professional drain unblocking and cleaning using advanced equipment.
                </p>
                <Link href="/services" className="text-accent font-medium hover:text-accent-dark inline-flex items-center gap-1">
                  <span className="text-sm">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 4 */}
            <div className="service-card group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                  alt="Water heater"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Water Heaters</h3>
                <p className="text-gray-600 text-sm mb-3">
                  Installation and repair of all types of water heaters and boilers.
                </p>
                <Link href="/services" className="text-accent font-medium hover:text-accent-dark inline-flex items-center gap-1">
                  <span className="text-sm">Learn more</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Service Card 5 */}
            <div className="service-card group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80"
                  alt="Bathroom plumbing"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>
              </div>
              <div className="p-6 md:p-8">
                <div className="w-14 h-14 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bathroom Plumbing</h3>
                <p className="text-gray-600 mb-4">
                  Complete bathroom installations, renovations, and fixture replacements. From toilets to showers, we do it all.
                </p>
                <Link href="/services" className="text-accent font-semibold hover:text-accent-dark inline-flex items-center gap-1 group/link">
                  Learn more
                  <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* View All CTA */}
          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-secondary text-lg px-8 py-4">
              View All Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================
         HOW WE WORK - Process Section
         ============================================ */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Our Process</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              How <span className="text-accent">We Work</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Getting your plumbing fixed has never been easier. Our simple process ensures quality service every time.
            </p>
          </div>
          
          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Call Us",
                description: "Contact us to discuss your plumbing needs"
              },
              {
                step: "02",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                ),
                title: "Get a Quote",
                description: "We provide upfront pricing with no hidden fees"
              },
              {
                step: "03",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
                title: "We Arrive",
                description: "Our plumber arrives on time, fully equipped"
              },
              {
                step: "04",
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Problem Solved",
                description: "Quality work guaranteed with your satisfaction"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                {/* Step Number */}
                <div className="absolute -top-4 -left-2 text-6xl font-bold text-gray-100 opacity-50 group-hover:text-accent/20 transition-colors duration-500">
                  {item.step}
                </div>
                <div className="relative bg-gray-50 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200">
                    <div className="absolute inset-0 bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         WHY CHOOSE US - Dark Section
         ============================================ */}
      <section className="py-20 md:py-32 bg-primary-dark relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              The <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-yellow-500">Rapid</span> Difference
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              We're committed to providing the best plumbing services in London. Here's why thousands of customers trust us.
            </p>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "24/7 Service",
                description: "Round-the-clock emergency plumbing services. We're always available when you need us most.",
                color: "bg-accent"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Licensed & Insured",
                description: "Fully qualified plumbers with all necessary certifications and full insurance coverage.",
                color: "bg-green-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Fast Response",
                description: "Quick arrival times across London. We aim to be with you within 30 minutes.",
                color: "bg-yellow-500"
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Transparent Pricing",
                description: "No hidden fees. We provide upfront pricing before any work begins.",
                color: "bg-blue-500"
              }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         TESTIMONIALS - Modern Carousel Style
         ============================================ */}
      <section className="py-20 md:py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Testimonials</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
              What Our Customers Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Don't just take our word for it — here's what our satisfied customers have to say about our services.
            </p>
            {/* Verified Reviews Badge */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-green-800">Verified Reviews</span>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-sm font-semibold text-gray-700 ml-1">4.9/5</span>
              </div>
              <span className="text-sm text-gray-500">from 500+ reviews</span>
            </div>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "John Davis",
                location: "Camden, London",
                initials: "JD",
                text: "Rapid Plumbing saved the day! They arrived within 30 minutes when my pipe burst. Professional, efficient, and reasonably priced. Highly recommend!",
                rating: 5
              },
              {
                name: "Sarah Mitchell",
                location: "Islington, London",
                initials: "SM",
                text: "Excellent service from start to finish. The team was friendly, knowledgeable, and completed the work to a high standard. Will definitely use again.",
                rating: 5
              },
              {
                name: "Robert Williams",
                location: "Southwark, London",
                initials: "RW",
                text: "Had a blocked drain that other companies couldn't fix. Rapid Plumbing sorted it out quickly. Great service and fair pricing. Thank you!",
                rating: 5
              },
              {
                name: "Emma Thompson",
                location: "Kensington, London",
                initials: "ET",
                text: "Had a major leak under my kitchen floor. They found it quickly using their detection equipment and fixed it the same day. Very impressed with the technology they use!",
                rating: 5
              },
              {
                name: "Michael Chen",
                location: "Chelsea, London",
                initials: "MC",
                text: "Needed a new boiler installed. The team gave me a competitive quote and completed the job in one day. Very professional and clean work. Highly recommended!",
                rating: 5
              },
              {
                name: "Sophie Anderson",
                location: "Westminster, London",
                initials: "SA",
                text: "Great experience from start to finish. Transparent pricing, arrived on time, and the plumber was very knowledgeable. Will use them for all future plumbing needs.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="testimonial-card group">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-6xl text-gray-200 font-serif opacity-50">"</div>
                
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Quote Text */}
                <p className="text-gray-600 mb-6 relative z-10">
                  {testimonial.text}
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-linear-to-br from-accent to-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         CTA SECTION - Final Call to Action
         ============================================ */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary-dark to-gray-900"></div>
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Decorative Elements - Removed per user request */}

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Ready to Fix Your Plumbing Issues?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-2xl mx-auto">
            Get in touch with us today for a free quote. Our team is ready to help with all your plumbing needs across London.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-5">
              Request a Free Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a href="tel:02079460123" className="btn btn-outline text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 020 7946 0123
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Banner Script */}
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          const banner = document.getElementById('emergency-banner');
          let lastScrollY = window.scrollY;
          
          function updateBanner() {
            const currentScrollY = window.scrollY;
            const shouldShow = currentScrollY > 300;
            
            if (shouldShow) {
              banner.style.transform = 'translateY(0)';
            } else {
              banner.style.transform = 'translateY(-100%)';
            }
            
            lastScrollY = currentScrollY;
          }
          
          // Throttle scroll events
          let ticking = false;
          window.addEventListener('scroll', function() {
            if (!ticking) {
              requestAnimationFrame(function() {
                updateBanner();
                ticking = false;
              });
              ticking = true;
            }
          });
          
          // Initial check
          updateBanner();
        })();
      `}} />
    </main>
  );
}
