import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Rapid Plumbing",
  description: "Contact Rapid Plumbing for professional plumbing services in London. Get a free quote today.",
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="relative py-24 md:py-36 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-white to-transparent"></div>
         
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            Available 24/7
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white tracking-tight">
            Get in Touch
          </h1>
          <p className="text-base sm:text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Ready to fix your plumbing issues? We're here to help with fast, reliable service across London.
          </p>
        </div>
      </section>

    
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 border border-slate-100 shadow-sm">
                <div className="mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">Send us a message</h2>
                  <p className="text-slate-500 text-base sm:text-lg">Fill out the form below and we'll get back to you within 24 hours.</p>
                </div>
              
                <form className="space-y-5 sm:space-y-6" id="contact-form" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-base"
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full px-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-base"
                        placeholder="020 7946 0123"
                      />
                    </div>
                  </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none text-base"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="block text-sm font-semibold text-slate-700">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
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
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 sm:py-3.5 border-2 border-slate-200 rounded-xl bg-slate-50 focus:bg-white focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10 transition-all outline-none resize-none text-base"
                    placeholder="Please describe your plumbing issue..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Send Message
                  </span>
                </button>

                <p className="text-sm text-slate-400 text-center">
                  We aim to respond within 24 hours. For emergencies, please call us directly.
                </p>
              </form>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 md:p-10 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <p className="text-slate-300 font-mono text-lg">020 7946 0123</p>
                      <p className="text-sm text-slate-400 mt-1">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-slate-300 text-lg">info@rapidplumbing.co.uk</p>
                      <p className="text-sm text-slate-400 mt-1">We respond within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Service Area</h3>
                      <p className="text-slate-300 text-lg">London and Surrounding Areas</p>
                      <p className="text-sm text-slate-400 mt-1">Covering all London boroughs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                      <p className="text-slate-300">Mon - Fri: 8am - 6pm</p>
                      <p className="text-slate-300">Sat: 9am - 4pm</p>
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
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
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
         FAQ SECTION
         ============================================ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">FAQ</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Have questions? We have answers. If you can't find what you're looking for, give us a call.
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
              <p className="text-gray-300">Call us now — we're available 24/7</p>
            </div>
            <a href="tel:02079460123" className="btn btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 animate-pulse-glow">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              020 7946 0123
            </a>
          </div>
        </div>
      </section>

      {/* Form Validation Script */}
      <script dangerouslySetInnerHTML={{__html: `
        (function() {
          // FAQ Accordion Animation
          document.querySelectorAll('.faq-item').forEach(item => {
            const answer = item.querySelector('.faq-answer');
            item.addEventListener('toggle', function() {
              if (this.open) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
              } else {
                answer.style.maxHeight = '0';
              }
            });
          });

          const form = document.getElementById('contact-form');
          if (!form) return;

          const inputs = form.querySelectorAll('input, textarea, select');
          
          // Real-time validation on blur
          inputs.forEach(input => {
            input.addEventListener('blur', function() {
              validateField(this);
            });
            
            input.addEventListener('input', function() {
              if (this.classList.contains('error')) {
                validateField(this);
              }
            });
          });

          function validateField(field) {
            const errorId = field.id + '-error';
            let errorEl = document.getElementById(errorId);
            
            if (!field.validity.valid) {
              field.classList.add('error');
              field.classList.remove('valid');
              
              if (!errorEl) {
                errorEl = document.createElement('p');
                errorEl.id = errorId;
                errorEl.className = 'text-red-600 text-sm mt-1';
                field.parentNode.appendChild(errorEl);
              }
              
              if (field.validity.valueMissing) {
                errorEl.textContent = 'This field is required';
              } else if (field.validity.typeMismatch && field.type === 'email') {
                errorEl.textContent = 'Please enter a valid email address';
              } else if (field.validity.patternMismatch) {
                errorEl.textContent = 'Please enter a valid phone number';
              } else {
                errorEl.textContent = field.validationMessage;
              }
            } else {
              field.classList.remove('error');
              field.classList.add('valid');
              if (errorEl) errorEl.remove();
            }
          }

          // Form submit handler
          form.addEventListener('submit', function(e) {
            let isValid = true;
            inputs.forEach(input => {
              if (!validateField(input)) isValid = false;
              input.classList.add('touched');
            });
            
            if (!isValid) {
              e.preventDefault();
              // Scroll to first error
              const firstError = form.querySelector('.error');
              if (firstError) {
                firstError.focus();
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }
          });
        })();
      `}} />
    </main>
  );
}
