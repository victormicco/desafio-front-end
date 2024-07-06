"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { dataPlatformCard as mockDataPlatformCard } from "../mock/data-platform";
import { GetDataPlatformResponse } from "@/services/dashboard/types";

type CardPlatformProps = {
  className?: string;
  getDataPlatformInversion: () => Promise<GetDataPlatformResponse[]>;
};

export function CardPlatform({
  className,
  getDataPlatformInversion,
}: CardPlatformProps) {
  const [dataPlatformCard, setDataPlatformCard] =
    useState(mockDataPlatformCard);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDataPlatformInversion();

        if (
          Array.isArray(data) &&
          data.every(
            (item) =>
              item.name &&
              item["TD Consultoria"] !== undefined &&
              item["RIKO Plataforma"] !== undefined &&
              item["Blue Serviços"] !== undefined
          )
        ) {
          setDataPlatformCard(data);
        }
      } catch (error) {
        console.error("Failed to fetch data from API, using mock data.", error);
      }
    }

    fetchData();
  }, [getDataPlatformInversion]);

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
