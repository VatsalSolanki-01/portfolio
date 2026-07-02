let lenisInstance: {
  scrollTo: (
    target: string | number | HTMLElement,
    options?: { duration?: number; offset?: number }
  ) => void;
} | null = null;

export function setLenisInstance(instance: typeof lenisInstance) {
  lenisInstance = instance;
}

export function getLenisInstance() {
  return lenisInstance;
}