import { render, screen } from "@testing-library/react";

import { dataSales } from "../mock/data-sales";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import CardOfSales from "./card-of-sales";

async function getMockedSalesData() {
  return dataSales;
}

describe("CardOfSales Component", () => {
  it("should render the card title and description", () => {
    render(<CardOfSales getDataSalesInversion={getMockedSalesData} />);
    expect(screen.getByText(/Vendas Hoje/i)).toBeInTheDocument();
    expect(screen.getByText(/Resumo das vendas/i)).toBeInTheDocument();
  });

  it("should render the export button", () => {
    render(<CardOfSales getDataSalesInversion={getMockedSalesData} />);
    const button = screen.getByRole("button", { name: /Exportar/i });
    expect(button).toBeInTheDocument();
  });

  it("should render the correct number of sales items", () => {
    render(<CardOfSales getDataSalesInversion={getMockedSalesData} />);
    const salesItems = screen.getAllByRole("heading", { level: 2 });
    expect(salesItems).toHaveLength(dataSales.length);
  });
});
