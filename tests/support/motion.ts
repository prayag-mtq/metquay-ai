import { vi } from "vitest";

export const mockReducedMotion = (reduce: boolean) =>
  vi.stubGlobal("matchMedia", (query: string) => ({
    matches: reduce && query.includes("reduce"),
    media: query,
    addEventListener: () => {},
    removeEventListener: () => {},
    addListener: () => {},
    removeListener: () => {},
  }));

export const placeBelowFold = () =>
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
    top: 5000,
    bottom: 5100,
    left: 0,
    right: 100,
    width: 100,
    height: 100,
    x: 0,
    y: 5000,
    toJSON: () => ({}),
  });
