import { File, GanttChartSquare, Tag, UserPlus } from "lucide-react";

export const dataSales = [
  {
    id: 1,
    title: "Total de vendas",
    icon: GanttChartSquare,
    value: "$09",
    percentage: "+17.7%",
    backgroundColor: "bg-red-500",
  },
  {
    id: 2,
    title: "Total de contratos",
    icon: File,
    value: "125",
    percentage: "+174.8%",
    backgroundColor: "bg-orange-500",
  },
  {
    id: 3,
    title: "Implantadas",
    icon: Tag,
    value: "2",
    percentage: "+23%",
    backgroundColor: "bg-green-500",
  },
  {
    id: 4,
    title: "Novos contratos",
    icon: UserPlus,
    value: "4",
    percentage: "+142",
    backgroundColor: "bg-violet-500",
  },
];
