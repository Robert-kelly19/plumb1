import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plumbing Services London - Emergency & Installation | Rapid Plumbing",
  description: "Comprehensive plumbing services in London including emergency repairs, leak detection, drain cleaning, water heaters & bathroom installations. Gas Safe registered plumbers.",
  keywords: "plumbing services London, emergency plumbing, leak repair, drain cleaning, water heater installation, bathroom plumbing",
  openGraph: {
    title: "Professional Plumbing Services London | Rapid Plumbing",
    description: "Expert plumbing services across London. Emergency repairs, installations, and maintenance. Free quotes available.",
    type: "website",
  }
};

export default function ServicesPage() {
  return (
    <main id="main-content">
      {/* ============================================
         HERO SECTION
         ============================================ */}
      <section className="relative py-24 md:py-40 bg-primary-dark overflow-hidden">
        {/* Clean background for hero section */}
        
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-6 block">Our Services</span>
           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white" style={{fontFamily: 'Playfair Display, serif'}}>
             Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-yellow-500">Plumbing Services</span>
           </h1>
           <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-6">
             Comprehensive plumbing solutions for homes and businesses across London. Quality workmanship guaranteed.
           </p>
        </div>
      </section>

    
       <section className="py-20 md:py-28 bg-[#fafafa]">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="space-y-16 lg:space-y-24">
             {/* Service Category 1 */}
             <div className="space-y-8">
               <div className="max-w-3xl mx-auto text-center">
                 <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Emergency Services</span>
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                   Emergency Plumbing
                 </h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Available 24/7 for urgent plumbing issues. Our rapid response team arrives within 30 minutes to fix burst pipes, major leaks, flooding, and other emergencies that require immediate attention.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {title: "Burst Pipe Repair", desc: "Immediate repair for burst or frozen pipes", icon: "💧"},
                    {title: "Emergency Leak Fix", desc: "Rapid response for major leaks and flooding", icon: "🚨"},
                    {title: "No Hot Water", desc: "Restore hot water supply quickly and efficiently", icon: "♨️"},
                  ].map((item, i) => (
                    <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
               </div>
             </div>

             {/* Service Category 2 */}
             <div className="space-y-8">
               <div className="max-w-3xl mx-auto text-center">
                 <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Installation & Repair</span>
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                   Leak Detection & Repair
                 </h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Fast and effective leak detection using advanced equipment and techniques. From dripping taps to hidden pipe leaks behind walls or under floors, we utilize thermal imaging and acoustic detection to precisely locate and fix the source of leaks before they cause extensive damage.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   {title: "Tap Repair", desc: "Fix dripping or leaking taps", icon: "🔧"},
                   {title: "Pipe Leak Detection", desc: "Advanced thermal imaging to find hidden leaks", icon: "🔍"},
                   {title: "Shower Seal Replacement", desc: "Prevent water damage with new seals", icon: "🚿"},
                 ].map((item, i) => (
                   <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                     <div className="flex items-center mb-4">
                       <span className="text-2xl mb-0.5 mr-3">{item.icon}</span>
                       <h3 className="font-bold text-gray-900">{item.title}</h3>
                     </div>
                     <p className="text-gray-600 text-sm">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>

             {/* Service Category 3 */}
             <div className="space-y-8">
               <div className="max-w-3xl mx-auto text-center">
                 <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Drain Services</span>
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                   Drain Cleaning & Unblocking
                 </h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Professional drain unblocking using high-pressure jetting, electro-mechanical cleaning, and advanced camera inspection. We clear blockages quickly in sinks, toilets, showers, and main drains while providing preventative maintenance to avoid future issues.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   {title: "Sink Unblocking", desc: "Clear kitchen and bathroom sink blockages", icon: "🚰"},
                   {title: "Toilet Unblock", desc: "Resolve toilet blockages safely", icon: "🚽"},
                   {title: "Main Drain Cleaning", desc: "Complete drain system cleaning", icon: "💦"},
                 ].map((item, i) => (
                   <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                     <div className="flex items-center mb-4">
                       <span className="text-2xl mb-0.5 mr-3">{item.icon}</span>
                       <h3 className="font-bold text-gray-900">{item.title}</h3>
                     </div>
                     <p className="text-gray-600 text-sm">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>

             {/* Service Category 4 */}
             <div className="space-y-8">
               <div className="max-w-3xl mx-auto text-center">
                 <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Water Heating</span>
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                   Water Heater Installation & Repair
                 </h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Expert installation, repair, and maintenance of all water heating systems including traditional tanks, tankless systems, combi boilers, and unvented cylinders. We ensure optimal efficiency and safety compliance for your home or business.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   {title: "New Installation", desc: "Professional water heater installation", icon: "🔧"},
                   {title: "Boiler Repair", desc: "Fast diagnosis and repair of boiler issues", icon: "🔥"},
                   {title: "Maintenance Service", desc: "Regular servicing to extend lifespan", icon: "⚙️"},
                 ].map((item, i) => (
                   <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                     <div className="flex items-center mb-4">
                       <span className="text-2xl mb-0.5 mr-3">{item.icon}</span>
                       <h3 className="font-bold text-gray-900">{item.title}</h3>
                     </div>
                     <p className="text-gray-600 text-sm">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>

             {/* Service Category 5 */}
             <div className="space-y-8">
               <div className="max-w-3xl mx-auto text-center">
                 <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Bathroom Solutions</span>
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                   Bathroom Plumbing
                 </h2>
                  <p className="text-base sm:text-lg text-gray-600">
                    Complete bathroom transformations from minor fixture replacements to full renovations. We handle toilet installations, shower fittings, tiling, ventilation, and all plumbing work with meticulous attention to detail and waterproofing standards.
                  </p>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {[
                   {title: "Toilet Installation", desc: "New toilet fitting and repairs", icon: "🚽"},
                   {title: "Shower Installation", desc: "Electric and mixer shower fitting", icon: "🚿"},
                   {title: "Complete Bathroom", desc: "Full bathroom renovation services", icon: "🛁"},
                 ].map((item, i) => (
                   <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                     <div className="flex items-center mb-4">
                       <span className="text-2xl mb-0.5 mr-3">{item.icon}</span>
                       <h3 className="font-bold text-gray-900">{item.title}</h3>
                     </div>
                     <p className="text-gray-600 text-sm">{item.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                  Don&#39;t See What You&#39;re Looking For?
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  We offer a wide range of plumbing services. Contact us to discuss your specific requirements &mdash; we&#39;re sure we can help.
                </p>
                <Link href="/contact" className="btn btn-primary text-lg px-10 py-4">
                  Discuss Your Requirements
                </Link>
              </div>
          </div>
        </div>
      </section>

       {/* ============================================
          CTA SECTION
          ============================================ */}
       <section className="py-20 md:py-28 bg-primary-dark relative overflow-hidden">
<div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8" style={{fontFamily: 'Playfair Display, serif'}}>
              Ready to Book a Plumber?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-10 sm:mb-12 max-w-2xl mx-auto">
              Get in touch today for a free quote. Our team is ready to help with all your plumbing needs across London.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link href="/contact" className="btn btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-5 hover:transform hover:-translate-y-1 transition-all duration-300">
                Request a Quote
              </Link>
              <a href="tel:02079460123" className="btn btn-outline text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-5 hover:transform hover:-translate-y-1 transition-all duration-300">
                Call: 020 7946 0123
              </a>
            </div>
         </div>
       </section>
    </main>
  );
}