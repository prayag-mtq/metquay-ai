import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Carousel } from "@/components/ui/Carousel";
import { mockReducedMotion } from "./support/motion";

const slides = ["A", "B", "C"].map((s) => <figure key={s}>Quote {s}</figure>);

describe("Carousel", () => {
  it("pauses while hovered or focused", () => {
    mockReducedMotion(false);
    render(<Carousel label="Testimonials">{slides}</Carousel>);
    const region = screen.getByRole("region", { name: "Testimonials" });
    expect(region).toHaveAttribute("data-paused", "false");
    fireEvent.mouseEnter(region);
    expect(region).toHaveAttribute("data-paused", "true");
    fireEvent.mouseLeave(region);
    expect(region).toHaveAttribute("data-paused", "false");
    fireEvent.focus(screen.getAllByText(/Quote A/)[0]);
    expect(region).toHaveAttribute("data-paused", "true");
  });

  it("hides the duplicated track from assistive tech", () => {
    mockReducedMotion(false);
    const { container } = render(<Carousel label="Testimonials">{slides}</Carousel>);
    const tracks = container.querySelectorAll("[data-track]");
    expect(tracks).toHaveLength(2);
    expect(tracks[1]).toHaveAttribute("aria-hidden", "true");
  });
});
