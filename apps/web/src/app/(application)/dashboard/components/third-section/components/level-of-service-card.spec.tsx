import type { GetServiceLevelResponse } from "@/services/dashboard/types";
import { render, screen, waitFor } from "@testing-library/react";
import type React from "react";
import { describe, expect, it, vi } from "vitest";
import { serviceLevelData } from "../mock/service-level-data";
import { ServiceLevelChart } from "./level-of-service-card";

vi.mock("recharts", async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...(actual as object),
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    BarChart: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
    Bar: () => <div role="img" />,
    Tooltip: () => <div />,
    Legend: () => <div />,
  };
});

const mockGetServiceLevel: () => Promise<GetServiceLevelResponse[]> = vi.fn(
  () => Promise.resolve(serviceLevelData),
);

describe("ServiceLevelChart Component", () => {
  it("should render the card title", async () => {
    render(<ServiceLevelChart getServiceLevel={mockGetServiceLevel} />);
    expect(screen.getByText("Nível de Serviço")).toBeInTheDocument();
  });

  it("should render the BarChart with data", async () => {
    render(<ServiceLevelChart getServiceLevel={mockGetServiceLevel} />);
    await waitFor(() => {
      expect(screen.getAllByRole("img").length).toBeGreaterThan(0);
    });
  });
});
