import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "@/components/ui/Button";
import { CardLink } from "@/components/ui/CardLink";

describe("Button", () => {
  it("renders a link when given href", () => {
    render(<Button href="/contact">Go</Button>);
    expect(screen.getByRole("link", { name: "Go" })).toHaveAttribute("href", "/contact");
  });

  it("renders a button without href", () => {
    render(<Button>Send</Button>);
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });

  it("uses fixed heights per size", () => {
    render(
      <>
        <Button size="sm">Small</Button>
        <Button>Default</Button>
      </>,
    );
    expect(screen.getByRole("button", { name: "Small" })).toHaveClass("h-9");
    expect(screen.getByRole("button", { name: "Default" })).toHaveClass("h-11");
  });
});

describe("CardLink", () => {
  it("wraps all content in a single link", () => {
    const { container } = render(
      <CardLink href="/blog/x">
        <img alt="cover" src="/c.png" />
        <h3>Title</h3>
      </CardLink>,
    );
    const links = container.querySelectorAll("a");
    expect(links).toHaveLength(1);
    expect(links[0]).toContainElement(screen.getByAltText("cover"));
  });
});
