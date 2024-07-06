import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  Legend,
  LegendProps,
} from "recharts";
import { GetServiceLevelResponse } from "@/services/dashboard/types";

export interface ServiceLevelData {
  expectation: number;
  reality: number;
}

const calculateTotal = (
  key: keyof ServiceLevelData,
  data: ServiceLevelData[]
): number => {
  return data.reduce((sum, item) => sum + item[key], 0);
};

const CustomLegend: React.FC<LegendProps & { data: ServiceLevelData[] }> = ({
  payload,
  data,
}) => (
  <div className="flex gap-3 border-t flex-wrap justify-center">
    {payload?.map((entry, index) => (
      <div key={`item-${index}`} className="flex flex-col capitalize">
        <div className="text-[#96A5B8] flex items-center gap-1">
          <div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: entry.color }}
          ></div>
          {entry.value}
        </div>
        <p className="font-bold ml-4">
          {calculateTotal(entry.value as keyof ServiceLevelData, data)}
        </p>
      </div>
    ))}
  </div>
);

type ServiceLevelChartProps = {
  getServiceLevel: () => Promise<GetServiceLevelResponse[]>;
};

export const ServiceLevelChart: React.FC<ServiceLevelChartProps> = ({
  getServiceLevel,
}) => {
  const [data, setData] = useState<ServiceLevelData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getServiceLevel();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch data from API.", error);
      }
    }

    fetchData();
  }, [getServiceLevel]);

  return (
    <Card className="xl:w-1/4 pb-4 h-full">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="flex flex-col gap-3 text-2xl">
          Nível de Serviço
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer height={205}>
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <Legend
              wrapperStyle={{ fontSize: "14px" }}
              content={<CustomLegend data={data} />}
            />
            <Tooltip />
            <Bar
              barSize={20}
              stackId="a"
              dataKey="expectation"
              fill="#00e096"
            />
            <Bar barSize={20} stackId="a" dataKey="reality" fill="#0095ff" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
