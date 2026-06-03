import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Rapid Plumbing",
  description: "Contact Rapid Plumbing for professional plumbing services in London. Get a free quote today.",
  keywords: "plumbing contact London, emergency plumber, plumbing quote, London plumbers",
  openGraph: {
    title: "Contact Rapid Plumbing - 24/7 Service",
    description: "Get in touch with London's trusted plumbers. Free quotes, 24/7 emergency service.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="relative py-24 md:py-36 bg-slate-900 overflow-hidden" aria-labelledby="contact-hero-heading">
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
          <h1 id="contact-hero-heading" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Get in Touch
          </h1>
           <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
             Get expert plumbing solutions from London&apos;s trusted team. We&apos;re available 24/7 for emergencies and scheduled appointments across all London boroughs.
           </p>
        </div>
      </section>

    
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-100 shadow-sm">
                <div className="mb-8 sm:mb-10">
                  <h2 id="contact-form-heading" className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Send us a message</h2>
                  <p className="text-slate-500 text-base sm:text-lg">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                </div>
              
                <form className="space-y-5 sm:space-y-6" id="contact-form" noValidate aria-labelledby="contact-form-heading">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                        Your Name <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        aria-describedby="name-error"
                        aria-invalid="false"
                        className="w-full px-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-base"
                        placeholder="John Smith"
                      />
                      <div id="name-error" className="text-red-600 text-sm mt-1" role="alert" aria-live="polite"></div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                        Phone Number <span className="text-red-500" aria-label="required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        pattern="^(\+44|0)[0-9\s\-\(\)]{10,}$"
                        aria-describedby="phone-error"
                        aria-invalid="false"
                        className="w-full px-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-base"
                        placeholder="020 7946 0123"
                      />
                      <div id="phone-error" className="text-red-600 text-sm mt-1" role="alert" aria-live="polite"></div>
                    </div>
                  </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                    Email Address <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-describedby="email-error"
                    aria-invalid="false"
                    className="w-full px-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-base"
                    placeholder="john@example.com"
                  />
                  <div id="email-error" className="text-red-600 text-sm mt-1" role="alert" aria-live="polite"></div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700">
                    Service Required <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    aria-describedby="service-error"
                    aria-invalid="false"
                    className="w-full px-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none appearance-none text-base"
                  >
                    <option value="">Select a service</option>
                    <option value="emergency">Emergency Plumbing</option>
                    <option value="leak">Leak Repair</option>
                    <option value="drain">Drain Cleaning</option>
                    <option value="pipe">Pipe Repair</option>
                    <option value="water-heater">Water Heater Installation</option>
                    <option value="bathroom">Bathroom Plumbing</option>
                    <option value="other">Other</option>
                  </select>
                  <div id="service-error" className="text-red-600 text-sm mt-1" role="alert" aria-live="polite"></div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                    Message <span className="text-red-500" aria-label="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    minLength={10}
                    aria-describedby="message-error"
                    aria-invalid="false"
                    className="w-full px-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none resize-none text-base"
                    placeholder="Please describe your plumbing issue..."
                  ></textarea>
                  <div id="message-error" className="text-red-600 text-sm mt-1" role="alert" aria-live="polite"></div>
                </div>

                <button
                  type="submit"
                  id="submit-btn"
                  disabled
                  className="w-full py-4 px-8 rounded-xl bg-linear-to-r from-amber-600 to-amber-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-describedby="submit-status"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Send Message
                  </span>
                </button>

                <div id="submit-status" className="text-sm text-slate-400 text-center" role="status" aria-live="polite"></div>
                <p className="text-sm text-slate-400 text-center">
                  We aim to respond within 24 hours. For emergencies, please call us directly.
                </p>
              </form>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              {/* Trust Signals */}
              <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Gas Safe Registered</h3>
                    <p className="text-sm text-gray-600">Certified & Fully Insured</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">15+</div>
                    <div className="text-xs text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">5000+</div>
                    <div className="text-xs text-gray-600">Happy Customers</div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 md:p-10 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
<div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
</div>
<div>
  <h3 className="font-semibold text-white mb-1">Phone</h3>
  <p className="text-slate-200 font-mono text-lg">020 7946 0123</p>
  <p className="text-sm text-slate-300 mt-1">Available 24/7 for emergencies</p>
</div>
                  </div>

                  <div className="flex items-start gap-4">
<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
</div>
<div>
  <h3 className="font-semibold text-white mb-1">Email</h3>
  <p className="text-slate-200 text-lg">info@rapidplumbing.co.uk</p>
  <p className="text-sm text-slate-300 mt-1">We respond within 24 hours</p>
</div>
                  </div>

                  <div className="flex items-start gap-4">
<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0">
  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
</div>
<div>
  <h3 className="font-semibold text-white mb-1">Service Area</h3>
  <p className="text-slate-200 text-lg">London and Surrounding Areas</p>
  <p className="text-sm text-slate-300 mt-1">Covering all London boroughs</p>
</div>
                  </div>

                  <div className="flex items-start gap-4">
<div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
  <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
</div>
<div>
  <h3 className="font-semibold text-white mb-1">Business Hours</h3>
  <p className="text-slate-200">Mon - Fri: 8am - 6pm</p>
  <p className="text-slate-200">Sat: 9am - 4pm</p>
  <p className="text-sm text-emerald-400 font-medium mt-2">24/7 Emergency Service Available</p>
</div>
                  </div>
                </div>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529651737248-dad5e287768e?w=800&q=80"
                  alt="London cityscape"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-bold text-white text-xl mb-1">Serving All of London</p>
                  <p className="text-slate-300">Central, North, South, East & West</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         TESTIMONIALS SECTION
         ============================================ */}
      <section className="py-16 md:py-24 bg-linear-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
  <h2 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">What Our Customers Say</h2>
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
    Trusted by Londoners
  </h3>
  <p className="text-gray-600">
    Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about our plumbing services.
  </p>
