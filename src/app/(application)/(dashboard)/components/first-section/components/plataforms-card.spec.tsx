import { render, screen } from "@testing-library/react";

import { dataPlatformCard } from "../mock/data-platform";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { CardPlatform } from "./platforms-card";


vi.mock("recharts", async () => {
  const actual = await vi.importActual("recharts");
  return {
    ...actual,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div style={{ width: "500px", height: "500px" }}>{children}</div>
    ),
  };
});

describe("CardPlatform Component", () => {
  it("should render the card title", () => {
    render(<CardPlatform />);
    const cardTitle = screen.getByText(/Plataformas/i);
    expect(cardTitle).toBeInTheDocument();
  });

  it("should render the LineChart with data", () => {
    const { container } = render(<CardPlatform />);
    const lineChart = container.querySelector(".recharts-wrapper");
    expect(lineChart).toBeInTheDocument();
  });

  it("should render the correct number of lines in the chart", () => {
    const { container } = render(<CardPlatform />);
    const lines = container.querySelectorAll(".recharts-line");
    expect(lines).toHaveLength(3);
  });

  it("should display the correct data in the chart", () => {
    render(<CardPlatform />);
    dataPlatformCard.forEach((data) => {
      const xAxisElement = screen.getByText(new RegExp(data.name, "i"));
      expect(xAxisElement).toBeInTheDocument();
    });
  });
});
