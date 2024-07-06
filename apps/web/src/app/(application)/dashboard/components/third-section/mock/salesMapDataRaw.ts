import { SalesData } from "../components/sales-map-card";

const getRandomSales = () => Math.floor(Math.random() * 10000000);

export const salesMapDataRaw: SalesData[] = [
  { state: "BR-AC", sales: getRandomSales() },
  { state: "BR-AL", sales: getRandomSales() },
  { state: "BR-AM", sales: getRandomSales() },
  { state: "BR-AP", sales: getRandomSales() },
  { state: "BR-BA", sales: getRandomSales() },
  { state: "BR-CE", sales: getRandomSales() },
  { state: "BR-DF", sales: getRandomSales() },
  { state: "BR-ES", sales: getRandomSales() },
  { state: "BR-GO", sales: getRandomSales() },
  { state: "BR-MA", sales: getRandomSales() },
  { state: "BR-MT", sales: getRandomSales() },
  { state: "BR-MS", sales: getRandomSales() },
  { state: "BR-MG", sales: getRandomSales() },
  { state: "BR-PA", sales: getRandomSales() },
  { state: "BR-PB", sales: getRandomSales() },
  { state: "BR-PR", sales: getRandomSales() },
  { state: "BR-PE", sales: getRandomSales() },
  { state: "BR-PI", sales: getRandomSales() },
  { state: "BR-RJ", sales: getRandomSales() },
  { state: "BR-RN", sales: getRandomSales() },
  { state: "BR-RS", sales: getRandomSales() },
  { state: "BR-RO", sales: getRandomSales() },
  { state: "BR-RR", sales: getRandomSales() },
  { state: "BR-SC", sales: getRandomSales() },
  { state: "BR-SP", sales: getRandomSales() },
  { state: "BR-SE", sales: getRandomSales() },
  { state: "BR-TO", sales: getRandomSales() },
];
