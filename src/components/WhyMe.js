const items = [
  {
    title: "Product-company experience",
    desc: "Experience building large scale consumer apps at MobiKwik and MakeMyTrip with real production impact.",
  },
  {
    title: "Clean, scalable architecture",
    desc: "Code that is maintainable, structured and built for long term growth, not quick hacks.",
  },
  {
    title: "Fast execution",
    desc: "Rapid MVP delivery without compromising quality or performance.",
  },
  {
    title: "Direct collaboration",
    desc: "You work directly with me. No layers, no delays & clear communication.",
  },
];

export default function WhyMe() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Consistent background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E] via-[#070A12] to-[#070A12]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-white/70">
            WHY WORK WITH ME
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            What makes this{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              different
            </span>
          </h2>

          <p className="mt-4 text-white/80">
            I focus on delivering real value, not just code.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="group relative">
              {/* Glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-3xl opacity-0 blur-2xl transition group-hover:opacity-100 bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20" />

              <div className="relative transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-white/90 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/75 group-hover:text-white/90">
                  {item.desc}
                </p>

                {/* Accent line */}
                <div className="mt-5 h-px w-16 bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 opacity-60 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}