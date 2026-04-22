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
      <section className="relative py-20 md:py-32 bg-primary-dark overflow-hidden">
        {/* Clean background for hero section */}
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider mb-4 block">Our Services</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white" style={{fontFamily: 'Playfair Display, serif'}}>
            Professional <span className="text-transparent bg-clip-text bg-linear-to-r from-accent to-yellow-500">Plumbing Services</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
            Comprehensive plumbing solutions for homes and businesses across London. Quality workmanship guaranteed.
          </p>
        </div>
      </section>

      {/* ============================================
         SERVICES LIST
         ============================================ */}
      <section className="py-16 md:py-24 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 lg:space-y-12">
            {/* Service cards will be added here - placeholder for now */}
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Service content will be displayed here.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
         ADDITIONAL SERVICES NOTE
         ============================================ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4" style={{fontFamily: 'Playfair Display, serif'}}>
                Don't See What You're Looking For?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We offer a wide range of plumbing services. Contact us to discuss your specific requirements — we're sure we can help.
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
      <section className="py-16 md:py-24 bg-primary-dark relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6" style={{fontFamily: 'Playfair Display, serif'}}>
            Ready to Book a Plumber?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Get in touch today for a free quote. Our team is ready to help with all your plumbing needs across London.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-5">
              Request a Quote
            </Link>
            <a href="tel:02079460123" className="btn btn-outline text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-5">
              Call: 020 7946 0123
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}