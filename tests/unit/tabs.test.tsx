import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import { Tabs } from "@/components/ui/Tabs";

const items = ["One", "Two", "Three"].map((label) => ({ id: label.toLowerCase(), label, panel: <p>{label} panel</p> }));

describe("Tabs", () => {
  it("follows the WAI-ARIA tabs keyboard pattern", async () => {
    const user = userEvent.setup();
    render(<Tabs label="Roles" items={items} />);
    expect(screen.getByRole("tablist", { name: "Roles" })).toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "One" }));
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "Two" })).toHaveFocus();
    expect(screen.getByRole("tab", { name: "Two" })).toHaveAttribute("aria-selected", "true");

    await user.keyboard("{End}");
    expect(screen.getByRole("tab", { name: "Three" })).toHaveAttribute("aria-selected", "true");
    await user.keyboard("{ArrowRight}");
    expect(screen.getByRole("tab", { name: "One" })).toHaveAttribute("aria-selected", "true");
  });

  it("gives only the selected tab a tab stop", () => {
    render(<Tabs label="Roles" items={items} />);
    const tabs = screen.getAllByRole("tab");
    expect(tabs.map((t) => t.getAttribute("tabindex"))).toEqual(["0", "-1", "-1"]);
    expect(tabs.filter((t) => t.getAttribute("aria-selected") === "true")).toHaveLength(1);
  });

  it("keeps every panel in the markup", () => {
    const { container } = render(<Tabs label="Roles" items={items} />);
    const panels = container.querySelectorAll('[role="tabpanel"]');
    expect(panels).toHaveLength(3);
    expect(container).toHaveTextContent("Three panel");
    expect(panels[1]).toHaveAttribute("hidden");
  });
});
