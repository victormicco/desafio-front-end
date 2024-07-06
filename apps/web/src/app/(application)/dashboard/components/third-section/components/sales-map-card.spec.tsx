import React from "react";
import { render, screen } from "@testing-library/react";
import { SalesMap } from "./sales-map-card";
import { salesMapDataRaw } from "../mock/salesMapDataRaw";
import { describe, expect, it, vi } from "vitest";
import { GetMapOfSalesResponse } from "@/services/dashboard/types";

vi.mock("react-google-charts");

const mockGetMapOfSales: () => Promise<GetMapOfSalesResponse[]> = vi.fn(() =>
  Promise.resolve(salesMapDataRaw)
);

describe("SalesMap Component", () => {
  it("should render the card title", () => {
    render(<SalesMap getMapOfSales={mockGetMapOfSales} />);
    expect(screen.getByText("Mapeamento de Vendas por UF")).toBeInTheDocument();
  });
});
