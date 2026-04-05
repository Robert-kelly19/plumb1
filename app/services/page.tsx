import Link from "next/link";

export const metadata = {
  title: "Our Services - Rapid Plumbing",
  description: "Comprehensive plumbing services in London including emergency plumbing, pipe repair, drain cleaning, water heater installation, and bathroom plumbing.",
};

const services = [
  {
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    title: "Emergency Plumbing",
    description: "When plumbing disasters strike, you need help fast. Our 24/7 emergency plumbing service ensures that a qualified plumber arrives at your location quickly, any time of day or night. We handle burst pipes, major leaks, overflowing toilets, and any urgent plumbing issue that can't wait.",
    features: [
      "24/7 availability - weekends and holidays",
      "Rapid 30-minute response time",
      "Fully equipped service vehicles",
      "Upfront pricing before work begins"
    ],
    color: "bg-red-500"
  },
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Pipe Repair & Replacement",
    description: "From minor leaks to complete pipe replacements, our expert plumbers have the skills and equipment to repair or replace any type of pipe in your property. We use modern techniques to minimise disruption and ensure long-lasting solutions.",
    features: [
      "Leak detection and repair",
      "Burst pipe emergency response",
      "Pipe relining services",
      "Complete re-piping for older properties"
    ],
    color: "bg-blue-500"
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    title: "Drain Cleaning",
    description: "Blocked drains are more than just inconvenient - they can cause serious damage if left untreated. Our professional drain cleaning services use advanced equipment to clear blockages quickly and effectively, preventing future problems.",
    features: [
      "CCTV drain inspections",
      "High-pressure water jetting",
      "Drain unblocking any severity",
      "Preventative maintenance plans"
    ],
    color: "bg-purple-500"
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Water Heater Installation",
    description: "Whether you need a new water heater installed or your existing one repaired, our experts can help. We work with all types of water heaters including tankless, combi, and traditional systems to ensure you have reliable hot water.",
    features: [
      "New boiler installation",
      "Water heater repairs",
      "System upgrades and replacements",
      "Energy-efficient options available"
    ],
    color: "bg-orange-500"
  },
  {
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: "Bathroom Plumbing",
    description: "From complete bathroom renovations to simple fixture replacements, we handle all aspects of bathroom plumbing. Our team can install new toilets, sinks, showers, baths, and bidets, ensuring everything works perfectly.",
    features: [
      "Complete bathroom installations",
      "Shower and bath replacements",
      "Toilet installation and repair",
      "Sink and tap installations"
    ],
    color: "bg-teal-500"
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Kitchen Plumbing",
    description: "From sink installations to dishwasher connections and garbage disposal services, we handle all kitchen plumbing needs. Our experts ensure your kitchen appliances are properly connected and functioning efficiently.",
    features: [
      "Sink and faucet installations",
      "Dishwasher fitting",
      "Garbage disposal services",
      "Appliance connections"
    ],
    color: "bg-indigo-500"
  },
  {
    image: "https://images.unsplash.com/photo-1631549916768-9d6f88300e1a?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3 3 0 1113.52 6.52l-.548.547" />
      </svg>
    ),
    title: "Gas Safety & Heating",
    description: "Your safety is our priority. Our Gas Safe registered engineers provide comprehensive gas heating services, including boiler servicing, gas safety certificates, and emergency gas leak response.",
    features: [
      "Gas Safe registered engineers",
      "Boiler servicing & repairs",
      "Gas safety certificates",
      "Emergency gas leak response"
    ],
    color: "bg-amber-500"
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Leak Detection",
    description: "Advanced leak detection technology to find hidden leaks without invasive digging. We use thermal imaging and acoustic sensors to locate leaks behind walls, under floors, and in hard-to-reach areas.",
    features: [
      "Non-invasive detection",
      "Thermal imaging technology",
      "Silent leak detection",
      " Moisture mapping"
    ],
    color: "bg-cyan-500"
  }
];

export default function ServicesPage() {
  return (
    <main id="main-content">
      {/* ============================================
         HERO SECTION
         ============================================ */}
      <section className="relative py-20 md:py-32 bg-primary-dark overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        {/* Clean background for hero section */}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Our Services</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{fontFamily: 'Playfair Display, serif'}}>
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-500">Plumbing Services</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
            Comprehensive plumbing solutions for homes and businesses across London. Quality workmanship guaranteed.
          </p>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 wave-divider">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-32">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#fafafa"/>
          </svg>
        </div>
      </section>

      {/* ============================================
         SERVICES LIST
         ============================================ */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 lg:space-y-12">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto lg:col-span-2 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r lg:from-black/40 lg:to-transparent"></div>
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`${service.color} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1`}>
                        {service.icon}
                        {service.title.split(' ')[0]}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900" style={{fontFamily: 'Playfair Display, serif'}}>{service.title}</h2>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      What's Included:
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3 text-gray-600">
                          <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         ADDITIONAL SERVICES NOTE
         ============================================ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Don't See What You're Looking For?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We offer a wide range of plumbing services. Contact us to discuss your specific requirements — we're sure we can help.
              </p>
              <Link href="/contact" className="btn btn-primary text-lg px-10 py-4">
                Discuss Your Requirements
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         CTA SECTION
         ============================================ */}
      <section className="py-16 md:py-24 bg-primary-dark relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        {/* Background decoration */}
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Ready to Book a Plumber?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Get in touch today for a free quote. Our team is ready to help with all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary text-lg px-10 py-5">
              Request a Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
            <a href="tel:02079460123" className="btn btn-outline text-lg px-10 py-5">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 020 7946 0123
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
