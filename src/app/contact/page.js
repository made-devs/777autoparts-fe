import ContactForm from '@/components/Contact/ContactForm';
import ContactInfo from '@/components/Contact/ContactInfo';

export default function ContactPage() {
  return (
    <main className="bg-neutral-950 min-h-screen pt-32 pb-20">
      {/* HEADER */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-2 h-2 bg-voltage animate-pulse"></span>
          <span className="text-voltage font-mono text-xs uppercase tracking-[0.2em]">
            Secure Channel
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black italic uppercase text-white leading-none">
          Contact <span className="text-neutral-700">HQ.</span>
        </h1>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* LEFT: INFO */}
          <div className="w-full lg:w-1/3">
            <ContactInfo />
          </div>

          {/* RIGHT: FORM */}
          <div className="w-full lg:w-2/3">
            <ContactForm />
          </div>
        </div>

        {/* MAP SECTION (Full Width) */}
        <div className="mt-20 border border-neutral-800 bg-neutral-900 p-2">
          <div className="w-full h-[400px] bg-neutral-800 relative overflow-hidden grayscale invert brightness-[0.8] contrast-125">
            {/* Embed Google Map (Iframe) */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.052262529681!2d106.82034831476903!3d-6.256847995471243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3d2b2b2b2b2%3A0x2b2b2b2b2b2b2b2b!2sJakarta%20Selatan!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Overlay Tech UI pada Map */}
            <div className="absolute top-4 left-4 bg-black/80 text-voltage px-3 py-1 text-[10px] font-mono border border-voltage">
              LIVE SAT_FEED
            </div>
            <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 text-[10px] font-mono border border-neutral-700">
              LAT: -6.2568 | LONG: 106.8203
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
