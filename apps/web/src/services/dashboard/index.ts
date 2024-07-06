import { apiDashboard } from "@/lib/ky";

export const dashboardService = {
  async getDataSales() {
    const response = await apiDashboard.get("dataSales", {
      cache: "no-store",
      timeout: false,
    });
    const data = await response.json();
    return data;
  },
};
