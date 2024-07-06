import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { TopProductCard } from "./top-products-card";
import { productsData as mockProductsData } from "../mock/top-products-data";

// Define types for the mocked components
type CardProps = {
  children: React.ReactNode;
  className?: string;
};

type TableProps = {
  children: React.ReactNode;
};

vi.mock("@/components/ui/card", async () => {
  const actual = await vi.importActual("@/components/ui/card");
  return {
    ...actual,
    Card: ({ children, className }: CardProps) => (
      <div className={className}>{children}</div>
    ),
    CardContent: ({ children }: TableProps) => <div>{children}</div>,
    CardHeader: ({ children }: TableProps) => <div>{children}</div>,
    CardTitle: ({ children }: TableProps) => <div>{children}</div>,
  };
});

vi.mock("@/components/ui/table", async () => {
  const actual = await vi.importActual("@/components/ui/table");
  return {
    ...actual,
    Table: ({ children }: TableProps) => <table>{children}</table>,
    TableBody: ({ children }: TableProps) => <tbody>{children}</tbody>,
    TableCell: ({ children }: TableProps) => <td>{children}</td>,
    TableHead: ({ children }: TableProps) => <th>{children}</th>,
    TableHeader: ({ children }: TableProps) => <thead>{children}</thead>,
    TableRow: ({ children }: TableProps) => <tr>{children}</tr>,
  };
});

const mockGetProductsData = vi.fn().mockResolvedValue(mockProductsData);

describe("TopProductCard Component", () => {
  it("should render the card title", async () => {
    render(<TopProductCard getProductsData={mockGetProductsData} />);
    await waitFor(() => {
      expect(screen.getByText(/Top Produtos/i)).toBeInTheDocument();
    });
  });

  it("should render the table with product data", async () => {
    render(<TopProductCard getProductsData={mockGetProductsData} />);
    await waitFor(() => {
      mockProductsData.forEach((product) => {
        expect(screen.getByText(product.name)).toBeInTheDocument();
        expect(screen.getByText(`${product.leverage}%`)).toBeInTheDocument();
        expect(screen.getByText(`${product.percentage}%`)).toBeInTheDocument();
      });
    });
  });

  it("should display the correct product data", async () => {
    render(<TopProductCard getProductsData={mockGetProductsData} />);
    await waitFor(() => {
      mockProductsData.forEach((product) => {
        const productName = screen.getByText(new RegExp(product.name, "i"));
        const leverage = screen.getByText(
          new RegExp(`${product.leverage}%`, "i")
        );
        const percentage = screen.getByText(
          new RegExp(`${product.percentage}%`, "i")
        );

        expect(productName).toBeInTheDocument();
        expect(leverage).toBeInTheDocument();
        expect(percentage).toBeInTheDocument();
      });
    });
  });
});
