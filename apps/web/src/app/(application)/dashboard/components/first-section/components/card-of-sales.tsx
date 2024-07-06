"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { dashboardService } from "@/services/dashboard";
import { dataSales as mockDataSales } from "../mock/data-sales";
import {
  GanttChartSquare,
  File,
  Tag,
  UserPlus,
  LucideProps,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type CardOfSalesProps = {
  className?: string;
};

// Define the icon type
type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

// Mapping of icon names to components
const iconMapping: Record<string, IconType> = {
  GanttChartSquare: GanttChartSquare,
  File: File,
  Tag: Tag,
  UserPlus: UserPlus,
};

export default function CardOfSales({ className }: CardOfSalesProps) {
  const [dataSales, setDataSales] = useState(mockDataSales);

  async function getDataSales() {
    try {
      const response = await dashboardService.getDataSales();
      // Validate the response data structure
      if (
        Array.isArray(response) &&
        response.every(
          (item) =>
            item.id &&
            item.title &&
            item.icon &&
            item.value &&
            item.percentage &&
            item.backgroundColor
        )
      ) {
        // Map icon strings to actual icon components
        const mappedResponse = response.map((item) => ({
          ...item,
          icon: iconMapping[item.icon] || (() => <div>Icon not found</div>),
        }));
        setDataSales(mappedResponse);
      }
    } catch (error) {
      console.error("Failed to fetch data from API, using mock data.", error);
    }
  }

  useEffect(() => {
    getDataSales();
  }, []);

  return (
    <Card className={className}>
      <CardHeader className="flex">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <CardTitle>Vendas Hoje</CardTitle>
            <CardDescription>Resumo das vendas</CardDescription>
          </div>
          <Button variant="outline" className="flex gap-x-2">
            <Upload className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex gap-x-14 w-full overflow-x-auto h-48">
        {dataSales.map((itemCard) => {
          const Icon = itemCard.icon;
          return (
            <div
              key={itemCard.id}
              className={`flex p-4 border rounded-md flex-col justify-start bg-opacity-20 ${itemCard.backgroundColor} gap-y-2 items-start xl:w-1/4 min-w-40`}
            >
              <Icon
                className={`h-10 w-10 ${itemCard.backgroundColor} md:p-2 p-1 rounded-full text-background`}
              />
              <div className="h-24">
                <h2 className="text-xl font-semibold">{itemCard.value}</h2>
                <h3 className="text-sm text-gray-500">{itemCard.title}</h3>
                <p className="text-xs text-blue-600">{itemCard.percentage}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
