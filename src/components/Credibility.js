export default function Credibility() {
  return (
    <section className="relative pb-20 ps-40 pe-40 overflow-hidden">
      
      {/* Same background as Hero */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A12] via-[#070A12] to-[#070A12]" />

      <div className="relative mx-auto px-6">
        
        <div className="rounded-3xl border border-white/10 bg-white/5 pt-12 pb-4 backdrop-blur">
          
          <p className="text-center text-xl font-semibold tracking-wide text-white/80">
            EXPERIENCE FROM PRODUCT COMPANIES
          </p>

          <div className="flex items-center justify-center">
            
            {/* MakeMyTrip */}
            <img
              src="/logos/mmt.png"
              alt="MakeMyTrip"
              className="h-40 w-auto"
            />

            {/* Vertical Divider */}
            <div className="mx-10 h-14 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent" />

            {/* MobiKwik */}
            <img
              src="/logos/mbk.svg"
              alt="MobiKwik"
              className="h-40 w-auto"
            />

          </div>
        </div>
      </div>
    </section>
  );
}