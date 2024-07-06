import { LucideIcon } from "lucide-react";

export interface GetDataSalesResponse {
  id: number;
  title: string;
  icon: string | LucideIcon;
  value: string;
  percentage: string;
  backgroundColor: string;
}

export interface GetDataPlatformResponse {
  name: string;
  "TD Consultoria": number;
  "RIKO Plataforma": number;
  "Blue Serviços": number;
}

export interface GetTotalRevenueResponse {
  dia: string;
  Pendente: number;
  Concluido: number;
}

export interface GetLivesChartDataResponse {
  previousMonth: number;
  currentMonth: number;
}

export interface GetRealityStatsResponse {
  name: string;
  completedContracts: number;
  pendingContracts: number;
}

export interface GetTopProductsResponse {
  id: string;
  name: string;
  leverage: number;
  percentage: number;
  category: string;
}

export interface GetMapOfSalesResponse {
  state: string;
  sales: number;
}

export interface GetServiceLevelResponse {
  expectation: number;
  reality: number;
}
