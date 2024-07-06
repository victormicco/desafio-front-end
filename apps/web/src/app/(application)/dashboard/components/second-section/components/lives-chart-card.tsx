"use client";
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { GitCommitHorizontal } from "lucide-react";
import { livesChartData } from "../mock/lives-chart";

type DataItem = {
  previousMonth: number;
  currentMonth: number;
};

type CustomAreaChartProps = {
  data: DataItem[];
};

const CustomAreaChart: React.FC<CustomAreaChartProps> = ({ data }) => (
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={data}>
      <defs>
        <linearGradient id="previousMonth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#6698dc" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
        </linearGradient>
        <linearGradient id="currentMonth" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#CAF9E5" stopOpacity={1} />
          <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey="day" tickLine={false} axisLine={{ strokeWidth: 0 }} />
      <YAxis
        tickFormatter={(value) => (value === 0 ? "0" : `${value / 1000}k`)}
      />
      <CartesianGrid horizontal={true} vertical={false} />
      <Tooltip />
      <Legend iconType="circle" />
      <Area
        type="monotone"
        dataKey="previousMonth"
        name="Último mês"
        stroke="#007ED7"
        fillOpacity={1}
        strokeWidth={2}
        fill="url(#previousMonth)"
        dot
      />
      <Area
        type="monotone"
        dataKey="currentMonth"
        name="Este mês"
        stroke="#13CB8D"
        fillOpacity={1}
        strokeWidth={3}
        fill="url(#currentMonth)"
        dot
      />
    </AreaChart>
  </ResponsiveContainer>
);

const CardLifeAlt = () => {
  return (
    <Card className="xl:w-1/3 ">
      <CardHeader>
        <CardTitle>Vidas</CardTitle>
      </CardHeader>
      <CardContent className="h-3/5 w-full">
        <CustomAreaChart data={livesChartData} />
      </CardContent>
      <CardFooter className="flex justify-center gap-4">
        <div className="flex flex-col items-center">
          <div className="flex gap-1 items-center">
            <GitCommitHorizontal
              fill="#69B7E5"
              color="#69B7E5"
              size={16}
              strokeWidth={1.3}
            />
            <span className="text-gray-400">Ultimo mês</span>
          </div>
          <h3 className="text-[#222B45] font-semibold">1.553</h3>
        </div>
        <div className="border-r border-gray-300" />
        <div className="flex flex-col items-center">
          <div className="flex gap-1 items-center">
            <GitCommitHorizontal
              fill="#13CB8D"
              color="#13CB8D"
              size={16}
              strokeWidth={1.3}
            />
            <span className="text-gray-400">Este mês</span>
          </div>
          <h3 className="text-[#222B45] font-semibold">2.678</h3>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardLifeAlt;
