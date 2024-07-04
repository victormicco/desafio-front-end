"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";

import { Briefcase, Ticket as TicketIcon } from "lucide-react";
import { realityStats } from "../mock/reality-charts-data";

type RealityCardProps = {
  additionalClass?: string;
};

export const RealityCard: React.FC<RealityCardProps> = ({
  additionalClass,
}) => {
  return (
    <Card className={additionalClass}>
      <CardHeader>
        <CardTitle>Realidade</CardTitle>
      </CardHeader>
      <CardContent className="h-1/2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={realityStats} barGap={4} barCategoryGap={4}>
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

export const AlternativeRealityCard: React.FC = () => {
  return (
    <Card title="Realidade">
      <div className="flex w-full h-[350px] 2xl:w-[300px] 2xl:h-[250px] flex-col gap-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={realityStats} barGap={4} barCategoryGap={4}>
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
              radius={3}
            />
            <Bar
              dataKey="pendingContracts"
              name="Aguardando"
              fill="#FFCF00"
              radius={3}
            />
          </BarChart>
        </ResponsiveContainer>

        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-[#E2FFF3] p-2.5 rounded-lg">
                <Briefcase size={16} color="#4AB58E" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#151D48] text-sm font-bold">
                  Contratos finalizados
                </h3>
                <span className="text-[#737791] text-xs">Global</span>
              </div>
            </div>
            <span className="text-[#27AE60] font-semibold">8.823</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-[#FFF4DE] p-2.5 rounded-lg">
                <TicketIcon size={16} color="#FFB21C" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#151D48] text-sm font-bold">Aguardando</h3>
                <span className="text-[#737791] text-xs">Commercial</span>
              </div>
            </div>
            <span className="text-[#FFA412] font-semibold">12.122</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
