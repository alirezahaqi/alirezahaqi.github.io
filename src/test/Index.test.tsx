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
    expect(
      screen.getByText("Constant-Stretch Rounding on the Hypersimplex"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Undergraduate Research Experience" }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Graduate Research")).not.toBeInTheDocument();
    expect(screen.getAllByText(/arXiv preprint/)).toHaveLength(5);
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
