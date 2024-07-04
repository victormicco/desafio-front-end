import { render, screen } from "@testing-library/react";

import { dataSales } from "../mock/data-sales";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import CardOfSales from "./card-of-sales";

describe("CardOfSales Component", () => {
  it("should render the card title and description", () => {
    render(<CardOfSales />);
    expect(screen.getByText(/Vendas Hoje/i)).toBeInTheDocument();
    expect(screen.getByText(/Resumo das vendas/i)).toBeInTheDocument();
  });

  it("should render the export button", () => {
    render(<CardOfSales />);
    const button = screen.getByRole("button", { name: /Exportar/i });
    expect(button).toBeInTheDocument();
  });

  it("should render the correct number of sales items", () => {
    render(<CardOfSales />);
    const salesItems = screen.getAllByRole("heading", { level: 2 });
    expect(salesItems).toHaveLength(dataSales.length);
  });

  it("should render each sales item with correct data", () => {
    render(<CardOfSales />);
    dataSales.forEach((item) => {
      expect(screen.getByText(new RegExp(item.title, "i"))).toBeInTheDocument();
      expect(screen.getByText(item.value)).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(item.percentage, "i"))
      ).toBeInTheDocument();
    });
  });
});
