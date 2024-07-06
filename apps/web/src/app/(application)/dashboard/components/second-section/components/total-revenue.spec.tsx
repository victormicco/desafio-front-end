import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import TotalRevenue from "./total-revenue";
import { totalRevenueData } from "../mock/total-revenue-data";

type DataKeys = "dia" | "Pendente" | "Concluido";

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
    Bar: ({ children }: { children: React.ReactNode }) => (
      <div className="recharts-bar">{children}</div>
    ),
    CartesianGrid: () => <div className="recharts-cartesiangrid" />,
    XAxis: ({ dataKey }: { dataKey: DataKeys }) => (
      <div className="recharts-xaxis">
        {totalRevenueData.map((data) => (
          <div key={data.dia}>{data[dataKey]}</div>
        ))}
      </div>
    ),
    YAxis: () => <div className="recharts-yaxis" />,
    Tooltip: () => <div className="recharts-tooltip" />,
    Legend: () => <div className="recharts-legend" />,
  };
});

async function getMockedTotalRevenueData() {
  return totalRevenueData;
}

describe("TotalRevenue Component", () => {
  it("should render the card title", async () => {
    render(<TotalRevenue getTotalRevenueData={getMockedTotalRevenueData} />);
    await waitFor(() => {
      expect(screen.getByText(/Rendimento Total/i)).toBeInTheDocument();
    });
  });

  it("should render the BarChart with data", async () => {
    const { container } = render(
      <TotalRevenue getTotalRevenueData={getMockedTotalRevenueData} />
    );
    await waitFor(() => {
      const barChart = container.querySelector(".recharts-barchart");
      expect(barChart).toBeInTheDocument();
    });
  });

  it("should render the correct number of bars in the chart", async () => {
    const { container } = render(
      <TotalRevenue getTotalRevenueData={getMockedTotalRevenueData} />
    );
    await waitFor(() => {
      const bars = container.querySelectorAll(".recharts-bar");
      expect(bars).toHaveLength(2);
    });
  });

  it("should display the correct data in the chart", async () => {
    render(<TotalRevenue getTotalRevenueData={getMockedTotalRevenueData} />);
    await waitFor(() => {
      totalRevenueData.forEach((data) => {
        const xAxisElement = screen.getByText(new RegExp(data.dia, "i"));
        expect(xAxisElement).toBeInTheDocument();
      });
    });
  });
});
