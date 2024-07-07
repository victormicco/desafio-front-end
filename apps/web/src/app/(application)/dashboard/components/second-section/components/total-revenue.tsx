import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import type { GetTotalRevenueResponse } from "@/services/dashboard/types";
import type React from "react";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { totalRevenueData as mockTotalRevenueData } from "../mock/total-revenue-data";

type TotalRevenueProps = {
  className?: string;
  getTotalRevenueData: () => Promise<GetTotalRevenueResponse[]>;
};

const ChartContent: React.FC<{ data: GetTotalRevenueResponse[] }> = ({
  data,
}) => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={data} barGap={8} barCategoryGap={28}>
      <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
      <XAxis
        dataKey="dia"
        tickLine={false}
        axisLine={{ strokeWidth: 0 }}
        tick={{ fontSize: 12, fill: "#888888" }}
      />
      <YAxis
        axisLine={false}
        ticks={[0, 10000, 20000, 30000, 40000]}
        tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000} mil`)}
        tick={{ fontSize: 12, fill: "#888888" }}
      />
      <Tooltip />
      <Legend iconType="plainline" />
      <Bar dataKey="Pendente" fill="#5395FF" radius={[10, 10, 0, 0]} />
      <Bar dataKey="Concluido" fill="#00E474" radius={[10, 10, 0, 0]} />
    </BarChart>
  </ResponsiveContainer>
);

const TotalRevenue: React.FC<TotalRevenueProps> = ({
  className,
  getTotalRevenueData,
}) => {
  const [data, setData] =
    useState<GetTotalRevenueResponse[]>(mockTotalRevenueData);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getTotalRevenueData();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch data from API, using mock data.", error);
      }
    }

    fetchData();
  }, [getTotalRevenueData]);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Rendimento Total</CardTitle>
      </CardHeader>
      <div className="h-[230px]">
        <ChartContent data={data} />
      </div>
    </Card>
  );
};

export default TotalRevenue;
