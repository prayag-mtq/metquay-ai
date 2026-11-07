import { render, waitFor } from "@testing-library/react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { Reveal } from "@/components/ui/Reveal";
import { mockReducedMotion, placeBelowFold } from "./support/motion";

describe("Reveal", () => {
  it("renders visible markup on the server", () => {
    const html = renderToStaticMarkup(
      <MotionProvider>
        <Reveal>hello</Reveal>
      </MotionProvider>,
    );
    expect(html).toContain("hello");
    expect(html).not.toMatch(/opacity:\s*0/);
  });

  it("hides content below the fold until it scrolls into view", async () => {
    mockReducedMotion(false);
    placeBelowFold();
    const { getByText } = render(
      <MotionProvider>
        <Reveal>below</Reveal>
      </MotionProvider>,
    );
    await waitFor(() => expect(getByText("below").closest("[data-reveal]")).toHaveStyle({ opacity: "0" }));
  });
});
