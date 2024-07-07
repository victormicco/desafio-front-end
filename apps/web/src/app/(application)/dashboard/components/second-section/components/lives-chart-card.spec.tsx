import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, expect, it, vi } from "vitest";

import { livesChartData } from "../mock/lives-chart";
import CardLifeAlt from "./lives-chart-card";

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
    AreaChart: ({ children }: { children: React.ReactNode }) => (
      <div className="recharts-areachart">{children}</div>
    ),
    Area: () => <div className="recharts-area" />,
    CartesianGrid: () => <div className="recharts-cartesiangrid" />,
    XAxis: () => <div className="recharts-xaxis" />,
    YAxis: () => <div className="recharts-yaxis" />,
    Tooltip: () => <div className="recharts-tooltip" />,
    Legend: () => <div className="recharts-legend" />,
    defs: ({ children }: { children: React.ReactNode }) => (
      <div className="recharts-defs">{children}</div>
    ),
    linearGradient: ({
      children,
      id,
    }: {
      children: React.ReactNode;
      id: string;
    }) => (
      <div className="recharts-linearGradient" id={id}>
        {children}
      </div>
    ),
    stop: () => <div className="recharts-stop" />,
  };
});

async function getMockedLivesChartData() {
  return livesChartData;
}

describe("CardLifeAlt Component", () => {
  it("should render the card title", async () => {
    render(<CardLifeAlt getLivesChartData={getMockedLivesChartData} />);
    await waitFor(() => {
      expect(screen.getByText(/Vidas/i)).toBeInTheDocument();
    });
  });

  it("should render the AreaChart with data", async () => {
    const { container } = render(
      <CardLifeAlt getLivesChartData={getMockedLivesChartData} />,
    );
    await waitFor(() => {
      const areaChart = container.querySelector(".recharts-areachart");
      expect(areaChart).toBeInTheDocument();
    });
  });

  it("should render the correct number of areas in the chart", async () => {
    const { container } = render(
      <CardLifeAlt getLivesChartData={getMockedLivesChartData} />,
    );
    await waitFor(() => {
      const areas = container.querySelectorAll(".recharts-area");
      expect(areas).toHaveLength(2);
    });
  });
});