</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Clapham, SW4",
                rating: 5,
                text: "Rapid Plumbing saved the day when our kitchen flooded! They arrived within 30 minutes and fixed everything professionally. Highly recommend their emergency service.",
                service: "Emergency Plumbing",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&q=80"
              },
              {
                name: "Michael Chen",
                location: "Islington, N1",
                rating: 5,
                text: "Excellent service from start to finish. Transparent pricing, skilled workmanship, and they even cleaned up after themselves. Will definitely use again.",
                service: "Bathroom Installation",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
              },
              {
                name: "Emma Thompson",
                location: "Wandsworth, SW18",
                rating: 5,
                text: "Very impressed with their response time and professionalism. Fixed our leaking pipe quickly and explained everything clearly. Great value for money.",
                service: "Leak Repair",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={`Photo of ${testimonial.name}`}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                    <div className="text-xs text-accent font-medium">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Join thousands of satisfied customers</p>
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>5000+ Happy Customers</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>4.9/5 Average Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         FAQ SECTION
         ============================================ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
  <h2 className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">FAQ</h2>
  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
    Frequently Asked Questions
  </h3>
  <p className="text-gray-600">
    Have questions? We have answers. If you can&apos;t find what you&apos;re looking for, give us a call.
  </p>
</div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How quickly can you respond to an emergency?",
                answer: "We offer a 30-minute response time for emergency calls across London. Our team is available 24/7 for urgent plumbing issues."
              },
              {
                question: "Do you offer free quotes?",
                answer: "Yes, we provide free, no-obligation quotes for all our services. Simply contact us and we'll arrange a convenient time to assess your needs."
              },
              {
                question: "Are your plumbers licensed and insured?",
                answer: "Absolutely. All our plumbers are fully licensed, insured, and Gas Safe registered. We also offer guarantees on all our workmanship."
              },
              {
                question: "What areas do you cover?",
                answer: "We serve all of London and the surrounding areas, covering all boroughs from Central London to the outskirts."
              },
              {
                question: "Do you charge for callouts?",
                answer: "We offer free callouts for quotes and inspections. For emergency visits, there's no callout fee - you only pay for the work completed."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major payment methods including cash, card, and bank transfer. We also offer flexible payment plans for larger jobs."
              }
            ].map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl shadow-sm overflow-hidden faq-item">
                <summary className="flex items-center justify-between cursor-pointer p-6 text-left list-none">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <span className="shrink-0 ml-auto mr-2">
                    <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="faq-answer px-6 pb-6 text-gray-600 max-h-0 overflow-hidden transition-all duration-300">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
         EMERGENCY CTA
         ============================================ */}
      <section className="py-12 bg-primary-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
<div className="text-white text-center md:text-left">
  <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Have a Plumbing Emergency?</h2>
   <p className="text-gray-200">Call us now — we&apos;re available 24/7</p>
</div>
<a href="tel:02079460123" className="btn btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 animate-pulse-glow" aria-label="Call Rapid Plumbing: 020 7946 0123">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
  020 7946 0123
