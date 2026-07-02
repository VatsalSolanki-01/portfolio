import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

export function getLenisInstance() {
  return lenisInstance;
}

export function scrollToId(id: string) {
  if (typeof window === "undefined") return;

  const lenis = getLenisInstance();

  if (id === "top") {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.2,
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    return;
  }

  const element = document.getElementById(id);
  if (!element) return;

  if (lenis) {
    lenis.scrollTo(element, {
      duration: 1.2,
      offset: -110,
    });
  } else {
    const top =
      element.getBoundingClientRect().top + window.scrollY - 110;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
}