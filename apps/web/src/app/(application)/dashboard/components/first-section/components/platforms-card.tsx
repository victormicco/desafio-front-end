"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { dataPlatformCard } from "../mock/data-platform";

type CardPlatformProps = {
  className?: string;
};

export function CardPlatform({ className }: CardPlatformProps) {
  const chartLines = useMemo(() => {
    const lines = [
      { key: "TD Consultoria", color: "#A700F8" },
      { key: "RIKO Plataforma", color: "#EF4423" },
      { key: "Blue Serviços", color: "#3CD8A0" },
    ];

    return lines.map((line) => (
      <Line
        key={line.key}
        type="monotone"
        dataKey={line.key}
        stroke={line.color}
        strokeWidth={4}
        dot={false}
      />
    ));
  }, []);

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Plataformas</CardTitle>
      </CardHeader>
      <CardContent className="h-80 md:h-[444px] xl:h-[220px] ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={dataPlatformCard}>
            <CartesianGrid horizontal={true} vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={{ strokeWidth: 0 }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              ticks={[0, 100, 200, 300, 400]}
              tickFormatter={(value) => `${value}`}
            />
            <Legend iconType="star" iconSize={15} />
            {chartLines}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
