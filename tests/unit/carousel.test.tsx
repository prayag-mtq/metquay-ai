import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("has a pause button for keyboard and touch users", async () => {
    const user = userEvent.setup();
    render(<Carousel label="Testimonials">{slides}</Carousel>);
    const region = screen.getByRole("region", { name: "Testimonials" });
    await user.click(screen.getByRole("button", { name: "Pause testimonials" }));
    expect(region).toHaveAttribute("data-paused", "true");
    fireEvent.mouseLeave(region);
    expect(region).toHaveAttribute("data-paused", "true");
    await user.click(screen.getByRole("button", { name: "Play testimonials" }));
    expect(screen.getByRole("button", { name: "Pause testimonials" })).toBeInTheDocument();
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
