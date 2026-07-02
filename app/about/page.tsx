import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rapid Plumbing - Trusted London Plumbers",
  description: "Learn about Rapid Plumbing: London's trusted emergency plumbing service with 15+ years experience, Gas Safe registered, and 5-star customer ratings.",
  keywords: "about rapid plumbing, london plumbers company, emergency plumbing london, plumbing company london, rapid plumbing team",
  openGraph: {
    title: "About Rapid Plumbing - London's Trusted Plumbers",
    description: "Discover our story, values, and commitment to excellence in London plumbing services.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <section className="relative py-24 md:py-36 bg-slate-900 overflow-hidden" aria-labelledby="about-hero-heading">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-linear-to-t from-white to-transparent"></div>
          
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6" role="status" aria-label="Available 24/7">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" aria-hidden="true"></span>
            Available 24/7
          </span>
          <h1 id="about-hero-heading" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            About Rapid Plumbing
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            London&apos;s trusted emergency plumbing service with 15+ years of experience serving homes and businesses across all London boroughs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Our Story
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Founded in 2009 by master plumber James Thompson, Rapid Plumbing began as a small family-run operation with a single van and a commitment to providing honest, reliable plumbing services to London residents. What started as a passion for solving plumbing problems has grown into London&apos;s most trusted emergency plumbing service.
                </p>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Over the past 15 years, we&apos;ve expanded our team to include over 50 Gas Safe registered plumbers while maintaining our core values of integrity, transparency, and exceptional customer service. Today, we serve thousands of London homes and businesses each year, providing everything from emergency repairs to complete bathroom installations.
                </p>
              </div>
            </div>
            <div className="lg:col-span-4 space-y-6">
              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-slate-50 rounded-xl p-5">
                  <div className="text-3xl font-bold text-amber-600">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <div className="text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-sm text-slate-600">Certified Plumbers</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <div className="text-3xl font-bold text-amber-600">5000+</div>
                  <div className="text-sm text-slate-600">Projects Completed</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <div className="text-3xl font-bold text-amber-700">4.9/5</div>
                  <div className="text-sm text-slate-700">Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Values
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              What Drives Us
            </h2>
            <p className="text-gray-600">
              Our values guide every aspect of our service, from emergency responses to routine maintenance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Reliability */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Reliability</h3>
                  <p className="text-slate-600 text-sm">We arrive on time, every time, ready to solve your plumbing issues efficiently and effectively.</p>
                </div>
              </div>
            </div>
            
            {/* Transparency */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Transparency</h3>
                  <p className="text-slate-600 text-sm">We provide clear, upfront pricing with no hidden fees. You&apos;ll know exactly what to expect before we begin any work.</p>
                </div>
              </div>
            </div>
            
            {/* Quality */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Quality</h3>
                  <p className="text-slate-600 text-sm">We use only the highest quality materials and stand behind our work with guarantees on all services performed.</p>
                </div>
              </div>
            </div>
            
            
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Customer Focus</h3>
                  <p className="text-slate-600 text-sm">Your satisfaction is our priority. We listen to your needs and provide personalized solutions for every situation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Meet Our Team
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              London&apos;s Finest Plumbers
            </h2>
            <p className="text-gray-600">
              Our team consists of highly skilled, Gas Safe registered professionals dedicated to excellence in every job.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80"
                  alt="Master Plumber James Thompson"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                  Founder
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">James Thompson</h3>
              <p className="text-slate-600 mb-4">Master Plumber & Founder</p>
              <p className="text-slate-500 text-sm">
                With over 25 years of experience, James founded Rapid Plumbing in 2009 with a vision to provide reliable, honest plumbing services to London residents.
              </p>
            </div>
            
            
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80"
                  alt="Senior Plumber Sarah Chen"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs px-2 py-1 rounded-full">
                  Senior Plumber
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sarah Chen</h3>
              <p className="text-slate-600 mb-4">Senior Emergency Plumber</p>
              <p className="text-slate-500 text-sm">
                Sarah leads our emergency response team with 12 years of experience handling complex plumbing crises across London.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-2xl p-6 text-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80"
                  alt="Lead Installer Mike Roberts"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-600 text-white text-xs px-2 py-1 rounded-full">
                  Lead Installer
                </div>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Mike Roberts</h3>
              <p className="text-slate-600 mb-4">Lead Bathroom Installation Specialist</p>
              <p className="text-slate-500 text-sm">
                Mike specializes in bathroom transformations, bringing 10 years of expertise in modern bathroom design and installation.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-slate-600">
              Our team of over 50 Gas Safe registered plumbers undergoes continuous training to stay current with the latest techniques and regulations.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">
              Our Service Area
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Serving All of London
            </h2>
            <p className="text-gray-600">
              We proudly serve residential and commercial clients across all London boroughs and surrounding areas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-3">North London</h3>
              <p className="text-slate-600 text-sm">
                Camden, Islington, Hackney, Haringey, Enfield, Barnet, Brent, Kensington & Chelsea, Westminster
              </p>
            </div>
            
            {/* South London */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-3">South London</h3>
              <p className="text-slate-600 text-sm">
                Southwark, Lambeth, Lewisham, Greenwich, Bexley, Bromley, Croydon, Sutton, Merton, Kingston upon Thames, Richmond upon Thames
              </p>
            </div>
            
            {/* East London */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-3">East London</h3>
              <p className="text-slate-600 text-sm">
                Tower Hamlets, Newham, Waltham Forest, Redbridge, Havering, Barking & Dagenham
              </p>
            </div>
            
            {/* West London & Central */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-gray-900 mb-3">West & Central London</h3>
              <p className="text-slate-600 text-sm">
                Hammersmith & Fulham, Ealing, Hounslow, Hillingdon, City of London, plus central areas including Mayfair, Soho, Covent Garden
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block inline-block">
                Our Commitment
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white" style={{fontFamily: 'Playfair Display, serif'}}>
                Excellence in Every Service
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">24/7 Emergency Response</h3>
                <p className="text-slate-300">
                  When disaster strikes, we&apos;re here. Our emergency team responds within 30 minutes to burst pipes, major leaks, and flooding emergencies across London.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Quality Guarantee</h3>
                <p className="text-slate-300">
                  We stand behind our work with comprehensive guarantees on all repairs and installations. Your satisfaction is our priority.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Transparent Pricing</h3>
                <p className="text-slate-300">
                  No hidden fees or surprise charges. We provide clear, upfront pricing before any work begins so you know exactly what to expect.
                </p>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white mb-4">Eco-Friendly Practices</h3>
                <p className="text-slate-300">
                  We&apos;re committed to sustainable plumbing solutions that conserve water and reduce environmental impact while maintaining the highest standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Ready for Reliable Plumbing Service?</h2>
              <p className="text-gray-300">Contact London&apos;s most trusted plumbers today</p>
            </div>
            <a href="/contact" className="btn btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 animate-pulse-glow">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}