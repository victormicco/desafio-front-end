"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { productsData } from "../mock/top-products-data";

type ProductCardProps = {
  customClass?: string;
};

const getClassNames = (type: string) => {
  switch (type) {
    case "primary":
      return "border-[#0095FF] text-[#0095FF]";
    case "secondary":
      return "border-[#00E096] text-[#00E096]";
    case "tertiary":
      return "border-[#884DFF] text-[#884DFF]";
    case "quaternary":
      return "border-[#FF8F0D] text-[#FF8F0D]";
    default:
      return "";
  }
};

const getProgressBackgroundClassNames = (type: string) => {
  switch (type) {
    case "primary":
      return "bg-[#0095FF33]";
    case "secondary":
      return "bg-[#00E09633]";
    case "tertiary":
      return "bg-[#884DFF33]";
    case "quaternary":
      return "bg-[#FF8F0D33]";
    default:
      return "";
  }
};

const getProgressClassNames = (type: string) => {
  switch (type) {
    case "primary":
      return "bg-[#0095FF]";
    case "secondary":
      return "bg-[#00E096]";
    case "tertiary":
      return "bg-[#884DFF]";
    case "quaternary":
      return "bg-[#FF8F0D]";
    default:
      return "";
  }
};

export const TopProductCard: React.FC<ProductCardProps> = ({ customClass }) => {
  return (
    <Card className={customClass}>
      <CardHeader>
        <CardTitle>Top Produtos</CardTitle>
      </CardHeader>
      <CardContent className="h-full">
        <Table className="h-full">
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Alavancagem</TableHead>
              <TableHead>%</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="h-1/4">
            {productsData.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  <div
                    className={`relative w-full h-2 rounded-lg ${getProgressBackgroundClassNames(
                      product.category
                    )}`}
                  >
                    <div
                      className={`absolute top-0 left-0 h-2 rounded-lg ${getProgressClassNames(
                        product.category
                      )}`}
                      style={{ width: `${product.leverage}%` }}
                    />
                  </div>
                  <span className="ml-2">{product.leverage}%</span>
                </TableCell>
                <TableCell className="">
                  <p
                    className={`text-center rounded-md border ${getClassNames(
                      product.category
                    )}`}
                  >
                    {product.percentage}%
                  </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
