"use client";

import { navItems } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";
import { getLenisInstance } from "@/lib/lenis";

export default function Navbar() {
  const handleScroll = (target: string) => {
    const lenis = getLenisInstance();
    const element = document.querySelector(target);

    if (lenis && element instanceof HTMLElement) {
      lenis.scrollTo(element, {
        duration: 1.5,
        offset: -20,
      });
      return;
    }

    if (element instanceof HTMLElement) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-5">
        <div className="flex items-center justify-between rounded-full border border-[var(--border)] bg-[color:color-mix(in_srgb,var(--background)_46%,transparent)] px-4 py-3 backdrop-blur-2xl supports-[backdrop-filter]:bg-[color:color-mix(in_srgb,var(--background)_40%,transparent)] md:px-5">
          <button
            type="button"
            onClick={() => handleScroll("#top")}
            className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--foreground)]"
          >
            Vatsal Solanki
          </button>

          <div className="flex items-center gap-3 md:gap-4">
            <nav className="hidden items-center gap-5 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleScroll(item.href)}
                  className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}