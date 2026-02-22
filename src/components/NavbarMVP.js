"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
  <div
    className={[
      "transition-all",
      scrolled
        ? "border-b border-white/10 bg-[#070A12]/70 backdrop-blur-xl"
        : "border-b border-transparent bg-[#070A12] backdrop-blur-xl",
    ].join(" ")}
  >
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      
      {/* Brand */}
      <a href="#" className="text-sm font-semibold tracking-wide text-white">
        Abhinav Rastogi
      </a>

      {/* Links */}
      <div className="hidden items-center gap-8 md:flex">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-white/70 transition hover:text-white"
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#contact"
        className="rounded-2xl border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/40"
      >
        Get in Touch
      </a>
    </nav>
  </div>
</header>
  );
}