import { dataPlatform } from "./mocks/data-plataform";
import { totalRevenueData } from "./mocks/data-total-revenue";
import { livesChartData } from "./mocks/lives-chart";
import { realityStats } from "./mocks/reality-charts-data";
import { salesMapDataRaw } from "./mocks/salesMapDataRaw";
import { serviceLevelData } from "./mocks/service-level-data";
import { dataSales } from "./mocks/today-sales-data";
import { productsData } from "./mocks/top-products-data";

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

  async topProducts() {
    return productsData;
  }

  async mapOfSales() {
    return salesMapDataRaw;
  }

  async serviceLevel() {
    return serviceLevelData;
  }
}
