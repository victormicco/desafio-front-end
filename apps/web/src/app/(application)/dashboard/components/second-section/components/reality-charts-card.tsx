import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { GetRealityStatsResponse } from "@/services/dashboard/types";
import { Briefcase, Ticket as TicketIcon } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { realityStats as mockRealityStats } from "../mock/reality-charts-data";

type RealityCardProps = {
  getRealityStats: () => Promise<GetRealityStatsResponse[]>;
  additionalClass?: string;
};

export const RealityCard: React.FC<RealityCardProps> = ({
  getRealityStats,
  additionalClass,
}) => {
  const [data, setData] = useState<GetRealityStatsResponse[]>(mockRealityStats);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getRealityStats();
        setData(response);
      } catch (error) {
        console.error("Failed to fetch data from API, using mock data.", error);
      }
    }

    fetchData();
  }, [getRealityStats]);

  return (
    <Card className={additionalClass}>
      <CardHeader>
        <CardTitle>Realidade</CardTitle>
      </CardHeader>
      <CardContent className="h-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={4} barCategoryGap={4}>
            <XAxis
              dataKey="name"
              tickLine={false}
              axisLine={{ strokeWidth: 0 }}
              tick={{
                fontSize: "12px",
                fontWeight: "500",
                fill: "#7B91B0",
              }}
            />
            <Tooltip />
            <Bar
              dataKey="completedContracts"
              name="Contratos finalizados"
              fill="#4AB58E"
              radius={4}
            />
            <Bar
              dataKey="pendingContracts"
              name="Aguardando"
              fill="#FFCF00"
              radius={4}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
      <CardFooter className="space-y-2 flex-col flex items-start">
        <div className="flex  gap-2">
          <div className="bg-[#E2FFF3] p-2.5 rounded-lg">
            <Briefcase size={16} color="#4AB58E" />
          </div>
          <div>
            <h3 className="text-sm font-bold">Contratos finalizados</h3>
            <p className="text-muted-foreground text-xs">Global</p>
          </div>

          <p className="text-[#4AB58E] text-sm">4.987</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="bg-[#FFF4DE] p-2.5 rounded-lg">
            <TicketIcon size={16} color="#FFB21C" />
          </div>
          <div>
            <h3 className="text-sm font-bold">Aguardando</h3>
            <p className="text-muted-foreground text-xs">Comercial</p>
          </div>
          <p className="text-[#FFB21C] text-sm">17.623</p>
        </div>
      </CardFooter>
    </Card>
  );
};

type AlternativeRealityCardProps = {
  getRealityStats: () => Promise<GetRealityStatsResponse[]>;
};
