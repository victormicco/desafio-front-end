import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Upload } from "lucide-react";
import { useState, useEffect } from "react";
import { dashboardService } from "@/services/dashboard";
import { dataSales as mockDataSales } from "../mock/data-sales";
import {
  GanttChartSquare,
  File,
  Tag,
  UserPlus,
  LucideProps,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { GetDataSalesResponse } from "@/services/dashboard/types";
import { useToast } from "@/components/ui/use-toast";

type CardOfSalesProps = {
  className?: string;
  getDataSalesInversion: () => Promise<GetDataSalesResponse[]>;
};

type IconType = ForwardRefExoticComponent<
  Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

const iconMapping: Record<string, IconType> = {
  GanttChartSquare: GanttChartSquare,
  File: File,
  Tag: Tag,
  UserPlus: UserPlus,
};

export default function CardOfSales({
  className,
  getDataSalesInversion,
}: CardOfSalesProps) {
  const [dataSales, setDataSales] = useState(mockDataSales);
  const { toast } = useToast();
  async function getDataSales() {
    try {
      const response = await getDataSalesInversion();

      if (
        Array.isArray(response) &&
        response.every(
          (item) =>
            item.id &&
            item.title &&
            item.icon &&
            item.value &&
            item.percentage &&
            item.backgroundColor
        )
      ) {
        const mappedResponse = response.map((item) => ({
          ...item,
          icon:
            typeof item.icon === "string"
              ? iconMapping[item.icon] || (() => <div>Icon not found</div>)
              : item.icon,
        }));
        setDataSales(mappedResponse);
      }
    } catch (error) {
      console.error("Failed to fetch data from API, using mock data.", error);
    }
  }

  useEffect(() => {
    getDataSales();
  }, []);

  return (
    <Card className={className}>
      <CardHeader className="flex">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <CardTitle>Vendas Hoje</CardTitle>
            <CardDescription>Resumo das vendas</CardDescription>
          </div>
          <Button
            variant="outline"
            className="flex gap-x-2"
            onClick={() =>
              toast({
                title: "Dados exportados com sucesso!",
                description: "Mentira, está tudo mockado! 😅",
                className: "bg-green-500 text-white",
              })
            }
          >
            <Upload className="h-4 w-4" />
            Exportar
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex gap-x-14 w-full overflow-x-auto h-48">
        {dataSales.map((itemCard) => {
          const Icon = itemCard.icon;
          return (
            <div
              key={itemCard.id}
              className={`flex p-4 border rounded-md flex-col justify-start bg-opacity-20 ${itemCard.backgroundColor} gap-y-2 items-start xl:w-1/4 min-w-40`}
            >
              <Icon
                className={`h-10 w-10 ${itemCard.backgroundColor} md:p-2 p-1 rounded-full text-background`}
              />
              <div className="h-24">
                <h2 className="text-xl font-semibold">{itemCard.value}</h2>
                <h3 className="text-sm text-gray-500">{itemCard.title}</h3>
                <p className="text-xs text-blue-600">{itemCard.percentage}</p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
