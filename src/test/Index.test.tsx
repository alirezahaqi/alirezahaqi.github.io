import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Index from "@/pages/Index";

describe("Index", () => {
  it("renders the current profile and publication list", () => {
    render(<Index />);

    expect(
      screen.getByRole("heading", { name: "Alireza Haqi" }),
    ).toBeInTheDocument();
    expect(screen.getByText("PhD Student in Computer Science")).toBeInTheDocument();
    expect(screen.getByText("ahaqi@stanford.edu")).toBeInTheDocument();
    expect(
      screen.getByText("On Thin Perfect Matchings up to Polylogarithmic Factors"),
    ).toBeInTheDocument();
    expect(screen.getByText("On the Gap of Finite Posets")).toBeInTheDocument();
    expect(screen.getByText("Parallel Sampling from the Ising p-Spin Model")).toBeInTheDocument();
    expect(screen.getByText("On Rounding on the Hypersimplex")).toBeInTheDocument();
    expect(screen.getByText("STOC 2026, pp. 1168-1179")).toBeInTheDocument();
    expect(
      screen.getByText("Journal of Combinatorial Optimization 51(3), 39, 2026"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Undergraduate Research Experience" }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: "Research" })).not.toBeInTheDocument();
    expect(screen.queryByText("Randomized sampling and counting")).not.toBeInTheDocument();
    expect(screen.queryByText("Graduate Research")).not.toBeInTheDocument();
    expect(screen.getAllByText(/arXiv preprint/)).toHaveLength(5);
    expect(screen.getAllByRole("listitem").length).toBeGreaterThanOrEqual(8);
  });

  it("links to verified profile destinations", () => {
    render(<Index />);

    expect(screen.getByRole("link", { name: /Google Scholar/ })).toHaveAttribute(
      "href",
      "https://scholar.google.com/citations?user=N_DeI4IAAAAJ&hl=en",
    );
    expect(screen.getByRole("link", { name: /CV/ })).toHaveAttribute(
      "href",
      "/Alireza_Haqi_CV.pdf",
    );
  });
});
