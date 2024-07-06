import { apiDashboard } from "@/lib/ky";
import {
  GetDataPlatformResponse,
  GetDataSalesResponse,
  GetLivesChartDataResponse,
  GetMapOfSalesResponse,
  GetRealityStatsResponse,
  GetServiceLevelResponse,
  GetTopProductsResponse,
  GetTotalRevenueResponse,
} from "./types";

export const dashboardService = {
  async getDataSales() {
    const response = await apiDashboard.get("dataSales", {
      cache: "no-store",
      timeout: false,
    });
    const data = await response.json<GetDataSalesResponse[]>();
    return data;
  },

  async getDataPlatform() {
    const response = await apiDashboard.get("dataPlatform", {
      cache: "no-store",
      timeout: false,
    });
    const data = await response.json<GetDataPlatformResponse[]>();
    return data;
  },

  async getTotalRevenue() {
    const response = await apiDashboard.get("totalRevenue", {
      cache: "no-store",
      timeout: false,
    });
    const data = await response.json<GetTotalRevenueResponse[]>();
    return data;
  },

  async getLivesChartData() {
    const response = await apiDashboard.get("livesChartData", {
      cache: "no-store",
      timeout: false,
    });
    const data = await response.json<GetLivesChartDataResponse[]>();
    return data;
  },

  async getRealityStats() {
    const response = await apiDashboard.get("realityStats", {
      cache: "no-store",
      timeout: false,
    });
    const data = await response.json<GetRealityStatsResponse[]>();
    return data;
  },

  async getTopProducts() {
    const response = await apiDashboard.get("topProducts", {
      cache: "no-store",
      timeout: false,
    });
    const data = await response.json<GetTopProductsResponse[]>();
    return data;
  },

  async getMapOfSales() {
    const response = await apiDashboard.get("mapOfSales", {
      cache: "no-store",
      timeout: false,
    });
    return response.json<GetMapOfSalesResponse[]>();
  },

  async getServiceLevel() {
    const response = await apiDashboard.get("serviceLevel", {
      cache: "no-store",
      timeout: false,
    });
    return response.json<GetServiceLevelResponse[]>();
  },
};
