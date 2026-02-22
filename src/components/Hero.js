
"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E] via-[#070A12] to-[#070A12]" />

      <div
        className="pointer-events-none absolute right-[-160px] top-[-140px] h-[520px] w-[520px] rounded-full opacity-45 blur-3xl
             bg-gradient-to-tr from-fuchsia-500 via-indigo-500 to-cyan-400"
        style={{ animation: "float 10s ease-in-out infinite" }}
/>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Product-grade development • Fast delivery
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            I build modern Websites & Android Apps that look{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              stunning
            </span>{" "}
            and perform flawlessly.
          </h1>

          {/* Subtext */}
          <p className="mt-5 text-lg text-white/70 md:text-xl">
            Engineering experience from large-scale consumer platforms like MakeMyTrip and MobiKwik,
            now focused on delivering high quality web solutions with speed and precision.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}