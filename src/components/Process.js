const steps = [
  {
    title: "Discover",
    desc: "Quick call to understand goals, scope, and what success looks like.",
  },
  {
    title: "Design & Plan",
    desc: "Lock structure + UI direction, and define the MVP deliverables clearly.",
  },
  {
    title: "Build",
    desc: "Fast execution with clean code, performance-first UI, and regular updates.",
  },
  {
    title: "Launch & Iterate",
    desc: "Deploy, monitor, and refine based on feedback and real usage.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 overflow-hidden">
      {/* Consistent blue/dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E] via-[#070A12] to-[#070A12]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            How we{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
              work
            </span>
          </h2>

          <p className="mt-4 text-white/80">
            A simple, transparent flow so you always know what’s happening and what’s next.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-12">
          {/* vertical line */}
          <div className="absolute left-[14px] top-[18px] bottom-[32px] w-px bg-white/20" />

          <div className="space-y-10">
            {steps.map((s, idx) => (
              <div key={s.title} className="group relative pl-12">
                {/* bullet */}
                <div className="absolute left-[14px] top-[6px] -translate-x-1/2">
                  <div className="relative h-7 w-7 rounded-full border border-white/25 bg-white/5 backdrop-blur transition-transform duration-200 group-hover:-translate-y-0.5">
                    {/* inner dot */}
                    <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300" />
                    {/* glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-200 group-hover:opacity-100 bg-gradient-to-r from-fuchsia-500/60 via-indigo-500/60 to-cyan-400/60" />
                  </div>
                </div>

                {/* content (no border / no background) */}
                <div className="pt-[4px] transition-all duration-200 group-hover:-translate-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-white/90 transition-colors duration-200 group-hover:text-white">
                      {s.title}
                    </h3>
                  </div>

                  <p className="mt-2 text-sm leading-6 text-white/75 transition-colors duration-200 group-hover:text-white/90">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}