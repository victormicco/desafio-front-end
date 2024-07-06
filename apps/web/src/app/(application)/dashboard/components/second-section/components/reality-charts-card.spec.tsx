import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { RealityCard } from "./reality-charts-card";
import { realityStats as mockRealityStats } from "../mock/reality-charts-data";

vi.mock("recharts", async () => {
  const actual = await vi.importActual("recharts");
  return {
    ...actual,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div
        className="recharts-wrapper"
        style={{ width: "100%", height: "100%" }}
      >
        {children}
      </div>
    ),
    BarChart: ({ children }: { children: React.ReactNode }) => (
      <div className="recharts-barchart">{children}</div>
    ),
    Bar: () => <div className="recharts-bar" />,
    XAxis: () => <div className="recharts-xaxis" />,
    Tooltip: () => <div className="recharts-tooltip" />,
  };
});

const mockGetRealityStats = vi.fn().mockResolvedValue(mockRealityStats);

describe("RealityCard Component", () => {
  it("should render the card title", async () => {
    render(<RealityCard getRealityStats={mockGetRealityStats} />);
    await waitFor(() => {
      expect(screen.getByText(/Realidade/i)).toBeInTheDocument();
    });
  });

  it("should render the BarChart with data", async () => {
    const { container } = render(
      <RealityCard getRealityStats={mockGetRealityStats} />
    );
    await waitFor(() => {
      const barChart = container.querySelector(".recharts-barchart");
      expect(barChart).toBeInTheDocument();
    });
  });

  it("should render the correct number of bars in the chart", async () => {
    const { container } = render(
      <RealityCard getRealityStats={mockGetRealityStats} />
    );
    await waitFor(() => {
      const bars = container.querySelectorAll(".recharts-bar");
      expect(bars).toHaveLength(2);
    });
  });
});
