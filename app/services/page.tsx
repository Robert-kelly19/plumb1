import Link from "next/link";

export const metadata = {
  title: "Our Services - Rapid Plumbing",
  description: "Comprehensive plumbing services in London including emergency plumbing, pipe repair, drain cleaning, water heater installation, and bathroom plumbing.",
};

const services = [
  {
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800&q=80",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=800&q=80",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
    icon: (
      <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    ]
  }
];

export default function ServicesPage() {
  return (
    <main>
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Plumbing Services</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Comprehensive plumbing solutions for homes and businesses across London. Quality workmanship guaranteed.
          </p>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-16 md:h-24">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        {service.icon}
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-gray-600 text-lg mb-6">
                      {service.description}
                    </p>
                    <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-gray-600">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
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

      {/* Additional Services Note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Don't See What You're Looking For?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We offer a wide range of plumbing services. Contact us to discuss your specific requirements - we're sure we can help.
              </p>
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Discuss Your Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Book a Plumber?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get in touch today for a free quote. Our team is ready to help with all your plumbing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Request a Quote
            </Link>
            <a href="tel:02079460123" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Call: 020 7946 0123
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
