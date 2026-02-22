const budgetOptions = [
  "Under ₹25k / month",
  "₹25k – ₹50k / month",
  "₹50k – ₹1L / month",
  "₹1L+ / month",
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Consistent background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E] via-[#070A12] to-[#070A12]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          {/* Left */}
          <div className="max-w-xl">

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Let’s build{" "}
              <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-300 bg-clip-text text-transparent">
                something exceptional
              </span>{" "}
              together.
            </h2>

            <p className="mt-4 text-white/85">
              Whether you need a website, a web app, or a mobile product, I focus on
              delivering clean, high quality builds with clear communication and fast
              execution.
            </p>

          </div>

          {/* Right: Form */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            {/* glow */}
            <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-r from-fuchsia-500/10 via-indigo-500/10 to-cyan-400/10 blur-2xl" />

            <form className="relative space-y-5">
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Full name">
                  <input className={inputCls} placeholder="Your name" name="name" />
                </Field>

                <Field label="Email">
                  <input
                    className={inputCls}
                    placeholder="you@company.com"
                    name="email"
                    type="email"
                  />
                </Field>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Company name">
                  <input className={inputCls} placeholder="Company" name="company" />
                </Field>

                <Field label="Website">
                  <input className={inputCls} placeholder="https://" name="website" />
                </Field>
              </div>

              <Field label="Contact number">
                <input
                  className={inputCls}
                  placeholder="10-digit number"
                  name="phone"
                  inputMode="numeric"
                  autoComplete="tel"
                />
              </Field>

              <div className="relative">
                <select
                    className={`${inputCls} appearance-none pr-12`}
                    name="budget"
                    defaultValue=""
                >
                    <option value="" disabled>
                    Select a range
                    </option>
                    {budgetOptions.map((b) => (
                    <option key={b} value={b}>
                        {b}
                    </option>
                    ))}
                </select>

                {/* Custom arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white/60">
                    ▼
                </div>
                </div>

              <Field label="Project details">
                <textarea
                  className={`${inputCls} min-h-[120px] resize-none`}
                  placeholder="What are you building? Timeline? Any links?"
                  name="message"
                />
              </Field>

              <button
                type="button"
                className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Book a Call
              </button>

              <p className="text-center text-xs text-white/55">
                By submitting, you agree to be contacted about your request.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/85">
        {label}
      </span>
      {children}
    </label>
  );
}

const inputCls = "w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none transition focus:border-white/25 focus:bg-black/40";