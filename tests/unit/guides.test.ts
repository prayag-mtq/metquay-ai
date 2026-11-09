import { describe, expect, it } from "vitest";

import { getAllPosts } from "@/lib/blog";
import { guideForPost } from "@/lib/guides";

const guide = (title: string, description = "") => guideForPost({ title, description }).slug;

describe("guideForPost", () => {
  it("routes posts to the guide for their topic", () => {
    expect(guide("Apprehensions in migrating calibration labs to cloud")).toBe("calibration-software-migration");
    expect(guide("Achieving calibration data integrity with ALCOA+")).toBe("21-cfr-part-11-calibration-software");
    expect(guide("Monte Carlo Method")).toBe("measurement-uncertainty-software");
    expect(guide("Introduction to Gage R&R")).toBe("gauge-calibration-software");
    expect(guide("Metquay and Odoo: the dynamic duo")).toBe("calibration-software-erp-integration");
  });

  it("falls back to the main guide", () => {
    expect(guide("History trivia")).toBe("calibration-management-software");
  });

  it("gives every post a guide", () => {
    for (const post of getAllPosts()) expect(guideForPost(post).slug).toBeTruthy();
  });
});
