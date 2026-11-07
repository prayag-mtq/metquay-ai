import { fireEvent, render, screen } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { Carousel } from "@/components/ui/Carousel";
import { mockReducedMotion } from "./support/motion";

const slides = ["A", "B", "C"].map((s) => <figure key={s}>Quote {s}</figure>);

describe("Carousel", () => {
  it("pauses while hovered", () => {
    render(<Carousel label="Testimonials">{slides}</Carousel>);
    const region = screen.getByRole("region", { name: "Testimonials" });
    expect(region).toHaveAttribute("data-paused", "false");
    fireEvent.mouseEnter(region);
    expect(region).toHaveAttribute("data-paused", "true");
    fireEvent.mouseLeave(region);
    expect(region).toHaveAttribute("data-paused", "false");
  });

  it("pauses for keyboard and touch users without extra controls", () => {
    render(<Carousel label="Testimonials">{slides}</Carousel>);
    const region = screen.getByRole("region", { name: "Testimonials" });
    expect(screen.queryByRole("button")).toBeNull();
    expect(region).toHaveAttribute("tabindex", "0");
    fireEvent.focus(region);
    expect(region).toHaveAttribute("data-paused", "true");
    fireEvent.blur(region);
    fireEvent.pointerDown(region);
    expect(region).toHaveAttribute("data-paused", "true");
  });

  it("hides the duplicated track from assistive tech and under reduced motion", () => {
    const { container } = render(<Carousel label="Testimonials">{slides}</Carousel>);
    const tracks = container.querySelectorAll("[data-track]");
    expect(tracks).toHaveLength(2);
    expect(tracks[1]).toHaveAttribute("aria-hidden", "true");
    expect(tracks[1]).toHaveClass("motion-reduce:hidden");
  });

  it("renders the same markup whatever the motion preference, so hydration never mismatches", () => {
    mockReducedMotion(false);
    const normal = renderToStaticMarkup(<Carousel label="T">{slides}</Carousel>);
    mockReducedMotion(true);
    const reduced = renderToStaticMarkup(<Carousel label="T">{slides}</Carousel>);
    expect(reduced).toBe(normal);
  });
});
