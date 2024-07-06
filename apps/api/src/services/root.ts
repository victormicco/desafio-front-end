import { dataPlatform } from "./mocks/data-plataform";
import { totalRevenueData } from "./mocks/data-total-revenue";
import { livesChartData } from "./mocks/lives-chart";
import { realityStats } from "./mocks/reality-charts-data";
import { dataSales } from "./mocks/today-sales-data";

export class RootService {
  async todaySales() {
    return dataSales;
  }

  async dataPlataform() {
    return dataPlatform;
  }

  async totalRevenue() {
    return totalRevenueData;
  }

  async livesChartData() {
    return livesChartData;
  }
  async realityStats() {
    return realityStats;
  }
}
