"use client";

import React from "react";
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
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { totalRevenueData } from "../mock/total-revenue-data";

type TotalRevenueProps = {
  className?: string;
};

const ChartContent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <BarChart data={totalRevenueData} barGap={8} barCategoryGap={28}>
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

const TotalRevenue: React.FC<TotalRevenueProps> = ({ className }) => (
  <Card className={className}>
    <CardHeader>
      <CardTitle>Rendimento Total</CardTitle>
    </CardHeader>
    <div className="h-[230px]">
      <ChartContent />
    </div>
  </Card>
);

export default TotalRevenue;
