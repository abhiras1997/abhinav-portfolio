"use client";

import { Mail, Linkedin, Phone } from "lucide-react";

export default function FooterCTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden">
      {/* Consistent background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1E] via-[#070A12] to-[#070A12]" />

      <div className="relative mx-auto max-w-6xl pb-10">

        {/* Footer */}
        <footer className="pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-base font-semibold text-white/90">
              Abhinav Rastogi
            </p>

            <div className="flex flex-col gap-3 text-sm text-white/75 md:flex-row md:items-center md:gap-6x">
              <a
                className="inline-flex items-center gap-2 hover:text-white"
                href="mailto:abhinavrastog5223@gmail.com"
              >
                <Mail className="h-4 w-4" />
                abhinavrastog5223@gmail.com
              </a>

              <a
                className="inline-flex items-center gap-2 hover:text-white"
                href="https://www.linkedin.com/in/abhinav-rastogi-9524a8138/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>

              <a
                className="inline-flex items-center gap-2 hover:text-white"
                href="tel:+919599061193"
              >
                <Phone className="h-4 w-4" />
                +91-9599061193
              </a>
            </div>
          </div>

          <p className="mt-2 text-xs text-white/55">
            © 2026 Abhinav Rastogi. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}