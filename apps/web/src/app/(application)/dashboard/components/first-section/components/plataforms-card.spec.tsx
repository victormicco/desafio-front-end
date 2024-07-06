import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { CardPlatform } from "./platforms-card";
import { dataPlatformCard } from "../mock/data-platform";

async function getMockedPlatformData() {
  return dataPlatformCard;
}


type DataKeys = "name" | "TD Consultoria" | "RIKO Plataforma" | "Blue Serviços";


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
    LineChart: ({ children }: { children: React.ReactNode }) => (
      <div className="recharts-linechart">{children}</div>
    ),
    Line: ({ children }: { children: React.ReactNode }) => (
      <div className="recharts-line">{children}</div>
    ),
    CartesianGrid: () => <div className="recharts-cartesiangrid" />,
    XAxis: ({ dataKey }: { dataKey: DataKeys }) => (
      <div className="recharts-xaxis">
        {dataPlatformCard.map((data) => (
          <div key={data.name}>{data[dataKey]}</div>
        ))}
      </div>
    ),
    YAxis: () => <div className="recharts-yaxis" />,
    Legend: () => <div className="recharts-legend" />,
  };
});

describe("CardPlatform Component", () => {
  it("should render the card title", async () => {
    render(<CardPlatform getDataPlatformInversion={getMockedPlatformData} />);
    await waitFor(() => {
      expect(screen.getByText(/Plataformas/i)).toBeInTheDocument();
    });
  });

  it("should render the LineChart with data", async () => {
    const { container } = render(
      <CardPlatform getDataPlatformInversion={getMockedPlatformData} />
    );
    await waitFor(() => {
      const lineChart = container.querySelector(".recharts-linechart");
      expect(lineChart).toBeInTheDocument();
    });
  });

  it("should render the correct number of lines in the chart", async () => {
    const { container } = render(
      <CardPlatform getDataPlatformInversion={getMockedPlatformData} />
    );
    await waitFor(() => {
      const lines = container.querySelectorAll(".recharts-line");
      expect(lines).toHaveLength(3);
    });
  });

  it("should display the correct data in the chart", async () => {
    render(<CardPlatform getDataPlatformInversion={getMockedPlatformData} />);
    await waitFor(() => {
      dataPlatformCard.forEach((data) => {
        const xAxisElement = screen.getByText(new RegExp(data.name, "i"));
        expect(xAxisElement).toBeInTheDocument();
      });
    });
  });
});
