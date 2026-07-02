"use client";

import { navItems, heroContent } from "@/data/portfolio";
import ThemeToggle from "@/components/layout/ThemeToggle";
import { scrollToId } from "@/lib/lenis";

export default function Navbar() {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string
  ) => {
    e.preventDefault();
    scrollToId(target);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-[var(--border)] bg-[var(--surface)]/85 px-5 py-3 shadow-lg backdrop-blur-md">
        <a
          href="#top"
          onClick={(e) => handleClick(e, "top")}
          className="text-sm font-semibold tracking-[0.08em] text-[var(--foreground)]"
        >
          {heroContent.name}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href.replace("#", ""))}
              className="text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}