</a>
          </div>
        </div>
      </section>

      
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          // Enhanced Form Validation with Accessibility
          const form = document.getElementById('contact-form');
          const submitBtn = document.getElementById('submit-btn');
          const submitStatus = document.getElementById('submit-status');
          
          if (!form || !submitBtn) return;

          const inputs = form.querySelectorAll('input, textarea, select');
          let formValid = false;

          // Validation patterns
          const patterns = {
            name: /^[a-zA-Z\\s]{2,50}$/,
            phone: /^(\\+44|0)[0-9\\s\\-\\(\\)]{10,}$/,
            email: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
            message: /^.{10,500}$/
          };

          // Error messages
          const errorMessages = {
            name: {
              valueMissing: 'Please enter your full name',
              patternMismatch: 'Please enter a valid name (2-50 characters, letters only)'
            },
            phone: {
              valueMissing: 'Please enter your phone number',
              patternMismatch: 'Please enter a valid UK phone number'
            },
            email: {
              valueMissing: 'Please enter your email address',
              typeMismatch: 'Please enter a valid email address'
            },
            service: {
              valueMissing: 'Please select a service'
            },
            message: {
              valueMissing: 'Please describe your plumbing issue',
              tooShort: 'Please provide more details (at least 10 characters)'
            }
          };

          function validateField(field) {
            const fieldName = field.name;
            const errorId = field.id + '-error';
            const errorEl = document.getElementById(errorId);
            
            if (!errorEl) return true;
            
            let isValid = true;
            let errorMessage = '';

            // Check required fields
            if (field.hasAttribute('required') && !field.value.trim()) {
              isValid = false;
              errorMessage = errorMessages[fieldName]?.valueMissing || 'This field is required';
            }
            // Check patterns
            else if (field.value && patterns[fieldName] && !patterns[fieldName].test(field.value)) {
              isValid = false;
              errorMessage = errorMessages[fieldName]?.patternMismatch || 'Please enter a valid value';
            }
            // Check minimum length for textarea
            else if (field.tagName === 'TEXTAREA' && field.value.length < 10) {
              isValid = false;
              errorMessage = errorMessages[fieldName]?.tooShort || 'Please provide more details';
            }

            // Update field and error display
            field.setAttribute('aria-invalid', !isValid);
            field.classList.toggle('error', !isValid);
            field.classList.toggle('valid', isValid && field.value);
            
            if (!isValid) {
              errorEl.textContent = errorMessage;
              errorEl.style.display = 'block';
            } else {
              errorEl.textContent = '';
              errorEl.style.display = 'none';
            }

            return isValid;
          }

          function checkFormValidity() {
            let allValid = true;
            inputs.forEach(input => {
              if (!validateField(input)) allValid = false;
            });
            formValid = allValid;
            submitBtn.disabled = !formValid;
            submitBtn.setAttribute('aria-disabled', !formValid);
            return formValid;
          }

          // Event listeners
          inputs.forEach(input => {
            // Real-time validation on blur
            input.addEventListener('blur', function() {
              validateField(this);
              checkFormValidity();
            });
            
            // Clear errors on input
            input.addEventListener('input', function() {
              if (this.classList.contains('error')) {
                validateField(this);
                checkFormValidity();
              }
            });
          });

          // Form submit handler
          form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!checkFormValidity()) {
              submitStatus.textContent = 'Please correct the errors above and try again.';
              submitStatus.className = 'text-sm text-red-600 text-center';
              
              // Focus first error
              const firstError = form.querySelector('.error');
              if (firstError) {
                firstError.focus();
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
              return;
            }

            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Sending...</span>';
            submitStatus.textContent = 'Sending your message...';
            submitStatus.className = 'text-sm text-blue-600 text-center';

            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
              submitBtn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Message Sent!</span>';
              submitStatus.textContent = 'Thank you! We\\'ll get back to you within 24 hours.';
              submitStatus.className = 'text-sm text-green-600 text-center';
              
              // Reset form after success
              setTimeout(() => {
                form.reset();
                submitBtn.disabled = true;
                submitBtn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Send Message</span>';
                submitStatus.textContent = '';
                inputs.forEach(input => {
                  input.setAttribute('aria-invalid', 'false');
                  input.classList.remove('error', 'valid');
                });
              }, 3000);
            }, 2000);
          });

          // Initialize form state
          checkFormValidity();
        })();
      `}} />
      
    </main>
  );}
