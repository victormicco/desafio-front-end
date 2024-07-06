"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Chart } from "react-google-charts";
import { salesMapDataRaw } from "../mock/salesMapDataRaw";

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

export const SalesMap: React.FC = () => {
  const chartData = transformData(salesMapDataRaw);

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Mapeamento de Vendas por UF</CardTitle>
        </CardHeader>
        <CardContent className="flex overflow-auto h-[205px] justify-center">
          <Chart
            chartType="GeoChart"
            width={300}
            height={400}
            data={chartData}
            options={mapOptions}
            className=""
          />
        </CardContent>
      </Card>
    </div>
  );
};
