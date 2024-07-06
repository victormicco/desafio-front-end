"use client";

import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart } from "react-google-charts";
import { salesMapDataRaw } from "../mock/salesMapDataRaw";
import { GetMapOfSalesResponse } from "@/services/dashboard/types";

const mapOptions = {
  region: "BR",
  displayMode: "regions",
  resolution: "provinces",
  colorAxis: { colors: ["#CCCCCC", "#2500FF"] },
  legend: "none",
  magnifyingGlass: { enable: true, zoomFactor: 10 },
};

export interface SalesData {
  state: string;
  sales: number;
}

const transformData = (data: SalesData[]): (string | number)[][] => {
  const transformed: (string | number)[][] = [["State", "Sales"]];
  data.forEach((item) => {
    transformed.push([item.state, item.sales]);
  });
  return transformed;
};

type SalesMapProps = {
  getMapOfSales: () => Promise<GetMapOfSalesResponse[]>;
};

export const SalesMap: React.FC<SalesMapProps> = ({ getMapOfSales }) => {
  const [chartData, setChartData] = useState<(string | number)[][]>(
    transformData(salesMapDataRaw)
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getMapOfSales();
        setChartData(transformData(response));
      } catch (error) {
        console.error("Failed to fetch data from API, using mock data.", error);
      }
    }

    fetchData();
  }, [getMapOfSales]);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Mapeamento de Vendas por UF</CardTitle>
        </CardHeader>
        <CardContent className="flex overflow-auto xl:h-[180px] justify-center">
          <Chart
            chartType="GeoChart"
            width={300}
            height={150}
            data={chartData}
            options={mapOptions}
            className=""
          />
        </CardContent>
      </Card>
    </div>
  );
};
