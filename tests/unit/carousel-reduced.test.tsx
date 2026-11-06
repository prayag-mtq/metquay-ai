import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Carousel } from "@/components/ui/Carousel";
import { mockReducedMotion } from "./support/motion";

describe("Carousel under reduced motion", () => {
  it("renders a single static, scrollable track", async () => {
    mockReducedMotion(true);
    const { container } = render(<Carousel label="Testimonials">{[<figure key="a">Quote A</figure>]}</Carousel>);
    await screen.findByText("Quote A");
    expect(container.querySelectorAll("[data-track]")).toHaveLength(1);
    expect(container.querySelector("[data-animated]")).toBeNull();
  });
});
