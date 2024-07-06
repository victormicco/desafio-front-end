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
}
