import { Globe, LayoutDashboard, Smartphone } from "lucide-react";

const services = [
  {
    title: "Business Websites",
    desc: "Modern, responsive websites tailored to your brand | Fast, clean and conversion focused.",
    Icon: Globe,
  },
  {
    title: "Web Applications",
    desc: "Custom web apps, dashboards and internal tools built with product grade engineering standards.",
    Icon: LayoutDashboard,
  },
  {
    title: "Android Apps",
    desc: "Native Android apps with smooth performance, modern UI and scalable architecture.",
    Icon: Smartphone,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative pb-20 overflow-hidden">
      
      {/* SAME BACKGROUND AS HERO */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070A12] via-[#070A12] to-[#070A12]" />

      <div className="relative mx-auto max-w-6xl px-6">
        
        <div className="max-w-2xl">
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            What I offer
          </h2>
          <p className="mt-4 text-white/70">
            Clear scope, clean delivery and performance first builds | Websites, Web apps, and Android Apps.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:border-white/20"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/20 via-indigo-500/20 to-cyan-400/20 blur-2xl" />
              </div>

              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                    <Icon className="h-5 w-5 text-white/80" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>

                <p className="mt-4 text-sm leading-6 text-white/70">
                  {desc}
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <p className="mt-5 text-sm font-semibold text-white/80">
                  Deliverables:
                  <span className="ml-2 font-normal text-white/60">
                    UI • Performance • Clean code
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}