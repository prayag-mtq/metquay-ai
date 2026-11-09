import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { MotionProvider } from "@/components/layout/MotionProvider";
import { Reveal } from "@/components/ui/Reveal";

import { mockReducedMotion, placeBelowFold } from "../support/motion";

describe("Reveal under reduced motion", () => {
  it("never hides content", async () => {
    mockReducedMotion(true);
    placeBelowFold();
    const { getByText } = render(
      <MotionProvider>
        <Reveal>still</Reveal>
      </MotionProvider>,
    );
    await new Promise((r) => setTimeout(r, 50));
    expect(getByText("still").closest("[data-reveal]")).not.toHaveStyle({ opacity: "0" });
  });
});
