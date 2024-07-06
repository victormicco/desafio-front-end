import type { RootService } from "@/services/root";
import type { FastifyInstance } from "fastify";

export async function rootRouter(
  app: FastifyInstance,
  rootService: RootService
) {
  app.get("/dataSales", async (request, reply) => {
    return rootService.todaySales();
  });

  app.get("/dataPlatform", async (request, reply) => {
    return rootService.dataPlataform();
  });

  app.get("/totalRevenue", async (request, reply) => {
    return rootService.totalRevenue();
  });

  app.get("/livesChartData", async (request, reply) => {
    return rootService.livesChartData();
  });

  app.get("/realityStats", async (request, reply) => {
    return rootService.realityStats();
  });

  app.get("/topProducts", async (request, reply) => {
    return rootService.topProducts();
  });

  app.get("/mapOfSales", async (request, reply) => {
    return rootService.mapOfSales();
  });

  app.get("/serviceLevel", async (request, reply) => {
    return rootService.serviceLevel();
  });
}
